import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 bg-ink text-paper">
      <div className="px-8 md:px-12 pt-16 pb-12 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6 space-y-6">
          <p className="text-sm uppercase tracking-wide opacity-90">
            A SWISS ARMY KNIFE IN CODING + FINANCE
          </p>
          <a
            href="mailto:hello@yourdomain.com"
            className="block text-sm uppercase tracking-wide border-b border-paper/60 pb-1 w-fit"
          >
            ...
          </a>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase opacity-50 mb-4">Social</p>
          <ul className="space-y-2 text-sm">
            <li><a href="https://linkedin.com/in/ayodele-opadiran" className="hover:opacity-60">LinkedIn</a></li>
            <li><a href="https://instagram.com/yourstruly.ayo" className="hover:opacity-60">Instagram</a></li>
            <li><a href="https://x.com/sforslime" className="hover:opacity-60">X</a></li>
            <li><a href="https://substack.com/@sforslime" className="hover:opacity-60">Substack</a></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-xs uppercase opacity-50 mb-4">Sections</p>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:opacity-60">About</Link></li>
            <li><Link href="/work" className="hover:opacity-60">Work</Link></li>
            <li><Link href="/contact" className="hover:opacity-60">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="overflow-hidden border-y border-paper/10">
        <div className="marquee flex whitespace-nowrap">
          <span className="text-[18vw] leading-none font-semibold tracking-tightest pr-12">
            AYODELE OPADIRAN · AYO! ·
          </span>
          <span className="text-[18vw] leading-none font-semibold tracking-tightest pr-12" aria-hidden>
            AYODELE OPADIRAN · AYO! ·
          </span>
        </div>
      </div>

      <div className="px-8 md:px-12 py-6 flex items-center justify-between text-xs opacity-70">
        <span>© {new Date().getFullYear()} AYODELE OPADIRAN.</span>
        <span>Currently in: Lagos, Nigeria</span>
      </div>
    </footer>
  );
}
