"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-[480px] w-[480px] rounded-full bg-blue-600/20 blur-[110px]" />
      </div>

      {/* Image */}
      <div className="relative z-10 overflow-hidden rounded-3xl border border-white/10 bg-slate-900 shadow-2xl">
        <Image
          src="/Images/Hero.jpg"
          alt="Rayan Gostar Novin"
          width={700}
          height={700}
          priority
          className="h-auto w-full max-w-[620px] object-cover"
        />
      </div>

      {/* Floating Card */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="absolute -bottom-6 right-6 z-20 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-4 backdrop-blur-xl shadow-xl"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-blue-600/20 p-2">
            <ShieldCheck className="h-5 w-5 text-blue-500" />
          </div>

          <div>
            <p className="text-xs text-slate-400">
              خدمات حرفه‌ای
            </p>

            <h3 className="font-bold text-white">
              نصب، تعمیر و پشتیبانی
            </h3>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}