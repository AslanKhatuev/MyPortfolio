"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  ChevronDown,
  ArrowLeft,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { SuccessModal, ErrorModal } from "@/components/modals";
import { countryCodes, type CountryCode } from "@/data/countryCodes";

// Definer schema
const contactSchema = z.object({
  name: z.string().min(2, "Navnet må være minst 2 tegn"),
  email: z.string().email("Ugyldig e-postadresse"),
  phone: z
    .string()
    .min(1, "Telefonnummer er påkrevd")
    .refine((phone) => {
      const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");

      if (!/^\+\d+$/.test(cleanPhone)) {
        return false;
      }

      for (const country of countryCodes) {
        if (cleanPhone.startsWith(country.code)) {
          const numberWithoutCode = cleanPhone.slice(country.code.length);
          return country.length.includes(numberWithoutCode.length);
        }
      }

      return cleanPhone.length >= 8 && cleanPhone.length <= 15;
    }, "Ugyldig telefonnummer for valgt land"),
  message: z
    .string()
    .min(10, "Meldingen må være minst 10 tegn")
    .max(256, "Meldingen kan ikke være mer enn 256 tegn"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]); // Norge som standard
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    watch,
    setValue,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
  });

  // Overvåk message-feltet for telleren
  const messageValue = watch("message") || "";
  const messageLength = messageValue.length;

  const handleBackClick = () => {
    window.history.back();
  };

  const handleCountrySelect = (country: (typeof countryCodes)[0]) => {
    setSelectedCountry(country);
    setIsDropdownOpen(false);
    const fullPhoneNumber =
      country.code + (phoneNumber ? " " + phoneNumber : "");
    setValue("phone", fullPhoneNumber);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const phoneWithoutCode = value
      .replace(selectedCountry.code, "")
      .replace(/^\s+/, "");
    setPhoneNumber(phoneWithoutCode);
    const fullPhoneNumber =
      selectedCountry.code + (phoneWithoutCode ? " " + phoneWithoutCode : "");
    setValue("phone", fullPhoneNumber);
  };

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("https://formspree.io/f/mqaqvokr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Noe gikk galt under innsendingen");
      }

      const result = await response.json();

      if (result.ok) {
        setShowSuccessModal(true);
        reset();
        setPhoneNumber("");
        setSelectedCountry(countryCodes[0]);
      } else {
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Feil ved sending:", error);
      setShowErrorModal(true);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 py-12 sm:py-16 lg:py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-white">
        {/* Tilbake-knapp - Responsiv */}
        <div className="mb-6 sm:mb-8 lg:mb-10">
          <button
            onClick={handleBackClick}
            className="flex items-center space-x-2 text-white bg-gray-700 hover:bg-gray-600 transition-colors px-3 py-2 sm:px-4 sm:py-2 rounded-lg animate-fade-in-up text-sm sm:text-base"
          >
            <ArrowLeft size={16} className="sm:w-[18px] sm:h-[18px]" />
            <span>Tilbake</span>
          </button>
        </div>

        {/* Animert overskrift - Responsiv */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8 text-center animate-fade-in-up animation-delay-100">
          Kontakt meg
        </h1>

        {/* Animert kontaktinfo - Responsiv layout */}
        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 text-gray-300 text-sm text-center">
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-200">
            <Mail className="text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="transition-colors duration-300 hover:text-white text-xs sm:text-sm break-all">
              aslan.khatuev@outlook.com
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-400">
            <Phone className="text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="transition-colors duration-300 hover:text-white text-xs sm:text-sm">
              +47 400 40 10
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 animate-fade-in-up animation-delay-600">
            <MapPin className="text-blue-400 transition-all duration-300 hover:scale-110 hover:text-blue-300 w-5 h-5 sm:w-6 sm:h-6" />
            <p className="transition-colors duration-300 hover:text-white text-xs sm:text-sm">
              Skien, Norge
            </p>
          </div>
        </section>

        {/* Animert kontaktskjema - Responsiv padding */}
        <div className="bg-white/5 p-4 sm:p-6 lg:p-8 rounded-xl shadow-xl backdrop-blur-sm border border-white/10 animate-fade-in-up animation-delay-800 hover:bg-white/10 transition-all duration-500">
          <div className="space-y-4 sm:space-y-6">
            <div className="flex flex-col animate-slide-in-left animation-delay-1000">
              <label htmlFor="name" className="text-sm mb-1 text-gray-300">
                Navn <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                {...register("name")}
                className="p-3 rounded bg-gray-800 text-white border border-white/10 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 hover:bg-gray-700 text-sm sm:text-base"
                placeholder="Ditt navn"
              />
              {errors.name && (
                <span className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="flex flex-col animate-slide-in-right animation-delay-1200">
              <label htmlFor="email" className="text-sm mb-1 text-gray-300">
                E-post <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                {...register("email")}
                className="p-3 rounded bg-gray-800 text-white border border-white/10 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 hover:bg-gray-700 text-sm sm:text-base"
                placeholder="din@email.no"
              />
              {errors.email && (
                <span className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Telefonnummer - Fullstendig responsiv løsning */}
            <div className="flex flex-col animate-slide-in-left animation-delay-1300">
              <label htmlFor="phone" className="text-sm mb-1 text-gray-300">
                Telefonnummer <span className="text-red-400">*</span>
              </label>

              {/* Mobile-first: Stacked layout */}
              <div className="flex flex-col sm:flex-row w-full">
                {/* Landkode dropdown - Full width på mobil */}
                <div className="relative w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center justify-between w-full sm:justify-center sm:w-auto space-x-2 p-3 bg-gray-700 text-white border border-white/10 rounded sm:rounded-l sm:rounded-r-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 hover:bg-gray-600 sm:min-w-[120px] relative z-10 text-sm sm:text-base"
                  >
                    <div className="flex items-center space-x-2">
                      <span className="text-base sm:text-lg">
                        {selectedCountry.flag}
                      </span>
                      <span className="text-xs sm:text-sm font-medium">
                        {selectedCountry.code}
                      </span>
                    </div>
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-200 sm:w-4 sm:h-4 ${
                        isDropdownOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>

                {/* Telefonnummer input - Full width */}
                <div className="flex-1 mt-2 sm:mt-0">
                  <input
                    type="tel"
                    id="phone"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    className="w-full p-3 rounded sm:rounded-r sm:rounded-l-none bg-gray-800 text-white border border-white/10 sm:border-l-0 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all duration-300 hover:bg-gray-700 text-sm sm:text-base"
                    placeholder={selectedCountry.format.replace(/X/g, "0")}
                  />
                </div>
              </div>

              {errors.phone && (
                <span className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">
                  {errors.phone.message}
                </span>
              )}

              <span className="text-xs text-gray-400 mt-1">
                Format for {selectedCountry.country}: {selectedCountry.code}{" "}
                {selectedCountry.format}
              </span>
            </div>

            <div className="flex flex-col animate-slide-in-right animation-delay-1500">
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="message" className="text-sm text-gray-300">
                  Melding <span className="text-red-400">*</span>
                </label>
                <span
                  className={`text-xs transition-all duration-300 ${
                    messageLength < 10
                      ? "text-red-400 animate-pulse"
                      : messageLength > 256
                      ? "text-red-400 animate-pulse"
                      : "text-green-400"
                  }`}
                >
                  {messageLength}/256
                </span>
              </div>
              <textarea
                id="message"
                rows={4}
                {...register("message")}
                className="p-3 rounded bg-gray-800 text-white border border-white/10 focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none resize-vertical transition-all duration-300 hover:bg-gray-700 text-sm sm:text-base sm:rows-5"
                placeholder="Skriv meldingen din her..."
              />
              {errors.message && (
                <span className="text-red-400 text-xs sm:text-sm mt-1 animate-fade-in">
                  {errors.message.message}
                </span>
              )}
              {messageLength < 10 && messageLength > 0 && (
                <span className="text-yellow-400 text-xs mt-1 animate-fade-in">
                  Du trenger {10 - messageLength} tegn til
                </span>
              )}
            </div>

            <button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white font-medium py-3 px-4 sm:px-6 rounded hover:bg-blue-700 transition-all duration-500 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed animate-fade-in-up animation-delay-1700 hover:scale-105 hover:shadow-xl transform active:scale-95 text-sm sm:text-base"
            >
              <Send
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1 sm:w-[18px] sm:h-[18px]"
              />
              <span>{isSubmitting ? "Sender..." : "Send melding"}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Modaler */}
      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />

      <ErrorModal
        isOpen={showErrorModal}
        onClose={() => setShowErrorModal(false)}
      />

      {/* Dropdown menu - Responsiv posisjonering */}
      {isDropdownOpen && (
        <>
          {/* Overlay for å lukke dropdown */}
          <div
            className="fixed inset-0 z-[9998] bg-black/20"
            onClick={() => setIsDropdownOpen(false)}
          ></div>

          {/* Dropdown menu - Responsiv størrelse og posisjon */}
          <div
            className="fixed z-[9999] w-[calc(100vw-2rem)] max-w-80 max-h-60 overflow-y-auto bg-gray-900 border-2 border-blue-400/50 rounded-lg shadow-2xl mx-4"
            style={{
              top: window.innerWidth < 640 ? "auto" : "420px",
              bottom: window.innerWidth < 640 ? "20px" : "auto",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            {countryCodes.map((country, index) => (
              <button
                key={country.code}
                type="button"
                onClick={() => handleCountrySelect(country)}
                className={`w-full flex items-center justify-between p-3 text-left hover:bg-blue-600/20 transition-colors duration-200 text-xs sm:text-sm ${
                  index === 0 ? "rounded-t-lg" : ""
                } ${
                  index === countryCodes.length - 1
                    ? "rounded-b-lg"
                    : "border-b border-gray-700"
                } ${
                  selectedCountry.code === country.code ? "bg-blue-600/30" : ""
                }`}
              >
                <div className="flex items-center space-x-2 sm:space-x-3">
                  <span className="text-base sm:text-lg">{country.flag}</span>
                  <span className="text-white font-medium truncate">
                    {country.country}
                  </span>
                </div>
                <span className="text-blue-300 font-mono text-xs ml-2">
                  {country.code}
                </span>
              </button>
            ))}
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in {
          animation: fadeIn 0.5s ease-out forwards;
        }

        .animation-delay-100 {
          animation-delay: 0.1s;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-1200 {
          animation-delay: 1.2s;
        }

        .animation-delay-1300 {
          animation-delay: 1.3s;
        }

        .animation-delay-1500 {
          animation-delay: 1.5s;
        }

        .animation-delay-1700 {
          animation-delay: 1.7s;
        }

        /* Responsive textarea rows */
        @media (min-width: 640px) {
          textarea {
            min-height: 120px;
          }
        }

        /* Ensure no horizontal overflow */
        * {
          box-sizing: border-box;
        }
      `}</style>
    </main>
  );
};

export default ContactPage;
