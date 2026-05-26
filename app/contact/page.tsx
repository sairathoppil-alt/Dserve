"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Reveal from "@/components/ui/Reveal";

const inputClass = `
  bg-white/[0.04] border border-white/10
  h-12 sm:h-14 px-4 sm:px-5
  text-white text-sm sm:text-base
  placeholder:text-zinc-500
  outline-none rounded-xl
  focus:border-red-700/60 focus:bg-white/[0.06]
  transition-all duration-200
  w-full
`;

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      const response = await fetch("/api/contact", {

        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      if (response.ok) {

        setSuccess(true);

        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });

        setTimeout(() => {
          setSuccess(false);
        }, 4000);
      }

    } catch (error) {

      console.error(error);

    } finally {

      setLoading(false);
    }
  };

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

        <div className="absolute top-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-red-700/10 blur-[140px]" />

        <div className="absolute bottom-[-200px] right-[-100px] w-[400px] h-[400px] rounded-full bg-red-900/10 blur-[120px]" />

      </div>

      {/* HERO */}
      <section className="relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-14 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-10">

        <div className="max-w-7xl mx-auto">

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <div className="relative w-full h-48 sm:h-64 lg:h-80 overflow-hidden rounded-2xl sm:rounded-3xl border border-white/10 mb-10 sm:mb-14">

              <Image
                src="/images/contact-banner2.png"
                alt="Contact DSERVE"
                fill
                priority
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/55" />

              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-3 sm:mb-4 font-medium">
                  Contact DSERVE
                </p>

                <h1 className="text-3xl sm:text-5xl lg:text-7xl font-semibold tracking-tight leading-[0.95]">
                  Get In Touch
                </h1>

              </div>
            </div>

            <p className="max-w-3xl text-base sm:text-lg leading-relaxed text-zinc-400">
              Reach out to DSERVE for commercial HVAC systems,
              enterprise air conditioning solutions,
              industrial cooling, and infrastructure support.
            </p>

          </motion.div>
        </div>
      </section>

      {/* MAIN */}
      <section className="relative z-10 px-4 sm:px-6 lg:px-10 pb-16 sm:pb-24 lg:pb-32">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">

          {/* LEFT */}
          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="
                rounded-2xl sm:rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6 sm:p-8 lg:p-10
                h-full
              "
            >

              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
                Contact Information
              </p>

              <h2 className="text-2xl sm:text-3xl font-semibold leading-tight mb-8 sm:mb-10">
                Let&#39;s Build Better
                <br />
                Cooling Solutions
              </h2>

              <div className="space-y-0">

                {[
                  {
                    label: "Office Address",

                    value:
                      "Building No-53, 865/E-4, Second Floor, 7th Lane, Junior Janatha Road, Vytilla, Ernakulam - 682019, Kerala, India.",

                    href: "https://maps.google.com",

                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M17.657 16.657 13.414 20.9a2 2 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />

                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    ),
                  },

                  {
                    label: "Phone",

                    value: "+91 484-4870093",

                    href: "tel:+914844870093",

                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    ),
                  },

                  {
                    label: "Email",

                    value: "dserveecosolutions@gmail.com",

                    href: "mailto:dserveecosolutions@gmail.com",

                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (

                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="
                      flex items-start gap-4
                      py-5 sm:py-6
                      border-b border-white/5
                      last:border-b-0
                      group
                      transition-colors duration-200
                    "
                  >

                    <div
                      className="
                        w-9 h-9 rounded-lg
                        bg-red-900/25 border border-red-800/30
                        flex items-center justify-center
                        shrink-0 mt-0.5
                        group-hover:bg-red-900/40 transition-colors
                      "
                    >
                      {item.icon}
                    </div>

                    <div>

                      <p className="text-[11px] uppercase tracking-[0.2em] text-zinc-500 mb-1 font-medium">
                        {item.label}
                      </p>

                      <p className="text-zinc-300 group-hover:text-white transition-colors text-sm sm:text-base leading-relaxed break-all">
                        {item.value}
                      </p>

                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </Reveal>

          {/* RIGHT */}
          <Reveal>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="
                rounded-2xl sm:rounded-3xl
                border border-white/10
                bg-white/[0.03]
                backdrop-blur-xl
                p-6 sm:p-8 lg:p-10
              "
            >

              <p className="text-[11px] sm:text-[12px] uppercase tracking-[0.3em] text-red-400 mb-4 sm:mb-6">
                Send a Message
              </p>

              <form onSubmit={handleSubmit}>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">

                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                  />

                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={inputClass}
                  />

                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  rows={7}
                  required
                  className={`
                    mt-3 sm:mt-4
                    bg-white/[0.04] border border-white/10
                    p-4 sm:p-5
                    text-white text-sm sm:text-base
                    placeholder:text-zinc-500
                    outline-none rounded-xl
                    resize-none
                    focus:border-red-700/60 focus:bg-white/[0.06]
                    transition-all duration-200
                    w-full
                  `}
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    mt-5 sm:mt-6
                    inline-flex items-center justify-center gap-2
                    w-full sm:w-auto
                    px-6 sm:px-8 py-3 sm:py-4
                    min-h-[48px]
                    bg-red-800 hover:bg-red-700
                    transition-colors duration-200
                    rounded-xl
                    font-semibold text-sm sm:text-base text-white
                    disabled:opacity-50
                  "
                >

                  {loading ? "Sending..." : "Send Message"}

                  {!loading && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                      />
                    </svg>
                  )}

                </button>

                {success && (
                  <p className="mt-4 text-green-400 text-sm sm:text-base">
                    Message sent successfully.
                  </p>
                )}

              </form>

            </motion.div>
          </Reveal>

        </div>
      </section>

      <Footer />

    </main>
  );
}