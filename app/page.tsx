import Link from "next/link";
import Typewriter from "@/components/Typewriter";
import WireframeSphere from "@/components/WireframeSphereClient";
import ScrollFadeText from "@/components/ScrollFadeText";

const roles = [
  {
    n: "01",
    title: "programmer",
    items: [
      "building LetuSell, a platform for student businesses in universities across Nigeria ",
      "built NaijaFlights, a flight search engine for Nigerian domestic flights",
      { label: "more here", href: "/work" },
    ],
  },
  {
    n: "02",
    title: "comp sci major",
    items: [
      "1/2Y at Howard university",
      "now @ the University of Ilorin",
    ],
  },
  {
    n: "03",
    title: "hobbies...",
    items: ["basketballlll!!!", "music🎧"],
  },
  {
    n: "04",
    title: "status",
    items: ["not bound by anything?", "now @ ..."],
  },
];

const skills = ["Student", "software developer", "future quant", "skill four"];

const rotatingWords = [
  "i'm a 18 y/o.",
  "i'm a student.",
  "i'm a programmer.",
  "i'm a future quant.",
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

function SocialIcons() {
  return (
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
  );
}

function RoleList() {
  return (
    <>
      {roles.map((r) => (
        <div key={r.n}>
          <h2 className="text-[18px] font-medium leading-[1.2] tracking-normal mb-2">
            <span className="mr-1.5">[{r.n}]</span>
            {r.title}
          </h2>
          <ul className="space-y-1 text-[16px] font-light text-ink/80 leading-[1.2] tracking-[-0.02em]">
            {r.items.map((it, i) => (
              <li key={i} className="flex">
                <Bullet />
                {typeof it === "string" ? (
                  <span>{it}</span>
                ) : (
                  <Link href={it.href} className="underline underline-offset-2 hover:opacity-60 transition">{it.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  );
}

function SkillsList({ className }: { className?: string }) {
  return (
    <ul className={`text-[16px] font-light text-ink/70 border-b border-rule ${className ?? ""}`}>
      {skills.map((s) => (
        <li key={s} className="border-t border-rule py-0.3">{s}</li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <section className="pt-6 pb-24">

      {/* ── MOBILE (hidden on md+) ───────────────────────── */}
      <div className="md:hidden px-6 flex flex-col gap-6">
        <h1 className="text-[clamp(2.5rem,11.5vw,64px)] font-medium tracking-[-0.2px] leading-[1.0] whitespace-nowrap">
          hi! i&apos;m AYO!.
        </h1>

        <div className="flex items-center justify-between">
          <SocialIcons />
          <Link
            href="/work"
            className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-5 py-2.5 text-[15px] font-medium hover:opacity-90 transition"
          >
            view work <span aria-hidden>⇒</span>
          </Link>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-[16px] font-light text-ink/70"><Typewriter words={rotatingWords} /></p>
          <div className="flex flex-col gap-4">
            <RoleList />
          </div>
        </div>

        <div className="flex gap-4 items-start mt-4">
          <SkillsList className="flex-1" />
          <WireframeSphere className="w-[38%] aspect-square" />
        </div>

        <ScrollFadeText className="text-[16px] font-light leading-[1.5] text-ink mt-8">
          [your bio text here — a couple of sentences about what drives you,
          how you think, what you&apos;re building toward. something real.]
        </ScrollFadeText>

        <WireframeSphere className="w-full aspect-square mt-4" />
      </div>

      {/* ── DESKTOP (hidden on mobile) ───────────────────── */}
      <div className="hidden md:block px-6 md:pl-6 md:pr-12 pt-2">
        <div className="relative grid grid-cols-10 gap-8 items-start">
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[30%] w-px bg-rule" />
          <div aria-hidden className="pointer-events-none absolute inset-y-0 left-[80%] w-px bg-rule" />

          {/* LEFT — sticky */}
          <aside className="col-span-3 sticky top-[calc(var(--nav-h)+2rem)] self-start flex flex-col gap-6 h-[calc(100vh-var(--nav-h)-3rem)]">
            <h1 className="text-[clamp(2.5rem,8vw,90px)] font-light tracking-[-0.2px] leading-[1.1]">
              hi!<br />i&apos;m AYO!.
            </h1>
            <SocialIcons />
            <SkillsList className="mt-auto mb-12" />
          </aside>

          {/* MIDDLE — scrolls */}
          <div className="col-span-5 flex flex-col gap-10">
            <p className="text-[16px] font-light text-ink/70">
              <Typewriter words={rotatingWords} />
            </p>
            <div className="grid grid-flow-col grid-rows-2 grid-cols-2 gap-x-8 gap-y-10">
              <RoleList />
            </div>
            <WireframeSphere className="w-full aspect-square" />
            <div className="h-[60vh]" aria-hidden />
          </div>

          {/* RIGHT — sticky */}
          <aside className="col-span-2 sticky top-[calc(var(--nav-h)+2rem)] self-start flex flex-col items-end gap-6 h-[calc(100vh-var(--nav-h)-3rem)]">
            <div className="flex items-center gap-2 text-[16px] font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
              <span>available :)</span>
            </div>
            <Link
              href="/work"
              className="inline-flex items-center gap-2 bg-ink text-paper rounded-full px-6 py-3 text-[16px] font-medium hover:opacity-90 transition"
            >
              view work <span aria-hidden>→</span>
            </Link>
            <p className="text-[16px] font-light text-ink/70">☆ based in Lagos</p>
            <a
              href="mailto:hello@yourdomain.com"
              className="mt-auto text-[16px] font-light text-ink/70 hover:opacity-60"
            >
              contact me @ ....
            </a>
          </aside>
        </div>
      </div>

    </section>
  );
}
