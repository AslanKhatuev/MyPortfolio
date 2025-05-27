"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Download, Mail, Phone, MapPin, Globe, ArrowLeft } from "lucide-react";

const CV = () => {
  const router = useRouter();
  const cvRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleDownload = async () => {
    if (!cvRef.current) return;

    setIsDownloading(true);

    try {
      // Dynamisk import av html2pdf
      const html2pdf = (await import("html2pdf.js")).default;

      // Konfigurasjon for bedre PDF-kvalitet
      const options = {
        margin: [0.5, 0.5, 0.5, 0.5],
        filename: "Aslan_Khatuev_CV.pdf",
        image: {
          type: "jpeg",
          quality: 0.98,
        },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          backgroundColor: "#1f2937", // Matcher bakgrunnsfarge
        },
        jsPDF: {
          unit: "in",
          format: "a4",
          orientation: "portrait",
        },
        pagebreak: { mode: ["avoid-all", "css", "legacy"] },
      };

      // Generer og last ned PDF
      await html2pdf().set(options).from(cvRef.current).save();
    } catch (error) {
      console.error("Feil ved PDF-generering:", error);

      // Fallback: Bruk nettleserens print-funksjon
      const printContent = cvRef.current.innerHTML;
      const originalContent = document.body.innerHTML;

      // Lag en midlertidig print-versjon
      document.body.innerHTML = `
        <div style="
          font-family: system-ui, -apple-system, sans-serif;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        ">
          ${printContent}
        </div>
      `;

      // Trigger print
      window.print();

      // Gjenopprett original innhold
      document.body.innerHTML = originalContent;
      window.location.reload(); // Refresh for å gjenopprette React-state
    } finally {
      setIsDownloading(false);
    }
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <button
              onClick={handleBack}
              className="flex items-center space-x-2 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Tilbake</span>
            </button>
            <h1 className="text-4xl font-bold text-white">Min CV</h1>
          </div>
          <button
            onClick={handleDownload}
            disabled={isDownloading}
            className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Download
              size={20}
              className={isDownloading ? "animate-spin" : ""}
            />
            <span>{isDownloading ? "Genererer PDF..." : "Last ned PDF"}</span>
          </button>
        </div>

        {/* CV Content med animasjon */}
        <div
          ref={cvRef}
          className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl transform transition-all duration-1000 ease-out print:bg-white print:shadow-none print:rounded-none ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={
            {
              // CSS-variabler for PDF-generering (med TypeScript casting)
              "--pdf-bg": "#ffffff",
              "--pdf-text": "#333333",
              "--pdf-accent": "#22c55e",
            } as React.CSSProperties
          }
        >
          {/* Personal Info */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row md:items-center md:space-x-8 mb-8">
              <div className="mb-6 md:mb-0">
                <img
                  src="/aslan.jpg"
                  alt="Aslan Khatuev"
                  className="w-32 h-32 rounded-full object-cover border-4 border-white/20 print:border-gray-300"
                  crossOrigin="anonymous"
                />
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold text-white mb-4 print:text-black">
                  Aslan Khatuev
                </h2>
                <p className="text-xl text-green-400 mb-4 print:text-green-600">
                  Frontend Utvikler & UI/UX Designer
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 print:text-gray-700">
                  <div className="flex items-center space-x-2">
                    <Mail size={16} />
                    <span>aslan.khatuev@outlook.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone size={16} />
                    <span>+47 400 40 101</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} />
                    <span>Skien, Norge</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe size={16} />
                    <span>www.dinportfolio.no</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* About Me */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-4 border-b border-green-500 pb-2 print:text-black print:border-green-600">
              Om meg
            </h3>
            <p className="text-gray-300 leading-relaxed print:text-gray-700">
              Har erfaring som webutvikler med en brennende lidenskap for å
              skape moderne, brukervennlige og visuelt tiltalende nettsider.
              Spesialiserer meg innenfor React, Next.js og moderne
              JavaScript-teknologier, med solid kompetanse i TypeScript, HTML,
              CSS og UI/UX-design. Jeg trives med å løse komplekse problemer,
              samarbeide i team, og levere høykvalitets og skalerbar kode som
              gir verdi for både brukere og virksomheter. Jeg har også god
              kunnskap om moderne arbeidsmetodikker som Scrum og Agile, og er
              vant til å jobbe i tverrfaglige team med fokus på kontinuerlig
              forbedring, smidig utvikling og hyppige leveranser.
            </p>
          </section>

          {/* Experience */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-green-500 pb-2 print:text-black print:border-green-600">
              Arbeidserfaring
            </h3>
            <div className="space-y-8">
              <div className="border-l-4 border-green-500 pl-6 print:border-green-600">
                <h4 className="text-xl font-semibold text-white print:text-black">
                  Junior Frontend Developer
                </h4>
                <span className="text-green-400 font-medium print:text-green-600">
                  2025 - ferdig
                </span>
                <p className="text-gray-400 mb-2 print:text-gray-600">
                  The Cave Tech, Oslo
                </p>
                <ul className="text-gray-300 space-y-1 print:text-gray-700">
                  <li>
                    • Utviklet og vedlikeholdt komplekse React/Next.js
                    applikasjon
                  </li>
                  <li>• Design ansvarlig for mobil og tablet versjon</li>
                  <li>
                    • Anasvarlig for statiske sider, komponenter og Strapi
                  </li>
                  <li>• Forbedret ytelse med 40% gjennom kodeoptimalisering</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-green-500 pb-2 print:text-black print:border-green-600">
              Utdanning
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-500 pl-6 print:border-purple-600">
                <h4 className="text-xl font-semibold text-white print:text-black">
                  Fagskole - Frontend utvikling
                </h4>
                <span className="text-purple-400 font-medium print:text-purple-600">
                  2023 - 2025
                </span>
                <p className="text-gray-400 print:text-gray-600">
                  Gokstad Akademiet i Sandefjord
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 print:border-purple-600">
                <h4 className="text-xl font-semibold text-white print:text-black">
                  Bore og Brønntech
                </h4>
                <span className="text-purple-400 font-medium print:text-purple-600">
                  2022
                </span>
                <p className="text-gray-400 print:text-gray-600">
                  Riggutdanning
                </p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 print:border-purple-600">
                <h4 className="text-xl font-semibold text-white print:text-black">
                  Elektrofag
                </h4>
                <span className="text-purple-400 font-medium print:text-purple-600">
                  2021 - 2022
                </span>
                <p className="text-gray-400 print:text-gray-600">K2Utdanning</p>
              </div>

              <div className="border-l-4 border-purple-500 pl-6 print:border-purple-600">
                <h4 className="text-xl font-semibold text-white print:text-black">
                  Service Samferdsel, Salg, Service og Sikkerhet og Almenn
                  påbygging
                </h4>
                <span className="text-purple-400 font-medium print:text-purple-600">
                  2007 - 2010
                </span>
                <p className="text-gray-400 print:text-gray-600">
                  Skien Videregåendeskole
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="mb-12">
            <h3 className="text-2xl font-bold text-white mb-6 border-b border-green-500 pb-2 print:text-black print:border-green-600">
              Tekniske ferdigheter
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div>
                <h4 className="text-lg font-semibold text-green-400 mb-3 print:text-green-600">
                  Frontend
                </h4>
                <ul className="text-gray-300 space-y-1 print:text-gray-700">
                  <li>React / Next.js</li>
                  <li>TypeScript</li>
                  <li>Vue</li>
                  <li>Vanilla JS</li>
                  <li>Tailwind CSS</li>
                  <li>HTML / CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-blue-400 mb-3 print:text-blue-600">
                  Backend
                </h4>
                <ul className="text-gray-300 space-y-1 print:text-gray-700">
                  <li>Node.js</li>
                  <li>Express.js</li>
                  <li>MySQL</li>
                  <li>Strapi</li>
                  <li>PostMan</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-purple-400 mb-3 print:text-purple-600">
                  Verktøy
                </h4>
                <ul className="text-gray-300 space-y-1 print:text-gray-700">
                  <li>Git / GitHub</li>
                  <li>VS Code</li>
                  <li>Figma</li>
                  <li>Adobe XD</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Print-specific styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white !important;
            color: black !important;
          }

          .print\\:bg-white {
            background: white !important;
          }

          .print\\:text-black {
            color: black !important;
          }

          .print\\:text-gray-700 {
            color: #374151 !important;
          }

          .print\\:text-gray-600 {
            color: #4b5563 !important;
          }

          .print\\:text-green-600 {
            color: #16a34a !important;
          }

          .print\\:text-blue-600 {
            color: #2563eb !important;
          }

          .print\\:text-purple-600 {
            color: #9333ea !important;
          }

          .print\\:border-gray-300 {
            border-color: #d1d5db !important;
          }

          .print\\:border-green-600 {
            border-color: #16a34a !important;
          }

          .print\\:border-purple-600 {
            border-color: #9333ea !important;
          }

          .print\\:shadow-none {
            box-shadow: none !important;
          }

          .print\\:rounded-none {
            border-radius: 0 !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CV;
