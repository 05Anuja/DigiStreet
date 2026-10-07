import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import { Target, Lightbulb, Cpu, TrendingUp } from "lucide-react";
import logoImg from "../assets/images/logo.png";

const capabilities = [
  {
    title: "Strategy-Led",
    description: "Solutions built around business requirements",
    icon: Target,
  },
  {
    title: "Creative Thinking",
    description: "Ideas designed to communicate and engage",
    icon: Lightbulb,
  },
  {
    title: "Technology-Driven",
    description: "Modern, scalable digital execution",
    icon: Cpu,
  },
  {
    title: "Growth-Focused",
    description: "Digital initiatives aligned with business outcomes",
    icon: TrendingUp,
  },
];

export default function About() {
  const handleScrollToCapabilities = () => {
    const el = document.getElementById("capabilities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const BrandedVisual = () => (
    <div className="relative group w-full max-w-lg mx-auto lg:max-w-none">
      {/* Subtle Ambient Brand Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#00529B]/20 via-[#F36C3D]/20 to-[#00529B]/20 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 pointer-events-none" />

      {/* Main Graphic Container */}
      <div className="relative bg-gradient-to-br from-[#091E3A] via-[#0B2548] to-[#041122] rounded-2xl p-6 sm:p-8 border border-[#1E3E6B] shadow-xl overflow-hidden aspect-[16/10] sm:aspect-[16/11] flex flex-col items-center justify-center text-center">
        {/* Subtle Background Circuit/Grid SVG */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="tech-grid"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 32 0 L 0 0 0 32"
                  fill="none"
                  stroke="rgba(255,255,255,0.4)"
                  strokeWidth="0.75"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tech-grid)" />
          </svg>
        </div>

        {/* Ambient Radial Lights */}
        <div className="absolute top-1/4 -left-10 w-44 h-44 bg-[#00529B]/50 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute bottom-1/4 -right-10 w-44 h-44 bg-[#F36C3D]/40 rounded-full blur-2xl pointer-events-none" />

        {/* Central Logo Container */}
        <div className="relative z-10 bg-white/95 backdrop-blur-md px-6 py-4 sm:px-8 sm:py-5 rounded-2xl shadow-2xl border border-white/60 transform group-hover:scale-105 transition-transform duration-300">
          <img
            src={logoImg}
            alt="Silgate Digital"
            className="h-9 sm:h-11 md:h-12 w-auto object-contain mx-auto"
          />
        </div>

        {/* Tech Indicator Nodes */}
        <div className="relative z-10 mt-5 sm:mt-6 flex items-center justify-center gap-3 flex-wrap">
          <span className="w-2 h-2 rounded-full bg-[#F36C3D] animate-ping" />
          <span className="w-2 h-2 rounded-full bg-[#00529B]" />
          <span className="w-2 h-2 rounded-full bg-[#F36C3D]" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1 py-10 sm:py-14 lg:py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Single Unified Responsive Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Visual (Desktop: Left col-span-5, Mobile/Tablet: Order 2) */}
            <div className="order-2 lg:order-1 lg:col-span-5 w-full">
              <BrandedVisual />
            </div>

            {/* Content & Heading (Desktop: Right col-span-7, Mobile/Tablet: Order 1) */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-5 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                About <span className="text-[#00529B]">Silgate Digital</span>
              </h1>

              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p className="text-slate-800 font-medium">
                  Silgate Digital helps businesses build, strengthen and grow
                  their digital presence through a combination of technology,
                  creativity and strategy.
                </p>
                <p>
                  We are a digital solutions company helping businesses create
                  strong online presence, engage the right audience and
                  achieve measurable growth through a combination of strategy,
                  technology, and creativity.
                </p>
              </div>

              <div className="pt-1 sm:pt-2">
                <Button
                  variant="primary"
                  size="lg"
                  icon="right"
                  onClick={handleScrollToCapabilities}
                  className="w-full sm:w-auto shadow-md hover:shadow-orange-500/20"
                >
                  Know More About Us
                </Button>
              </div>
            </div>
          </div>

          {/* Unified Capability Points Section */}
          <div
            id="capabilities"
            className="mt-12 sm:mt-16 lg:mt-20 pt-10 sm:pt-12 border-t border-slate-200/80"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {capabilities.map((cap) => (
                <div
                  key={cap.title}
                  className="group bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] border border-blue-200/60 flex items-center justify-center mb-4 sm:mb-5 group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] group-hover:border-orange-200 transition-colors duration-300">
                      <cap.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00529B] transition-colors mb-2">
                      {cap.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {cap.description}
                    </p>
                  </div>
                  <div className="w-7 sm:w-8 h-0.5 bg-[#00529B]/20 group-hover:bg-[#F36C3D] group-hover:w-12 sm:group-hover:w-14 transition-all duration-300 mt-5 rounded-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
