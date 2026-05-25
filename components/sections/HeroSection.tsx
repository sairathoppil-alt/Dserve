"use client";

import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const brands = [
  {
    href: "/samsung",
    logo: "/logos/samsung2.png",
  },
  {
    href: "/voltas",
    logo: "/logos/voltas2.png",
  },
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
          className="
            object-cover
            scale-110
            animate-[slowZoom_20s_ease-in-out_infinite_alternate]
          "
        />

        <div className="absolute inset-0 bg-black/55" />

      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.025]">

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
      <div className="
        relative z-10
        max-w-7xl
        mx-auto
        px-6 lg:px-10
        min-h-screen
        flex flex-col
        justify-center
        pt-24
      ">

        <Reveal>

          {/* Hero Text */}
          <div className="max-w-4xl mb-20">

            <h1
              className="
                text-4xl
                lg:text-7xl
                font-bold
                text-white
                leading-[0.95]
                tracking-tight
              "
            >
              DESERVE THE BEST
            </h1>

            <p
              className="
                mt-5
                text-xl
                lg:text-2xl
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

          <div
            className="
              grid grid-cols-1 lg:grid-cols-2
              gap-8
              max-w-5xl
            "
          >

            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="
                  group
                  h-[240px]
                  rounded-3xl
                  border border-white/10
                  bg-black/25
                  backdrop-blur-xl
                  hover:bg-black/35
                  hover:border-white/20
                  hover:shadow-[0_0_50px_rgba(120,0,0,0.2)]
                  transition-all duration-500
                  flex items-center justify-center
                "
              >

                <Image
                  src={brand.logo}
                  alt="Brand Logo"
                  width={320}
                  height={120}
                  className="
                    w-auto
                    h-auto
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