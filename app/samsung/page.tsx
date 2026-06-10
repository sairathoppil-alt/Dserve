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
    title: "WindFree™ Cooling Systems",
    text: "Advanced cooling technology delivering gentle airflow and premium indoor comfort.",
    image: "/images/windfree-cooling.png",
  },
  {
    title: "Commercial Cassette Air Conditioners",
    text: "Samsung cassette AC systems are designed for commercial interiors where aesthetics and performance are equally important.",
    image: "/images/samsung-cassette.png",
  },
  {
    title: "Ducted HVAC Systems",
    text: "Concealed climate control systems engineered for consistent cooling performance and architectural flexibility.",
    image: "/images/samsung-ducted.png",
  },
  {
    title: "VRF Systems",
    text: "Samsung DVM S and DVM S2 VRF systems are designed for large-scale commercial applications requiring scalable and flexible cooling infrastructure.",
    image: "/images/samsung-vrf.png",
  },
  {
    title: "Smart Inverter Air Conditioning",
    text: "Intelligent inverter systems that optimize energy consumption while maintaining stable indoor temperatures.",
    image: "/images/samsung-inverter.png",
  },
];

export default function SamsungPage() {
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
           {/* Samsung Logo Hero Heading */}
{/* Samsung Logo */}
<div className="mb-6">

  <Image
    src="/logos/samsung5.png"
    alt="Samsung"
    width={500}
    height={140}
    priority
    className="
      w-[220px]
      sm:w-[280px]
      lg:w-[340px]
      h-auto
      object-contain
    "
  />

</div>

            {/* Description */}
            <p className="max-w-4xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Samsung India delivers advanced air conditioning and HVAC
              technologies designed for modern residential, commercial,
              and enterprise environments. With a strong focus on
              intelligent climate control, energy-efficient operation,
              and premium comfort, Samsung combines innovative engineering
              with smart connectivity to create cooling solutions suited
              for contemporary infrastructure.
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

            <div
              className="
                overflow-hidden
                rounded-2xl sm:rounded-3xl
                border border-white/10
                bg-gradient-to-br from-black to-zinc-950
                flex items-center justify-center
              "
            >

<Image
  src="/images/samsung-main2.png"
  alt="Samsung HVAC"
  width={1200}
  height={800}
  className="
    w-full
    h-52 sm:h-72 lg:h-[500px]
    object-cover
    rounded-3xl
    border border-white/10
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
              Intelligent Cooling Infrastructure
            </h2>

            <p className="text-zinc-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
              Samsung&apos;s HVAC ecosystem includes split air conditioners,
              cassette systems, VRF solutions, ducted cooling systems,
              and commercial climate management technologies suitable for
              offices, hotels, retail spaces, healthcare facilities,
              and large commercial buildings.
            </p>

            <p className="text-zinc-400 leading-relaxed text-sm sm:text-base">
              Selected Samsung systems feature AI-enabled cooling optimization
              and SmartThings connectivity, enabling intelligent monitoring
              and improved energy management. Samsung&apos;s WindFree™ technology
              is designed to provide gentler and quieter airflow distribution
              for enhanced indoor comfort.
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
              Intelligent Cooling Solutions
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
              Why Choose Samsung
            </p>

            <h2 className="text-2xl sm:text-4xl font-semibold mb-10 sm:mb-14">
              Samsung Advantage
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