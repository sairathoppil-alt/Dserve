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
    title: "Slim One Way Cassette Systems",
    text: "Minimal ceiling-mounted cooling systems designed for premium modern interiors.",
    image: "/images/slim-oneway-cassette.png",
  },
  {
    title: "Cassette & Tower Air Conditioners",
    text: "High airflow commercial AC systems with flexible installation options.",
    image: "/images/cassette-tower-ac1.png",
  },
  {
    title: "Ducted & Package AC Systems",
    text: "Efficient concealed cooling solutions for commercial interiors.",
    image: "/images/ducted-package-ac1.png",
  },
  {
    title: "VRF Air Conditioning Systems",
    text: "Flexible multi-zone cooling solutions for modern commercial buildings.",
    image: "/images/vrf-systems1.png",
  },
  {
    title: "Commercial Chiller Systems",
    text: "Centralized cooling systems engineered for reliable large-scale performance.",
    image: "/images/commercial-chillers1.png",
  },
];

export default function VoltasPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Glow */}
        <div className="absolute top-[-200px] left-[-100px] w-[420px] h-[420px] rounded-full bg-red-700/10 blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-150px] w-[500px] h-[500px] rounded-full bg-red-600/10 blur-[160px]" />

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

      {/* OVERVIEW */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-14 sm:pb-20 lg:pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 bg-black">

            <Image
  src="/images/voltas-main2.png"
  alt="Voltas HVAC"
  width={1200}
  height={800}
  className="
    w-full
    h-52 sm:h-72 lg:h-[500px]
    object-contain
    bg-black
    p-3 sm:p-4 lg:p-6
  "
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

      {/* SOLUTIONS */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-20 sm:pb-28 lg:pb-32">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            

            <h2 className="text-2xl sm:text-4xl font-semibold mb-10 sm:mb-14">
              Commercial Cooling Solutions
            </h2>

          </motion.div>

          {/* Dynamic Sliding Panels */}
          <div className="flex flex-col gap-6">

            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -40 : 40,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  hover:bg-white/[0.05]
                  transition-all duration-500
                  flex flex-col lg:flex-row
                  min-h-[280px] lg:min-h-[320px]
                  ${
                    index % 2 !== 0
                      ? "lg:flex-row-reverse"
                      : ""
                  }
                `}
              >

                {/* Image */}
                <div className="relative lg:w-[48%] overflow-hidden bg-black flex items-center justify-center">

                  <Image
                    src={item.image}
                    alt={item.title}
                    width={1200}
                    height={900}
                    className="
                      w-full
                      h-[260px]
                      lg:h-full
                      object-contain
                      p-4 sm:p-6
                      transition-transform duration-700
                      group-hover:scale-105
                    "
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent" />

                </div>

                {/* Content */}
                <div className="relative flex-1 flex items-center">

                  <div className="p-8 sm:p-10 lg:p-14">

                    <div className="flex items-center gap-4 mb-5">

                      <div className="w-10 h-[2px] bg-red-500" />

                      <span className="text-xs uppercase tracking-[0.25em] text-red-400">
                        Solution {index + 1}
                      </span>

                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight mb-5">
                      {item.title}
                    </h3>

                    <p className="text-zinc-400 leading-relaxed text-sm sm:text-base max-w-xl">
                      {item.text}
                    </p>

                  </div>

                </div>

                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">

                  <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-red-500/5 via-transparent to-transparent" />

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* ADVANTAGES */}
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
              Voltas Advantages
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