import {
  ArrowUpRightIcon,
  CloudIcon,
  CodeBracketSquareIcon,
  EnvelopeIcon,
  MapPinIcon,
  ShieldCheckIcon,
  SignalIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const capabilities = [
  {
    title: "Production AI infrastructure",
    description:
      "Governed model access, secure agent and tool integrations, knowledge retrieval and the controls needed to move beyond a prototype.",
    icon: CloudIcon,
  },
  {
    title: "Secure platform delivery",
    description:
      "Repeatable AWS infrastructure with Terraform, CI/CD, protected approvals, policy checks and clear human decision points.",
    icon: ShieldCheckIcon,
  },
  {
    title: "Reliability and observability",
    description:
      "Useful telemetry, diagnostics, failure handling and runtime verification that prove a service works after deployment.",
    icon: SignalIcon,
  },
];

const deliverySteps = [
  ["01", "Understand", "Research the problem, constraints and production risk."],
  ["02", "Design", "Turn ambiguity into a secure, operable architecture."],
  ["03", "Deliver", "Build the infrastructure, automation and safety controls."],
  ["04", "Prove", "Verify the live service, document it and support the outcome."],
];

const skills = [
  "Platform Engineering",
  "Production AI",
  "Agentic Systems",
  "AWS",
  "Amazon Bedrock",
  "Terraform",
  "CI/CD",
  "Datadog",
  "Observability",
  "Security",
  "Reliability",
];

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dean Whittaker",
  url: "https://deancod.es",
  image: "https://deancod.es/avatar.png",
  jobTitle: "Senior Platform Engineer",
  homeLocation: {
    "@type": "Place",
    name: "Sunderland, England, United Kingdom",
  },
  sameAs: ["https://www.linkedin.com/in/dean-whittaker/"],
  knowsAbout: skills,
};

export default function Home() {
  return (
    <div className="site-shell min-h-screen overflow-hidden">
      <a
        href="#content"
        className="sr-only fixed left-4 top-4 z-50 rounded-full bg-white px-4 py-2 text-slate-950 focus:not-sr-only"
      >
        Skip to content
      </a>

      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-7 lg:px-8">
        <a
          href="#content"
          className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          aria-label="Dean Whittaker, home"
        >
          <span className="grid size-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-sm font-bold tracking-wider text-white transition group-hover:border-cyan-300/50 group-hover:text-cyan-200">
            DW
          </span>
          <span className="hidden text-sm font-medium text-slate-300 sm:block">
            Senior Platform Engineer
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/dean-whittaker/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
        >
          LinkedIn
          <ArrowUpRightIcon className="size-4" aria-hidden="true" />
        </a>
      </header>

      <main id="content">
        <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-24 pt-14 lg:grid-cols-[1fr_22rem] lg:items-center lg:gap-20 lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
              <span className="size-1.5 rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,0.9)]" />
              Production AI · Platform Engineering
            </div>

            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.03] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl">
              I build the infrastructure that makes AI work in production.
            </h1>

            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-slate-300 sm:text-xl">
              I design secure AWS platforms, delivery controls and operational
              systems that take ambitious AI ideas from research through to a
              dependable, supportable service.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://www.linkedin.com/in/dean-whittaker/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Connect on LinkedIn
                <ArrowUpRightIcon className="size-4" aria-hidden="true" />
              </a>
              <a
                href="mailto:dean@deancod.es"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-sm font-semibold text-white transition hover:border-violet-300/50 hover:bg-violet-300/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
              >
                <EnvelopeIcon className="size-4" aria-hidden="true" />
                dean@deancod.es
              </a>
            </div>

            <p className="mt-6 flex items-center gap-2 text-sm text-slate-400">
              <MapPinIcon className="size-4 text-violet-300" aria-hidden="true" />
              Sunderland, England, United Kingdom
            </p>
          </div>

          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="profile-glow absolute inset-0 rounded-[2rem]" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-slate-900/70 p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.45rem] bg-gradient-to-br from-slate-800 to-slate-950">
                <Image
                  src="/avatar.png"
                  alt="Dean Whittaker"
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 352px, 320px"
                />
              </div>
              <div className="flex items-end justify-between gap-4 px-1 pb-1 pt-5">
                <div>
                  <p className="font-semibold text-white">Dean Whittaker</p>
                  <p className="mt-1 text-sm text-slate-400">
                    Senior Platform Engineer
                  </p>
                </div>
                <CodeBracketSquareIcon
                  className="size-7 text-cyan-300"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          aria-labelledby="capabilities-heading"
          className="border-y border-white/10 bg-white/[0.025]"
        >
          <div className="mx-auto w-full max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300">
                What I deliver
              </p>
              <h2
                id="capabilities-heading"
                className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
              >
                The systems around the model matter.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Production AI needs more than a successful demonstration. It
                needs identity, policy, traceability, safe delivery and proof
                that the live service behaves as intended.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {capabilities.map(({ title, description, icon: Icon }) => (
                <article
                  key={title}
                  className="rounded-3xl border border-white/10 bg-slate-900/55 p-7 transition hover:-translate-y-1 hover:border-cyan-300/25 hover:bg-slate-900/80"
                >
                  <div className="grid size-11 place-items-center rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.08] text-cyan-200">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-white">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-400">{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          aria-labelledby="approach-heading"
          className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 lg:px-8 lg:py-28"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              End-to-end ownership
            </p>
            <h2
              id="approach-heading"
              className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl"
            >
              From ambiguity to a supportable production outcome.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              I am strongest where the problem is new, the environment is
              regulated and the outcome has to work end to end.
            </p>
          </div>

          <ol className="grid gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {deliverySteps.map(([number, title, description]) => (
              <li key={number} className="bg-slate-950/90 p-7">
                <span className="font-mono text-xs text-violet-300">{number}</span>
                <h3 className="mt-4 text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 leading-7 text-slate-400">{description}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="mx-auto w-full max-w-6xl px-6 pb-24 lg:px-8 lg:pb-32">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-300/[0.08] via-white/[0.025] to-violet-400/[0.08] p-8 sm:p-10 lg:p-12">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Core strengths
            </p>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-white/10 bg-slate-950/55 px-4 py-2 text-sm font-medium text-slate-200"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="mt-10 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
              <p className="max-w-xl text-lg leading-8 text-slate-300">
                If you are building secure, production-grade AI systems on AWS,
                I am always happy to connect.
              </p>
              <a
                href="mailto:dean@deancod.es"
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                Start a conversation
                <ArrowUpRightIcon className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-6 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Dean Whittaker</p>
          <p>Senior Platform Engineer · Sunderland, UK</p>
        </div>
      </footer>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </div>
  );
}
