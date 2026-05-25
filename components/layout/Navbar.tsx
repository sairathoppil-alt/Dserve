"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Samsung", href: "/samsung" },
  { label: "Voltas", href: "/voltas" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-5 left-1/2 -translate-x-1/2
        z-50
        w-[96%]
        max-w-7xl
        rounded-2xl
        transition-all duration-300
        ${
          isScrolled
            ? "bg-black/75 backdrop-blur-xl border border-white/10 shadow-2xl"
            : "bg-black/25 backdrop-blur-md border border-white/5"
        }
      `}
    >
      <div className="px-8 lg:px-12">

        <div className="h-24 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">

            <Image
              src="/logos/dserve.png"
              alt="DSERVE"
              width={130}
              height={130}
              priority
              className="
                h-16
                w-auto
                object-contain
              "
            />

          </Link>

          {/* RIGHT ALIGNED NAVIGATION */}
          <nav className="hidden md:flex items-center gap-12 ml-auto">

            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="
                  text-sm
                  font-medium
                  tracking-wide
                  text-white/75
                  hover:text-white
                  transition-colors duration-300
                "
              >
                {link.label}
              </Link>
            ))}

          </nav>

        </div>

      </div>
    </header>
  );
}