import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const features = [
  "Commercial HVAC Solutions",
  "Samsung & Voltas Partnerships",
  "Industrial Cooling Systems",
  "Enterprise Infrastructure",
  "Professional Installation",
  "After Sales Support",
];

export default function AboutSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Small Label */}
              <div className="flex items-center gap-4 mb-5 sm:mb-6">
                <div className="w-8 sm:w-10 h-px bg-zinc-300 shrink-0" />
                <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                  About DSERVE
                </span>
              </div>

              {/* Heading */}
              <h2 className="
                text-3xl sm:text-4xl lg:text-6xl
                font-bold tracking-tight text-zinc-900
                leading-[1.05]
              ">
                Smart Air Conditioning Solutions For Modern Spaces
              </h2>

              {/* Paragraphs */}
              <p className="mt-6 sm:mt-8 text-base sm:text-lg text-zinc-600 leading-relaxed">
                DSERVE delivers advanced HVAC and commercial air conditioning
                solutions tailored for residential, commercial, and enterprise
                environments through trusted Samsung and Voltas partnerships.
              </p>
              <p className="mt-4 sm:mt-6 text-base sm:text-lg text-zinc-600 leading-relaxed">
                From climate control systems and energy-efficient cooling to
                industrial HVAC infrastructure, our team provides professional
                consultation, installation, and long-term support designed for
                reliability, efficiency, and performance.
              </p>

              {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 sm:gap-y-5 gap-x-6 sm:gap-x-8 mt-8 sm:mt-12">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-red-700 shrink-0" />
                    <span className="text-sm sm:text-base text-zinc-700 font-medium">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/contact"
                className="
                  inline-flex items-center
                  mt-8 sm:mt-12
                  px-6 sm:px-8
                  py-3 sm:py-4
                  bg-black text-white
                  text-sm font-semibold
                  rounded-md
                  hover:bg-zinc-800
                  transition-colors
                  min-h-[48px]
                "
              >
                Contact Us
              </Link>

            </div>

            {/* RIGHT IMAGE */}
            {/* On mobile the image comes second (natural flow). 
                The accent border is contained with relative positioning. */}
            <div className="relative mt-4 lg:mt-0">

              {/* Accent Border — clamped so it never escapes the viewport */}
              <div className="
                absolute
                -left-3 sm:-left-4 lg:-left-6
                -top-3 sm:-top-4 lg:-top-6
                w-full h-full
                border-2 border-red-800/70
                rounded-sm
                pointer-events-none
              " />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl">
                <Image
                  src="/images/about-hvac.jpg"
                  alt="HVAC Solutions"
                  width={800}
                  height={900}
                  className="
                    w-full
                    h-64 sm:h-80 md:h-96 lg:h-[700px]
                    object-cover
                  "
                />
              </div>

            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
