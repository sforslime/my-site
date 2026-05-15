import Link from "next/link";
import Typewriter from "@/components/Typewriter";

const roles = [
  {
    n: "01",
    title: "role one",
    items: [
      "short bullet describing the role",
      "another bullet with a metric or outcome",
      "a third line if you need it",
    ],
  },
  {
    n: "02",
    title: "role two @ ...",
    items: [
      "what you did — short and concrete",
      "another notable bullet",
    ],
  },
  {
    n: "03",
    title: "prev. role @ ...",
    items: ["company a", "company b", "company c"],
  },
  {
    n: "04",
    title: "education / status",
    items: ["school, degree, year", "now @ ..."],
  },
];

const skills = ["student", "software developer", "future quant", "skill four"];

const rotatingWords = [
  "18",
  "18 y/o",
  "18 year old",
];

function Bullet() {
  return (
    <span
      aria-hidden
      className="mt-[7px] mr-2 inline-block h-[10px] w-[10px] shrink-0 rounded-full border border-ink/70"
    >
      <span className="block h-full w-full rounded-full bg-ink/70 scale-[0.45]" />
    </span>
  );
}

export default function Home() {
  return (
    <section className="px-6 md:pl-6 md:pr-12 pt-8 pb-24">
      <div className="relative grid grid-cols-12 gap-8 items-start">
        {/* column dividers */}
        <div aria-hidden className="hidden md:block pointer-events-none absolute inset-y-0 left-1/3 w-px bg-rule" />
        <div aria-hidden className="hidden md:block pointer-events-none absolute inset-y-0 left-3/4 w-px bg-rule" />

        {/* LEFT — sticky */}
        <aside className="col-span-12 md:col-span-4 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:self-start flex flex-col gap-6">
          <h1 className="text-2xl md:text-7xl font-light tracking-tightest leading-[0.95]">
            hi!<br />i&apos;m AYO!.
          </h1>

          <div className="flex flex-row items-center gap-5 text-ink/80">
            <a href="#" aria-label="Instagram" className="hover:opacity-60">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
            </a>
            <a href="#" aria-label="X" className="hover:opacity-60">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644z" />
              </svg>
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-60">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.47-.9 1.63-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zm1.78 13.02H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
              </svg>
            </a>
            <a href="#" aria-label="Substack" className="hover:opacity-60">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                <path d="M3 4.5h18V7H3V4.5zm0 4.25h18v2.5H3v-2.5zM3 13v8l9-5 9 5v-8H3z" />
              </svg>
            </a>
          </div>

          <ul className="text-sm text-ink/70 mt-8">
            {skills.map((s) => (
              <li key={s} className="border-t border-rule py-1.5">{s}</li>
            ))}
          </ul>
        </aside>

        {/* MIDDLE — scrolls */}
        <div className="col-span-12 md:col-span-5 flex flex-col gap-10">
          <p className="text-sm text-ink/70">
            i&apos;m a <Typewriter words={rotatingWords} />
          </p>

          <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-x-8 gap-y-10">
            {roles.map((r) => (
              <div key={r.n}>
                <h2 className="text-[15px] font-medium leading-snug mb-3">
                  <span className="text-ink/60 mr-2">[{r.n}]</span>
                  {r.title}
                </h2>
                <ul className="space-y-1.5 text-[14px] font-light text-ink/85 leading-snug">
                  {r.items.map((it, i) => (
                    <li key={i} className="flex">
                      <Bullet />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-4 aspect-[4/3] w-full bg-neutral-100 rounded-sm flex items-center justify-center text-ink/30 text-sm">
            [your photo here]
          </div>

          {/* extra scroll space so sticky effect is visible — replace with real content */}
          <div className="h-[60vh]" aria-hidden />
        </div>

        {/* RIGHT — sticky */}
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:self-start flex flex-col items-start md:items-end gap-6">
          <div className="flex items-center gap-2 text-sm">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
            <span>available :)</span>
          </div>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-sm hover:opacity-90 transition"
          >
            view work <span aria-hidden>→</span>
          </Link>
          <p className="text-sm text-ink/70">☆ based in [city]</p>

          <a
            href="mailto:hello@yourdomain.com"
            className="mt-auto text-sm text-ink/70 hover:opacity-60 pt-12"
          >
            hello@yourdomain.com
          </a>
        </aside>
      </div>
    </section>
  );
}
