import { createFileRoute } from "@tanstack/react-router";
import {
  Mail, MapPin, Github, Linkedin, ArrowUpRight, Code2, Briefcase,
  GraduationCap, Sparkles, Calendar, Building2, Award, Terminal,
  ExternalLink, FolderGit2, BadgeCheck, Users,
  Wrench,
} from "lucide-react";


const SITE_URL = "https://ujjwalkaran.vercel.app";
const PERSON_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ujjwal Karan",
  url: SITE_URL,
  jobTitle: "Product Engineer",
  worksFor: {
    "@type": "Organization",
    name: "Edgeverve Systems Ltd",
    url: "https://www.edgeverve.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "N.M.A.M. Institute of Technology, Nitte",
  },
  knowsAbout: [
    "C++", "Java", "Spring Boot", "REST APIs", "Finacle WMS",
    "Distributed Systems", "Banking Software", "System Design",
  ],
  sameAs: [
    "https://github.com/ujjwalkaran",
    "https://www.linkedin.com/in/ujjwalkaran",
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ujjwal Karan — Product Engineer | C++, Java, Banking Systems" },
      { name: "description", content: "Ujjwal Karan is a Product Engineer at Edgeverve Systems with 1.9+ years building Finacle WMS modules, scalable REST APIs, and distributed systems in C++ and Java." },
      { name: "keywords", content: "Ujjwal Karan, Product Engineer, Edgeverve, Finacle WMS, C++, Java, Spring Boot, REST API, Backend Engineer, Software Engineer Portfolio" },
      { name: "author", content: "Ujjwal Karan" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { property: "og:title", content: "Ujjwal Karan — Product Engineer" },
      { property: "og:description", content: "Product Engineer at Edgeverve. Builds scalable banking systems with C++, Java, and Spring Boot." },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: SITE_URL },
      { property: "og:site_name", content: "Ujjwal Karan" },
      { property: "profile:first_name", content: "Ujjwal" },
      { property: "profile:last_name", content: "Karan" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ujjwal Karan — Product Engineer" },
      { name: "twitter:description", content: "Product Engineer at Edgeverve building scalable banking systems." },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(PERSON_JSON_LD),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <main className="min-h-screen px-4 py-8 md:px-8 md:py-12 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <header className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-3 w-3 rounded-full glow-dot" />
            <span className="font-mono text-sm tracking-tight text-muted-foreground">
              portfolio.dev
            </span>
          </div>
          <nav className="flex items-center gap-2">
            <a
              href="mailto:hello@example.com"
              className="rounded-full border border-border bg-surface px-4 py-2 font-mono text-xs uppercase tracking-wider text-foreground transition hover:border-primary hover:text-primary-glow"
            >
              Get in touch
            </a>
          </nav>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
          {/* Hero */}
          <section className="bento-card md:col-span-4 md:row-span-2">
            <div className="flex h-full flex-col justify-between gap-8">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-surface-elevated px-3 py-1 font-mono text-xs">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px] shadow-emerald-400/60" />
                  Available for opportunities
                </div>
                <h1 className="font-mono text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
                  Ujjwal Karan
                </h1>
                <p className="mt-2 font-mono text-xl font-medium text-primary-glow md:text-2xl">
                  Product Engineer
                </p>
                <p className="mt-1 font-mono text-lg text-muted-foreground md:text-xl">
                  building <span className="text-gradient">scalable</span> banking systems.
                </p>
                <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
                  1.9+ years at Edgeverve Systems shipping Finacle WMS menus, scalable APIs, and intuitive UX across enterprise banking products.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#experience"
                  className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-mono text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  style={{ background: "var(--gradient-primary)" }}
                >
                  View experience
                  <ArrowUpRight className="h-4 w-4 transition group-hover:rotate-45" />
                </a>
                <a
                  href="/Ujjwal_Karan_Resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-3 font-mono text-sm font-medium transition hover:border-primary"
                >
                  Download résumé
                </a>
              </div>
            </div>
          </section>

          {/* About / Avatar */}
          <section className="bento-card md:col-span-2">
            <div className="flex h-full flex-col items-start gap-4">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl font-mono text-3xl font-bold text-primary-foreground" style={{ background: "var(--gradient-primary)" }}>
                {"</>"}
              </div>
              <div>
                <h2 className="font-mono text-xl font-semibold">About me</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  CSE grad from NMAMIT (8.72 CGPA), turning complex banking workflows into clean, performant code.
                </p>
              </div>
            </div>
          </section>

          {/* Stats */}
          <section className="bento-card md:col-span-2">
            <div className="grid h-full grid-cols-2 gap-4">
              <Stat value="15+" label="WMS menus led" />
              <Stat value="20+" label="APIs deployed" />
              <Stat value="30%" label="Faster data retrieval" />
              <Stat value="15%" label="Processing time cut" />
            </div>
          </section>

          {/* Location */}
          <section className="bento-card md:col-span-2">
            <div className="flex h-full flex-col justify-between gap-4">
              <MapPin className="h-6 w-6 text-primary-glow" />
              <div>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">Based in</p>
                <p className="mt-1 font-mono text-2xl font-semibold">Bangalore, IN</p>
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="bento-card md:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary-glow" />
                <h2 className="font-mono text-lg font-semibold">Tech stack</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["C", "C++", "Java", "HTML", "XML", "Jira","Linux", "REST APIs", "Finacle WMS"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs">
                    <TechIcon name={t} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Tools Section */}
          <section className="bento-card md:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <div className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-primary-glow" />
                <h2 className="font-mono text-lg font-semibold">Tools</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Jira", "Linux", "VS Code", "Vim Editor",].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 rounded-md border border-border bg-surface-elevated px-2.5 py-1 font-mono text-xs">
                    <TechIcon name={t} />
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="bento-card md:col-span-6">
            <div className="mb-6 flex items-center gap-2">
              <Briefcase className="h-5 w-5 text-primary-glow" />
              <h2 className="font-mono text-2xl font-semibold">Experience</h2>
            </div>
            <div className="space-y-4">
              <ExperienceCard
                role="Product Engineer"
                company="Edgeverve Systems Ltd"
                location="Bangalore"
                period="August 2024 – Present"
                stack={["C", "C++", "Java", "HTML", "XML", "SQL", "Git", "Github", "Linux", "Jira"]}
                points={[
                  "Developed and maintained core modules of the Finacle Wealth Management System (WMS), implementing backend business logic and customer-facing functionalities using Java, C++, XML, and enterprise banking frameworks.",
                  "Designed and developed batch-processing solutions using the Finacle Batch Framework to automate critical financial operations and support complex business workflows.",
                  "Led a Proof of Concept (POC) to modernize legacy batch applications by migrating C/C++ batch jobs to Java Spring Boot and Spring Batch, improving maintainability and scalability.",
                  "Engineered scalable REST APIs and integrated backend services, enabling efficient communication between application layers and improving system interoperability.",
                  "Contributed to the migration of the Finacle WMS codebase from a legacy Linux-based SCM to GitHub, while collaborating in Agile Scrum teams to deliver high-quality software through the complete SDLC.",
                ]}
                current
              />
              <ExperienceCard
                role="Product Engineer Intern"
                company="Edgeverve Systems Ltd"
                location="Bangalore"
                period="February 2024 – July 2024"
                stack={["C", "C++", "Java", "HTML", "XML"]}
                points={[
                  "Executed reconciliation and updates of files for Finacle WMS migration from v11.18 to v11.15 — ensuring data integrity and version compatibility.",
                  "Developed comprehensive specification files for new WMS menus by analyzing user requirements and collaborating with stakeholders.",
                  "Implemented XML and HTML for the ONS menu — enhancing UI components, layout, and functionality for an intuitive UX.",
                ]}
              />
            </div>
          </section>

          {/* Projects */}
          <section className="bento-card md:col-span-6">
            <div className="mb-6 flex items-center gap-2">
              <FolderGit2 className="h-5 w-5 text-primary-glow" />
              <h2 className="font-mono text-2xl font-semibold">Projects</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <ProjectCard
                title="Distributed Task Scheduler"
                description="A multi-threaded task scheduler with a RESTful API interface built in C++. Handles job queuing, priority-based execution, and worker pool management for concurrent task processing."
                stack={["C++", "REST API", "Multi-threading", "JSON"]}
                highlights={[
                  "Achieved 40% faster task throughput via priority queue optimization",
                  "Implemented thread-safe job queues with mutex locks and condition variables",
                  "Exposed REST endpoints for job submission, status tracking, and cancellation",
                ]}
                links={[
                  { label: "GitHub", href: "https://github.com/ujjwalkran/Distributed-Task-Scheduler" },
                  { label: "Live Demo", href: "#" },
                ]}
              />
              <ProjectCard
                title="FinTrack REST API"
                description="A full-featured personal finance management backend built with Java. Supports transaction logging, category-wise analytics, budget alerts, and monthly report generation."
                stack={["Java", "Spring Boot", "MySQL", "REST API", "JPA"]}
                highlights={[
                  "Designed 15+ RESTful endpoints following standard HTTP conventions",
                  "Integrated MySQL with JPA for persistent transaction storage",
                  "Built automated monthly report generation with PDF export support",
                ]}
                links={[
                  { label: "GitHub", href: "https://github.com" },
                  { label: "Docs", href: "#" },
                ]}
              />
            </div>
          </section>

          {/* Education */}
          <section className="bento-card md:col-span-4">
            <div className="mb-6 flex items-center gap-2">
              <GraduationCap className="h-5 w-5 text-primary-glow" />
              <h2 className="font-mono text-2xl font-semibold">Education</h2>
            </div>
            <div className="space-y-4">
              <EducationItem
                school="N.M.A.M. Institute of Technology, Nitte"
                degree="B.E in Computer Science & Engineering"
                period="2020 – 2024"
                score="8.72 / 10 CGPA"
              />
              <EducationItem
                school="Public School Bela, Darbhanga"
                degree="Class XII"
                period="2019"
                score="80.8%"
              />
              <EducationItem
                school="Public School Bela, Darbhanga"
                degree="Class X"
                period="2017"
                score="10 / 10 CGPA"
              />
            </div>
          </section>

          {/* Highlights */}
          <section className="bento-card md:col-span-2">
            <div className="flex h-full flex-col gap-4">
              <Sparkles className="h-6 w-6 text-primary-glow" />
              <h2 className="font-mono text-lg font-semibold">Highlights</h2>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex gap-2"><Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-glow" /> 100% on-time delivery across projects</li>
                <li className="flex gap-2"><Code2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-glow" /> Owns full feature lifecycle</li>
                <li className="flex gap-2"><Building2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary-glow" /> Enterprise banking domain</li>
              </ul>
            </div>
          </section>

          {/* Licenses & Certifications */}
          <section className="bento-card md:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <BadgeCheck className="h-6 w-6 text-primary-glow" />
              <h2 className="font-mono text-2xl font-semibold">Licenses & Certifications</h2>
            </div>
            <article className="rounded-xl border border-border bg-surface-elevated/60 p-5 transition hover:border-primary/60">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-mono text-lg font-semibold">GitHub Foundations</h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    <span className="text-foreground">Microsoft</span> · Credential ID 3EC95F9CD898ECD9
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  Issued Dec 2025 · Expires Dec 2027
                </span>
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["Git", "GitHub"].map((s) => (
                  <span key={s} className="inline-flex items-center gap-1.5 rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground">
                    <TechIcon name={s} />
                    {s}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href="https://learn.microsoft.com/api/credentials/share/en-us/UjjwalKaran-2431/3EC95F9CD898ECD9?sharingId=5DEBF0819FAEB48"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 font-mono text-[11px] transition hover:border-primary hover:text-primary-glow"
                >
                  Show credential
                  <ExternalLink className="h-3 w-3 opacity-60 transition group-hover:opacity-100" />
                </a>
              </div>
            </article>
          </section>
          {/* Volunteering */}
          <section className="bento-card md:col-span-6">
            <div className="mb-5 flex items-center gap-3">
              <Users className="h-6 w-6 text-primary-glow" />
              <h2 className="font-mono text-2xl font-semibold">Volunteering</h2>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <VolunteerCard
                role="President"
                org="HackerEarth Hub, NMAMIT"
                period="Sep 2022 – May 2023 · 9 mos"
                cause="Science and Technology"
                description="Organized coding competitions for over 200 participants, promoting a competitive coding culture in college."
              />
              <VolunteerCard
                role="Secretary"
                org="ACM-NMAMIT"
                period="Aug 2022 – Jul 2023 · 1 yr"
                cause="Science and Technology"
                description="Led and supervised diverse tech and non-tech events to foster a dynamic learning community."
              />
              <VolunteerCard
                role="2nd Year Representative"
                org="ACM-NMAMIT"
                period="Oct 2021 – Sep 2022 · 1 yr"
                cause="Science and Technology"
                description="Actively volunteered, publicized events, and gathered feedback from students."
              />
            </div>
          </section>

          {/* Contact CTA */}
          <section className="bento-card md:col-span-6">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="font-mono text-3xl font-semibold md:text-4xl">
                  Let's build something <span className="text-gradient">great</span>.
                </h2>
                <p className="mt-2 text-muted-foreground">Open to product engineering roles and collaborations.</p>
              </div>
              <div className="flex flex-wrap gap-3">
                <ContactLink href="mailto:karanujjwal2401@gmail.com" icon={<Mail className="h-4 w-4" />} label="Email" />
                <ContactLink href="https://www.linkedin.com/in/ujjwalkran/" icon={<Linkedin className="h-4 w-4" />} label="LinkedIn" />
                <ContactLink href="https://github.com/ujjwalkran" icon={<Github className="h-4 w-4" />} label="GitHub" />
              </div>
            </div>
          </section>
        </div>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs text-muted-foreground">
          <span>© {new Date().getFullYear()} — Crafted with care.</span>
          <span>v1.0 · Bangalore</span>
        </footer>
      </div>
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col justify-center rounded-xl bg-surface-elevated p-3">
      <span className="font-mono text-2xl font-bold text-gradient">{value}</span>
      <span className="mt-1 text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function ExperienceCard({
  role, company, location, period, stack, points, current,
}: {
  role: string; company: string; location: string; period: string;
  stack: string[]; points: string[]; current?: boolean;
}) {
  return (
    <article className="rounded-xl border border-border bg-surface-elevated/60 p-5 transition hover:border-primary/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-mono text-lg font-semibold">{role}</h3>
            {current && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-glow">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Current
              </span>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            <span className="text-foreground">{company}</span> · {location}
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
          <Calendar className="h-3.5 w-3.5" />
          {period}
        </span>
      </div>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5 rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground">
            <TechIcon name={s} />
            {s}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2.5 leading-relaxed">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-glow" />
            <span>{p}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

function EducationItem({
  school, degree, period, score,
}: { school: string; degree: string; period: string; score: string }) {
  return (
    <div className="flex flex-wrap items-start justify-between gap-3 rounded-xl border border-border bg-surface-elevated/60 p-4">
      <div>
        <h3 className="font-mono text-sm font-semibold">{school}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{degree}</p>
      </div>
      <div className="text-right">
        <p className="font-mono text-sm font-semibold text-gradient">{score}</p>
        <p className="mt-0.5 font-mono text-xs text-muted-foreground">{period}</p>
      </div>
    </div>
  );
}

function VolunteerCard({
  role, org, period, cause, description,
}: { role: string; org: string; period: string; cause: string; description: string }) {
  return (
    <article className="rounded-xl border border-border bg-surface-elevated/60 p-4 transition hover:border-primary/60">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <div>
          <h3 className="font-mono text-base font-semibold">{role}</h3>
          <p className="mt-0.5 text-sm text-muted-foreground">
            <span className="text-foreground">{org}</span>
          </p>
        </div>
        <span className="inline-flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground">
          <Calendar className="h-3 w-3" />
          {period}
        </span>
      </div>
      <p className="mt-2 inline-block rounded-md bg-surface px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary-glow">
        {cause}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}


function ContactLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <a
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2.5 font-mono text-sm transition hover:border-primary hover:text-primary-glow"
    >
      {icon}
      {label}
      <ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition group-hover:rotate-45 group-hover:opacity-100" />
    </a>
  );
}

function ProjectCard({
  title, description, stack, highlights, links,
}: {
  title: string; description: string; stack: string[];
  highlights: string[]; links: { label: string; href: string }[];
}) {
  return (
    <article className="rounded-xl border border-border bg-surface-elevated/60 p-5 transition hover:border-primary/60">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <h3 className="font-mono text-lg font-semibold">{title}</h3>
        <div className="flex gap-2">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1 rounded-full border border-border bg-surface px-2.5 py-1 font-mono text-[11px] transition hover:border-primary hover:text-primary-glow"
            >
              {l.label}
              <ExternalLink className="h-3 w-3 opacity-60 transition group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </div>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {stack.map((s) => (
          <span key={s} className="inline-flex items-center gap-1.5 rounded-md bg-surface px-2 py-1 font-mono text-[11px] text-muted-foreground">
            <TechIcon name={s} />
            {s}
          </span>
        ))}
      </div>
      <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
        {highlights.map((h, i) => (
          <li key={i} className="flex gap-2.5 leading-relaxed">
            <span className="mt-2 h-1 w-1 flex-shrink-0 rounded-full bg-primary-glow" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

const DEVICON_BASE = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/";
const TECH_ICON_MAP: Record<string, string> = {
  "c": `${DEVICON_BASE}/c/c-original.svg`,
  "c++": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "cpp": `${DEVICON_BASE}/cplusplus/cplusplus-original.svg`,
  "java": `${DEVICON_BASE}/java/java-original.svg`,
  "html": `${DEVICON_BASE}/html5/html5-original.svg`,
  "html5": `${DEVICON_BASE}/html5/html5-original.svg`,
  "xml": `${DEVICON_BASE}/xml/xml-original.svg`,
  "spring boot": `${DEVICON_BASE}/spring/spring-original.svg`,
  "mysql": `${DEVICON_BASE}/mysql/mysql-original.svg`,
  "json": `${DEVICON_BASE}/json/json-original.svg`,
  "jira": `${DEVICON_BASE}/jira/jira-original.svg`,
  "sql": `${DEVICON_BASE}/sqldeveloper/sqldeveloper-original.svg`,
  "git": `${DEVICON_BASE}/git/git-original.svg`,
  "github": `${DEVICON_BASE}/github/github-original.svg`,
  "linux": `${DEVICON_BASE}/linux/linux-original.svg`,
  "vs code": `${DEVICON_BASE}/vscode/vscode-original.svg`,
  "vim editor": `${DEVICON_BASE}/vim/vim-original.svg`,
};

const NEEDS_LIGHT_BG = new Set(["github"]);

function TechIcon({ name }: { name: string }) {
  const key = name.toLowerCase();
  const src = TECH_ICON_MAP[name.toLowerCase()];
  if (!src) return null;
  if (NEEDS_LIGHT_BG.has(key)) {
    return (
      <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-white p-[1px]">
        <img src={src} alt={`${name} logo`} loading="lazy" className="h-full w-full" />
      </span>
    );
  }
  return (
    <img
      src={src}
      alt={`${name} logo`}
      loading="lazy"
      className="h-3.5 w-3.5"
    />
  );
}