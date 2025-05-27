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
      {/* Overlay */}
      <div
        className="fixed inset-0 z-[10000] bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="fixed inset-0 z-[10001] flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full mx-4 animate-modal-slide-in">
          <div className="p-8 text-center">
            {/* Error Icon */}
            <div className="mx-auto w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6">
              <X className="w-8 h-8 text-red-600" />
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>

            {/* Message */}
            <p className="text-gray-600 mb-8 leading-relaxed">{message}</p>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="bg-red-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              {buttonText}
            </button>
          </div>

          {/* Close X Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X size={24} />
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
      `}</style>
    </>
  );
};

export default ErrorModal;
