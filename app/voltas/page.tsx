"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function VoltasPage() {
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

        {/* Grid */}
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
          top-[-200px]
          left-[-100px]
          w-[420px]
          h-[420px]
          rounded-full
          bg-red-700/10
          blur-[140px]
        " />

      </div>

      {/* HERO */}
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

            {/* Voltas Logo */}
            <div className="mb-10">

              <Image
                src="/logos/voltas2.png"
                alt="Voltas"
                width={220}
                height={80}
                className="w-auto h-auto object-contain"
              />

            </div>

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
              Voltas
            </h1>

            <p
              className="
                mt-8
                max-w-4xl
                text-lg
                leading-relaxed
                text-zinc-400
              "
            >
              Voltas is one of India’s established air conditioning and
              engineering brands, offering a broad portfolio of commercial
              HVAC systems designed for large-scale infrastructure,
              industrial facilities, and enterprise cooling environments.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Overview Section */}
      <section
        className="
          relative z-10
          px-6 lg:px-10
          pb-24
        "
      >

        <div className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          items-start
        ">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div
              className="
                overflow-hidden
                rounded-3xl
                border border-white/10
              "
            >

              <Image
                src="/images/about-hvac.jpg"
                alt="Voltas HVAC"
                width={1200}
                height={800}
                className="
                  w-full
                  h-[500px]
                  object-cover
                "
              />

            </div>

          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-red-400
                mb-6
              "
            >
              Enterprise Cooling Infrastructure
            </p>

            <h2
              className="
                text-4xl
                font-semibold
                leading-tight
                mb-8
              "
            >
              Reliable Commercial
              Cooling Systems
            </h2>

            <p
              className="
                text-zinc-400
                leading-relaxed
                mb-6
              "
            >
              Voltas provides cooling solutions including VRF systems,
              chillers, ducted systems, cassette ACs, package units,
              and centralized commercial air conditioning technologies
              engineered for reliability and operational efficiency.
            </p>

            <p
              className="
                text-zinc-400
                leading-relaxed
              "
            >
              Voltas solutions are commonly deployed across commercial
              buildings, industrial facilities, healthcare institutions,
              hospitality projects, IT parks, educational campuses,
              and retail infrastructure.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Features */}
      <section
        className="
          relative z-10
          px-6 lg:px-10
          pb-28
        "
      >

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-red-400
                mb-6
              "
            >
              Why Choose Voltas
            </p>

            <h2
              className="
                text-4xl
                font-semibold
                mb-14
              "
            >
              Voltas HVAC Advantages
            </h2>

          </motion.div>

          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-4
              gap-6
            "
          >

            {[
              "Trusted Indian engineering expertise",
              "Commercial cooling infrastructure solutions",
              "Energy-conscious HVAC technologies",
              "High ambient cooling performance",
              "Scalable commercial systems",
              "Reliable industrial-grade operation",
              "Wide commercial product portfolio",
              "Service and maintenance support",
            ].map((item, index) => (
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
                  p-6
                "
              >

                <div
                  className="
                    w-10
                    h-[2px]
                    bg-red-600
                    mb-5
                  "
                />

                <p
                  className="
                    text-zinc-300
                    leading-relaxed
                  "
                >
                  {item}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>

      {/* Solutions & Services */}
      <section
        className="
          relative z-10
          px-6 lg:px-10
          pb-32
        "
      >

        <div className="
          max-w-7xl
          mx-auto
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-8
        ">

          {/* Solutions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-10
            "
          >

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-red-400
                mb-6
              "
            >
              Voltas HVAC Solutions
            </p>

            <div className="space-y-8">

              <div>
                <h3 className="text-2xl font-medium mb-3">
                  VRF Air Conditioning Systems
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Voltas VRF systems provide multi-zone climate control
                  for commercial buildings requiring flexible and
                  efficient cooling infrastructure.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3">
                  Commercial Chiller Systems
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Voltas chiller systems are designed for centralized
                  cooling applications where consistent thermal
                  performance and operational reliability are important.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3">
                  Ducted & Package AC Systems
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Voltas ducted and package systems provide efficient
                  cooling for large commercial interiors while supporting
                  clean architectural aesthetics.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-medium mb-3">
                  Cassette & Tower Air Conditioners
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  Commercial cassette and tower AC systems are suitable
                  for business environments requiring efficient airflow
                  and flexible installation.
                </p>
              </div>

            </div>

          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="
              rounded-3xl
              border border-white/10
              bg-white/[0.03]
              p-10
            "
          >

            <p
              className="
                text-[12px]
                uppercase
                tracking-[0.3em]
                text-red-400
                mb-6
              "
            >
              Our Voltas HVAC Services
            </p>

            <div className="space-y-5">

              {[
                "Commercial HVAC planning and consultation",
                "Thermal load analysis",
                "Ventilation and duct design",
                "HVAC installation and execution",
                "Preventive maintenance and AMC",
                "Industrial cooling solutions",
                "HVAC modernization and efficiency upgrades",
              ].map((service) => (
                <div
                  key={service}
                  className="
                    flex
                    items-center
                    gap-4
                    border-b border-white/5
                    pb-5
                  "
                >

                  <div
                    className="
                      w-2
                      h-2
                      rounded-full
                      bg-red-500
                    "
                  />

                  <p className="text-zinc-300">
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