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
    <section className="bg-white py-24 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <Reveal>

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* LEFT CONTENT */}
            <div>

              {/* Small Label */}
              <div className="flex items-center gap-4 mb-6">

                <div className="w-10 h-px bg-zinc-300" />

                <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-400 font-semibold">
                  About DSERVE
                </span>

              </div>

              {/* Heading */}
              <h2 className="text-4xl lg:text-6xl font-bold tracking-tight text-zinc-900 leading-[1.05] max-w-2xl">
                Smart Air Conditioning Solutions For Modern Spaces
              </h2>

              {/* Intro */}
              <p className="mt-8 text-lg text-zinc-600 leading-relaxed">
                DSERVE delivers advanced HVAC and commercial air conditioning
                solutions tailored for residential, commercial, and enterprise
                environments through trusted Samsung and Voltas partnerships.
              </p>

              {/* Paragraph */}
              <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
                From climate control systems and energy-efficient cooling to
                industrial HVAC infrastructure, our team provides professional
                consultation, installation, and long-term support designed for
                reliability, efficiency, and performance.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-8 mt-12">

                {features.map((feature) => (
                  <div
                    key={feature}
                    className="flex items-center gap-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-red-700" />

                    <span className="text-zinc-700 font-medium">
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
                  mt-12
                  px-8
                  py-4
                  bg-black
                  text-white
                  text-sm
                  font-semibold
                  rounded-md
                  hover:bg-zinc-800
                  transition-colors
                "
              >
                Contact Us
              </Link>

            </div>

            {/* RIGHT IMAGE */}
            <div className="relative">

              {/* Accent Border */}
              <div className="absolute -left-6 -top-6 w-full h-full border-2 border-red-800/70 rounded-sm" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-sm shadow-2xl">

                <Image
                  src="/images/about-hvac.jpg"
                  alt="HVAC Solutions"
                  width={800}
                  height={900}
                  className="w-full h-[700px] object-cover"
                />

              </div>

            </div>

          </div>

        </Reveal>

      </div>

    </section>
  );
}