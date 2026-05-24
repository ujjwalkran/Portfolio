import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve, extname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const distClientDir = resolve(__dirname, '../dist/client');
const distServerDir = resolve(__dirname, '../dist/server');

const mimeTypes: Record<string, string> = {
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.map': 'application/json',
  '.ico': 'image/x-icon',
};

function getStaticAssetPath(urlPath: string) {
  if (!urlPath.startsWith('/assets/')) return null;
  const assetPath = resolve(distClientDir, urlPath.slice(1));
  if (!assetPath.startsWith(distClientDir)) return null;
  if (existsSync(assetPath)) return assetPath;
  const serverAssetPath = resolve(distServerDir, urlPath.slice(1));
  if (serverAssetPath.startsWith(distServerDir) && existsSync(serverAssetPath)) return serverAssetPath;
  return null;
}

// Lazy-load the built server entry if present (post-build `dist/server/index.js`),
// otherwise fall back to the module-level server entry used during dev.
let serverEntryPromise: Promise<any> | undefined;
async function getServerEntry() {
  if (serverEntryPromise) return serverEntryPromise;

  serverEntryPromise = (async () => {
    // Use production-built server entry only in production.
    try {
      const builtPath = new URL('../dist/server/index.js', import.meta.url);
      if (existsSync(builtPath)) {
        const built = await import(builtPath.href);
        return (built as any).default ?? built;
      }
    } catch (e) {
      console.error('Failed to load built server entry:', e);
    }

    // Fallback to package-provided server entry for dev or when build output isn't not available.
    try {
      const pkg = await import('@tanstack/react-start/server-entry');
      return (pkg as any).default ?? pkg;
    } catch (err) {
      console.error('Failed to load server entry (package fallback):', err);
      return null;
    }
  })();

  return serverEntryPromise;
}

export default async function handler(req: any, res?: any) {
  async function toWebRequest(nodeReq: any) {
    // If it's already a web Request, return as-is
    if (typeof Request !== 'undefined' && nodeReq instanceof Request) return nodeReq;

    // Node.js IncomingMessage -> build full absolute URL
    const headers = nodeReq.headers || {};
    const host = headers.host || 'localhost';
    const proto = headers['x-forwarded-proto'] || headers['x-forwarded-protocol'] || 'http';
    const url = (() => {
      if (typeof nodeReq.url === 'string' && nodeReq.url.startsWith('http')) return nodeReq.url;
      const path = nodeReq.url || '/';
      return `${proto}://${host}${path}`;
    })();

    const h = new Headers();
    for (const [k, v] of Object.entries(headers)) {
      if (v === undefined) continue;
      if (Array.isArray(v)) v.forEach((vv) => h.append(k, String(vv)));
      else h.set(k, String(v));
    }

    // Collect body (if any)
    let body: Uint8Array | undefined = undefined;
    if (nodeReq.readable) {
      const chunks: any[] = [];
      for await (const chunk of nodeReq) chunks.push(Buffer.from(chunk));
      if (chunks.length) body = Buffer.concat(chunks);
    }

    return new Request(url, { method: nodeReq.method, headers: h, body: body && body.length ? body : undefined });
  }

  try {
    const nodePath = typeof req.url === 'string' ? req.url : '/';
    const host = req.headers?.host || 'localhost';
    const proto = req.headers?.['x-forwarded-proto'] || req.headers?.['x-forwarded-protocol'] || 'http';
    const url = nodePath.startsWith('http') ? new URL(nodePath) : new URL(nodePath, `${proto}://${host}`);

    const staticAsset = getStaticAssetPath(url.pathname);
    if (staticAsset) {
      const file = readFileSync(staticAsset);
      const ext = extname(staticAsset).toLowerCase();
      const contentType = mimeTypes[ext] || 'application/octet-stream';

      if (res) {
        res.statusCode = 200;
        res.setHeader('Content-Type', contentType);
        res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
        res.end(file);
        return;
      }

      return new Response(file, {
        status: 200,
        headers: { 'Content-Type': contentType, 'Cache-Control': 'public, max-age=0, must-revalidate' },
      });
    }

    const entry = await getServerEntry();
    if (!entry) {
      if (res) {
        res.statusCode = 404;res.end('Not Found');return;
      }
      return new Response('Not Found', { status: 404 });
    }

    const webReq = await toWebRequest(req);

    // Call the server entry
    let response: Response | null = null;
    if (entry && typeof entry.fetch === 'function') {
      response = await entry.fetch(webReq as unknown as Request, undefined, undefined);
    } else if (typeof entry === 'function') {
      response = await entry(webReq as unknown as Request);
    }

    if (!response) {
      if (res) { res.statusCode = 404; res.end('Not Found'); return; }
      return new Response('Not Found', { status: 404 });
    }

    if (res) {
      // Node-style response: pipe headers and body
      res.statusCode = response.status;
      response.headers.forEach((v, k) => res.setHeader(k, v));
      const buf = Buffer.from(await response.arrayBuffer());
      res.end(buf);
      return;
    }

    return response;
  } catch (err) {
    console.error(err);
    if (res) { res.statusCode = 500; res.end('Internal Server Error'); return; }
    return new Response('Internal Server Error', { status: 500 });
  }
}
