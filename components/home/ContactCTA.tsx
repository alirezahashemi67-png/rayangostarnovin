"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";

export default function ContactCTA() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 py-20 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-[160px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto flex max-w-3xl flex-col items-center rounded-3xl border border-white/10 bg-white/5 px-8 py-14 text-center backdrop-blur-md"
        >
          <h2 className="text-3xl font-black lg:text-4xl">
            آماده‌ی شروع همکاری هستید؟
          </h2>

          <p className="mt-4 max-w-xl leading-8 text-slate-400">
            همین حالا با ما تماس بگیرید تا مشاوره‌ی رایگان دریافت کنید و
            بهترین راه‌حل را برای نیاز خود پیدا کنید.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="h-12 gap-2 rounded-xl bg-blue-600 px-7 text-base hover:bg-blue-700"
            >
              <Phone size={18} />
              تماس با ما
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="h-12 gap-2 rounded-xl border-white/15 bg-white/5 px-7 text-base text-white backdrop-blur hover:bg-white/10 hover:text-white"
            >
              <MessageCircle size={18} />
              چت در واتساپ
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
