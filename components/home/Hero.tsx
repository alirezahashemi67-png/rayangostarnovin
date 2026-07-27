"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ArrowLeft } from "lucide-react";

import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-slate-950 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      {/* Subtle grid texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to left, #fff 1px, transparent 1px), linear-gradient(to top, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container relative mx-auto px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1.1fr]">
          {/* Text column — first in DOM = right side in RTL */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 space-y-8 text-right"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm backdrop-blur">
              <ShieldCheck size={18} className="text-blue-400" />
              کیفیت بالا، قیمت مناسب، پشتیبانی حرفه‌ای
            </div>

            <h1 className="text-5xl font-black leading-tight lg:text-7xl">
              خدمات تخصصی
              <span className="block text-blue-500">
                کامپیوتر، لپ‌تاپ
              </span>
              و دوربین مداربسته
            </h1>

            <p className="max-w-xl leading-9 text-slate-300">
              فروش تجهیزات کامپیوتری، اجرای شبکه، نصب دوربین مداربسته و
              پشتیبانی حرفه‌ای برای منازل و شرکت‌ها.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="h-12 gap-2 rounded-xl bg-blue-600 px-6 text-base hover:bg-blue-700"
              >
                درخواست خدمات
                <ArrowLeft size={18} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-12 rounded-xl border-white/15 bg-white/5 px-6 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white"
              >
                مشاهده محصولات
              </Button>
            </div>
          </motion.div>

          {/* Image column — second in DOM = left side in RTL */}
          <div className="order-2">
            <HeroImage />
          </div>
        </div>
      </div>
    </section>
  );
}