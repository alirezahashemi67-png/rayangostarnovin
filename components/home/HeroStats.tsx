import { motion } from "framer-motion";

const stats = [
  {
    number: "+10",
    title: "سال تجربه",
  },
  {
    number: "+1500",
    title: "مشتری راضی",
  },
  {
    number: "+300",
    title: "پروژه موفق",
  },
];

export default function HeroStats() {
  return (
    <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-md"
        >
          <h3 className="text-3xl font-black text-blue-500">
            {item.number}
          </h3>

          <p className="mt-2 text-sm text-slate-300">
            {item.title}
          </p>
        </motion.div>
      ))}
    </div>
  );
}