"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import residentialHVAC from "./residential-hvac.jpg";
import commercialHVAC from "./commercial-hvac.jpg";
import cleanRoom from "./clean-room.jpg";
import exhaustVentilation from "./exhaust-ventilation.jpg";
import hvacMaintenance from "./hvac-maintenance.jpg";
import hvacRetrofit from "./hvac-retrofit.jpg";

const services = [
  {
    title: "Residential HVAC Solutions",
    image: residentialHVAC,
    description:
      "DSERVE provides energy-efficient residential HVAC systems engineered for modern indoor comfort, long-term reliability, and intelligent climate control.",
  },

  {
    title: "Commercial HVAC Solutions",
    image: commercialHVAC,
    description:
      "Advanced commercial HVAC infrastructure designed for offices, retail environments, enterprise facilities, and large-scale commercial applications.",
  },

  {
    title: "Clean Room Applications",
    image: cleanRoom,
    description:
      "Precision HVAC systems for clean room environments with controlled airflow, humidity regulation, and contamination management.",
  },

  {
    title: "Exhaust and Ventilation Systems",
    image: exhaustVentilation,
    description:
      "Efficient ventilation and exhaust systems that improve indoor air quality, airflow management, and operational safety.",
  },

  {
    title: "HVAC Maintenance Contracts",
    image: hvacMaintenance,
    description:
      "Preventive maintenance, diagnostics, servicing, and operational support solutions for uninterrupted HVAC performance.",
  },

  {
    title: "HVAC Retro Fit Solutions",
    image: hvacRetrofit,
    description:
      "Modernization and retrofit solutions that enhance HVAC efficiency, integrate new technologies, and optimize system performance.",
  },
];

export default function ServicesPage() {
  return (
    <main
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#0a0a0a]
        text-white
      "
    >

      <Navbar />

      {/* Background */}
      <div className="absolute inset-0">

        {/* Soft Grid */}
        <div
          className="
            absolute inset-0
            opacity-[0.03]
          "
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "90px 90px",
          }}
        />

        {/* Ambient Glow */}
        <div className="
          absolute
          top-[-180px]
          left-[-120px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-red-900/15
          blur-[140px]
        " />

        <div className="
          absolute
          bottom-[-200px]
          right-[-140px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-red-700/10
          blur-[160px]
        " />

      </div>

      {/* Hero */}
      <section
        className="
          relative z-10
          pt-40
          pb-24
          px-6 lg:px-10
        "
      >

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-red-400
                mb-6
                font-medium
              "
            >
              DSERVE Services
            </p>

            <h1
              className="
                max-w-5xl
                text-5xl
                lg:text-7xl
                font-semibold
                tracking-tight
                leading-[0.95]
              "
            >
              Advanced HVAC &
              Enterprise Cooling Solutions
            </h1>

            <p
              className="
                mt-8
                max-w-3xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              DSERVE delivers integrated HVAC infrastructure,
              enterprise cooling systems, ventilation solutions,
              retrofit engineering, and climate-control technologies
              through trusted Samsung and Voltas partnerships.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Services Grid */}
      <section
        className="
          relative z-10
          px-6 lg:px-10
          pb-32
        "
      >

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
          "
        >

          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}
              className="
                group
              "
            >

              <div
                className="
                  overflow-hidden
                  rounded-3xl
                  border border-white/10
                  bg-white/[0.03]
                  backdrop-blur-xl
                  transition-all duration-500
                  hover:border-red-800/40
                  hover:-translate-y-1
                "
              >

                {/* Image */}
                <div
                  className="
                    relative
                    h-[240px]
                    overflow-hidden
                  "
                >

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="
                      object-cover
                      transition-transform duration-700
                      group-hover:scale-[1.03]
                    "
                  />

                  <div
                    className="
                      absolute inset-0
                      bg-gradient-to-t
                      from-black/80
                      via-black/10
                      to-transparent
                    "
                  />

                </div>

                {/* Content */}
                <div className="p-8">

                  <div
                    className="
                      w-12
                      h-[2px]
                      bg-red-700
                      mb-6
                    "
                  />

                  <h3
                    className="
                      text-2xl
                      font-medium
                      leading-tight
                      mb-4
                    "
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      text-[15px]
                      leading-relaxed
                      text-zinc-400
                    "
                  >
                    {service.description}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </section>

      <Footer />

    </main>
  );
}