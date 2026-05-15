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

const skills = ["skill one", "skill two", "skill three", "skill four"];

const rotatingWords = [
  "placeholder one",
  "placeholder two",
  "placeholder three",
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
    <section className="px-8 md:px-12 pt-8 pb-24">
      <div className="grid grid-cols-12 gap-8 items-start">
        {/* LEFT — sticky */}
        <aside className="col-span-12 md:col-span-3 md:sticky md:top-[calc(var(--nav-h)+2rem)] md:self-start flex flex-col gap-12">
          <h1 className="text-7xl md:text-8xl font-light tracking-tightest leading-[0.95]">
            hi!<br />i&apos;m [AYO!].
          </h1>

          <div className="flex flex-col gap-3 text-ink/80 text-sm">
            <a href="#" aria-label="Instagram" className="hover:opacity-60 w-fit">IG</a>
            <a href="#" aria-label="X" className="hover:opacity-60 w-fit">X</a>
            <a href="#" aria-label="LinkedIn" className="hover:opacity-60 w-fit">in</a>
            <a href="#" aria-label="TikTok" className="hover:opacity-60 w-fit">TikTok</a>
          </div>

          <ul className="space-y-2 text-sm text-ink/70 pt-4">
            {skills.map((s) => (
              <li key={s} className="border-t border-rule pt-2">{s}</li>
            ))}
          </ul>
        </aside>

        {/* MIDDLE — scrolls */}
        <div className="col-span-12 md:col-span-6 flex flex-col gap-10">
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
