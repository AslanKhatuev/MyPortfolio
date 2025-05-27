"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

const AboutPage = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-6">
      <div
        className={`max-w-5xl mx-auto transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tilbake-knapp */}
        <div className="mb-10">
          <button
            onClick={handleBack}
            className="flex items-center space-x-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
          >
            <ArrowLeft size={18} />
            <span>Tilbake</span>
          </button>
        </div>

        {/* Intro */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Om meg
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Jeg er en frontend-utvikler med sterk lidenskap for teknologi,
            design og problemløsing. Mitt mål er å skape løsninger som er både
            funksjonelle og vakre.
          </p>
        </div>

        {/* Profilbeskrivelse */}
        <section className="mb-16 space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            Jeg heter <strong className="text-white">Aslan Khatuev</strong>, og
            jeg har bakgrunn både som elektriker og frontendutvikler. Etter å ha
            utdannet meg innen webutvikling, har jeg utviklet profesjonelle
            løsninger for bedrifter og klienter.
          </p>
          <p>
            Jeg spesialiserer meg i React, Next.js, Tailwind CSS og TypeScript,
            og jeg elsker å jobbe med UI/UX-design. Jeg har også erfaring med
            backend (Node.js, Express) og databaser som MySQL og Strapi.
          </p>
          <p>
            Jeg er detaljorientert, løsningsfokusert og trives med å bygge
            moderne, responsive og brukervennlige applikasjoner. Jeg bygger ikke
            bare nettsider – jeg bygger opplevelser.
          </p>
        </section>

        {/* Fakta / Verdier */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-center">
          {[
            { label: "Studerte i Frontend Utvikling", value: "2+ år" },
            { label: "Reel Fullførte prosjekter", value: "1+" },
            { label: "Kundetilfredshet", value: "100%" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-white/10"
            >
              <div className="text-3xl font-bold text-white mb-2">
                {item.value}
              </div>
              <div className="text-gray-400 text-sm uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </section>

        {/* Kompetanse */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">
            Kjernekompetanse
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300 text-sm">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Tailwind CSS",
              "Node.js",
              "Express",
              "MySQL",
              "Strapi",
              "Figma",
              "Git & GitHub",
              "Responsive Design",
              "UX/UI-tenkning",
            ].map((skill, i) => (
              <div
                key={i}
                className="bg-white/5 px-4 py-2 rounded-lg text-center border border-white/10"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Avslutning */}
        <section className="text-center text-gray-400 text-lg">
          <p>
            Mitt mål er å bidra med kode som skaper verdi og teknologi som gjør
            livet enklere. Jeg er alltid åpen for spennende prosjekter og nye
            samarbeid.
          </p>
          <p className="mt-4 font-semibold text-white">
            La oss skape noe stort sammen.
          </p>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
