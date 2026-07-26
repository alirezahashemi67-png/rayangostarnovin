"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Wrench, Headphones } from "lucide-react";

import HeroImage from "./HeroImage";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">

      {/* Background */}
      <div className="absolute inset-0">

        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

        <div className="absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

      </div>

      <div className="container relative mx-auto min-h-screen px-6">

        <div className="grid min-h-screen items-center gap-16 lg:grid-cols-2">

          {/* Text */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="order-1 space-y-8 text-right"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-5 py-2 text-sm backdrop-blur">

              <ShieldCheck
                size={18}
                className="text-blue-400"
              />

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

              فروش تجهیزات کامپیوتری،
              تعمیرات تخصصی لپ‌تاپ،
              اجرای شبکه،
              نصب دوربین مداربسته
              و پشتیبانی حرفه‌ای
              برای منازل و شرکت‌ها.

            </p>

            <div className="flex flex-wrap gap-4">

              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                درخواست خدمات
              </Button>