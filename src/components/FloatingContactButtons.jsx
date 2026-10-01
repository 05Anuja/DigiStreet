import React from "react";
import { Phone, Mail } from "lucide-react";

/**
 * Company Contact Information
 * Reused from project contact records (Contact.jsx, Footer.jsx)
 */
const WHATSAPP_NUMBER = "918108810916";
const PHONE_NUMBER = "+918108810916";
const EMAIL_ADDRESS = "manoj@silgatehiring.com";

/**
 * Pixel-perfect WhatsApp SVG Icon
 */
function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12.031 2C6.516 2 2.03 6.484 2.03 12c0 1.954.562 3.844 1.63 5.474L2 22l4.672-1.614C8.24 21.36 10.1 21.92 12.031 21.92c5.516 0 10-4.484 10-9.92 0-5.516-4.484-10-10-10zm5.834 14.156c-.244.686-1.42 1.314-1.958 1.396-.494.075-1.127.108-3.642-.932-3.218-1.33-5.286-4.606-5.446-4.82-.16-.214-1.3-1.73-1.3-3.3 0-1.57.82-2.343 1.112-2.663.292-.32.64-.4.854-.4.214 0 .428.002.614.011.196.01.46-.074.72.55.268.643.914 2.23.994 2.39.08.16.134.348.026.562-.107.214-.16.348-.32.535-.16.187-.336.417-.48.56-.16.16-.327.334-.14.655.187.32.83 1.366 1.782 2.214 1.224 1.09 2.256 1.428 2.576 1.588.32.16.508.134.695-.08.187-.214.8-0.934 1.014-1.254.214-.32.428-.268.72-.16.293.107 1.85.872 2.168 1.033.32.16.534.24.614.374.08.134.08.775-.164 1.461z" />
    </svg>
  );
}

/**
 * FloatingContactButtons
 * Global floating contact widget positioned at the bottom-right corner of the viewport.
 * Features 3 contact options in a single horizontal row: WhatsApp, Phone, and Email.
 */
export default function FloatingContactButtons() {
  return (
    <div
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex flex-row items-center gap-2.5 md:gap-3 select-none pointer-events-auto"
      role="region"
      aria-label="Quick contact options"
    >
      {/* 1. WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#25D366]"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppIcon className="w-5 h-5 md:w-6 md:h-6" />

        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900/90 text-white text-xs font-medium rounded-md shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
          WhatsApp
        </span>
      </a>

      {/* 2. Phone Call Button */}
      <a
        href={`tel:${PHONE_NUMBER}`}
        className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#00529B] hover:bg-[#003f77] text-white shadow-lg shadow-[#00529B]/30 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#00529B]"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5 md:w-[22px] md:h-[22px]" />

        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900/90 text-white text-xs font-medium rounded-md shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
          Call Us
        </span>
      </a>

      {/* 3. Email Button */}
      <a
        href={`mailto:${EMAIL_ADDRESS}`}
        className="group relative flex items-center justify-center w-11 h-11 md:w-12 md:h-12 rounded-full bg-[#F36C3D] hover:bg-[#dd582b] text-white shadow-lg shadow-[#F36C3D]/30 hover:shadow-xl hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#F36C3D]"
        aria-label="Send us an email"
      >
        <Mail className="w-5 h-5 md:w-[22px] md:h-[22px]" />

        {/* Tooltip */}
        <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-zinc-900/90 text-white text-xs font-medium rounded-md shadow-md pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap hidden md:block">
          Email Us
        </span>
      </a>
    </div>
  );
}
