import Link from "next/link";

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
    items: [
      "company a",
      "company b",
      "company c",
    ],
  },
  {
    n: "04",
    title: "education / status",
    items: [
      "school, degree, year",
      "now @ ...",
    ],
  },
];

const skills = [
  "skill one",
  "skill two",
  "skill three",
  "skill four",
];

export default function Home() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <div className="grid grid-cols-12 gap-8">
        {/* Hero */}
        <div className="col-span-12 md:col-span-4">
          <h1 className="text-7xl md:text-8xl font-light tracking-tightest leading-[0.95]">
            hi!<br />i&apos;m [name].
          </h1>

          <div className="mt-12 flex gap-5 text-ink/80">
            <a href="#" aria-label="Instagram" className="text-sm hover:opacity-60">IG</a>
            <a href="#" aria-label="X" className="text-sm hover:opacity-60">X</a>
            <a href="#" aria-label="LinkedIn" className="text-sm hover:opacity-60">in</a>
            <a href="#" aria-label="Link" className="text-sm hover:opacity-60">↗</a>
          </div>
        </div>

        {/* Numbered grid */}
        <div className="col-span-12 md:col-span-5 md:pt-3">
          <p className="text-sm text-ink/70 mb-6">i&apos;m a [age]y</p>
          <div className="grid grid-cols-2 gap-x-8 gap-y-8">
            {roles.map((r) => (
              <div key={r.n}>
                <h2 className="text-[15px] font-medium leading-snug mb-3">
                  <span className="text-ink/60 mr-2">[{r.n}]</span>
                  {r.title}
                </h2>
                <ul className="space-y-1.5 text-[14px] font-light text-ink/85 leading-snug">
                  {r.items.map((it, i) => (
                    <li key={i} className="flex gap-2">
                      <span aria-hidden className="mt-[7px] inline-block w-1 h-1 rounded-full bg-ink/70 shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Right: status + CTA */}
        <div className="col-span-12 md:col-span-3 flex flex-col items-start md:items-end gap-6 md:pt-3">
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
        </div>
      </div>

      {/* Image + skills row */}
      <div className="mt-16 grid grid-cols-12 gap-8 items-start">
        <aside className="col-span-12 md:col-span-3 space-y-2 text-sm text-ink/70">
          {skills.map((s) => (
            <div key={s} className="border-t border-rule pt-2">{s}</div>
          ))}
        </aside>

        <div className="col-span-12 md:col-span-6">
          <div className="aspect-[4/3] w-full bg-neutral-100 rounded-sm flex items-center justify-center text-ink/30 text-sm">
            [your photo here]
          </div>
        </div>

        <div className="col-span-12 md:col-span-3 flex md:justify-end">
          <a href="mailto:hello@yourdomain.com" className="text-sm text-ink/70 hover:opacity-60">
            hello@yourdomain.com
          </a>
        </div>
      </div>
    </section>
  );
}
