"use client";
import React from "react";
import { X } from "lucide-react";

interface ErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
  buttonText?: string;
}

const ErrorModal: React.FC<ErrorModalProps> = ({
  isOpen,
  onClose,
  title = "Ops! Noe gikk galt",
  message = "Vi kunne ikke sende meldingen din akkurat nå. Vennligst prøv igjen om litt, eller send en e-post direkte til aslan.khatuev@outlook.com",
  buttonText = "Prøv igjen",
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay - Fully responsive */}
      <div
        className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container - Responsive padding and positioning */}
      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-3 xs:p-4 sm:p-6 md:p-8">
        {/* Modal - Responsive sizing and spacing */}
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-lg xl:max-w-xl animate-modal-slide-in relative">
          {/* Content - Responsive padding */}
          <div className="p-4 xs:p-6 sm:p-8 text-center">
            {/* Error Icon - Responsive sizing */}
            <div className="mx-auto w-12 h-12 xs:w-14 xs:h-14 sm:w-16 sm:h-16 bg-red-100 rounded-full flex items-center justify-center mb-3 xs:mb-4 sm:mb-6">
              <X className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 text-red-600" />
            </div>

            {/* Title - Responsive typography */}
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-gray-900 mb-2 xs:mb-3 sm:mb-4 leading-tight">
              {title}
            </h3>

            {/* Message - Responsive typography and spacing */}
            <p className="text-sm xs:text-base sm:text-lg text-gray-600 mb-4 xs:mb-6 sm:mb-8 leading-relaxed px-0 xs:px-2 sm:px-0">
              {message}
            </p>

            {/* Close Button - Responsive sizing and typography */}
            <button
              onClick={onClose}
              className="bg-red-600 text-white font-semibold py-2 px-4 xs:py-2.5 xs:px-6 sm:py-3 sm:px-8 rounded-md xs:rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl text-sm xs:text-base w-full xs:w-auto touch-manipulation min-h-[44px]"
            >
              {buttonText}
            </button>
          </div>

          {/* Close X Button - Responsive positioning and sizing */}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 xs:top-3 xs:right-3 sm:top-4 sm:right-4 text-gray-400 hover:text-gray-600 transition-colors p-1 xs:p-1.5 rounded-full hover:bg-gray-100 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Lukk modal"
          >
            <X size={18} className="xs:w-5 xs:h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        .animate-modal-slide-in {
          animation: modalSlideIn 0.3s ease-out forwards;
        }

        /* Responsive breakpoints for extra small screens */
        @media (max-width: 374px) {
          .animate-modal-slide-in {
            margin: 0.5rem;
          }
        }

        /* Ensure proper touch targets for mobile */
        .touch-manipulation {
          touch-action: manipulation;
        }

        /* Prevent text selection on buttons */
        button {
          user-select: none;
          -webkit-user-select: none;
        }

        /* Responsive font scaling for very small screens */
        @media (max-width: 320px) {
          h3 {
            font-size: 1rem;
            line-height: 1.25;
          }

          p {
            font-size: 0.8rem;
            line-height: 1.4;
          }

          button {
            font-size: 0.85rem;
            padding: 0.5rem 1rem;
          }
        }

        /* Enhanced accessibility and focus states */
        button:focus-visible {
          outline: 2px solid #3b82f6;
          outline-offset: 2px;
        }

        /* Smooth backdrop blur for better performance */
        @supports (backdrop-filter: blur(4px)) {
          .backdrop-blur-sm {
            backdrop-filter: blur(4px);
          }
        }

        /* Fallback for browsers without backdrop-filter */
        @supports not (backdrop-filter: blur(4px)) {
          .backdrop-blur-sm {
            background-color: rgba(0, 0, 0, 0.75);
          }
        }
      `}</style>
    </>
  );
};

export default ErrorModal;
