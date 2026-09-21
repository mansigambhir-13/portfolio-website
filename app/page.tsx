import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  CircleDot,
  GitBranch,
  Mail,
  Network,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";

const proof = [
  { value: "538", label: "agent templates", note: "across 15 departments" },
  { value: "424", label: "tests passing", note: "on HireOS" },
  { value: "16", label: "agent states", note: "in HireXtra" },
  { value: "10k", label: "calls / day", note: "voice AI cost model" },
];

const projects = [
  {
    number: "01",
    title: "NEOS",
    label: "Agent operating system",
    meta: "Gradeless AI · Architect · 2026",
    summary:
      "An operating system for autonomous AI agents—built around budgets, approvals and a complete audit trail.",
    result: "538 agent templates across 15 departments",
    tags: ["pi SDK", "Node.js", "FastAPI", "PostgreSQL", "Docker"],
    details: [
      "Designed a library mapped to APQC business processes, plus an 18-agent common layer.",
      "Built Quick Build: isolated git worktrees, child agent processes and live WebSocket output for a five-person engineering team.",
      "Defined the plan → approve → execute → review → verdict pipeline, with spend limits and no autonomous shipping or deletion.",
    ],
  },
  {
    number: "02",
    title: "HireOS",
    label: "Evidence-linked hiring advisory",
    meta: "Freelance · 2026",
    summary:
      "An agentic orchestration layer that produces candidate guidance without altering scores, shortlist order or execution rights.",
    result: "424 tests passing across the system",
    tags: ["TypeScript", "NestJS", "Prisma", "FastAPI", "JWT"],
    details: [
      "Built an Evidence Mesh with minimised capsules, independently verified claims and deterministic execution permits.",
      "Tied every advisory to fresh identity, tenant and record checks; invalidated output when source data changed.",
      "Closed a runner bypass found in security review by re-verifying all analysis before caching or disclosure.",
    ],
  },
  {
    number: "03",
    title: "HireXtra",
    label: "Autonomous sourcing agent",
    meta: "Freelance · 2025–2026",
    summary:
      "A candidate sourcing and enrichment agent with a finite state machine and hard provider-credit controls.",
    result: "16 states · 65 tests · v1.2",
    tags: ["Strands Agents", "Hono", "tRPC", "Drizzle", "MySQL"],
    details: [
      "Drove sourcing runs end to end through a 16-state machine with bounded enrichment spend.",
      "Built the backend orchestration layer and merged TalentFlow applicant-tracking modules into one application.",
      "Delivered integration, security testing, deployment and a supported engineering handoff.",
    ],
  },
  {
    number: "04",
    title: "Rehearsal",
    label: "AI interview-prep platform",
    meta: "Gradeless AI · Backend owner · 2026",
    summary:
      "Production backend for MBA and placement interview preparation, with per-user integrations and deep observability.",
    result: "Backend ownership from auth to telemetry",
    tags: ["FastAPI", "Supabase", "Redis", "OpenTelemetry", "Portkey"],
    details: [
      "Shipped MCP servers with per-user Google OAuth and an MV3 Chrome extension using PKCE.",
      "Rolled out OpenTelemetry to Grafana Cloud and New Relic, covering a multi-week production observability programme.",
      "Built DocSync and Social Studio agents; publication remains gated by human approval in Slack.",
    ],
  },
];

const experience = [
  {
    period: "Apr 2026 — now",
    role: "Senior AI Executive",
    company: "Gradeless AI · Jaipuria AI Labs",
    description:
      "Own the Rehearsal backend, architect the NEOS agent platform, and design AI systems for government and education clients.",
  },
  {
    period: "Nov 2025 — Sep 2026",
    role: "AI Engineer",
    company: "Cloud202",
    description:
      "Worked on Qubitz.ai and WAFR—enterprise agentic AI and automated AWS Well-Architected reviews on Bedrock.",
  },
  {
    period: "Aug 2025 — now",
    role: "Freelance AI Engineer",
    company: "HireXtra · HireOS",
    description:
      "Build autonomous sourcing, evidence-linked advisory and the orchestration layers that keep both systems bounded.",
  },
  {
    period: "2026",
    role: "B.Tech",
    company: "Thapar Institute of Engineering & Technology",
    description:
      "Engineering foundation spanning backend systems, AI and earlier work in computational biology and research at Samsung R&D Institute Bangalore.",
  },
];

const stack = [
  ["Agents", "pi SDK · Strands Agents · MCP · RAG · evaluation"],
  ["Backend", "Python · FastAPI · Node.js · TypeScript · NestJS · Hono"],
  ["Data", "PostgreSQL · pgvector · Supabase · Redis · MySQL"],
  ["Cloud & ops", "AWS Bedrock · Azure · Docker · OpenTelemetry · Grafana"],
  ["Security", "OAuth · PKCE · JWT · multi-tenant access · prompt-injection assessment"],
];

const smallerBuilds = [
  {
    title: "Hindi voice AI helpline",
    description:
      "Knowledge-grounded scholarship support with barge-in, idempotent ticketing and cost models to 10,000 calls/day.",
    tech: "FastAPI · WebSockets · OAuth",
  },
  {
    title: "Student performance agent",
    description:
      "Moodle reporting across four campuses. The LLM narrates; every attendance and grade calculation happens in code.",
    tech: "Python · MCP · Google OAuth",
  },
  {
    title: "Qubitz.ai & WAFR",
    description:
      "Enterprise AI delivery and automated AWS Well-Architected reviews for consulting teams.",
    tech: "AWS Bedrock · Python",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Mansi Gambhir, home">
          <span className="brand-mark">MG</span>
          <span className="brand-text">Mansi Gambhir</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="mailto:mansi.gambhir@jaipuria.ac.in" className="nav-contact">
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="availability-dot" aria-hidden="true" />
          AI agent &amp; backend engineer · India
        </div>
        <h1>
          I build AI agents that reach <em>production.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Agentic systems, MCP servers and FastAPI backends—from architecture to
            deploy, observability and handoff. With a human gate where it counts.
          </p>
          <a className="primary-cta" href="#work">
            See selected work <ArrowDown size={17} aria-hidden="true" />
          </a>
        </div>
      </section>

      <section className="proof-grid" aria-label="Selected outcomes">
        {proof.map((item, index) => (
          <article className="proof-card" key={item.label}>
            <span className="proof-index">0{index + 1}</span>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
            <small>{item.note}</small>
          </article>
        ))}
      </section>

      <section className="build-note" aria-labelledby="build-note-title">
        <div>
          <span className="eyebrow">Operating principle</span>
          <h2 id="build-note-title">The model narrates. Code decides.</h2>
        </div>
        <p>
          Scores, money and permissions come from deterministic code. LLMs explain,
          draft and summarise. Every system ships with tests, approval gates and an
          audit trail.
        </p>
        <a href="#principles" aria-label="Read how Mansi builds">
          <ArrowDown size={18} aria-hidden="true" />
        </a>
      </section>

      <section className="work-section" id="work">
        <div className="section-intro">
          <div>
            <span className="eyebrow light">Selected systems · 2025—2026</span>
            <h2>Work that holds up after the demo.</h2>
            <p>
              The throughline is control: bounded autonomy, explicit permissions,
              verified evidence and enough telemetry to know what the system did.
            </p>
          </div>
          <figure className="systems-art">
            <img
              src="/agent-systems-art.png"
              alt="Abstract network of controlled luminous pathways and verification gates"
              width={1122}
              height={1402}
            />
            <figcaption>
              <span>Architecture → production</span>
              <span>Approval gates intact</span>
            </figcaption>
          </figure>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-title-row">
                  <div>
                    <h3>{project.title}</h3>
                    <span>{project.label}</span>
                  </div>
                  <span className="project-meta">{project.meta}</span>
                </div>
                <p className="project-summary">{project.summary}</p>
                <div className="project-result">
                  <CheckCircle2 size={17} aria-hidden="true" />
                  {project.result}
                </div>
                <div className="project-tags" aria-label={`${project.title} technologies`}>
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                <details>
                  <summary>
                    Case study notes <ArrowDown size={15} aria-hidden="true" />
                  </summary>
                  <ul>
                    {project.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                </details>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="more-work" aria-labelledby="more-work-title">
        <div className="more-work-heading">
          <span className="eyebrow">Also shipped</span>
          <h2 id="more-work-title">Smaller surface. Same rigour.</h2>
        </div>
        <div className="more-work-grid">
          {smallerBuilds.map((project, index) => (
            <article key={project.title}>
              <span>0{index + 5}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <small>{project.tech}</small>
            </article>
          ))}
        </div>
      </section>

      <section className="principles" id="principles" aria-labelledby="principles-title">
        <div className="principles-heading">
          <span className="eyebrow light">How I build</span>
          <h2 id="principles-title">Autonomy with boundaries.</h2>
        </div>
        <div className="principle-grid">
          <article>
            <UserRoundCheck aria-hidden="true" />
            <span>01</span>
            <h3>Humans approve what matters.</h3>
            <p>Posting, outreach, spending and merging stop at an explicit approval step.</p>
          </article>
          <article>
            <GitBranch aria-hidden="true" />
            <span>02</span>
            <h3>Code owns the hard decisions.</h3>
            <p>Models draft and explain. Deterministic code owns scores, money and permissions.</p>
          </article>
          <article>
            <ShieldCheck aria-hidden="true" />
            <span>03</span>
            <h3>Handoff includes the evidence.</h3>
            <p>Tests, traces, security controls and audit logs are part of “done.”</p>
          </article>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="experience-heading">
          <span className="eyebrow">Experience</span>
          <h2>Building where product, platform and AI meet.</h2>
        </div>
        <div className="timeline">
          {experience.map((item, index) => (
            <article key={`${item.role}-${item.company}`}>
              <div className="timeline-marker">
                <CircleDot size={18} aria-hidden="true" />
                <span>0{index + 1}</span>
              </div>
              <span className="timeline-period">{item.period}</span>
              <div>
                <h3>{item.role}</h3>
                <strong>{item.company}</strong>
              </div>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="stack-section" aria-labelledby="stack-title">
        <div className="stack-heading">
          <Network aria-hidden="true" />
          <div>
            <span className="eyebrow light">Technical range</span>
            <h2 id="stack-title">From agent contract to production trace.</h2>
          </div>
        </div>
        <div className="stack-list">
          {stack.map(([area, tools]) => (
            <div key={area}>
              <span>{area}</span>
              <p>{tools}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-label">
          <span className="eyebrow">About</span>
          <span>English · Hindi</span>
        </div>
        <div className="about-copy">
          <h2>An engineer who ships agents, not demos.</h2>
          <p>
            I work end to end: architecture, backend, deployment, observability and
            handoff. My background spans production agent systems, computational
            biology, a B.Tech from Thapar and research at Samsung R&amp;D Institute
            Bangalore.
          </p>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <span className="eyebrow light">Have a hard system to ship?</span>
        <h2 id="contact-title">Let’s make it reliable.</h2>
        <a href="mailto:mansi.gambhir@jaipuria.ac.in">
          <span>mansi.gambhir@jaipuria.ac.in</span>
          <span className="contact-icon"><Mail size={22} aria-hidden="true" /></span>
        </a>
      </section>

      <footer>
        <a href="#top">Mansi Gambhir</a>
        <span>AI agents · backend systems · India</span>
        <a href="#top">Back to top <ArrowRight size={14} aria-hidden="true" /></a>
      </footer>
    </main>
  );
}
