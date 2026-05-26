"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const advantages = [
  "Trusted Indian engineering expertise",
  "Commercial cooling infrastructure solutions",
  "Energy-conscious HVAC technologies",
  "High ambient cooling performance",
  "Scalable commercial systems",
  "Reliable industrial-grade operation",
  "Wide commercial product portfolio",
  "Service and maintenance support",
];

const solutions = [
  {
    title: "VRF Air Conditioning Systems",
    text: "Flexible multi-zone cooling solutions for modern commercial buildings.",
  },
  {
    title: "Commercial Chiller Systems",
    text: "Centralized cooling systems engineered for reliable large-scale performance.",
  },
  {
    title: "Ducted & Package AC Systems",
    text: "Efficient concealed cooling solutions for commercial interiors.",
  },
  {
    title: "Cassette & Tower Air Conditioners",
    text: "High airflow commercial AC systems with flexible installation options.",
  },
];

export default function VoltasPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        <div className="absolute top-[-200px] left-[-100px] w-[420px] h-[420px] rounded-full bg-red-700/10 blur-[140px]" />

      </div>

      {/* HERO */}
      <section className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* Heading */}
            <div className="flex items-center justify-between gap-6 mb-5 sm:mb-8">

              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                Voltas
              </h1>

              <Image
                src="/logos/voltas2.png"
                alt="Voltas"
                width={220}
                height={80}
                priority
                className="
                  object-contain
                  h-8 sm:h-10 lg:h-14
                  w-auto
                  shrink-0
                "
              />

            </div>

            {/* Description */}
            <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Voltas is one of India&apos;s established air conditioning and
              engineering brands, offering a broad portfolio of commercial
              HVAC systems designed for large-scale infrastructure,
              industrial facilities, and enterprise cooling environments.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Overview */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20 lg:pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10">

              <Image
                src="/images/voltas-main.jpeg"
                alt="Voltas HVAC"
                width={1200}
                height={800}
                className="w-full h-52 sm:h-72 lg:h-[500px] object-cover"
              />

            </div>

          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Enterprise Cooling Infrastructure
            </p>

            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight mb-5 sm:mb-8">
              Reliable Commercial Cooling Systems
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Voltas provides cooling solutions including VRF systems,
              chillers, ducted systems, cassette ACs, package units,
              and centralized commercial air conditioning technologies
              engineered for reliability and operational efficiency.
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Voltas solutions are commonly deployed across commercial
              buildings, industrial facilities, healthcare institutions,
              hospitality projects, IT parks, educational campuses,
              and retail infrastructure.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Solutions */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-28">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Voltas HVAC Solutions
            </p>

            <h2 className="text-2xl sm:text-4xl font-semibold mb-10 sm:mb-14">
              Commercial Cooling Solutions
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">

            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className="
                  group
                  overflow-hidden
                  rounded-2xl sm:rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  hover:bg-white/[0.05]
                  transition-all duration-500
                "
              >

                {/* Image */}
                <div className="relative overflow-hidden">

                  <Image
                    src={`/images/solution-${index + 1}.jpg`}
                    alt={item.title}
                    width={1200}
                    height={800}
                    className="
                      w-full
                      h-56 sm:h-72
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                </div>

                {/* Content */}
                <div className="p-6 sm:p-8">

                  <h3 className="text-xl sm:text-2xl font-semibold mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Advantages */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28 lg:pb-32">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Why Choose Voltas
            </p>

            <h2 className="text-2xl sm:text-4xl font-semibold mb-10 sm:mb-14">
              Voltas HVAC Advantages
            </h2>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">

            {advantages.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                viewport={{ once: true }}
                className="
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-sm
                  p-5 sm:p-6
                  hover:bg-white/[0.05]
                  transition-all duration-300
                "
              >

                <div className="flex items-start gap-4">

                  <div className="mt-2 w-2.5 h-2.5 rounded-full bg-red-500 shrink-0" />

                  <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                    {item}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      <Footer />

    </main>
  );
}