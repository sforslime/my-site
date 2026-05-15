export default function About() {
  return (
    <section className="px-8 md:px-12 pt-8 pb-24">
      <h1 className="text-5xl md:text-7xl font-light tracking-tightest leading-[1] mb-24">
        ABOUT [YOUR NAME]
      </h1>

      <div className="grid grid-cols-12 gap-8">
        <aside className="col-span-12 md:col-span-3">
          <p className="text-xs uppercase tracking-wide text-ink/60 mb-4">My Story</p>
          <div className="aspect-square w-48 bg-neutral-200 rounded-sm flex items-center justify-center text-ink/30 text-xs">
            [photo]
          </div>
        </aside>

        <div className="col-span-12 md:col-span-7 md:col-start-5 space-y-5 text-[15px] leading-relaxed text-ink/85">
          <p>
            Write a short intro paragraph here. A sentence or two about who you
            are, what you do, and what you care about.
          </p>
          <p>
            Add a second paragraph with more detail — background, what you&apos;re
            currently working on, what excites you about the work.
          </p>
          <p>
            A third paragraph can cover hobbies, philosophy, or whatever you want
            visitors to know about you outside the resume.
          </p>
        </div>
      </div>
    </section>
  );
}
