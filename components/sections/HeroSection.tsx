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
  { href: "/voltas", logo: "/logos/voltas2.png" },
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
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Content */}
      <div
        className="
          relative z-10
          max-w-7xl mx-auto
          px-4 sm:px-6 lg:px-10
          min-h-screen
          flex flex-col justify-center
          pt-28 sm:pt-32 lg:pt-24
          pb-12
        "
      >

        <Reveal>
          {/* Hero Text */}
          <div className="max-w-4xl mt-10 sm:mt-14 lg:mt-0 mb-10 sm:mb-16 lg:mb-20">
            <h1
              className={`
                ${oswald.className}
                text-4xl sm:text-6xl lg:text-7xl
                font-bold
                text-white
                leading-[1]
                tracking-tight
              `}
            >
              DESERVE THE BEST
            </h1>

            <p
              className="
                mt-4 sm:mt-5
                text-lg sm:text-xl lg:text-2xl
                text-white/75
                font-light
                tracking-wide
              "
            >
              Optimised HVAC Solutions
            </p>
          </div>
        </Reveal>

        {/* Brand Panels */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 w-full max-w-5xl">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="
                  group
                  min-h-[160px] sm:min-h-[200px] lg:min-h-[240px]
                  rounded-2xl lg:rounded-3xl
                  border border-white/10
                  bg-black/25 backdrop-blur-xl
                  hover:bg-black/35 hover:border-white/20
                  hover:shadow-[0_0_50px_rgba(120,0,0,0.2)]
                  transition-all duration-500
                  flex items-center justify-center
                  px-6 py-8
                "
              >
                <Image
                  src={brand.logo}
                  alt="Brand Logo"
                  width={320}
                  height={120}
                  priority
                  className="
                    w-auto h-auto max-h-16 sm:max-h-20 lg:max-h-28
                    object-contain
                    transition-transform duration-500
                    group-hover:scale-105
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