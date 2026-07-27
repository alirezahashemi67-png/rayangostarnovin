"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock, Users, Wallet } from "lucide-react";

const reasons = [
  {
    icon: BadgeCheck,
    title: "تضمین کیفیت خدمات",
    desc: "تمام تعمیرات و نصب‌ها با گارانتی انجام می‌شود و کیفیت کار برایمان در اولویت است.",
  },
  {
    icon: Clock,
    title: "پشتیبانی سریع",
    desc: "پاسخگویی فوری و اعزام تکنسین در کوتاه‌ترین زمان ممکن، حتی در موارد اضطراری.",
  },
  {
    icon: Users,
    title: "تیم متخصص و مجرب",
    desc: "بیش از ۱۰ سال تجربه در حوزه فناوری اطلاعات، شبکه و سیستم‌های امنیتی.",
  },
  {
    icon: Wallet,
    title: "قیمت منصفانه",
    desc: "ارائه خدمات با بالاترین کیفیت و قیمتی متناسب با بازار، بدون هزینه‌های پنهان.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-slate-900 py-24 text-white"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 text-right"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur">
              چرا ما؟
            </div>

            <h2 className="text-4xl font-black leading-tight lg:text-5xl">
              دلیل انتخاب{" "}
              <span className="text-blue-500">رایان گستر نوین</span>
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              ما با ترکیب تخصص فنی، پاسخگویی سریع و قیمت منصفانه، تجربه‌ای
              مطمئن از خدمات فناوری اطلاعات و سیستم‌های امنیتی را برای شما
              فراهم می‌کنیم.
            </p>
          </motion.div>

          {/* Cards side */}
          <div className="order-2 grid gap-5 sm:grid-cols-2">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.12 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:-translate-y-1 hover:border-blue-500/40"
              >
                <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 ring-1 ring-blue-500/20">
                  <reason.icon className="h-6 w-6 text-blue-500" />
                </div>

                <h3 className="mb-2 font-bold">{reason.title}</h3>

                <p className="text-sm leading-6 text-slate-400">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
