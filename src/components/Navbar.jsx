import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, Phone, ArrowUpRight } from "lucide-react";

import { Youtube, Linkedin, Instagram } from "../assets/icons/SocialIcons";

import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const location = useLocation();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  /* =========================
     SCROLL EFFECT
  ========================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  /* =========================
     CLOSE MOBILE MENU ON ROUTE CHANGE
  ========================= */
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    setMobileExpandedSection(null);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  /* =========================
     MOBILE ACCORDION
  ========================= */
  const toggleMobileSubmenu = (name) => {
    setMobileExpandedSection((current) => (current === name ? null : name));
  };

  /* =========================
     CLOSE MOBILE MENU
  ========================= */
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileExpandedSection(null);
  };

  /* =========================
     ACTIVE ROUTE
  ========================= */
  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-[100] w-full">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav
        className={`
          w-full
          bg-white/95
          backdrop-blur-md
          border-b border-slate-200
          transition-all duration-300
          ${scrolled ? "py-2 shadow-md" : "py-3"}
        `}
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-8
            flex
            items-center
            justify-between
            gap-4
          "
        >
          {/* =================================================
              LOGO
          ================================================== */}
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="flex items-center flex-shrink-0"
          >
            <img
              src={logoImg}
              alt="Silgate Solutions"
              className="
                h-9
                sm:h-10
                lg:h-12
                w-auto
                object-contain
              "
            />
          </Link>

          {/* =================================================
              DESKTOP NAVIGATION
          ================================================== */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {/* HOME */}
            <Link
              to="/"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Home
            </Link>

            {/* =================================================
                ABOUT US
            ================================================== */}
            <Link
              to="/about"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/about")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              About Us
            </Link>

            {/* =================================================
                SERVICES
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className={`
                  flex
                  items-center
                  gap-1
                  px-3
                  py-2
                  text-sm
                  font-medium
                  rounded-lg
                  transition-colors
                  ${
                    isParentActive("/services")
                      ? "text-[#00529B] font-semibold"
                      : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                  }
                `}
              >
                Services
                <ChevronDown className="w-3.5 h-3.5" />
              </Link>

              {activeDropdown === "services" && (
                <div
                  className="
                    absolute
                    top-full
                    -left-40
                    xl:-left-32
                    mt-1
                    w-[900px]
                    max-w-[90vw]
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    border
                    border-zinc-100
                    p-6
                  "
                >
                  <div className="grid grid-cols-4 gap-6 text-sm">
                    {/* COLUMN 1 */}
                    <div>
                      <h3 className="font-bold text-xs text-[#00529B] uppercase tracking-wider mb-3">
                        Creative & Brand
                      </h3>

                      <div className="space-y-2">
                        <Link
                          to="/services/ai-video-production-agency"
                          className="block hover:text-[#00529B]"
                        >
                          AI Generated Videos
                        </Link>

                        <Link
                          to="/services/creative-communication"
                          className="block hover:text-[#00529B]"
                        >
                          Creative & Communication
                        </Link>

                        <Link
                          to="/services/creative-communication/brand-strategy"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Brand Strategy
                        </Link>

                        <Link
                          to="/services/creative-communication/logo-identity-design"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Logo & Identity Design
                        </Link>

                        <Link
                          to="/services/creative-communication/product-packaging"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Product Packaging
                        </Link>

                        <Link
                          to="/services/brand-video-production-agency"
                          className="block hover:text-[#00529B]"
                        >
                          Brand Video Production
                        </Link>

                        <Link
                          to="/services/ugc-video-agency"
                          className="block hover:text-[#00529B]"
                        >
                          UGC Video Agency
                        </Link>
                      </div>
                    </div>

                    {/* COLUMN 2 */}
                    <div>
                      <h3 className="font-bold text-xs text-[#00529B] uppercase tracking-wider mb-3">
                        Content & Reputation
                      </h3>

                      <div className="space-y-2">
                        <Link
                          to="/services/content-marketing"
                          className="block hover:text-[#00529B]"
                        >
                          Content Marketing
                        </Link>

                        <Link
                          to="/services/content-marketing/seo-copywriting"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          SEO Copywriting
                        </Link>

                        <Link
                          to="/services/content-marketing/video-tvc-scripts"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Video & TVC Scripts
                        </Link>

                        <Link
                          to="/services/online-reputation-management"
                          className="block hover:text-[#00529B]"
                        >
                          Online Reputation Mgmt
                        </Link>

                        <Link
                          to="/services/online-reputation-management/brand-reputation-management"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Brand Reputation
                        </Link>

                        <Link
                          to="/services/online-reputation-management/corporate-reputation-management"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Corporate Reputation
                        </Link>

                        <Link
                          to="/services/ad-management"
                          className="block hover:text-[#00529B]"
                        >
                          Ad Management
                        </Link>
                      </div>
                    </div>

                    {/* COLUMN 3 */}
                    <div>
                      <h3 className="font-bold text-xs text-[#00529B] uppercase tracking-wider mb-3">
                        Search & Performance
                      </h3>

                      <div className="space-y-2">
                        <Link
                          to="/services/seo-services"
                          className="block hover:text-[#00529B]"
                        >
                          SEO Services
                        </Link>

                        <Link
                          to="/aeo-services-company-in-india"
                          className="block hover:text-[#00529B]"
                        >
                          AEO Services
                        </Link>

                        <Link
                          to="/generative-engine-optimization-india"
                          className="block hover:text-[#00529B]"
                        >
                          GEO Services
                        </Link>

                        <Link
                          to="/performance-marketing-agency"
                          className="block hover:text-[#00529B]"
                        >
                          Performance Marketing
                        </Link>

                        <Link
                          to="/services/b2b-seo-company-in-india"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          B2B SEO Company
                        </Link>

                        <Link
                          to="/services/local-seo-company-in-india"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Local SEO & GMB
                        </Link>

                        <Link
                          to="/services/search-engine-marketing"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Search Engine Marketing
                        </Link>
                      </div>
                    </div>

                    {/* COLUMN 4 */}
                    <div>
                      <h3 className="font-bold text-xs text-[#00529B] uppercase tracking-wider mb-3">
                        Social & Tech
                      </h3>

                      <div className="space-y-2">
                        <Link
                          to="/services/social-media-marketing"
                          className="block hover:text-[#00529B]"
                        >
                          Social Media Marketing
                        </Link>

                        <Link
                          to="/services/influencer-marketing-agency"
                          className="block hover:text-[#00529B]"
                        >
                          Influencer Marketing
                        </Link>

                        <Link
                          to="/services/website-development-india"
                          className="block hover:text-[#00529B]"
                        >
                          Website Development
                        </Link>

                        <Link
                          to="/services/website-development-india/corporate-website-design"
                          className="block text-xs text-slate-500 hover:text-[#F36C3D]"
                        >
                          Corporate Web Design
                        </Link>

                        <Link
                          to="/services/web-application-development"
                          className="block hover:text-[#00529B]"
                        >
                          Web App Development
                        </Link>

                        <Link
                          to="/rankstreet"
                          className="block hover:text-[#00529B]"
                        >
                          RankStreet
                        </Link>

                        <Link
                          to="/managed-it-services-usa"
                          className="block hover:text-[#00529B]"
                        >
                          Managed IT Services
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div
                    className="
                    mt-6
                    pt-4
                    border-t
                    border-zinc-100
                    flex
                    items-center
                    justify-between
                    gap-4
                  "
                  >
                    <span className="text-xs text-zinc-500">
                      Explore our complete digital services.
                    </span>

                    <Link
                      to="/services"
                      className="
                        text-xs
                        font-semibold
                        text-[#00529B]
                        flex
                        items-center
                        gap-1
                      "
                    >
                      View All Services
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                PRODUCTS
            ================================================== */}
            {/* <Link
              to="/products"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/products")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Products
            </Link> */}

            {/* =================================================
                CLIENTS
            ================================================== */}
            {/* <Link
              to="/clients"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/clients")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Clients
            </Link> */}

            {/* =================================================
                INDUSTRY
            ================================================== */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industry")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="
                  flex
                  items-center
                  gap-1
                  px-3
                  py-2
                  text-sm
                  font-medium
                  text-zinc-700
                  hover:text-[#00529B]
                  hover:bg-zinc-50
                  rounded-lg
                  transition-colors
                "
              >
                Industries
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {activeDropdown === "industry" && (
                <div
                  className="
                    absolute
                    top-full
                    left-0
                    mt-1
                    w-[680px]
                    max-w-[90vw]
                    bg-white
                    rounded-2xl
                    shadow-2xl
                    border
                    border-zinc-100
                    p-6
                  "
                >
                  <h3 className="font-bold text-xs text-[#00529B] uppercase tracking-wider mb-3">
                    Industries We Excel In
                  </h3>

                  <div className="grid grid-cols-3 gap-3 text-sm">
                    {[
                      ["/automotive-digital-marketing-agency", "🚗 Automotive"],
                      [
                        "/beauty-skin-care-digital-marketing-agency",
                        "✨ Beauty & Skin Care",
                      ],
                      [
                        "/digital-marketing-agency-for-business-to-business",
                        "🏢 B2B Marketing",
                      ],
                      [
                        "/digital-marketing-agency-for-education-industry",
                        "🎓 Education",
                      ],
                      [
                        "/digital-marketing-agency-for-food-beverage",
                        "🍔 Food & Beverage",
                      ],
                      [
                        "/digital-marketing-services-for-healthcare",
                        "🩺 Healthcare",
                      ],
                      [
                        "/digital-marketing-agency-for-real-estate",
                        "🏠 Real Estate",
                      ],
                      [
                        "/digital-marketing-for-financial-services",
                        "💳 Financial Services",
                      ],
                      [
                        "/digital-marketing-for-travel-tourism",
                        "✈️ Travel & Tourism",
                      ],
                      [
                        "/digital-marketing-services-for-ev",
                        "⚡ Electric Vehicles",
                      ],
                      [
                        "/digital-marketing-services-for-home-decor",
                        "🛋️ Home Decor",
                      ],
                      ["/digital-marketing-for-ecommerce-2", "🛍️ E-Commerce"],
                    ].map(([path, label]) => (
                      <Link
                        key={path}
                        to={path}
                        className="
                          p-2
                          rounded-lg
                          text-zinc-700
                          hover:text-[#00529B]
                          hover:bg-zinc-50
                          transition-colors
                        "
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* =================================================
                RESOURCES
            ================================================== */}
            {/* <Link
              to="/resources"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/resources")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Resources
            </Link> */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("resources")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              {/* Resources Button */}
              <button
                type="button"
                className="
      group
      flex
      items-center
      gap-1.5
      px-4
      py-2.5
      text-sm
      font-semibold
      text-zinc-700
      hover:text-[#00529B]
      hover:bg-[#00529B]/5
      rounded-lg
      transition-all
      duration-200
    "
              >
                Resources
                <ChevronDown
                  className={`
        w-4
        h-4
        transition-transform
        duration-200
        ${
          activeDropdown === "resources"
            ? "rotate-180 text-[#00529B]"
            : "text-zinc-500"
        }
      `}
                />
              </button>

              {/* Resources Dropdown */}
              {activeDropdown === "resources" && (
                <div
                  className="
        absolute
        top-full
        left-1/2
        -translate-x-1/2
        mt-3
        w-[420px]
        max-w-[90vw]
        bg-white
        rounded-2xl
        border
        border-zinc-100
        shadow-[0_20px_50px_rgba(0,0,0,0.12)]
        overflow-hidden
        z-50
        animate-[dropdown_0.2s_ease-out]
      "
                >
                  {/* Links */}
                  <div className="p-3">
                    {[
                      {
                        path: "/automotive-digital-marketing-agency",
                        label: "Case Studies",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M20 7h-4V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2ZM8 7V5h8v2"
                            />
                          </svg>
                        ),
                      },
                      {
                        path: "/beauty-skin-care-digital-marketing-agency",
                        label: "Blog",
                        icon: (
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1.8"
                              d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"
                            />
                          </svg>
                        ),
                      },
                    ].map(({ path, label, description, icon }) => (
                      <Link
                        key={path}
                        to={path}
                        className="
              group
              flex
              items-center
              gap-4
              p-3.5
              rounded-xl
              hover:bg-[#00529B]/5
              transition-all
              duration-200
            "
                      >
                        {/* Icon */}
                        <div
                          className="
                flex
                items-center
                justify-center
                w-11
                h-11
                rounded-xl
                bg-[#00529B]/10
                text-[#00529B]
                group-hover:bg-[#00529B]
                group-hover:text-white
                transition-all
                duration-200
                shrink-0
              "
                        >
                          {icon}
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <p
                            className="
                  text-sm
                  font-semibold
                  text-zinc-800
                  group-hover:text-[#00529B]
                  transition-colors
                "
                          >
                            {label}
                          </p>

                          <p className="mt-0.5 text-xs text-zinc-500">
                            {description}
                          </p>
                        </div>

                        {/* Arrow */}
                        <svg
                          className="
                w-4
                h-4
                text-zinc-400
                group-hover:text-[#00529B]
                group-hover:translate-x-1
                transition-all
                duration-200
                shrink-0
              "
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m9 18 6-6-6-6"
                          />
                        </svg>
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Accent */}
                  <div className="h-1 bg-gradient-to-r from-[#00529B] via-[#0074C8] to-[#00529B]" />
                </div>
              )}
            </div>

            {/* =================================================
                CAREERS
            ================================================== */}
            <Link
              to="/career"
              className={`
                px-3
                py-2
                text-sm
                font-medium
                rounded-lg
                transition-colors
                ${
                  isActive("/career")
                    ? "text-[#00529B] font-semibold"
                    : "text-zinc-700 hover:text-[#00529B] hover:bg-zinc-50"
                }
              `}
            >
              Careers
            </Link>
          </div>

          {/* =================================================
              DESKTOP CTA
          ================================================== */}
          <div className="hidden lg:flex items-center">
            <Link
              to="/contact"
              className="
                inline-flex
                items-center
                justify-center
                gap-1.5
                text-xs
                font-semibold
                px-5
                py-2.5
                rounded-lg
                bg-[#F36C3D]
                text-white
                hover:bg-[#00529B]
                transition-all
                shadow-sm
              "
            >
              Contact Us
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* =================================================
              MOBILE HEADER
          ================================================== */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              to="/contact"
              className="
                text-xs
                font-semibold
                px-3
                py-2
                rounded-lg
                bg-[#00529B]
                text-white
                hover:bg-[#F36C3D]
                transition-colors
              "
            >
              Contact
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="
                p-2
                rounded-lg
                text-zinc-700
                hover:text-[#00529B]
                hover:bg-zinc-100
                transition-colors
              "
              aria-label="Open navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[200] lg:hidden">
          {/* BACKDROP */}
          <button
            type="button"
            aria-label="Close navigation menu"
            className="
              absolute
              inset-0
              w-full
              h-full
              bg-[#07172C]/70
              backdrop-blur-sm
            "
            onClick={closeMobileMenu}
          />

          {/* DRAWER */}
          <aside
            className="
              absolute
              right-0
              top-0
              bottom-0
              w-full
              sm:max-w-md
              bg-white
              shadow-2xl
              flex
              flex-col
              overflow-hidden
            "
          >
            {/* ===============================================
                DRAWER HEADER
            ================================================ */}
            <div
              className="
                flex
                items-center
                justify-between
                p-4
                border-b
                border-zinc-100
                flex-shrink-0
              "
            >
              <Link
                to="/"
                onClick={closeMobileMenu}
                className="flex items-center"
              >
                <img
                  src={logoImg}
                  alt="Silgate Solutions"
                  className="h-9 w-auto object-contain"
                />
              </Link>

              <button
                type="button"
                onClick={closeMobileMenu}
                className="
                  w-10
                  h-10
                  rounded-lg
                  bg-zinc-100
                  flex
                  items-center
                  justify-center
                  text-zinc-600
                  hover:text-[#00529B]
                  hover:bg-[#EBF3FB]
                  transition-colors
                "
                aria-label="Close navigation menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* ===============================================
                MOBILE LINKS
            ================================================ */}
            <div
              className="
                flex-1
                overflow-y-auto
                p-5
                pb-8
              "
            >
              {/* HOME */}
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Home
              </Link>

              {/* =================================================
                  FIXED ABOUT US LINK
                  IMPORTANT: THIS IS A LINK, NOT A BUTTON
              ================================================== */}
              <Link
                to="/about"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/about") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                About Us
              </Link>

              {/* =================================================
                  SERVICES
              ================================================== */}
              <div className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("services")}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-base
                    font-semibold
                    text-zinc-900
                  "
                  aria-expanded={mobileExpandedSection === "services"}
                >
                  <span>Services</span>

                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      transition-transform
                      ${
                        mobileExpandedSection === "services" ? "rotate-180" : ""
                      }
                    `}
                  />
                </button>

                {mobileExpandedSection === "services" && (
                  <div
                    className="
                      mb-3
                      ml-2
                      rounded-xl
                      bg-zinc-50
                      p-3
                      space-y-1
                    "
                  >
                    <Link
                      to="/services"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        font-bold
                        text-[#00529B]
                        border-b
                        border-zinc-200
                      "
                    >
                      All Services
                    </Link>

                    {[
                      [
                        "/services/ai-video-production-agency",
                        "AI Video Production",
                      ],
                      ["/services/seo-services", "SEO Services"],
                      ["/aeo-services-company-in-india", "AEO Services"],
                      ["/generative-engine-optimization-india", "GEO Services"],
                      [
                        "/performance-marketing-agency",
                        "Performance Marketing",
                      ],
                      ["/services/b2b-seo-company-in-india", "B2B SEO"],
                      [
                        "/services/local-seo-company-in-india",
                        "Local SEO & GMB",
                      ],
                      [
                        "/services/social-media-marketing",
                        "Social Media Marketing",
                      ],
                      [
                        "/services/influencer-marketing-agency",
                        "Influencer Marketing",
                      ],
                      [
                        "/services/brand-video-production-agency",
                        "Brand Video Production",
                      ],
                      ["/services/ugc-video-agency", "UGC Video Agency"],
                      [
                        "/services/website-development-india",
                        "Website Development",
                      ],
                      [
                        "/services/web-application-development",
                        "Web App Development",
                      ],
                      [
                        "/services/creative-communication",
                        "Creative & Communication",
                      ],
                      ["/services/content-marketing", "Content Marketing"],
                      [
                        "/services/online-reputation-management",
                        "Online Reputation Management",
                      ],
                      ["/services/ad-management", "Ad Management"],
                    ].map(([path, label]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMobileMenu}
                        className="
                          block
                          py-2
                          text-sm
                          text-zinc-700
                          hover:text-[#00529B]
                        "
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* =================================================
                  PRODUCTS
              ================================================== */}
              {/* <div className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("products")}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-base
                    font-semibold
                    text-zinc-900
                  "
                  aria-expanded={mobileExpandedSection === "products"}
                >
                  <span>Products</span>

                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      transition-transform
                      ${
                        mobileExpandedSection === "products" ? "rotate-180" : ""
                      }
                    `}
                  />
                </button>

                {mobileExpandedSection === "products" && (
                  <div
                    className="
                      mb-3
                      ml-2
                      rounded-xl
                      bg-zinc-50
                      p-3
                    "
                  >
                    <Link
                      to="/products"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        text-sm
                        font-medium
                        text-zinc-700
                        hover:text-[#00529B]
                      "
                    >
                      Product List
                    </Link>
                  </div>
                )}
              </div> */}

              {/* =================================================
                  CLIENTS
              ================================================== */}
              {/* <Link
                to="/clients"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/clients") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Clients
              </Link> */}

              {/* =================================================
                  INDUSTRY
              ================================================== */}
              <div className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("industry")}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-base
                    font-semibold
                    text-zinc-900
                  "
                  aria-expanded={mobileExpandedSection === "industry"}
                >
                  <span>Industries</span>

                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      transition-transform
                      ${
                        mobileExpandedSection === "industry" ? "rotate-180" : ""
                      }
                    `}
                  />
                </button>

                {mobileExpandedSection === "industry" && (
                  <div
                    className="
                      mb-3
                      ml-2
                      rounded-xl
                      bg-zinc-50
                      p-3
                      max-h-64
                      overflow-y-auto
                      space-y-1
                    "
                  >
                    {[
                      ["/automotive-digital-marketing-agency", "Automotive"],
                      [
                        "/beauty-skin-care-digital-marketing-agency",
                        "Beauty & Skin Care",
                      ],
                      [
                        "/digital-marketing-agency-for-business-to-business",
                        "B2B Marketing",
                      ],
                      [
                        "/digital-marketing-agency-for-education-industry",
                        "Education",
                      ],
                      [
                        "/digital-marketing-agency-for-food-beverage",
                        "Food & Beverage",
                      ],
                      [
                        "/digital-marketing-services-for-healthcare",
                        "Healthcare",
                      ],
                      [
                        "/digital-marketing-agency-for-real-estate",
                        "Real Estate",
                      ],
                      [
                        "/digital-marketing-for-financial-services",
                        "Financial Services",
                      ],
                      [
                        "/digital-marketing-for-travel-tourism",
                        "Travel & Tourism",
                      ],
                      [
                        "/digital-marketing-services-for-ev",
                        "Electric Vehicles",
                      ],
                      [
                        "/digital-marketing-services-for-home-decor",
                        "Home Decor",
                      ],
                      ["/digital-marketing-for-ecommerce-2", "E-Commerce"],
                    ].map(([path, label]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMobileMenu}
                        className="
                          block
                          py-2
                          text-sm
                          text-zinc-700
                          hover:text-[#00529B]
                        "
                      >
                        {label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* =================================================
                  RESOURCES
              ================================================== */}
              <div className="border-b border-zinc-100">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("resources")}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    py-3
                    text-base
                    font-semibold
                    text-zinc-900
                  "
                  aria-expanded={mobileExpandedSection === "resources"}
                >
                  <span>Resources</span>

                  <ChevronDown
                    className={`
                      w-5
                      h-5
                      transition-transform
                      ${
                        mobileExpandedSection === "resources"
                          ? "rotate-180"
                          : ""
                      }
                    `}
                  />
                </button>

                {mobileExpandedSection === "resources" && (
                  <div
                    className="
                      mb-3
                      ml-2
                      rounded-xl
                      bg-zinc-50
                      p-3
                    "
                  >
                    <Link
                      to="/blog"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        text-sm
                        text-zinc-700
                        hover:text-[#00529B]
                      "
                    >
                      Blog
                    </Link>

                    <Link
                      to="/case-studies"
                      onClick={closeMobileMenu}
                      className="
                        block
                        py-2
                        text-sm
                        text-zinc-700
                        hover:text-[#00529B]
                      "
                    >
                      Case Studies
                    </Link>
                  </div>
                )}
              </div>

              {/* =================================================
                  CAREERS
              ================================================== */}
              <Link
                to="/career"
                onClick={closeMobileMenu}
                className={`
                  block
                  py-3
                  text-base
                  font-semibold
                  border-b
                  border-zinc-100
                  ${isActive("/career") ? "text-[#00529B]" : "text-zinc-900"}
                `}
              >
                Careers
              </Link>

              {/* =================================================
                  CONTACT
              ================================================== */}
              <Link
                to="/contact"
                onClick={closeMobileMenu}
                className="
                  block
                  mt-4
                  py-3
                  text-center
                  rounded-xl
                  bg-[#00529B]
                  text-white
                  font-semibold
                  hover:bg-[#F36C3D]
                  transition-colors
                "
              >
                Contact Us
              </Link>
            </div>

            {/* ===============================================
                MOBILE FOOTER
            ================================================ */}
            <div
              className="
                flex-shrink-0
                p-5
                border-t
                border-zinc-100
                bg-zinc-50
              "
            >
              <a
                href="tel:+918108810916"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  py-3
                  rounded-xl
                  bg-[#091E3A]
                  text-white
                  text-sm
                  font-semibold
                  hover:bg-[#00529B]
                  transition-colors
                "
              >
                <Phone className="w-4 h-4 text-[#F36C3D]" />
                Call +91 81088 10916
              </a>

              <div
                className="
                  flex
                  items-center
                  justify-center
                  gap-5
                  text-zinc-500
                  pt-4
                "
              >
                <a
                  href="https://youtube.com/@SilgateMedia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="hover:text-[#00529B]"
                >
                  <Youtube className="w-5 h-5" />
                </a>

                <a
                  href="https://in.linkedin.com/company/Silgate-media-pvt-ltd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="hover:text-[#00529B]"
                >
                  <Linkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://www.instagram.com/Silgate.media/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="hover:text-[#00529B]"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}
    </header>
  );
}
