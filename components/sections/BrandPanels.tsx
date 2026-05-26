import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";

const brands = [
  {
    name: "Samsung Solutions",
    href: "/samsung",
    logo: "/logos/samsung.png",
    description: "Enterprise technology, display, mobility, and infrastructure solutions.",
  },
  {
    name: "Voltas Solutions",
    href: "/voltas",
    logo: "/logos/voltas.png",
    description: "HVAC, engineering, climate control, and industrial infrastructure services.",
  },
];

export default function BrandPanels() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

        <Reveal>
          {/* Header */}
          <div className="mb-10 sm:mb-14">
            <div className="flex items-center gap-4 mb-5 sm:mb-6">
              <div className="w-8 sm:w-10 h-px bg-zinc-300 shrink-0" />
              <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 font-bold">
                Enterprise Partnerships
              </span>
            </div>
            <h2 className="
              text-3xl sm:text-4xl lg:text-6xl
              font-bold tracking-tight text-zinc-900
              leading-[1.05]
            ">
              Technology & Engineering Solutions
            </h2>
            <p className="mt-4 sm:mt-5 text-zinc-500 max-w-2xl leading-relaxed text-sm sm:text-base">
              Delivering professional enterprise solutions through globally trusted
              industrial and technology partnerships.
            </p>
          </div>
        </Reveal>

        {/* Cards */}
        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {brands.map((brand) => (
              <Link
                key={brand.href}
                href={brand.href}
                className="
                  group
                  bg-white
                  border border-zinc-100
                  hover:border-zinc-200
                  transition-all duration-300
                  hover:shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  p-8 sm:p-10 lg:p-14
                  flex flex-col
                  justify-between
                  min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]
                "
              >
                {/* Logo */}
                <div className="flex items-center justify-center flex-1 py-4">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    width={280}
                    height={120}
                    className="
                      object-contain w-auto
                      max-h-16 sm:max-h-20 lg:max-h-28
                      transition-transform duration-300
                      group-hover:scale-[1.02]
                    "
                  />
                </div>

                {/* Content */}
                <div className="pt-6 sm:pt-10 border-t border-zinc-100">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-900 mb-2 sm:mb-3">
                    {brand.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-500 leading-relaxed mb-4 sm:mb-6">
                    {brand.description}
                  </p>
                  <div className="inline-flex items-center gap-2 text-sm font-medium text-black group-hover:gap-3 transition-all">
                    Explore Solutions
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>

              </Link>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}
