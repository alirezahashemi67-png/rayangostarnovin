import Link from "next/link";
import { ShieldCheck, Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-16 pb-8 text-white">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/15 ring-1 ring-blue-500/30">
                <ShieldCheck className="h-5 w-5 text-blue-500" />
              </div>
              <div className="leading-tight">
                <p className="text-lg font-bold">
                  <span className="text-blue-500">Rayan</span> Gostar Novin
                </p>
                <p className="text-[11px] tracking-wide text-slate-400">
                  Computer &amp; Security Solutions
                </p>
              </div>
            </div>

            <p className="max-w-sm leading-7 text-slate-400">
              ارائه‌دهنده‌ی خدمات تخصصی فروش و تعمیر کامپیوتر، اجرای شبکه و
              نصب دوربین مداربسته برای منازل و شرکت‌ها.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="mb-4 font-bold">دسترسی سریع</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>
                <Link href="#services" className="transition-colors hover:text-blue-400">
                  خدمات
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="transition-colors hover:text-blue-400">
                  چرا ما؟
                </Link>
              </li>
              <li>
                <Link href="#projects" className="transition-colors hover:text-blue-400">
                  پروژه‌ها
                </Link>
              </li>
              <li>
                <Link href="#contact" className="transition-colors hover:text-blue-400">
                  تماس با ما
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="mb-4 font-bold">اطلاعات تماس</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-blue-500" />
                <span className="flex items-center gap-1.5">
                  <span aria-hidden="true">🇮🇷</span>
                  <span dir="ltr">0917 529 3803</span>
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-blue-500" />
                <span dir="ltr">info@rayangostarnovin.ir</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-blue-500" />
                سن‌دنی، فرانسه
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Rayan Gostar Novin. تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}
