import Link from "next/link";

type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  video?: string;
  image?: string;
  tag?: { label: string; bg: string };
  description?: string;
  github?: string;
  site?: string;
};

const projects: Project[] = [
  {
    slug: "project-one",
    title: "Terminal Portfolio",
    category: "Product",
    year: "2025",
    video: "/tui.mp4",
    tag: { label: "Hobby", bg: "bg-red-500" },
    description:
      "Built an SSH-accessible portfolio in Go that renders a fully interactive TUI (Bubble Tea + Lip Gloss) on connect, including a braille-dithered animated ASCII portrait converted from video frames and a Wish-based SSH server deployable as a single binary on Fly.io.",
    github: "https://github.com/sforslime/terminal-site",
  },
  {
    slug: "project-two",
    title: "LetuSell",
    category: "Product",
    year: "2025",
    image: "/letusell.png",
    tag: { label: "In Development", bg: "bg-amber-500" },
    description:
      "A multi-tenant campus marketplace that lets university students browse local vendors across food, fashion, beauty, gadgets, and services — order online, pay with Paystack, and pick up on campus. Built with Next.js 16, TypeScript, Tailwind v4, and Supabase, with HMAC-verified Paystack webhooks, role-based vendor and admin dashboards, and realtime order updates.",
    site: "https://letusell.ng",
  },
];

export default function Work() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {projects.map((p) => (
          <div key={p.slug} className="group block">
            <Link href={`/work/${p.slug}`} className="block">
              {p.video ? (
                <video
                  src={p.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-sm"
                />
              ) : p.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-auto rounded-sm"
                />
              ) : (
                <div className="aspect-[4/3] w-full bg-neutral-100 rounded-sm overflow-hidden flex items-center justify-center text-ink/30 text-sm group-hover:bg-neutral-200 transition">
                  [thumbnail]
                </div>
              )}
              <div className="mt-3 flex items-baseline justify-between text-sm">
                <div className="flex items-baseline gap-2">
                  <span className="font-medium">{p.title}</span>
                  {p.tag && (
                    <span
                      className={`inline-block rounded-full px-2 py-0.5 text-[10px] uppercase tracking-wide text-white ${p.tag.bg}`}
                    >
                      {p.tag.label}
                    </span>
                  )}
                </div>
                <span className="text-ink/60">{p.year}</span>
              </div>
              {p.description && (
                <p className="mt-2 text-sm text-ink/70 leading-relaxed">
                  {p.description}
                </p>
              )}
            </Link>
            {(p.github || p.site) && (
              <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm">
                {p.site && (
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline underline-offset-4 hover:text-ink"
                  >
                    Visit site →
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline underline-offset-4 hover:text-ink"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
      <p className="mt-16 text-center text-sm text-ink/50 italic">
        More projects coming soon…
      </p>
    </section>
  );
}
