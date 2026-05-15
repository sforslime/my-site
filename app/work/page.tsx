import Link from "next/link";

const projects = [
  { slug: "project-one",   title: "Project One",   category: "Product",          year: "2025" },
  { slug: "project-two",   title: "Project Two",   category: "Brand",            year: "2025" },
  { slug: "project-three", title: "Project Three", category: "Growth / Product", year: "2024" },
  { slug: "project-four",  title: "Project Four",  category: "Content Studio",   year: "2024" },
];

export default function Work() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-14">
        {projects.map((p) => (
          <Link key={p.slug} href={`/work/${p.slug}`} className="group block">
            <div className="aspect-[4/3] w-full bg-neutral-100 rounded-sm overflow-hidden flex items-center justify-center text-ink/30 text-sm group-hover:bg-neutral-200 transition">
              [thumbnail]
            </div>
            <div className="mt-3 flex items-baseline justify-between text-sm">
              <div>
                <span className="font-medium">{p.title}</span>
                <span className="text-ink/60"> — {p.category}</span>
              </div>
              <span className="text-ink/60">{p.year}</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
