"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const links = [
  { href: "/", label: "خانه" },
  { href: "#services", label: "خدمات" },
  { href: "#why-us", label: "چرا ما؟" },
  { href: "#projects", label: "پروژه‌ها" },
  { href: "#contact", label: "تماس با ما" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

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

        {/* Desktop menu */}
        <nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="transition-colors hover:text-blue-400"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <Button className="hidden bg-blue-600 hover:bg-blue-700 md:inline-flex">
          درخواست خدمات
        </Button>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="باز و بسته کردن منو"
          aria-expanded={open}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white md:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/10 bg-slate-950/95 backdrop-blur-md md:hidden"
          >
            <nav className="container mx-auto flex flex-col gap-1 px-6 py-4 text-right text-slate-300">
              {links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm transition-colors hover:bg-white/5 hover:text-blue-400"
                >
                  {link.label}
                </Link>
              ))}

              <Button
                onClick={() => setOpen(false)}
                className="mt-2 w-full bg-blue-600 hover:bg-blue-700"
              >
                درخواست خدمات
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
