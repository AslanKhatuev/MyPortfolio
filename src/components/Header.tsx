"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
}

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Hjem", href: "/" },
    { name: "Om meg", href: "/about" },
    { name: "Tjenester", href: "/services" },
    { name: "Kontakt", href: "/contact" },
    { name: "Prosjekter", href: "/projects" },
    { name: "Ferdigheter", href: "/skills" },
    { name: "Min CV", href: "/cv" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 font-inter w-full">
      <div className="flex justify-between items-center py-3 px-3 sm:py-4 sm:px-4 md:px-6 lg:px-8 max-w-full">
        {/* Logo */}
        <div className="flex items-center z-50 relative flex-shrink-0">
          <Link href="/" onClick={closeMenu} className="block">
            <div className="relative group w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center">
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-out ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 rotate-[-180deg]"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="absolute inset-0 rounded-full border border-blue-500/30 sm:border-2 animate-spin-slow"></div>
                <div className="absolute inset-0.5 sm:inset-1 rounded-full border border-green-500/40 animate-spin-reverse"></div>
                <div className="absolute top-0 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-0.5 sm:-translate-y-1 animate-orbit-1 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-1/2 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-400 rounded-full transform -translate-x-1/2 translate-y-0.5 sm:translate-y-1 animate-orbit-2 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-1/2 right-0 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-blue-300 rounded-full transform translate-x-0.5 sm:translate-x-1 -translate-y-1/2 animate-orbit-3 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-1/2 left-0 w-1 h-1 sm:w-1.5 sm:h-1.5 md:w-2 md:h-2 bg-green-300 rounded-full transform -translate-x-0.5 sm:-translate-x-1 -translate-y-1/2 animate-orbit-4 opacity-0 group-hover:opacity-100"></div>
              </div>
              <div
                className={`w-10 h-10 xs:w-12 xs:h-12 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white rounded-full flex items-center justify-center transition-all duration-1200 ease-out relative overflow-hidden ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100 scale-100 rotate-0"
                    : "translate-x-[-50px] translate-y-[-20px] opacity-0 scale-75 rotate-[-45deg]"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                <div className="absolute inset-[1px] sm:inset-[2px] bg-white rounded-full z-10"></div>
                <div className="absolute inset-0 rounded-full bg-blue-600/20 animate-pulse-slow group-hover:animate-pulse"></div>
                <span
                  className={`font-bold text-xs xs:text-sm sm:text-sm md:text-base lg:text-lg text-blue-600 z-20 relative transition-all duration-800 ease-out group-hover:scale-110 group-hover:text-green-600 ${
                    isVisible
                      ? "translate-y-0 opacity-100 rotate-0"
                      : "translate-y-4 opacity-0 rotate-12"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  ASLAN
                </span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop navigation */}
        <nav
          className={`hidden xl:block transform transition-all duration-1500 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <ul className="flex space-x-4 2xl:space-x-6">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;
              return (
                <li
                  key={link.name}
                  className={`relative transform transition-all duration-800 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-4 opacity-0"
                  }`}
                  style={{ transitionDelay: `${600 + index * 100}ms` }}
                >
                  <Link
                    href={link.href}
                    className={`text-white hover:text-green-500 transition-all duration-500 text-base xl:text-lg 2xl:text-xl font-medium hover:scale-110 hover:-rotate-2 inline-block whitespace-nowrap ${
                      isActive ? "text-green-500" : ""
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-500 mt-0.5 animate-pulse"></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Hamburger */}
        <button
          onClick={toggleMenu}
          className={`xl:hidden text-white hover:text-green-500 transition-all duration-500 z-50 relative hover:scale-110 hover:rotate-180 transform flex-shrink-0 ${
            isVisible
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-4 opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "300ms" }}
          aria-label="Åpne meny"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 xl:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobilmeny */}
        <div
          className={`fixed top-0 right-0 h-full w-full xs:w-80 sm:w-80 md:w-96 lg:w-[400px] bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 transform transition-all duration-700 ease-in-out z-50 xl:hidden ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          {/* Innebygd X-lukkeknapp */}
          <div className="absolute top-4 right-4 z-50">
            <button
              onClick={closeMenu}
              className="text-white hover:text-green-500 transition duration-300"
              aria-label="Lukk meny"
            >
              <X size={28} />
            </button>
          </div>

          <div className="pt-16 xs:pt-20 px-4 xs:px-6 h-full flex flex-col">
            <nav className="flex-1">
              <ul className="space-y-4 xs:space-y-6">
                {navLinks.map((link, index) => {
                  const isActive = pathname === link.href;
                  return (
                    <li
                      key={link.name}
                      className={`transform transition-all duration-800 ease-out ${
                        isMenuOpen
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{
                        transitionDelay: isMenuOpen
                          ? `${200 + index * 100}ms`
                          : "0ms",
                      }}
                    >
                      <Link
                        href={link.href}
                        onClick={closeMenu}
                        className={`block text-xl xs:text-2xl font-medium py-2 xs:py-3 px-3 xs:px-4 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2 ${
                          isActive
                            ? "text-green-500 bg-white/10"
                            : "text-white hover:text-green-500 hover:bg-white/5"
                        }`}
                      >
                        {link.name}
                        {isActive && (
                          <div className="w-full h-1 bg-green-500 mt-2 rounded animate-pulse"></div>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div
              className={`pb-6 xs:pb-8 transform transition-all duration-1000 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "800ms" : "0ms" }}
            >
              <div className="border-t border-white/20 pt-4 xs:pt-6">
                <p className="text-gray-400 text-sm text-center font-inter">
                  © 2025 Portefølje
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bunnlinje */}
      <div
        className={`h-0.5 sm:h-1 w-full bg-[#00ACFB] transform transition-all duration-1500 ease-out ${
          isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
        style={{ transitionDelay: "1000ms", transformOrigin: "left" }}
      ></div>
    </header>
  );
};

export default Header;
