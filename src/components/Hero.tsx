"use client";

import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowRight,
  Download,
} from "lucide-react";

// Ditt profilbilde med animasjoner
const ProfileImage = () => (
  <div className="relative w-full h-full group">
    <img
      src="/aslan.jpg"
      alt="Aslan Khatuev"
      className="w-full h-full object-cover rounded-3xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-2 shadow-2xl"
    />
    {/* Overlay med hover-effekt */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Glimmer effekt */}
    <div className="absolute inset-0 rounded-3xl overflow-hidden">
      <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
    </div>
  </div>
);

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/50 to-gray-900"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ACFB]/5 rounded-full blur-3xl"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 h-full flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Text Content */}
            <div
              className={`space-y-8 transform transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
            >
              {/* Greeting */}
              <div
                className={`transition-all duration-800 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-[#00ACFB] font-medium text-lg mb-2">
                  Hei, jeg er
                </p>
              </div>

              {/* Main Title */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight">
                  <span className="block">Aslan</span>
                  <span className="block bg-gradient-to-r from-[#00ACFB] via-blue-400 to-green-500 bg-clip-text text-transparent">
                    Khatuev
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-[#00ACFB] to-green-500"></div>
                  <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-light">
                    Frontend-utvikler & UI/UX Designer
                  </p>
                </div>
              </div>

              {/* Description */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  Brennende lidenskap for å skape eksepsjonelle digitale
                  opplevelser med moderne webteknologier. Spesialiserer meg
                  innenfor React, Next.js og TypeScript, med solid kunnskap i
                  JavaScript og erfaring også litt med Vue.js. Har god
                  forståelse for både UI og UX, og bygger skalerbare,
                  brukervennlige og ytelsesorienterte applikasjoner. Utdannet
                  som frontendutvikler ved Gokstad Akademiet i Sandefjord, hvor
                  jeg har gjennom toårig fagskoleløp (2023–2025) har jobbet med
                  praktiske prosjekter, moderne teknologistack og samarbeid i
                  tverrfaglige team. Erfaring med arbeidsmetodikker som Scrum og
                  Agile, og vant til å bruke verktøy som Git, GitHub, Figma og
                  Jira i utviklingsprosessen.
                </p>
              </div>

              {/* Stats */}
              <div
                className={`grid grid-cols-3 gap-6 py-6 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    2+
                  </div>
                  <div className="text-sm text-gray-400">
                    Års Studie i Frontend Utvikling
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    1+
                  </div>
                  <div className="text-sm text-gray-400">
                    Reel Prosjekter Fullført
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                    100%
                  </div>
                  <div className="text-sm text-gray-400">Kundetilfredshet</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div
                className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#00ACFB] to-blue-600 text-white font-semibold rounded-xl hover:from-[#00ACFB] hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Ta Kontakt
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>

                <a
                  href="/cv"
                  className="group inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Last ned CV
                </a>
              </div>

              {/* Social Links */}
              <div
                className={`flex items-center space-x-6 pt-8 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <span className="text-gray-400 text-sm font-medium">
                  Følg meg:
                </span>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: <Github className="w-5 h-5" />,
                      href: "https://github.com/AslanKhatuev",
                      label: "GitHub",
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      href: "https://www.linkedin.com/in/aslan-khatuev-61a29610a/",
                      label: "LinkedIn",
                    },
                    {
                      icon: <Mail className="w-5 h-5" />,
                      href: "mailto:aslan.khatuev@outlook.com",
                      label: "E-post",
                    },
                    {
                      icon: <Instagram className="w-5 h-5" />,
                      href: "https://www.instagram.com/aslan_frontend_dev/",
                      label: "Instagram",
                    },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-gray-400 hover:text-[#00ACFB] p-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Location */}
              <div
                className={`flex items-center space-x-2 text-gray-500 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1400ms" }}
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm">For tiden i Skien, Norge</span>
              </div>
            </div>

            {/* Profile Image */}
            <div
              className={`flex justify-center lg:justify-end transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative">
                {/* Decorative elements med animasjoner */}
                <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#00ACFB]/30 rounded-3xl animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-4 -right-4 w-full h-full border-2 border-green-500/30 rounded-3xl animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                ></div>

                {/* Profile container med ekstra animasjoner */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[450px] xl:h-[450px] animate-float">
                  <ProfileImage />
                </div>

                {/* Floating elements med ekstra animasjoner */}
                <div className="absolute top-10 -right-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-bounce-slow">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm font-medium">
                      Tilgjengelig for arbeid
                    </span>
                  </div>
                </div>

                <div className="absolute bottom-10 -left-6 bg-white/10 backdrop-blur-sm rounded-xl p-4 shadow-lg animate-wiggle">
                  <div className="text-center">
                    <div className="text-[#00ACFB] font-bold text-lg">Nivå</div>
                    <div className="text-white text-xs">Junior</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(1deg);
          }
          75% {
            transform: rotate(-1deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-shimmer {
          animation: shimmer 3s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }

        .animate-wiggle {
          animation: wiggle 4s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default Hero;
