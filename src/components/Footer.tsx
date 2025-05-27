"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Mail,
  ArrowUp,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Navigation links matching your header
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Om meg", href: "/about" },
    { name: "Tjenester", href: "/services" },
    { name: "Kontakt", href: "/contact" },
    { name: "Prosjekter", href: "/projects" },
    { name: "Ferdigheter", href: "/skills" },
    { name: "Min CV", href: "/cv" },
  ];

  // Social media links
  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: "https://github.com/AslanKhatuev",
      label: "GitHub",
    },
    {
      icon: <Linkedin size={20} />,
      href: "https://www.linkedin.com/in/aslan-khatuev-61a29610a/",
      label: "LinkedIn",
    },
    {
      icon: <Instagram size={20} />,
      href: "https://www.instagram.com/aslan_frontend_dev/",
      label: "Instagram",
    },
    {
      icon: <Facebook size={20} />,
      href: "https://www.facebook.com/Hayrullahkhatuev?locale=ru_RU",
      label: "Facebook",
    },
  ];

  // Contact information
  const contactInfo = [
    {
      icon: <Mail size={18} />,
      text: "aslan.khatuev@outlook.com",
      action: () => copyToClipboard("aslan.khatuev@outlook.com"),
    },
    { icon: <Phone size={18} />, text: "+47 400 40 101" },
    { icon: <MapPin size={18} />, text: "Skien, Norway" },
  ];

  useEffect(() => {
    // Trigger animation on load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Reset email copied state
    let copyTimer: NodeJS.Timeout;
    if (emailCopied) {
      copyTimer = setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    }

    // Check scroll position for scroll-to-top button
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      setShowScrollTop(window.scrollY > 300);

      if (footer) {
        const rect = footer.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        if (isInViewport) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check on initial load

    return () => {
      clearTimeout(timer);
      if (copyTimer) clearTimeout(copyTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [emailCopied]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setEmailCopied(true);
  };

  return (
    <>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 z-50 bg-[#00ACFB] text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 ${
          showScrollTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>

      <footer id="footer" className="relative mt-12">
        {/* Top border */}
        <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#00ACFB] to-transparent"></div>

        {/* Main footer content */}
        <div className="bg-gradient-to-b from-gray-900 to-black py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-12">
          <div
            className={`max-w-7xl mx-auto transition-all duration-1000 ease-out ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Mobile-first layout: single column on mobile, four columns on larger screens */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {/* Animated Logo column */}
              <div
                className={`flex justify-center transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <Link href="/">
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

              {/* Navigation column */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h3 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-6 relative inline-block">
                  Navigation
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ACFB] via-green-500 to-blue-600"></div>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-2 md:gap-3">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="text-gray-300 hover:text-green-500 transition-all duration-300 group block py-1 text-sm md:text-base"
                    >
                      <span className="transition-transform duration-300 group-hover:translate-x-2 inline-block">
                        {link.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Media column */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <h3 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-6 relative inline-block">
                  Social Media
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ACFB] via-green-500 to-blue-600"></div>
                </h3>

                {/* Mobile: Horizontal layout for social icons */}
                <div className="flex sm:hidden justify-start space-x-4 mb-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-[#00ACFB] hover:text-green-500 transition-all duration-300 hover:scale-110 p-2 rounded-full hover:bg-white/10"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>

                {/* Tablet/Desktop: Vertical layout with labels */}
                <div className="hidden sm:block space-y-2 md:space-y-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex items-center text-gray-300 hover:text-green-500 transition-all duration-300 group py-1"
                    >
                      <span className="mr-3 text-[#00ACFB] group-hover:text-green-500 transition-colors duration-300">
                        {social.icon}
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2 text-sm md:text-base">
                        {social.label}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact column */}
              <div
                className={`sm:col-span-2 lg:col-span-1 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <h3 className="text-white text-lg md:text-xl font-bold mb-4 md:mb-6 relative inline-block">
                  Contact
                  <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-[#00ACFB] via-green-500 to-blue-600"></div>
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {contactInfo.map((info, index) => (
                    <div
                      key={index}
                      className="flex items-start text-gray-300 group py-1"
                    >
                      <span className="mr-3 mt-0.5 text-[#00ACFB] group-hover:text-green-500 transition-colors duration-300 flex-shrink-0">
                        {info.icon}
                      </span>
                      {info.action ? (
                        <button
                          onClick={info.action}
                          className="hover:text-green-500 transition-all duration-300 text-gray-300 text-left group-hover:translate-x-1 text-sm md:text-base break-all"
                        >
                          {info.text}
                          {index === 0 && emailCopied && (
                            <span className="ml-2 text-xs text-green-500 animate-pulse">
                              Copied!
                            </span>
                          )}
                        </button>
                      ) : (
                        <span className="transition-all duration-300 group-hover:translate-x-1 group-hover:text-green-500 text-sm md:text-base">
                          {info.text}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom section */}
            <div
              className={`flex justify-center items-center mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-800/50 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <p className="text-gray-400 text-xs md:text-sm text-center">
                &copy; {new Date().getFullYear()} Aslan Khatuev.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Custom CSS for logo animations */}
      <style jsx>{`
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
    </>
  );
};

export default Footer;
