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
    text: "Voltas VRF systems provide multi-zone climate control for commercial buildings requiring flexible and efficient cooling infrastructure.",
  },
  {
    title: "Commercial Chiller Systems",
    text: "Voltas chiller systems are designed for centralized cooling applications where consistent thermal performance and operational reliability are important.",
  },
  {
    title: "Ducted & Package AC Systems",
    text: "Voltas ducted and package systems provide efficient cooling for large commercial interiors while supporting clean architectural aesthetics.",
  },
  {
    title: "Cassette & Tower Air Conditioners",
    text: "Commercial cassette and tower AC systems are suitable for business environments requiring efficient airflow and flexible installation.",
  },
];

const services = [
  "Commercial HVAC planning and consultation",
  "Thermal load analysis",
  "Ventilation and duct design",
  "HVAC installation and execution",
  "Preventive maintenance and AMC",
  "Industrial cooling solutions",
  "HVAC modernization and efficiency upgrades",
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

            {/* Voltas Heading + Logo */}
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

      {/* Advantages */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-28">
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

            <h2 className="text-2xl sm:text-4xl font-semibold mb-8 sm:mb-14">
              Voltas HVAC Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6 auto-rows-fr">

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
                  rounded-xl sm:rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5 sm:p-6
                  transition-all duration-300
                  h-full
                  flex flex-col
                "
              >
                <div className="w-8 sm:w-10 h-[2px] bg-red-600 mb-4 sm:mb-5" />

                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base flex-1">
                  {item}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* Solutions & Services */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-2xl sm:rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-6 sm:p-8 lg:p-10
              h-full
            "
          >
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Voltas HVAC Solutions
            </p>

            <div className="space-y-6 sm:space-y-8">

              {solutions.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg sm:text-2xl font-medium mb-2 sm:mb-3">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
                    {item.text}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-2xl sm:rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-6 sm:p-8 lg:p-10
              h-full
            "
          >
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Our Voltas HVAC Services
            </p>

            <div className="space-y-4 sm:space-y-5">

              {services.map((service) => (
                <div
                  key={service}
                  className="
                    flex items-center gap-3 sm:gap-4
                    border-b border-white/5
                    pb-4 sm:pb-5
                  "
                >
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />

                  <p className="text-zinc-300 text-sm sm:text-base">
                    {service}
                  </p>
                </div>
              ))}

            </div>
          </motion.div>

        </div>
      </section>

      <Footer />

    </main>
  );
}