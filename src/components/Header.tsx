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
    // Trigger slow-motion entrance animation
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

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-gray-900 font-inter">
      <div className="flex justify-between items-center py-4 px-4 md:px-8">
        {/* Animated Logo */}
        <div className="flex items-center z-50 relative">
          <Link href="/" onClick={closeMenu}>
            <div className="relative group w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
              {/* Outer animated circles */}
              <div
                className={`absolute inset-0 w-full h-full transition-all duration-1500 ease-out ${
                  isVisible
                    ? "opacity-100 scale-100 rotate-0"
                    : "opacity-0 scale-50 rotate-[-180deg]"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                {/* Outer rotating circle */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30 animate-spin-slow"></div>
                <div className="absolute inset-1 rounded-full border border-green-500/40 animate-spin-reverse"></div>

                {/* Orbiting dots */}
                <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full transform -translate-x-1/2 -translate-y-1 animate-orbit-1 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-green-400 rounded-full transform -translate-x-1/2 translate-y-1 animate-orbit-2 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-1/2 right-0 w-2 h-2 bg-blue-300 rounded-full transform translate-x-1 -translate-y-1/2 animate-orbit-3 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-1/2 left-0 w-2 h-2 bg-green-300 rounded-full transform -translate-x-1 -translate-y-1/2 animate-orbit-4 opacity-0 group-hover:opacity-100"></div>
              </div>

              {/* Main logo container - centered */}
              <div
                className={`w-12 h-12 md:w-16 md:h-16 bg-white rounded-full flex items-center justify-center transition-all duration-1200 ease-out relative overflow-hidden ${
                  isVisible
                    ? "translate-x-0 translate-y-0 opacity-100 scale-100 rotate-0"
                    : "translate-x-[-50px] translate-y-[-20px] opacity-0 scale-75 rotate-[-45deg]"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                {/* Inner rotating border effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-green-500 to-blue-600 opacity-0 group-hover:opacity-100 animate-spin-slow transition-opacity duration-500"></div>
                <div className="absolute inset-[2px] bg-white rounded-full z-10"></div>

                {/* Pulse effect */}
                <div className="absolute inset-0 rounded-full bg-blue-600/20 animate-pulse-slow group-hover:animate-pulse"></div>

                {/* Main logo content */}
                <span
                  className={`font-bold text-sm md:text-lg text-blue-600 z-20 relative transition-all duration-800 ease-out group-hover:scale-110 group-hover:text-green-600 ${
                    isVisible
                      ? "translate-y-0 opacity-100 rotate-0"
                      : "translate-y-4 opacity-0 rotate-12"
                  }`}
                  style={{ transitionDelay: "600ms" }}
                >
                  ASLAN
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                {/* Floating particles effect */}
                <div className="absolute top-1 left-1 w-1 h-1 bg-blue-400 rounded-full animate-float-1 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute top-2 right-2 w-1 h-1 bg-green-400 rounded-full animate-float-2 opacity-0 group-hover:opacity-100"></div>
                <div className="absolute bottom-1 left-2 w-1 h-1 bg-blue-500 rounded-full animate-float-3 opacity-0 group-hover:opacity-100"></div>
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav
          className={`hidden lg:block transform transition-all duration-1500 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
          }`}
          style={{ transitionDelay: "400ms" }}
        >
          <ul className="flex space-x-6 xl:space-x-8">
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
                    className={`text-white hover:text-green-500 transition-all duration-500 text-lg xl:text-xl font-medium hover:scale-110 hover:-rotate-2 inline-block ${
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

        {/* Tablet Navigation (768px - 1024px) */}
        <nav
          className={`hidden md:block lg:hidden transform transition-all duration-1200 ease-out ${
            isVisible ? "translate-x-0 opacity-100" : "translate-x-6 opacity-0"
          }`}
          style={{ transitionDelay: "500ms" }}
        >
          <ul className="flex space-x-4">
            {navLinks.map((link, index) => {
              const isActive = pathname === link.href;

              return (
                <li
                  key={link.name}
                  className={`relative transform transition-all duration-600 ease-out ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: `${700 + index * 80}ms` }}
                >
                  <Link
                    href={link.href}
                    className={`text-white hover:text-green-500 transition-all duration-400 text-sm font-medium hover:scale-105 inline-block ${
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

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className={`md:hidden text-white hover:text-green-500 transition-all duration-500 z-50 relative hover:scale-110 hover:rotate-180 transform ${
            isVisible
              ? "translate-x-0 opacity-100 scale-100"
              : "translate-x-4 opacity-0 scale-75"
          }`}
          style={{ transitionDelay: "300ms" }}
          aria-label="Åpne meny"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Overlay */}
        {isMenuOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={closeMenu}
          />
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-80 bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 transform transition-all duration-700 ease-in-out z-50 md:hidden ${
            isMenuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="pt-20 px-6">
            <nav>
              <ul className="space-y-6">
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
                        className={`block text-2xl font-medium py-3 px-4 rounded-lg transition-all duration-500 hover:scale-105 hover:translate-x-2 ${
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

            {/* Mobile Menu Footer */}
            <div
              className={`absolute bottom-8 left-6 right-6 transform transition-all duration-1000 ease-out ${
                isMenuOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isMenuOpen ? "800ms" : "0ms" }}
            >
              <div className="border-t border-white/20 pt-6">
                <p className="text-gray-400 text-sm text-center font-inter">
                  © 2025 Portefølje
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom border */}
      <div
        className={`h-1 w-full bg-[#00ACFB] transform transition-all duration-1500 ease-out ${
          isVisible ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
        }`}
        style={{ transitionDelay: "1000ms", transformOrigin: "left" }}
      ></div>

      {/* Google Fonts Import */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800&family=Roboto:wght@300;400;500;700&display=swap"
        rel="stylesheet"
      />

      {/* Custom CSS for logo animations */}
      <style jsx>{`
        /* Font Family Definitions */
        .font-inter {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .font-poppins {
          font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        .font-roboto {
          font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
            sans-serif;
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes orbit-1 {
          from {
            transform: rotate(0deg) translateX(32px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(32px) rotate(-360deg);
          }
        }

        @keyframes orbit-2 {
          from {
            transform: rotate(90deg) translateX(32px) rotate(-90deg);
          }
          to {
            transform: rotate(450deg) translateX(32px) rotate(-450deg);
          }
        }

        @keyframes orbit-3 {
          from {
            transform: rotate(180deg) translateX(32px) rotate(-180deg);
          }
          to {
            transform: rotate(540deg) translateX(32px) rotate(-540deg);
          }
        }

        @keyframes orbit-4 {
          from {
            transform: rotate(270deg) translateX(32px) rotate(-270deg);
          }
          to {
            transform: rotate(630deg) translateX(32px) rotate(-630deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.8;
          }
        }

        @keyframes float-1 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          25% {
            transform: translateY(-8px) translateX(4px);
          }
          50% {
            transform: translateY(-4px) translateX(8px);
          }
          75% {
            transform: translateY(-12px) translateX(2px);
          }
        }

        @keyframes float-2 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-6px) translateX(-4px);
          }
          66% {
            transform: translateY(-10px) translateX(-8px);
          }
        }

        @keyframes float-3 {
          0%,
          100% {
            transform: translateY(0px) translateX(0px);
          }
          20% {
            transform: translateY(-4px) translateX(6px);
          }
          40% {
            transform: translateY(-8px) translateX(3px);
          }
          60% {
            transform: translateY(-6px) translateX(-2px);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 4s linear infinite;
        }

        .animate-orbit-1 {
          animation: orbit-1 5s linear infinite;
        }

        .animate-orbit-2 {
          animation: orbit-2 5s linear infinite;
        }

        .animate-orbit-3 {
          animation: orbit-3 5s linear infinite;
        }

        .animate-orbit-4 {
          animation: orbit-4 5s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }

        .animate-float-1 {
          animation: float-1 3s ease-in-out infinite;
        }

        .animate-float-2 {
          animation: float-2 2.5s ease-in-out infinite;
        }

        .animate-float-3 {
          animation: float-3 3.5s ease-in-out infinite;
        }
      `}</style>
    </header>
  );
};

export default Header;
