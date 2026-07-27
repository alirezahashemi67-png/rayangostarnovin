"use client";

import { motion } from "framer-motion";
import { Monitor, Laptop, Camera, Network } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "فروش کامپیوتر",
    desc: "عرضه انواع کامپیوترهای اداری، گیمینگ و خانگی.",
  },
  {
    icon: Laptop,
    title: "تعمیر لپ‌تاپ",
    desc: "تعمیر تخصصی لپ‌تاپ، مادربرد و بازیابی اطلاعات.",
  },
  {
    icon: Camera,
    title: "دوربین مداربسته",
    desc: "طراحی، نصب و راه‌اندازی سیستم‌های نظارتی.",
  },
  {
    icon: Network,
    title: "شبکه",
    desc: "اجرای شبکه، کابل‌کشی و پیکربندی تجهیزات.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      {/* Background glow — consistent with Hero */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/3 left-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] translate-x-1/3 rounded-full bg-cyan-500/10 blur-[140px]" />
      </div>

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm text-blue-300 backdrop-blur">
            خدمات ما
          </div>

          <h2 className="text-4xl font-black lg:text-5xl">
            خدمات تخصصی{" "}
            <span className="text-blue-500">فناوری اطلاعات</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            ارائه خدمات تخصصی در حوزه فناوری اطلاعات و سیستم‌های امنیتی، با
            کیفیت بالا و پشتیبانی حرفه‌ای برای منازل و شرکت‌ها.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-blue-500/40 hover:bg-white/[0.08]"
            >
              {/* Icon glow */}
              <div className="mb-5 inline-flex rounded-2xl bg-blue-600/10 p-3.5 ring-1 ring-blue-500/20 transition-colors group-hover:bg-blue-600/20 group-hover:ring-blue-500/40">
                <service.icon className="h-8 w-8 text-blue-500" />
              </div>

              <h3 className="mb-3 text-xl font-bold">{service.title}</h3>

              <p className="leading-7 text-slate-400">{service.desc}</p>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 right-6 left-6 h-px scale-x-0 bg-gradient-to-l from-blue-500 to-cyan-400 transition-transform duration-300 group-hover:scale-x-100" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
