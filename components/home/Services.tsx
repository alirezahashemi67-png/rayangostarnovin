import { Monitor, Laptop, Camera, Network } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "فروش کامپیوتر",
    desc: "عرضه انواع کامپیوترهای اداری، گیمینگ و خانگی."
  },
  {
    icon: Laptop,
    title: "تعمیر لپ‌تاپ",
    desc: "تعمیر تخصصی لپ‌تاپ، مادربرد و بازیابی اطلاعات."
  },
  {
    icon: Camera,
    title: "دوربین مداربسته",
    desc: "طراحی، نصب و راه‌اندازی سیستم‌های نظارتی."
  },
  {
    icon: Network,
    title: "شبکه",
    desc: "اجرای شبکه، کابل‌کشی و پیکربندی تجهیزات."
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-900 py-24 text-white"
    >
      <div className="container mx-auto px-6">

        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold">
            خدمات ما
          </h2>

          <p className="mt-4 text-slate-400">
            ارائه خدمات تخصصی در حوزه فناوری اطلاعات و سیستم‌های امنیتی
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-white/10 bg-slate-800 p-6 transition hover:-translate-y-2 hover:border-blue-500"
            >
              <service.icon
                className="mb-4 text-blue-500"
                size={36}
              />

              <h3 className="mb-3 text-xl font-semibold">
                {service.title}
              </h3>

              <p className="text-slate-400">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}