"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16">

          {/* LEFT */}
          <div className="sm:col-span-2 lg:col-span-1">
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-500 mb-4 sm:mb-5">
              DSERVE
            </p>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-tight">
              Commercial HVAC &amp; Enterprise Cooling Solutions
            </h3>
            <p className="mt-4 sm:mt-6 text-zinc-400 leading-relaxed text-sm sm:text-base">
              Delivering professional Samsung and Voltas HVAC,
              enterprise infrastructure, industrial cooling,
              and engineering solutions across commercial and
              industrial environments.
            </p>
          </div>

          {/* CENTER */}
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-500 mb-4 sm:mb-5">
              Quick Links
            </p>
            <div className="flex flex-col gap-3 sm:gap-4">
              {[
                { href: "/", label: "Home" },
                { href: "/samsung", label: "Samsung Solutions" },
                { href: "/voltas",  label: "Voltas Solutions"  },
                { href: "/contact", label: "Contact Us"        },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-zinc-300 hover:text-white transition-colors text-sm sm:text-base min-h-[36px] flex items-center"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-red-500 mb-4 sm:mb-5">
              Company Information
            </p>

            <div className="
              bg-[#111111] border border-white/5
              rounded-xl sm:rounded-2xl
              p-3 sm:p-4
              flex items-center justify-center
            ">
              <Image
                src="/images/email-signature.jpg"
                alt="DSERVE Contact Information"
                width={1200}
                height={400}
                className="w-full max-w-[400px] h-auto object-contain rounded-lg sm:rounded-xl"
              />
            </div>

            {/* Contact Links */}
            <div className="mt-6 sm:mt-8 space-y-3">
              <a
                href="tel:+914844870093"
                className="block text-zinc-400 hover:text-white transition-colors text-sm sm:text-base min-h-[36px] flex items-center"
              >
                +91 484 4870093
              </a>
              <a
                href="mailto:dserveecosolutions@gmail.com"
                className="block text-zinc-400 hover:text-white transition-colors text-sm sm:text-base break-all"
              >
                dserveecosolutions@gmail.com
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-zinc-400 hover:text-white transition-colors text-sm sm:text-base"
              >
                Vyttila, Ernakulam, Kerala
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="
          mt-10 sm:mt-14 lg:mt-16
          pt-6 sm:pt-8
          border-t border-white/10
          flex flex-col sm:flex-row
          items-center
          justify-between
          gap-4
        ">
          <p className="text-zinc-500 text-xs sm:text-sm text-center sm:text-left">
            © 2026 DSERVE Eco Solutions. All rights reserved.
          </p>
          <div className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm">
            {[
              { href: "/",       label: "Home"    },
              { href: "/contact", label: "Contact" },
              { href: "/about",  label: "About"   },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-zinc-600 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
