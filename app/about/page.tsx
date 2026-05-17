import AsciiAnimation from "@/components/AsciiAnimation";

export default function About() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tightest leading-[1] mb-24">
        umm...
      </h1>

      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3">
          <AsciiAnimation className="w-48 aspect-square" />
        </aside>

        <div className="col-span-12 md:col-span-7 md:col-start-5 space-y-5 text-[15px] leading-relaxed text-ink/85">
          <p>
            updating this soon ;)
          </p>
        </div>
      </div>
    </section>
  );
}
