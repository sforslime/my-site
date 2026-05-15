import Link from "next/link";

export default function SiteNav() {
  return (
    <header className="px-8 md:px-12 py-6 flex items-center justify-between">
      <Link href="/" className="text-[16px] font-semibold tracking-wide">
        AYODELE OPADIRAN
      </Link>
      <nav className="flex items-center gap-8 text-[16px] font-medium">
        <Link href="/about" className="hover:opacity-60 transition">About</Link>
        <Link href="/work" className="hover:opacity-60 transition">Work</Link>
        <Link href="/resume.pdf" className="hover:opacity-60 transition">Resume</Link>
        <button aria-label="Menu" className="flex flex-col gap-[3px] ml-2">
          <span className="block w-5 h-px bg-ink" />
          <span className="block w-5 h-px bg-ink" />
        </button>
      </nav>
    </header>
  );
}
