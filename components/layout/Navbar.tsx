"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Samsung", href: "/samsung" },
  { label: "Voltas", href: "/voltas" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-3 sm:top-5 left-1/2 -translate-x-1/2
          z-50 w-[96%] max-w-7xl rounded-2xl
          transition-all duration-300
          ${
            isScrolled || menuOpen
              ? "bg-black/85 backdrop-blur-xl border border-white/10 shadow-2xl"
              : "bg-black/25 backdrop-blur-md border border-white/5"
          }
        `}
      >
        <div className="px-4 sm:px-6 lg:px-12">

          {/* Increased navbar height */}
          <div className="h-24 sm:h-28 lg:h-32 flex items-center justify-between">

            {/* Larger Logo */}
            <Link href="/" className="flex items-center shrink-0">
              <Image
                src="/logos/dserve.png"
                alt="DSERVE"
                width={200}
                height={200}
                priority
                className="h-16 sm:h-20 lg:h-24 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-10 ml-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    text-sm font-medium tracking-wide transition-colors duration-300
                    ${
                      pathname === link.href
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                    }
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="md:hidden ml-auto w-10 h-10 flex flex-col items-center justify-center gap-[5px] rounded-lg hover:bg-white/10 transition-colors shrink-0"
            >
              <span
                className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "rotate-45 translate-y-[6.5px]" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block w-5 h-[1.5px] bg-white rounded-full transition-all duration-300 ${
                  menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""
                }`}
              />
            </button>

          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="px-4 pb-6 pt-2 flex flex-col gap-1 border-t border-white/10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  px-4 py-3 rounded-xl text-sm font-medium tracking-wide transition-colors duration-200
                  ${
                    pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-white/75 hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

      </header>
    </>
  );
}