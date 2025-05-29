"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ArrowRight,
  Download,
  User,
} from "lucide-react";

// ProfileImage component remains unchanged
const ProfileImage = () => {
  const [imageError, setImageError] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative w-full h-full group">
      {!imageError ? (
        <div className="relative w-full h-full">
          <Image
            src="/aslan.jpg"
            alt="Aslan Khatuev - Frontend Developer"
            fill
            className={`object-cover rounded-xl sm:rounded-2xl lg:rounded-3xl transition-all duration-700 ease-out group-hover:scale-105 group-hover:rotate-2 shadow-lg sm:shadow-xl lg:shadow-2xl ${
              imageLoaded ? "opacity-100" : "opacity-0"
            }`}
            priority
            sizes="(max-width: 375px) 200px, (max-width: 480px) 240px, (max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 384px, (max-width: 1280px) 400px, 450px"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ACFB] to-blue-600 rounded-xl sm:rounded-2xl lg:rounded-3xl flex items-center justify-center animate-pulse">
              <User className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 text-white/60" />
            </div>
          )}
        </div>
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-[#00ACFB] via-blue-500 to-blue-600 rounded-xl sm:rounded-2xl lg:rounded-3xl flex flex-col items-center justify-center shadow-lg sm:shadow-xl lg:shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-4 left-4 w-8 h-8 sm:w-12 sm:h-12 bg-white/30 rounded-full animate-float"></div>
            <div
              className="absolute bottom-6 right-6 w-6 h-6 sm:w-10 sm:h-10 bg-white/20 rounded-full animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute top-1/2 left-6 w-4 h-4 sm:w-6 sm:h-6 bg-white/25 rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
          <div className="relative z-10 text-center">
            <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 mx-auto mb-2 sm:mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <User className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-white" />
            </div>
            <div className="text-white font-bold text-lg sm:text-xl lg:text-2xl xl:text-3xl tracking-wider">
              ASLAN
            </div>
            <div className="text-white/80 text-xs sm:text-sm lg:text-base mt-1">
              Frontend Developer
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 animate-shimmer"></div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-xl sm:rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="absolute inset-0 rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden">
        <div className="absolute -top-full left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shimmer"></div>
      </div>
    </div>
  );
};

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typewriterState, setTypewriterState] = useState({
    line1: "",
    line2: "",
    showCursor1: false,
    showCursor2: false,
    isComplete: false,
  });

  const line1Text = "La oss skape noe stort sammen.";
  const line2Text = "";

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const startTypewriter = setTimeout(() => {
      setTypewriterState((prev) => ({ ...prev, showCursor1: true }));

      // Type line 1
      let i = 0;
      const typeLine1 = setInterval(() => {
        if (i < line1Text.length) {
          setTypewriterState((prev) => ({
            ...prev,
            line1: line1Text.slice(0, i + 1),
          }));
          i++;
        } else {
          clearInterval(typeLine1);
          setTypewriterState((prev) => ({
            ...prev,
            isComplete: true,
          }));
        }
      }, 40);
    }, 1600);

    return () => clearTimeout(startTypewriter);
  }, [isVisible]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 xs:gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Profile Image */}
            <div
              className={`flex flex-col items-center lg:items-end order-first lg:order-last transition-all duration-1000 ease-out ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-24 opacity-0"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative">
                <div className="absolute -top-0.5 xs:-top-1 sm:-top-2 md:-top-3 lg:-top-4 -left-0.5 xs:-left-1 sm:-left-2 md:-left-3 lg:-left-4 w-full h-full border border-[#00ACFB]/30 sm:border-2 rounded-xl sm:rounded-2xl lg:rounded-3xl animate-pulse-slow"></div>
                <div
                  className="absolute -bottom-0.5 xs:-bottom-1 sm:-bottom-2 md:-bottom-3 lg:-bottom-4 -right-0.5 xs:-right-1 sm:-right-2 md:-right-3 lg:-right-4 w-full h-full border border-green-500/30 sm:border-2 rounded-xl sm:rounded-2xl lg:rounded-3xl animate-pulse-slow"
                  style={{ animationDelay: "1s" }}
                ></div>
                <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 2xl:w-[400px] 2xl:h-[400px] animate-float">
                  <ProfileImage />
                </div>
                <div className="absolute top-2 xs:top-3 sm:top-4 md:top-6 lg:top-8 -right-1 xs:-right-2 sm:-right-3 md:-right-4 lg:-right-6 bg-white/10 backdrop-blur-sm rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 md:p-4 shadow-md sm:shadow-lg animate-bounce-slow">
                  <div className="flex items-center space-x-1 xs:space-x-1.5 sm:space-x-2">
                    <div className="w-1 xs:w-1.5 sm:w-2 md:w-2.5 lg:w-3 h-1 xs:h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-xs xs:text-xs sm:text-sm font-medium whitespace-nowrap">
                      <span className="hidden sm:inline">
                        Tilgjengelig for arbeid
                      </span>
                      <span className="sm:hidden">Tilgjengelig</span>
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-2 xs:bottom-3 sm:bottom-4 md:bottom-6 lg:bottom-8 -left-1 xs:-left-2 sm:-left-3 md:-left-4 lg:-left-6 bg-white/10 backdrop-blur-sm rounded-md xs:rounded-lg sm:rounded-xl p-1.5 xs:p-2 sm:p-3 md:p-4 shadow-md sm:shadow-lg animate-wiggle">
                  <div className="text-center">
                    <div className="text-[#00ACFB] font-bold text-xs xs:text-sm sm:text-base md:text-lg">
                      Nivå
                    </div>
                    <div className="text-white text-xs xs:text-xs sm:text-sm">
                      Junior
                    </div>
                  </div>
                </div>
              </div>

              {/* Welcome Animation Text - Under the image */}
              <div
                className={`mt-4 xs:mt-6 sm:mt-8 flex justify-center transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1600ms" }}
              >
                <div className="typewriter-container">
                  <div className="typewriter-line">
                    {typewriterState.line1}
                    {typewriterState.showCursor1 && (
                      <span className="cursor">|</span>
                    )}
                    {typewriterState.isComplete && (
                      <span className="cursor-final">|</span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Text Content */}
            <div
              className={`space-y-4 xs:space-y-5 sm:space-y-6 md:space-y-8 transform transition-all duration-1000 ease-out px-2 xs:px-0 ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-24 opacity-0"
              }`}
            >
              <div
                className={`transition-all duration-800 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
              >
                <p className="text-[#00ACFB] font-medium text-xs xs:text-sm sm:text-base md:text-lg mb-1 xs:mb-1.5 sm:mb-2">
                  Hei, jeg er
                </p>
              </div>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black text-white leading-[1.1] xs:leading-tight">
                  <span className="block">Aslan</span>
                  <span className="block bg-gradient-to-r from-[#00ACFB] via-blue-400 to-green-500 bg-clip-text text-transparent">
                    Khatuev
                  </span>
                </h1>
              </div>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-4 mb-3 xs:mb-3.5 sm:mb-4">
                  <div className="w-8 xs:w-10 sm:w-12 h-0.5 bg-gradient-to-r from-[#00ACFB] to-green-500 flex-shrink-0"></div>
                  <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 font-light leading-tight">
                    <span className="block sm:hidden">
                      Frontend Developer & Designer
                    </span>
                    <span className="hidden sm:block">
                      Frontend-utvikler & UI/UX Designer
                    </span>
                  </p>
                </div>
              </div>
              <div
                className={`transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "600ms" }}
              >
                <p className="text-sm xs:text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
                  <span className="block lg:hidden">
                    Frontendutvikler med lidenskap for å skape digitale
                    opplevelser. Spesialiserer meg i React, Next.js og
                    TypeScript. Bygger skalerbare, moderne applikasjoner med
                    fokus på brukeropplevelse og ytelse.
                  </span>
                  <span className="hidden lg:block">
                    Brennende lidenskap for å skape eksepsjonelle digitale
                    opplevelser med moderne webteknologier. Spesialiserer meg
                    innenfor React, Next.js og TypeScript, med solid kunnskap i
                    JavaScript og erfaring også litt med Vue.js. Har god
                    forståelse for både UI og UX, og bygger skalerbare,
                    brukervennlige og ytelsesorienterte applikasjoner. Utdannet
                    som frontendutvikler ved Gokstad Akademiet i Sandefjord,
                    hvor jeg har gjennom toårig fagskoleløp (2023–2025) har
                    jobbet med praktiske prosjekter, moderne teknologistack og
                    samarbeid i tverrfaglige team. Erfaring med
                    arbeidsmetodikker som Scrum og Agile, og vant til å bruke
                    verktøy som Git, GitHub, Figma og Jira i
                    utviklingsprosessen.
                  </span>
                </p>
              </div>
              <div
                className={`grid grid-cols-3 gap-2 xs:gap-3 sm:gap-4 md:gap-6 py-4 xs:py-5 sm:py-6 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "800ms" }}
              >
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 xs:mb-1">
                    2 års
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-400 leading-tight">
                   Studie i Frontend utvikling
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 xs:mb-1">
                    1+
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-400 leading-tight">
                    <span className="block sm:hidden">Prosjekter</span>
                    <span className="hidden sm:block">Reel Prosjekter</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-0.5 xs:mb-1">
                    100%
                  </div>
                  <div className="text-xs xs:text-sm sm:text-base text-gray-400 leading-tight">
                    <span className="block xs:hidden">Kvalitet</span>
                    <span className="hidden xs:block">Kundetilfredshet</span>
                  </div>
                </div>
              </div>
              <div
                className={`flex flex-col xs:flex-row gap-3 xs:gap-4 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1000ms" }}
              >
                <a
                  href="/contact"
                  className="group inline-flex items-center justify-center px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-gradient-to-r from-[#00ACFB] to-blue-600 text-white font-semibold rounded-lg xs:rounded-xl hover:from-[#00ACFB] hover:to-green-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 text-sm xs:text-base"
                >
                  Ta Kontakt
                  <ArrowRight className="ml-2 w-4 h-4 xs:w-5 xs:h-5 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
                <a
                  href="/cv"
                  className="group inline-flex items-center justify-center px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg xs:rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 text-sm xs:text-base"
                >
                  <Download className="mr-2 w-4 h-4 xs:w-5 xs:h-5" />
                  <span className="hidden xs:inline">Last ned CV</span>
                  <span className="xs:hidden">CV</span>
                </a>
              </div>
              <div
                className={`flex flex-col xs:flex-row xs:items-center space-y-2 xs:space-y-0 xs:space-x-3 sm:space-x-4 md:space-x-6 pt-3 xs:pt-4 sm:pt-6 md:pt-8 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1200ms" }}
              >
                <span className="text-gray-400 text-xs sm:text-sm font-medium">
                  Følg meg:
                </span>
                <div className="flex space-x-1.5 xs:space-x-2 sm:space-x-3 md:space-x-4">
                  {[
                    {
                      icon: (
                        <Github className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      ),
                      href: "https://github.com/AslanKhatuev",
                      label: "GitHub",
                    },
                    {
                      icon: (
                        <Linkedin className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      ),
                      href: "https://www.linkedin.com/in/aslan-khatuev-61a29610a/",
                      label: "LinkedIn",
                    },
                    {
                      icon: (
                        <Mail className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      ),
                      href: "mailto:aslan.khatuev@outlook.com",
                      label: "E-post",
                    },
                    {
                      icon: (
                        <Instagram className="w-3.5 h-3.5 xs:w-4 xs:h-4 sm:w-5 sm:h-5" />
                      ),
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
                      className="text-gray-400 hover:text-[#00ACFB] p-1 xs:p-1.5 sm:p-2 rounded-md xs:rounded-lg hover:bg-white/10 transition-all duration-200 group"
                    >
                      <span className="group-hover:scale-110 transition-transform duration-200 inline-block">
                        {social.icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
              <div
                className={`flex items-center space-x-2 text-gray-500 transition-all duration-1000 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-8 opacity-0"
                }`}
                style={{ transitionDelay: "1400ms" }}
              >
                <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs xs:text-sm">
                  For tiden i Skien, Norge
                </span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-4px);
          }
        }
        @media (min-width: 475px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-6px);
            }
          }
        }
        @media (min-width: 640px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-8px);
            }
          }
        }
        @media (min-width: 1024px) {
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-10px);
            }
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
            transform: translateY(-2px);
          }
        }
        @media (min-width: 475px) {
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-3px);
            }
          }
        }
        @media (min-width: 640px) {
          @keyframes bounce-slow {
            0%,
            100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-5px);
            }
          }
        }
        @keyframes wiggle {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.3deg);
          }
          75% {
            transform: rotate(-0.3deg);
          }
        }
        @media (min-width: 640px) {
          @keyframes wiggle {
            0%,
            100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(0.5deg);
            }
            75% {
              transform: rotate(-0.5deg);
            }
          }
        }
        @media (min-width: 1024px) {
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

        /* Multi-line Typewriter Animation */
        .typewriter-container {
          text-align: center;
          min-height: 3rem;
        }

        .typewriter-line {
          font-size: 1rem;
          font-weight: bold;
          background: linear-gradient(to right, #00acfb, #60a5fa, #22c55e);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          white-space: nowrap;
          margin: 0 auto;
          letter-spacing: 0.03em;
          display: inline-block;
          min-height: 1.5rem;
        }

        .cursor {
          color: #00acfb;
          font-weight: bold;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        .cursor-final {
          color: #00acfb;
          font-weight: bold;
          animation: blink 1s infinite;
          margin-left: 2px;
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        /* Remove old typewriter styles */
        .typewriter {
          display: none;
        }

        /* Responsive adjustments for multi-line typewriter */
        @media (max-width: 374px) {
          .typewriter-line {
            font-size: 0.875rem;
            letter-spacing: 0.02em;
          }
          .typewriter-container {
            min-height: 2.5rem;
          }
        }

        @media (min-width: 475px) {
          .typewriter-line {
            font-size: 1rem;
            letter-spacing: 0.03em;
          }
          .typewriter-container {
            min-height: 3rem;
          }
        }

        @media (min-width: 640px) {
          .typewriter-line {
            font-size: 1.125rem;
            letter-spacing: 0.04em;
          }
          .typewriter-container {
            min-height: 3.5rem;
          }
        }

        @media (min-width: 768px) {
          .typewriter-line {
            font-size: 1.25rem;
          }
          .typewriter-container {
            min-height: 4rem;
          }
        }

        @media (min-width: 1024px) {
          .typewriter-line {
            font-size: 1.375rem;
          }
          .typewriter-container {
            min-height: 4.5rem;
          }
        }
        @media (min-width: 475px) {
          .xs\\:w-56 {
            width: 14rem;
          }
          .xs\\:h-56 {
            height: 14rem;
          }
          .xs\\:text-2xl {
            font-size: 1.5rem;
            line-height: 2rem;
          }
          .xs\\:text-base {
            font-size: 1rem;
            line-height: 1.5rem;
          }
          .xs\\:text-xl {
            font-size: 1.25rem;
            line-height: 1.75rem;
          }
          .xs\\:text-sm {
            font-size: 0.875rem;
            line-height: 1.25rem;
          }
          .xs\\:text-xs {
            font-size: 0.75rem;
            line-height: 1rem;
          }
          .xs\\:px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          .xs\\:py-14 {
            padding-top: 3.5rem;
            padding-bottom: 3.5rem;
          }
          .xs\\:gap-8 {
            gap: 2rem;
          }
          .xs\\:space-x-3 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(0.75rem * var(--tw-space-x-reverse));
            margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
          }
          .xs\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(1rem * var(--tw-space-x-reverse));
            margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
          }
          .xs\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-y-reverse: 0;
            margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
            margin-bottom: calc(0px * var(--tw-space-y-reverse));
          }
          .xs\\:space-y-4 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-y-reverse: 0;
            margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
            margin-bottom: calc(1rem * var(--tw-space-y-reverse));
          }
          .xs\\:flex-row {
            flex-direction: row;
          }
          .xs\\:block {
            display: block;
          }
          .xs\\:inline {
            display: inline;
          }
          .xs\\:hidden {
            display: none;
          }
          .xs\\:rounded-lg {
            border-radius: 0.5rem;
          }
          .xs\\:rounded-xl {
            border-radius: 0.75rem;
          }
          .xs\\:px-7 {
            padding-left: 1.75rem;
            padding-right: 1.75rem;
          }
          .xs\\:py-3\\.5 {
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
          }
          .xs\\:py-5 {
            padding-top: 1.25rem;
            padding-bottom: 1.25rem;
          }
          .xs\\:pt-4 {
            padding-top: 1rem;
          }
          .xs\\:mb-1 {
            margin-bottom: 0.25rem;
          }
          .xs\\:mb-1\\.5 {
            margin-bottom: 0.375rem;
          }
          .xs\\:mb-3\\.5 {
            margin-bottom: 0.875rem;
          }
          .xs\\:gap-4 {
            gap: 1rem;
          }
          .xs\\:w-4 {
            width: 1rem;
          }
          .xs\\:h-4 {
            height: 1rem;
          }
          .xs\\:w-5 {
            width: 1.25rem;
          }
          .xs\\:h-5 {
            height: 1.25rem;
          }
          .xs\\:w-1\\.5 {
            width: 0.375rem;
          }
          .xs\\:h-1\\.5 {
            height: 0.375rem;
          }
          .xs\\:w-2 {
            width: 0.5rem;
          }
          .xs\\:h-2 {
            height: 0.5rem;
          }
          .xs\\:w-10 {
            width: 2.5rem;
          }
          .xs\\:w-32 {
            width: 8rem;
          }
          .xs\\:h-32 {
            height: 8rem;
          }
          .xs\\:w-36 {
            width: 9rem;
          }
          .xs\\:h-36 {
            height: 9rem;
          }
          .xs\\:w-64 {
            width: 16rem;
          }
          .xs\\:h-64 {
            height: 16rem;
          }
          .xs\\:top-3 {
            top: 0.75rem;
          }
          .xs\\:top-8 {
            top: 2rem;
          }
          .xs\\:left-3 {
            left: 0.75rem;
          }
          .xs\\:bottom-3 {
            bottom: 0.75rem;
          }
          .xs\\:bottom-8 {
            bottom: 2rem;
          }
          .xs\\:right-3 {
            right: 0.75rem;
          }
          .xs\\:-top-1 {
            top: -0.25rem;
          }
          .xs\\:-left-1 {
            left: -0.25rem;
          }
          .xs\\:-bottom-1 {
            bottom: -0.25rem;
          }
          .xs\\:-right-1 {
            right: -0.25rem;
          }
          .xs\\:-right-2 {
            right: -0.5rem;
          }
          .xs\\:-left-2 {
            left: -0.5rem;
          }
          .xs\\:p-1\\.5 {
            padding: 0.375rem;
          }
          .xs\\:p-2 {
            padding: 0.5rem;
          }
          .xs\\:space-x-1\\.5 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(0.375rem * var(--tw-space-x-reverse));
            margin-left: calc(0.375rem * calc(1 - var(--tw-space-x-reverse)));
          }
          .xs\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
            --tw-space-x-reverse: 0;
            margin-right: calc(0.5rem * var(--tw-space-x-reverse));
            margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
          }
        }
      `}</style>
    </>
  );
};

export default Hero;
