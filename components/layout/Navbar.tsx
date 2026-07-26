import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          <span className="text-blue-500">Rayan</span> Gostar Novin
        </Link>

        {/* Menu */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          <Link href="/" className="hover:text-blue-400 transition-colors">
            خانه
          </Link>

          <Link href="#services" className="hover:text-blue-400 transition-colors">
            خدمات
          </Link>

          <Link href="#products" className="hover:text-blue-400 transition-colors">
            محصولات
          </Link>

          <Link href="#projects" className="hover:text-blue-400 transition-colors">
            پروژه‌ها
          </Link>

          <Link href="#contact" className="hover:text-blue-400 transition-colors">
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