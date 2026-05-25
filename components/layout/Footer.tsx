"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">

        <div className="grid lg:grid-cols-3 gap-16">

          {/* LEFT */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-red-500 mb-5">
              DSERVE
            </p>

            <h3 className="text-3xl font-bold text-white leading-tight">
              Commercial HVAC &
              Enterprise Cooling Solutions
            </h3>

            <p className="mt-6 text-zinc-400 leading-relaxed">
              Delivering professional Samsung and Voltas HVAC,
              enterprise infrastructure, industrial cooling,
              and engineering solutions across commercial and
              industrial environments.
            </p>

          </div>

          {/* CENTER */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-red-500 mb-5">
              Quick Links
            </p>

            <div className="flex flex-col gap-4">

              <Link
                href="/"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Home
              </Link>

              <Link
                href="/samsung"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Samsung Solutions
              </Link>

              <Link
                href="/voltas"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Voltas Solutions
              </Link>

              <Link
                href="/contact"
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Contact Us
              </Link>

            </div>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-sm uppercase tracking-[0.25em] text-red-500 mb-5">
              Company Information
            </p>

            <div className="
              bg-[#111111]
              border border-white/5
              rounded-2xl
              p-4
              flex items-center justify-center
            ">

              <Image
                src="/images/email-signature.jpg"
                alt="DSERVE Contact Information"
                width={1200}
                height={400}
                className="
                  w-full
                  max-w-[520px]
                  h-auto
                  object-contain
                  rounded-xl
                "
              />

            </div>

            {/* Contact Links */}
            <div className="mt-8 space-y-3">

              <a
                href="tel:+914844870093"
                className="
                  block
                  text-zinc-400
                  hover:text-white
                  transition-colors
                "
              >
                +91 484 4870093
              </a>

              <a
                href="mailto:dserveecosolutions@gmail.com"
                className="
                  block
                  text-zinc-400
                  hover:text-white
                  transition-colors
                "
              >
                dserveecosolutions@gmail.com
              </a>

              <a
                href="https://maps.google.com"
                target="_blank"
                className="
                  block
                  text-zinc-400
                  hover:text-white
                  transition-colors
                "
              >
                Vyttila, Ernakulam, Kerala
              </a>

            </div>

          </div>

        </div>

        {/* Bottom */}
        <div className="
          mt-16
          pt-8
          border-t border-white/10
          flex flex-col lg:flex-row
          items-center
          justify-between
          gap-4
        ">

          <p className="text-zinc-500 text-sm">
            © 2026 DSERVE Eco Solutions. All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-sm">

            <Link
              href="/"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              href="/contact"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              Contact
            </Link>

            <Link
              href="/about"
              className="text-zinc-600 hover:text-white transition-colors"
            >
              About
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}