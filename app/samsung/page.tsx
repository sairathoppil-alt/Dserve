"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const advantages = [
  "Energy-efficient inverter technology",
  "WindFree™ cooling technology",
  "Smart connectivity and monitoring features",
  "Modern indoor unit designs",
  "Quiet and comfortable operation",
  "Commercial VRF and ducted system solutions",
  "Flexible installation options",
  "Designed for Indian climate conditions",
];

const solutions = [
  {
    title: "VRF Systems",
    text: "Samsung DVM S and DVM S2 VRF systems are designed for large-scale commercial applications requiring scalable and flexible cooling infrastructure.",
  },
  {
    title: "Commercial Cassette Air Conditioners",
    text: "Samsung cassette AC systems are designed for commercial interiors where aesthetics and performance are equally important.",
  },
  {
    title: "Ducted HVAC Systems",
    text: "Concealed climate control systems engineered for consistent cooling performance and architectural flexibility.",
  },
  {
    title: "Smart Inverter Air Conditioning",
    text: "Intelligent inverter systems that optimize energy consumption while maintaining stable indoor temperatures.",
  },
];

const services = [
  "HVAC design and consultation",
  "Cooling load calculations",
  "Airflow optimization",
  "HVAC installation and commissioning",
  "Preventive maintenance and AMC support",
  "HVAC retrofitting and upgrades",
  "Smart HVAC automation integration",
];

export default function SamsungPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />
        <div className="absolute top-[-200px] left-[-100px] w-[420px] h-[420px] rounded-full bg-red-700/10 blur-[140px]" />
      </div>

      {/* HERO */}
      <section className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>

            <div className="mb-6 sm:mb-8 lg:mb-10">
              <Image
                src="/logos/samsung2.png"
                alt="Samsung"
                width={220}
                height={80}
                className="w-auto h-8 sm:h-10 lg:h-auto object-contain"
              />
            </div>

            <h1 className="max-w-5xl text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
              Samsung
            </h1>

            <p className="mt-5 sm:mt-8 max-w-4xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Samsung India delivers advanced air conditioning and HVAC technologies designed
              for modern residential, commercial, and enterprise environments. With a strong
              focus on intelligent climate control, energy-efficient operation, and premium
              comfort, Samsung combines innovative engineering with smart connectivity to
              create cooling solutions suited for contemporary infrastructure.
            </p>

          </motion.div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10">
              <Image
                src="/images/about-hvac.jpg"
                alt="Samsung HVAC"
                width={1200}
                height={800}
                className="w-full h-52 sm:h-72 lg:h-[500px] object-cover"
              />
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} viewport={{ once: true }}>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Enterprise Climate Technology
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold leading-tight mb-5 sm:mb-8">
              Intelligent Cooling Infrastructure
            </h2>
            <p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Samsung&#39;s HVAC ecosystem includes split air conditioners, cassette systems,
              VRF solutions, ducted cooling systems, and commercial climate management
              technologies suitable for offices, hotels, retail spaces, healthcare facilities,
              and large commercial buildings.
            </p>
            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Selected Samsung systems feature AI-enabled cooling optimization and SmartThings
              connectivity, enabling intelligent monitoring and improved energy management.
              Samsung&#39;s WindFree™ technology is designed to provide gentler and quieter
              airflow distribution for enhanced indoor comfort.
            </p>
          </motion.div>

        </div>
      </section>

      {/* Advantages */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} viewport={{ once: true }}>
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Why Choose Samsung
            </p>
            <h2 className="text-2xl sm:text-4xl font-semibold mb-8 sm:mb-14">
              Samsung HVAC Advantages
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
            {advantages.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
                  rounded-xl sm:rounded-2xl
                  border border-white/10
                  bg-white/[0.03]
                  p-5 sm:p-6
                  hover:border-red-700/30
                  transition-all duration-300
                "
              >
                <div className="w-8 sm:w-10 h-[2px] bg-red-600 mb-4 sm:mb-5" />
                <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">{item}</p>
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
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Samsung HVAC Solutions
            </p>
            <div className="space-y-6 sm:space-y-8">
              {solutions.map((item) => (
                <div key={item.title}>
                  <h3 className="text-lg sm:text-2xl font-medium mb-2 sm:mb-3">{item.title}</h3>
                  <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">{item.text}</p>
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
            className="rounded-2xl sm:rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 lg:p-10"
          >
            <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
              Our Samsung HVAC Services
            </p>
            <div className="space-y-4 sm:space-y-5">
              {services.map((service) => (
                <div key={service} className="flex items-center gap-3 sm:gap-4 border-b border-white/5 pb-4 sm:pb-5">
                  <div className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  <p className="text-zinc-300 text-sm sm:text-base">{service}</p>
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
