import type { Metadata } from "next";
import "./globals.css";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "AYO!",
  description: "Personal site",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      style={{ ["--nav-h" as string]: "4.5rem" }}
    >
      <body className="font-sans text-ink bg-paper min-h-screen flex flex-col">
        <SmoothScroll />
        <SiteNav />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
