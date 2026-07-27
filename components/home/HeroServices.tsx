"use client";

import { motion } from "framer-motion";
import { Monitor, Camera, Network } from "lucide-react";

const items = [
  { icon: Network, title: "شبکه" },
  { icon: Camera, title: "دوربین مداربسته" },
  { icon: Monitor, title: "فروش کامپیوتر" },
];

export default function HeroServices() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
      {items.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
        >
          <item.icon className="h-6 w-6 shrink-0 text-blue-500" />
          <p className="text-sm font-bold text-slate-200">{item.title}</p>
        </motion.div>
      ))}
    </div>
  );
}
