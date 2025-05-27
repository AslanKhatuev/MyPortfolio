"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Code,
  MonitorSmartphone,
  Paintbrush,
  Server,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    title: "Nettsideutvikling",
    icon: <Code className="w-6 h-6" />,
    description:
      "Moderne og raske nettsider bygget med React og Next.js, skreddersydd for dine behov.",
  },
  {
    title: "Responsivt design",
    icon: <MonitorSmartphone className="w-6 h-6" />,
    description:
      "Optimalisert for alle enheter og skjermstørrelser – mobil, nettbrett og desktop.",
  },
  {
    title: "UI/UX Design",
    icon: <Paintbrush className="w-6 h-6" />,
    description:
      "Intuitivt og brukervennlig design laget i Figma og implementert med Tailwind CSS.",
  },
  {
    title: "Fullstack-applikasjoner",
    icon: <Server className="w-6 h-6" />,
    description:
      "Komplette løsninger med backend (Node.js, Express) og database (MySQL/MongoDB).",
  },
  {
    title: "Ytelse og SEO",
    icon: <Sparkles className="w-6 h-6" />,
    description:
      "Rask lastetid, god Lighthouse-score og søkemotoroptimalisering (SEO) innebygd.",
  },
  {
    title: "Sikkerhet og vedlikehold",
    icon: <ShieldCheck className="w-6 h-6" />,
    description:
      "Sikre løsninger med fokus på datahåndtering, personvern og jevnlig oppdatering.",
  },
];

const ServicesPage = () => {
  const [visible, setVisible] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-20 px-6">
      <div
        className={`max-w-6xl mx-auto transition-all duration-1000 ease-out transform ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Tilbake-knapp */}
        <div className="mb-12">
          <button
            onClick={() => router.back()}
            className="flex items-center space-x-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors px-4 py-2 rounded-lg"
            aria-label="Tilbake"
          >
            <ArrowLeft size={18} />
            <span>Tilbake</span>
          </button>
        </div>

        {/* Introduksjon */}
        <header className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Tjenester
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Jeg tilbyr skreddersydde tjenester innenfor webutvikling, design og
            digital strategi – alt med fokus på ytelse, brukeropplevelse og
            moderne teknologi.
          </p>
        </header>

        {/* Tjenestekort */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition duration-300"
              title={service.title}
            >
              <div className="flex items-center space-x-4 mb-4 text-[#00ACFB]">
                {service.icon}
                <h3 className="text-xl font-semibold text-white group-hover:underline">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-300 text-sm">{service.description}</p>
            </div>
          ))}
        </section>
      </div>
    </main>
  );
};

export default ServicesPage;
