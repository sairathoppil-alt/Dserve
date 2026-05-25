"use client";

import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import Reveal from "@/components/ui/Reveal";

export default function ContactPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="relative h-[420px] overflow-hidden">

        {/* Background */}
        <div className="absolute inset-0">

          <Image
            src="/images/contact-banner.png"
            alt="Contact DSERVE"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/65" />

        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center px-6">

          <div className="text-center">

            <p className="text-sm uppercase tracking-[0.3em] text-red-400 mb-5">
              Contact DSERVE
            </p>

            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight">
              Get In Touch
            </h1>

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section className="bg-[#0f0f0f] py-24">

        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT */}
            <Reveal>

              <div>

                <p className="text-sm uppercase tracking-[0.25em] text-red-500 mb-5">
                  Contact Us
                </p>

                <h2 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Let’s Build Better Cooling Solutions
                </h2>

                <p className="mt-8 text-zinc-400 text-lg leading-relaxed max-w-xl">
                  Reach out to DSERVE for commercial HVAC systems,
                  enterprise air conditioning solutions, industrial cooling,
                  Samsung and Voltas consultation, and infrastructure support.
                </p>

                {/* CONTACT INFO */}
                <div className="mt-14 space-y-10">

                  {/* Address */}
                  <div className="flex gap-5 items-start">

                    <div className="
                      w-14 h-14
                      rounded-full
                      bg-red-900/30
                      border border-red-800/40
                      flex items-center justify-center
                      shrink-0
                    ">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-400"
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

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold mb-2">
                        Office Address
                      </h3>

                      <p className="text-zinc-400 leading-relaxed">
                      Building No-53, 865/E-4, Second Floor, 7th Lane, Junior Janatha Road, Vytilla. Ernakulam - 682019, Kerala, India.
                      </p>

                    </div>

                  </div>

                  {/* Phone */}
                  <div className="flex gap-5 items-start">

                    <div className="
                      w-14 h-14
                      rounded-full
                      bg-red-900/30
                      border border-red-800/40
                      flex items-center justify-center
                      shrink-0
                    ">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-400"
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

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold mb-2">
                        Phone Number
                      </h3>

                      <p className="text-zinc-400">
                      +91 484-4870093
                      </p>

                    </div>

                  </div>

                  {/* Email */}
                  <div className="flex gap-5 items-start">

                    <div className="
                      w-14 h-14
                      rounded-full
                      bg-red-900/30
                      border border-red-800/40
                      flex items-center justify-center
                      shrink-0
                    ">

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 text-red-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12H8m8 0H8m8 0H8m13-6H3a2 2 0 00-2 2v10a2 2 0 002 2h18a2 2 0 002-2V8a2 2 0 00-2-2z"
                        />
                      </svg>

                    </div>

                    <div>

                      <h3 className="text-lg font-semibold mb-2">
                        Email Address
                      </h3>

                      <p className="text-zinc-400">
                      dserveecosolutions@gmail.com
                      </p>

                    </div>

                  </div>

                </div>

              </div>

            </Reveal>

            {/* RIGHT FORM */}
            <Reveal>

              <div className="
                bg-[#161616]
                border border-white/5
                p-8 lg:p-10
                rounded-2xl
              ">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                      bg-black/40
                      border border-white/10
                      h-14
                      px-5
                      text-white
                      outline-none
                      rounded-lg
                      focus:border-red-700
                    "
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className="
                      bg-black/40
                      border border-white/10
                      h-14
                      px-5
                      text-white
                      outline-none
                      rounded-lg
                      focus:border-red-700
                    "
                  />

                  <input
                    type="text"
                    placeholder="Phone Number"
                    className="
                      bg-black/40
                      border border-white/10
                      h-14
                      px-5
                      text-white
                      outline-none
                      rounded-lg
                      focus:border-red-700
                    "
                  />

                  <input
                    type="text"
                    placeholder="Subject"
                    className="
                      bg-black/40
                      border border-white/10
                      h-14
                      px-5
                      text-white
                      outline-none
                      rounded-lg
                      focus:border-red-700
                    "
                  />

                </div>

                <textarea
                  placeholder="Message"
                  rows={8}
                  className="
                    mt-5
                    w-full
                    bg-black/40
                    border border-white/10
                    p-5
                    text-white
                    outline-none
                    rounded-lg
                    resize-none
                    focus:border-red-700
                  "
                />

<a
  href="mailto:dserveecosolutions@gmail.com?subject=DSERVE HVAC Inquiry"
  className="
    mt-6
    inline-flex
    px-8
    py-4
    bg-red-800
    hover:bg-red-700
    transition-colors
    rounded-lg
    font-semibold
    text-white
  "
>
  Send Email
</a>

              </div>

            </Reveal>

          </div>

        </div>

      </section>

    </main>
  );
}