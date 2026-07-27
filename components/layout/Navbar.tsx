import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 ring-1 ring-blue-500/30">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
          </div>

          <div className="leading-tight">
            <p className="text-lg font-bold tracking-wide text-white">
              <span className="text-blue-500">Rayan</span> Gostar Novin
            </p>
            <p className="text-[11px] tracking-wide text-slate-400">
              Computer &amp; Security Solutions
            </p>
          </div>
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="transition-colors hover:text-blue-400">
            خانه
          </Link>
          <Link href="#services" className="transition-colors hover:text-blue-400">
            خدمات
          </Link>
          <Link href="#products" className="transition-colors hover:text-blue-400">
            محصولات
          </Link>
          <Link href="#projects" className="transition-colors hover:text-blue-400">
            پروژه‌ها
          </Link>
          <Link href="#contact" className="transition-colors hover:text-blue-400">
            تماس با ما
          </Link>
        </nav>

        {/* CTA */}
        <Button className="bg-blue-600 hover:bg-blue-700">
          درخواست خدمات
        </Button>
      </div>
    </header>
  );
}
