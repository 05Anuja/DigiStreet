import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";

// Carousel Slides
import carousel1 from "../assets/images/carousel-1.jpeg";
import carousel2 from "../assets/images/carousel-2.jpeg";
import carousel3 from "../assets/images/carousel-3.jpeg";
import carousel4 from "../assets/images/carousel-4.jpeg";

/**
 * Default configurable overlay content for Carousel 4 ONLY.
 * Reuses existing brand copy from Silgate Solutions.
 * Update these fields when custom text is provided.
 */
const DEFAULT_CAROUSEL_4_CONTENT = {
  eyebrow: "Enterprise Digital & Technology Solutions",
  title: "Transforming Global Brands with Strategic Innovation",
  description:
    "Scalable digital architectures, strategic brand marketing, and high-recall communication designed to accelerate compounding enterprise growth.",
  buttonText: "Discuss Your Project",
  buttonLink: "/contact",
};

/**
 * HomeCarousel Component
 * Full-screen responsive hero image carousel for the Home page.
 * Rotates through 4 slides every 5 seconds (5000ms) with smooth transitions.
 * Only slide 4 displays the configured text overlay.
 */
export default function HomeCarousel({
  carousel4Content = DEFAULT_CAROUSEL_4_CONTENT,
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [direction, setDirection] = useState("next"); // "next" | "prev"
  const timerRef = useRef(null);

  // Touch tracking for mobile swipe support
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const slides = [
    {
      id: 1,
      image: carousel1,
      alt: "Professional SEO Service in Delhi - Silgate Solutions",
      overlay: false,
    },
    {
      id: 2,
      image: carousel2,
      alt: "Web Designing & Development Service - Silgate Solutions",
      overlay: false,
    },
    {
      id: 3,
      image: carousel3,
      alt: "Marketing Solutions for Your Business - Silgate Solutions",
      overlay: false,
    },
    {
      id: 4,
      image: carousel4,
      alt: "Enterprise Digital & Technology Solutions - Silgate Solutions",
      overlay: true,
      ...carousel4Content,
    },
  ];

  // Reset & start the 5-second autoplay timer
  const startTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    timerRef.current = setInterval(() => {
      setDirection("next");
      setCurrentIndex((curr) => {
        setPrevIndex(curr);
        return (curr + 1) % slides.length;
      });
    }, 5000);
  }, [slides.length]);

  // Setup autoplay on mount and cleanup on unmount
  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [startTimer]);

  // Navigation handlers that immediately change slide and reset 5s timer
  const handleNext = () => {
    setDirection("next");
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    startTimer();
  };

  const handlePrev = () => {
    setDirection("prev");
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    startTimer();
  };

  const handleDotClick = (index) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "next" : "prev");
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    startTimer();
  };

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    touchStartX.current = 0;
    touchEndX.current = 0;
  };

  // Compute CSS classes for horizontal slide transition
  const getSlidePositionClass = (index) => {
    if (index === currentIndex) {
      return "translate-x-0 opacity-100 z-10 pointer-events-auto transition-transform duration-700 ease-in-out";
    }
    if (index === prevIndex) {
      return direction === "next"
        ? "-translate-x-full opacity-100 z-0 pointer-events-none transition-transform duration-700 ease-in-out"
        : "translate-x-full opacity-100 z-0 pointer-events-none transition-transform duration-700 ease-in-out";
    }
    return direction === "next"
      ? "translate-x-full opacity-0 z-0 pointer-events-none"
      : "-translate-x-full opacity-0 z-0 pointer-events-none";
  };

  return (
    <section
      className="relative w-full aspect-[1600/595] max-h-[calc(100vh-5rem)] overflow-hidden bg-slate-950 select-none"
      style={{ aspectRatio: "1600 / 595" }}
      aria-roledescription="carousel"
      aria-label="Silgate Solutions Hero Carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full h-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full will-change-transform ${getSlidePositionClass(
              index,
            )}`}
            aria-hidden={currentIndex !== index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${slide.id} of ${slides.length}`}
          >
            {/* Slide Image */}
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center block"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Carousel 4 ONLY: Overlay Content */}
            {slide.overlay && (
              <div className="absolute inset-0 bg-gradient-to-r from-[#00386c]/90 via-[#00529B]/65 to-transparent flex items-center">
                <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-16 w-full">
                  <div className="max-w-xl text-white">
                    {slide.eyebrow && (
                      <span className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-md bg-[#FFF1EC] text-[#F36C3D] font-bold text-xs sm:text-sm uppercase tracking-wider mb-3 sm:mb-4 shadow-sm border border-[#FED7AA]">
                        {slide.eyebrow}
                      </span>
                    )}

                    {slide.title && (
                      <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight mb-3 sm:mb-4">
                        {slide.title}
                      </h2>
                    )}

                    {slide.description && (
                      <p className="text-slate-100 text-xs sm:text-sm md:text-base leading-relaxed mb-5 sm:mb-6 max-w-lg">
                        {slide.description}
                      </p>
                    )}

                    {slide.buttonText && (
                      <div>
                        <Link
                          to={slide.buttonLink || "/contact"}
                          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-lg bg-[#F36C3D] hover:bg-[#dd582b] text-white font-bold text-xs sm:text-sm md:text-base shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 active:scale-95 group cursor-pointer"
                        >
                          <span>{slide.buttonText}</span>
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Previous Arrow Button */}
      {/* <button
        type="button"
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#00529B] text-white/90 hover:text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Previous slide"
        title="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button> */}

      {/* Next Arrow Button */}
      {/* <button
        type="button"
        onClick={handleNext}
        className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/40 hover:bg-[#00529B] text-white/90 hover:text-white backdrop-blur-md border border-white/20 shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Next slide"
        title="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button> */}

      {/* Slide Indicators / Dots */}
      {/* <div
        className="absolute bottom-5 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5 sm:gap-3 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/15 shadow-xl"
        role="tablist"
        aria-label="Slide indicators"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-white cursor-pointer ${
              currentIndex === index
                ? "w-8 h-2.5 bg-[#F36C3D] shadow-md shadow-[#F36C3D]/40"
                : "w-2.5 h-2.5 bg-white/60 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-selected={currentIndex === index}
            role="tab"
          />
        ))}
      </div> */}
    </section>
  );
}
