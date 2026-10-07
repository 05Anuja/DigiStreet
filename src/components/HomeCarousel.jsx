import React, { useState, useEffect, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

// Carousel Slides
import carousel1 from "../assets/images/carousel-1.jpeg";
import carousel2 from "../assets/images/carousel-2.jpeg";
import carousel3 from "../assets/images/carousel-3.png";
import carousel4 from "../assets/images/carousel-4.jpeg";

/**
 * HomeCarousel Component
 * Responsive hero image carousel for the Home page.
 * Rotates through 4 slides every 5 seconds (5000ms) with smooth transitions.
 * Includes interactive call-to-action button overlays on each slide.
 */
export default function HomeCarousel() {
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
      top: "63%",
      left: "7.2%",
      primaryButton: {
        text: "Explore Our Services",
        link: "/about",
      },
      secondaryButton: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    {
      id: 2,
      image: carousel2,
      alt: "Web Designing & Development Service - Silgate Solutions",
      top: "76.5%",
      left: "6.2%",
      primaryButton: {
        text: "Get a Custom Solution",
        link: "/about",
      },
      secondaryButton: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    {
      id: 3,
      image: carousel3,
      alt: "Marketing Solutions for Your Business - Silgate Solutions",
      top: "73.5%",
      left: "5.4%",
      primaryButton: {
        text: "Improve Your Rankings",
        link: "/about",
      },
      secondaryButton: {
        text: "Contact Us",
        link: "/contact",
      },
    },
    {
      id: 4,
      image: carousel4,
      alt: "Enterprise Digital & Technology Solutions - Silgate Solutions",
      top: "76%",
      left: "6.0%",
      primaryButton: {
        text: "Grow Your Social Presence",
        link: "/about",
      },
      secondaryButton: {
        text: "Contact Us",
        link: "/contact",
      },
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
      className="relative w-full overflow-hidden bg-slate-950 select-none"
      aria-roledescription="carousel"
      aria-label="Silgate Solutions Hero Carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Slides Container */}
      <div className="relative w-full overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`${index === currentIndex ? "relative w-full" : "absolute inset-0 w-full h-full"} will-change-transform ${getSlidePositionClass(
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
              className="w-full h-auto object-contain block"
              loading={index === 0 ? "eager" : "lazy"}
            />

            {/* Slide Action Buttons Overlay */}
            <div className="absolute left-[4%] sm:left-[5%] md:left-[6%] lg:left-[7%] bottom-[5%] sm:bottom-[7%] md:bottom-[9%] lg:bottom-[11%] z-20 flex items-center gap-1.5 sm:gap-2.5 md:gap-3.5 max-w-[92%] sm:max-w-none">
              {/* Button 1: Contact Us */}
              <Link
                to={slide.primaryButton?.link || "/contact"}
                className="inline-flex items-center justify-center font-semibold rounded-md sm:rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm lg:text-base px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 gap-1 sm:gap-1.5 md:gap-2 bg-[#00529B] text-white hover:bg-[#F36C3D] border border-[#00529B]/40 hover:border-[#F36C3D] shadow-md hover:shadow-lg hover:shadow-orange-500/20 active:scale-95 transition-all duration-200 tracking-tight whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00529B]"
                aria-label={`${slide.primaryButton?.text || "Contact Us"} - Silgate Solutions`}
              >
                <span>{slide.primaryButton?.text || "Contact Us"}</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>

              {/* Button 2: Dynamic Second Button */}
              <Link
                to={slide.secondaryButton?.link || "/services"}
                className="inline-flex items-center justify-center font-semibold rounded-md sm:rounded-lg md:rounded-xl text-[11px] sm:text-xs md:text-sm lg:text-base px-2.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-3 gap-1 sm:gap-1.5 md:gap-2 bg-[#F36C3D] text-white hover:bg-[#00529B] border border-[#F36C3D]/40 hover:border-[#00529B] shadow-md hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-200 tracking-tight whitespace-nowrap group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#F36C3D]"
                aria-label={`${slide.secondaryButton?.text} - Silgate Solutions`}
              >
                <span>{slide.secondaryButton?.text}</span>
                <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
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
