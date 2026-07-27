"use client";

import { motion } from "framer-motion";
import { Camera, Network, Laptop, ArrowUpLeft } from "lucide-react";

const projects = [
  {
    icon: Camera,
    tag: "دوربین مداربسته",
    title: "نصب سیستم نظارتی هوشمند",
    desc: "طراحی و اجرای کامل شبکه‌ی دوربین مداربسته برای یک مجتمع تجاری، شامل NVR و دسترسی از راه دور.",
    gradient: "from-blue-600/30 via-blue-500/10 to-transparent",
  },
  {
    icon: Network,
    tag: "شبکه",
    title: "راه‌اندازی شبکه‌ی داخلی شرکت",
    desc: "کابل‌کشی، پیکربندی سوییچ و روتر، و بهینه‌سازی سرعت اینترنت برای یک دفتر ۲۰ کاربره.",
    gradient: "from-cyan-500/30 via-cyan-400/10 to-transparent",
  },
  {
    icon: Laptop,
    tag: "تعمیرات",
    title: "بازیابی و تعمیر تخصصی لپ‌تاپ",
    desc: "تعمیر مادربرد و بازیابی کامل اطلاعات یک لپ‌تاپ آسیب‌دیده برای مشتری سازمانی.",
    gradient: "from-indigo-600/30 via-indigo-500/10 to-transparent",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-slate-950 py-24 text-white"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-1/3 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />
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
            نمونه‌کارها
          </div>

          <h2 className="text-4xl font-black lg:text-5xl">
            پروژه‌های <span className="text-blue-500">اجراشده</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-8 text-slate-400">
            نمونه‌ای از پروژه‌هایی که برای مشتریان خانگی و سازمانی اجرا
            کرده‌ایم.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md transition-all hover:-translate-y-2 hover:border-blue-500/40"
            >
              {/* Placeholder visual — replace with real project photo later */}
              <div
                className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${project.gradient} bg-slate-900`}
              >
                <project.icon
                  className="h-14 w-14 text-white/80 transition-transform group-hover:scale-110"
                  strokeWidth={1.5}
                />
                <span className="absolute top-4 right-4 rounded-full border border-white/20 bg-slate-950/60 px-3 py-1 text-xs text-slate-200 backdrop-blur">
                  {project.tag}
                </span>
              </div>

              <div className="p-6 text-right">
                <h3 className="mb-2 text-lg font-bold">{project.title}</h3>
                <p className="mb-4 text-sm leading-7 text-slate-400">
                  {project.desc}
                </p>

                <div className="flex items-center gap-1.5 text-sm text-blue-400 opacity-80 transition-opacity group-hover:opacity-100">
                  مشاهده جزئیات
                  <ArrowUpLeft className="h-4 w-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
