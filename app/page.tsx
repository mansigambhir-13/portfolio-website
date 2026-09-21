import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  CheckCircle2,
  CircleDot,
  Cloud,
  Microscope,
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
  { value: "10k", label: "calls / day", note: "Jharkhand voice AI cost model" },
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
      "Built on Qubitz.ai, an enterprise agentic-AI platform powered by Amazon Bedrock, and contributed to WAFR—automating structured AWS Well-Architected reviews across the framework’s six pillars for consulting clients.",
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
  ["AWS & cloud", "Amazon Bedrock · Well-Architected Framework · agent evaluation gates · managed and BYOC delivery · cloud cost modelling"],
  ["Operations", "Docker · Azure · OpenTelemetry · Grafana Cloud · New Relic · GitHub Actions"],
  ["Security", "OAuth · PKCE · JWT · multi-tenant access · prompt-injection assessment"],
];

const smallerBuilds = [
  {
    title: "Hindi voice AI helpline",
    context: "Jharkhand Government · e-Kalyan",
    description:
      "Designed and built a production voice agent for the Jharkhand Government’s e-Kalyan scholarship and grievance service. It answers Hindi, English and Hinglish questions only from a verified knowledge base, captures citizen complaints and creates traceable, idempotent Zoho Desk tickets.",
    highlights: [
      "Barge-in, deadline fallbacks and unconditional DTMF-0 transfer keep callers in control and prevent dead air.",
      "Privacy controls refuse full Aadhaar or bank details, while grounded answers remain auditable to their source.",
      "Capacity and vendor costs were modelled through 10,000 calls per day, with India-hosted speech options evaluated for data residency.",
    ],
    tech: "Exotel · LiveKit · FastAPI · Zoho Desk · Supabase",
    featured: true,
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
      "Enterprise AI delivery on Amazon Bedrock—from use-case validation and typed agent blueprints to evaluation gates, deployment, auditability and automated Well-Architected reviews.",
    tech: "Amazon Bedrock · AWS Well-Architected Framework · Python",
  },
];

const awsCapabilities = [
  {
    number: "01",
    title: "Agentic AI on Amazon Bedrock",
    description:
      "Contributed to Qubitz.ai, an enterprise platform that moves generative-AI use cases from validation to production through typed agent blueprints and release evaluation gates.",
  },
  {
    number: "02",
    title: "AWS Well-Architected reviews",
    description:
      "Worked on WAFR, a platform that structures and automates Well-Architected Framework reviews for consulting clients across operational excellence, security, reliability, performance, cost and sustainability.",
  },
  {
    number: "03",
    title: "Production architecture",
    description:
      "Experienced in designing the path from governed agent definition to managed or bring-your-own-cloud deployment, with evaluation, security and auditability built into the release path.",
  },
  {
    number: "04",
    title: "Cloud economics & operations",
    description:
      "Builds with deployment constraints in view: cost modelling, capacity assumptions, observability, controlled rollout and an engineering handoff teams can operate after launch.",
  },
];

const researchExperience = [
  {
    year: "2026",
    title: "Explainable deep learning for breast cancer thermography",
    context:
      "Co-author · Centre of Excellence in Emerging Materials, Department of CSE, TIET",
    highlights: [
      "Fine-tuned a VGG16 model for thermal-imaging breast cancer detection, achieving 92.7% accuracy.",
      "Applied explainable AI to surface latent thermal biomarkers and contributed methodology, data curation, visualisation and original-draft writing.",
    ],
    signal: "92.7% accuracy · VGG16 + XAI",
  },
  {
    year: "2025",
    title: "ML-driven drug discovery for leishmaniasis",
    context:
      "Co-author · TIET, IISER Pune, SRM IST and BITS Pilani Goa collaboration",
    highlights: [
      "Modelled anti-leishmanial activity across 65,057 PubChem compounds using Avalon, MACCS and pharmacophore fingerprints from SMILES.",
      "Benchmarked Random Forest, MLP, Gradient Boosting and Decision Tree models; the ensemble reached 83.65% accuracy and 0.837 AUC.",
    ],
    signal: "65,057 compounds · 0.837 AUC",
  },
  {
    year: "2025",
    title: "Machine learning for obesity diagnostics",
    context: "Co-author · IEEE InC4, Bangalore",
    highlights: [
      "Contributed to a machine-learning study focused on improving obesity detection and diagnostic accuracy.",
      "The work was peer reviewed and presented at the 2025 IEEE International Conference on Contemporary Computing and Communications.",
    ],
    signal: "Peer reviewed · IEEE InC4",
  },
];

const publications = [
  {
    type: "Journal article",
    year: "2026",
    title:
      "Thermal Signatures in Breast Cancer: Deciphering Latent Biomarkers through Deep Learning and Explainable AI",
    venue: "Journal of Thermal Biology · Elsevier · Vol. 137, 104426",
    doi: "10.1016/j.jtherbio.2026.104426",
  },
  {
    type: "Journal article",
    year: "2025",
    title:
      "Ensemble Techniques for Predictive Modeling of Leishmanial Activity via Molecular Fingerprints",
    venue:
      "BMC Medical Informatics and Decision Making · Springer Nature · Vol. 25, 378",
    doi: "10.1186/s12911-025-03041-4",
  },
  {
    type: "Conference paper",
    year: "2025",
    title:
      "Enhancing Obesity Detection Diagnostics: The Synergy of Machine Learning and AI",
    venue:
      "IEEE International Conference on Contemporary Computing and Communications (InC4) · Bangalore · pp. 1–8",
    doi: "10.1109/InC465408.2025.11256375",
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
          <a href="#aws">AWS</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
          <a href="#research">Research</a>
          <a href="mailto:mansigambhir32@gmail.com" className="nav-contact">
            Let’s talk <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-kicker">
          <span className="availability-dot" aria-hidden="true" />
          AWS Certified · AI agent &amp; backend engineer · India
        </div>
        <h1>
          I build AI agents that reach <em>production.</em>
        </h1>
        <div className="hero-bottom">
          <p className="hero-copy">
            Agentic systems on Amazon Bedrock, MCP servers and FastAPI
            backends—from architecture to deployment, observability and handoff.
            With a human gate where it counts.
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
            <article className={project.featured ? "featured-build" : undefined} key={project.title}>
              <span>0{index + 5}</span>
              {project.context && <strong className="build-context">{project.context}</strong>}
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              {project.highlights && (
                <ul className="build-highlights">
                  {project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                </ul>
              )}
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

      <section className="aws-section" id="aws" aria-labelledby="aws-title">
        <div className="aws-heading">
          <div>
            <span className="eyebrow light">AWS experience</span>
            <h2 id="aws-title">Cloud architecture for AI that has to ship.</h2>
          </div>
          <div className="aws-credential" aria-label="AWS Certified">
            <Award aria-hidden="true" />
            <div>
              <span>Professional credential</span>
              <strong>AWS Certified</strong>
            </div>
          </div>
        </div>
        <div className="aws-grid">
          {awsCapabilities.map((capability) => (
            <article key={capability.number}>
              <div>
                <Cloud aria-hidden="true" />
                <span>{capability.number}</span>
              </div>
              <h3>{capability.title}</h3>
              <p>{capability.description}</p>
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
        <figure className="portrait-card">
          <img
            src="/mansi-gambhir.jpeg"
            alt="Mansi Gambhir"
            width={316}
            height={302}
          />
          <figcaption>
            <span>Mansi Gambhir</span>
            <span>AWS Certified</span>
          </figcaption>
        </figure>
        <div className="about-copy">
          <div className="about-label">
            <span className="eyebrow">About</span>
            <span>English · Hindi</span>
          </div>
          <h2>An engineer who ships agents, not demos.</h2>
          <p>
            I work end to end: architecture, backend, deployment, observability and
            handoff—with hands-on experience taking enterprise agentic AI from
            Amazon Bedrock architecture and evaluation through cloud delivery. I am
            AWS Certified, with a background spanning production agent systems,
            computational biology, a B.Tech from Thapar and research at Samsung
            R&amp;D Institute Bangalore.
          </p>
        </div>
      </section>

      <section className="research-section" id="research" aria-labelledby="research-title">
        <div className="research-heading">
          <div>
            <span className="eyebrow light">Research &amp; publications</span>
            <h2 id="research-title">Research that turns models into evidence.</h2>
          </div>
          <div className="research-count" aria-label="Three peer-reviewed publications">
            <strong>3</strong>
            <span>peer-reviewed publications</span>
            <small>2 journal articles · 1 IEEE conference paper</small>
          </div>
        </div>

        <div className="research-interests">
          <Microscope aria-hidden="true" />
          <span>Research focus</span>
          <p>
            Medical diagnostics, explainable AI for clinical imaging, thermal
            biomarker discovery, cheminformatics, ML-driven drug discovery and
            multi-agent LLM systems for research automation.
          </p>
        </div>

        <div className="research-grid" aria-label="Research experience">
          {researchExperience.map((research, index) => (
            <article key={research.title}>
              <div className="research-card-top">
                <span>0{index + 1}</span>
                <span>{research.year}</span>
              </div>
              <h3>{research.title}</h3>
              <p className="research-context">{research.context}</p>
              <ul>
                {research.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <strong>{research.signal}</strong>
            </article>
          ))}
        </div>

        <div className="publications-block">
          <div className="publications-title">
            <BookOpen aria-hidden="true" />
            <h3>Published papers</h3>
          </div>
          <div className="publication-list">
            {publications.map((publication, index) => (
              <article key={publication.doi}>
                <span className="publication-number">0{index + 1}</span>
                <div>
                  <span className="publication-type">
                    {publication.type} · {publication.year}
                  </span>
                  <h4>{publication.title}</h4>
                  <p>{publication.venue}</p>
                </div>
                <a
                  href={`https://doi.org/${publication.doi}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open DOI for ${publication.title}`}
                >
                  DOI <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="contact" aria-labelledby="contact-title">
        <span className="eyebrow light">Have a hard system to ship?</span>
        <h2 id="contact-title">Let’s make it reliable.</h2>
        <a href="mailto:mansigambhir32@gmail.com">
          <span>mansigambhir32@gmail.com</span>
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
