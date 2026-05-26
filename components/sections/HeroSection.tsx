"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  subsets: ["latin"],
});

const brands = [
  { href: "/samsung", logo: "/logos/samsung2.png" },
  { href: "/voltas",  logo: "/logos/voltas2.png"  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-industrial1.jpg"
          alt="Industrial Infrastructure"
          fill
          priority
          className="object-cover animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
          style={{ transform: "scale(1.1)" }}
        />
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Ambient Red Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(120,0,0,0.22),transparent_30%)]" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div className="
        relative z-10
        max-w-7xl mx-auto
        px-4 sm:px-6 lg:px-10
        min-h-screen
        flex flex-col justify-center
        pt-28 sm:pt-32 lg:pt-24
        pb-16
      ">

        {/* Hero Text */}
        <Reveal>
          <div className="max-w-4xl mt-10 sm:mt-14 lg:mt-0 mb-12 sm:mb-16 lg:mb-20">
            <h1
              className={`
                ${oswald.className}
                text-4xl sm:text-6xl lg:text-7xl
                font-bold text-white
                leading-[0.95] tracking-tight
              `}
            >
              DESERVE THE BEST
            </h1>
            <p className="mt-5 text-lg sm:text-xl lg:text-2xl text-zinc-300 font-light tracking-wide">
              Optimised HVAC Solutions
            </p>
          </div>
        </Reveal>

        {/* Brand Panels */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 lg:gap-8 w-full max-w-5xl">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="
                  group
                  relative
                  overflow-hidden

                  min-h-[190px] sm:min-h-[240px] lg:min-h-[280px]

                  rounded-[32px]

                  /* ── Fully transparent glass ── */
                  bg-transparent

                  /* Thin bright border that reads as a glass edge */
                  border border-white/25

                  /* Subtle shadow so the panel lifts off the bg */
                  shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_0_rgba(255,255,255,0.12)]

                  hover:border-white/40
                  hover:-translate-y-1
                  hover:shadow-[0_20px_56px_rgba(0,0,0,0.35),inset_0_1px_0_rgba(255,255,255,0.18)]

                  transition-all duration-500

                  flex items-center justify-center
                  px-10 py-10
                "
              >

                {/* Top-edge specular line — the key "glass" cue */}
                <div className="
                  absolute top-0 left-6 right-6 h-px
                  bg-gradient-to-r from-transparent via-white/50 to-transparent
                  pointer-events-none
                " />

                {/* Very faint inner top sheen — glass surface reflection */}
                <div className="
                  absolute top-0 left-0 right-0 h-1/3
                  bg-gradient-to-b from-white/[0.04] to-transparent
                  rounded-t-[32px]
                  pointer-events-none
                " />

                {/* Hover: soft center glow without filling the panel */}
                <div className="
                  absolute inset-0
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500
                  bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]
                  pointer-events-none
                " />

                {/* Hover: light sweep */}
                <div className="
                  absolute inset-0
                  bg-gradient-to-r from-transparent via-white/[0.04] to-transparent
                  translate-x-[-120%] group-hover:translate-x-[120%]
                  transition-transform duration-1000
                  pointer-events-none
                " />

                {/* Logo */}
                <Image
                  src={brand.logo}
                  alt="Brand Logo"
                  width={1200}
                  height={1200}
                  priority
                  className="
                    relative z-10
                    w-auto h-auto
                    max-h-32 sm:max-h-40 lg:max-h-48
                    object-contain
                    transition-all duration-500
                    group-hover:scale-[1.04]

                    /* Drop shadow on the logo itself so it pops against any bg */
                    drop-shadow-[0_2px_16px_rgba(0,0,0,0.6)]
                  "
                />

              </Link>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
