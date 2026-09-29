import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  Phone,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Youtube, Linkedin, Instagram } from "../assets/icons/SocialIcons";
import logoImg from "../assets/images/logo.png";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const toggleMobileSubmenu = (name) => {
    setMobileExpandedSection(mobileExpandedSection === name ? null : name);
  };

  return (
    <header className="w-full z-50 sticky top-0 transition-all duration-200">
      {/* Top Utility Bar */}
      <div className="bg-[#0d0d0d] text-zinc-300 text-xs py-2 px-4 sm:px-8 border-b border-zinc-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a
              href="tel:+918108810916"
              className="flex items-center gap-1.5 hover:text-[#FFDF01] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#FFDF01]" />
              <span className="font-medium">+91 81088 10916</span>
            </a>
            <span className="text-zinc-600">|</span>
            <span className="text-zinc-400">
              Award-Winning Digital Marketing & SEO Agency in India
            </span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <Link to="/career" className="hover:text-white transition-colors">
              Career
            </Link>
            <Link to="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <div className="flex items-center gap-3 pl-3 border-l border-zinc-800 text-zinc-400">
              <a
                href="https://youtube.com/@SilgateMedia"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFDF01]"
                aria-label="YouTube"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://in.linkedin.com/company/Silgate-media-pvt-ltd"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFDF01]"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.instagram.com/Silgate.media/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#FFDF01]"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`w-full bg-white transition-all duration-300 ${scrolled ? "shadow-md py-3" : "py-4"} border-b border-zinc-200/80`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <img
              src={logoImg}
              alt="Silgate Media"
              className="h-9 sm:h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.nextSibling.style.display = "block";
              }}
            />
            <span className="hidden font-bold text-xl sm:text-2xl tracking-tighter text-black">
              Digi<span className="text-[#e6c800]">Street</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/" ? "text-black font-semibold" : "text-zinc-700 hover:text-black hover:bg-zinc-50"}`}
            >
              Home
            </Link>

            {/* Influencer Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("influencer")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-md hover:bg-zinc-50 transition-colors"
              >
                <span>Influencer</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === "influencer" && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    to="/services/influencer-marketing-agency"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Influencer Marketing Agency
                  </Link>
                  <Link
                    to="/influencer-marketing-portfolio"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Influencer Portfolio
                  </Link>
                </div>
              )}
            </div>

            {/* About Us Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("about")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/about"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-md hover:bg-zinc-50 transition-colors"
              >
                <span>About Us</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              {activeDropdown === "about" && (
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-zinc-100 py-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <Link
                    to="/about"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    About Silgate
                  </Link>
                  <Link
                    to="/about/life-at-Silgate"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Life at Silgate
                  </Link>
                  <Link
                    to="/about/credo-at-Silgate"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Credo at Silgate
                  </Link>
                  <Link
                    to="/other-companies"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Other Companies
                  </Link>
                  <Link
                    to="/products"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Products
                  </Link>
                  <Link
                    to="/news-awards"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    News & Awards
                  </Link>
                  <Link
                    to="/kavish-arora"
                    className="block px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 hover:text-black font-medium"
                  >
                    Meet Our Founder
                  </Link>
                </div>
              )}
            </div>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to="/services"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-md hover:bg-zinc-50 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </Link>
              {activeDropdown === "services" && (
                <div className="absolute top-full -left-40 xl:-left-32 w-[920px] bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-4 gap-6 text-sm">
                    {/* Col 1 */}
                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-3">
                        Creative & Brand
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/ai-video-production-agency"
                            className="text-zinc-800 hover:text-black font-medium flex items-center justify-between group"
                          >
                            <span>AI Generated Videos</span>
                            <span className="badge-new">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/creative-communication"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Creative & Communication
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/creative-communication/brand-strategy"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Brand Strategy
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/creative-communication/logo-identity-design"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Logo & Identity Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/creative-communication/product-packaging"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Product Packaging
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/brand-video-production-agency"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Brand Video Production
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/ugc-video-agency"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            UGC Video Agency
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 2 */}
                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-3">
                        Content & Reputation
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/content-marketing"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Content Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/content-marketing/seo-copywriting"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            SEO Copywriting
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/content-marketing/video-tvc-scripts"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Video & TVC Scripts
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/online-reputation-management"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Online Reputation Mgmt
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/online-reputation-management/brand-reputation-management"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Brand Reputation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/online-reputation-management/corporate-reputation-management"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Corporate Reputation
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/ad-management"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Ad Management
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 3 */}
                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-3">
                        Search & Performance
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/seo-services"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            SEO Services
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/aeo-services-company-in-india"
                            className="text-zinc-800 hover:text-black font-medium flex items-center justify-between"
                          >
                            <span>AEO Services</span>
                            <span className="badge-new">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/generative-engine-optimization-india"
                            className="text-zinc-800 hover:text-black font-medium flex items-center justify-between"
                          >
                            <span>GEO Services</span>
                            <span className="badge-new">New</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/performance-marketing-agency"
                            className="text-zinc-800 hover:text-black font-medium flex items-center justify-between"
                          >
                            <span>Performance Mktg</span>
                            <span className="badge-demanded">Hot</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/b2b-seo-company-in-india"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            B2B SEO Company
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/local-seo-company-in-india"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Local SEO & GMB
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/search-engine-marketing"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Search Engine Mktg
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Col 4 */}
                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-3">
                        Social & Tech
                      </div>
                      <ul className="space-y-2">
                        <li>
                          <Link
                            to="/services/social-media-marketing"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Social Media Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/influencer-marketing-agency"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Influencer Marketing
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/website-development-india"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Website Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/website-development-india/corporate-website-design"
                            className="text-zinc-600 hover:text-black text-xs block pl-2"
                          >
                            Corporate Web Design
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/services/web-application-development"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Web App Development
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/rankstreet"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            RankStreet
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/managed-it-services-usa"
                            className="text-zinc-800 hover:text-black font-medium"
                          >
                            Managed IT Services
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Mega Menu Footer */}
                  <div className="mt-6 pt-4 border-t border-zinc-100 flex items-center justify-between bg-zinc-50 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <div className="text-xs text-zinc-600">
                      Explore all 15+ comprehensive full-stack digital services
                      under one roof.
                    </div>
                    <Link
                      to="/services"
                      className="text-xs font-semibold text-black hover:text-amber-600 flex items-center gap-1"
                    >
                      <span>View All Services</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Clients Link */}
            <Link
              to="/clients"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/clients" ? "text-black font-semibold" : "text-zinc-700 hover:text-black hover:bg-zinc-50"}`}
            >
              Clients
            </Link>

            {/* Industry Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("industry")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-md hover:bg-zinc-50 transition-colors"
              >
                <span>Industry</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === "industry" && (
                <div className="absolute top-full -left-20 xl:left-0 w-[680px] bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-3">
                    Industries We Excel In
                  </div>
                  <div className="grid grid-cols-3 gap-3 text-sm">
                    <Link
                      to="/automotive-digital-marketing-agency"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🚗 Automotive
                    </Link>
                    <Link
                      to="/beauty-skin-care-digital-marketing-agency"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      ✨ Beauty & Skin Care
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-business-to-business"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🏢 B2B Marketing
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-education-industry"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🎓 Education
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-food-beverage"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🍔 Food & Beverage
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-healthcare"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🩺 Healthcare
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-real-estate"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🏠 Real Estate
                    </Link>
                    <Link
                      to="/digital-marketing-for-financial-services"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      💳 Financial Services
                    </Link>
                    <Link
                      to="/digital-marketing-for-travel-tourism"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      ✈️ Travel & Tourism
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-ev"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      ⚡ Electric Vehicles (EV)
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-home-decor"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🛋️ Home Decor
                    </Link>
                    <Link
                      to="/digital-marketing-for-ecommerce-2"
                      className="p-2 hover:bg-zinc-50 rounded-lg text-zinc-800 hover:text-black font-medium block"
                    >
                      🛍️ E-Commerce
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* International Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown("international")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-zinc-700 hover:text-black rounded-md hover:bg-zinc-50 transition-colors"
              >
                <span>International</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
              {activeDropdown === "international" && (
                <div className="absolute top-full right-0 w-[720px] bg-white rounded-2xl shadow-2xl border border-zinc-100 p-6 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="grid grid-cols-3 gap-6 text-sm">
                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-2">
                        North America
                      </div>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/san-francisco-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇺🇸 San Francisco
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/seo-services-in-newyork"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇺🇸 New York · SEO
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/canada-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇨🇦 Canada Agency
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/toronto-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇨🇦 Toronto
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-2">
                        Europe & Gulf
                      </div>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/uk-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇬🇧 United Kingdom
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/london-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇬🇧 London Agency
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/dubai-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇦🇪 Dubai Agency
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/saudi-arabia-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇸🇦 Saudi Arabia
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/bahrain-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇧🇭 Bahrain
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <div className="font-semibold text-xs text-zinc-400 tracking-wider uppercase mb-2">
                        Global & Multilingual
                      </div>
                      <ul className="space-y-1.5">
                        <li>
                          <Link
                            to="/digital-marketing-agency-in-australia"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇦🇺 Australia
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/singapore-digital-marketing-agency"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇸🇬 Singapore
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/es"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇪🇸 Spanish Market Entry
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/de"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇩🇪 German Market Entry
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/ja"
                            className="text-zinc-700 hover:text-black block py-1"
                          >
                            🇯🇵 Japan Market Entry
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/career"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname === "/career" ? "text-black font-semibold" : "text-zinc-700 hover:text-black hover:bg-zinc-50"}`}
            >
              Careers
            </Link>

            <Link
              to="/blog"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${location.pathname.startsWith("/blog") ? "text-black font-semibold" : "text-zinc-700 hover:text-black hover:bg-zinc-50"}`}
            >
              Blog
            </Link>
          </div>

          {/* Right Header CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold px-5 py-2.5 rounded-full bg-black text-white hover:bg-zinc-800 transition-all tracking-tight group shadow-sm"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/contact"
              className="text-xs font-semibold px-3 py-1.5 rounded-full bg-black text-white hover:bg-zinc-800 transition-colors"
            >
              Contact
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-black focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Offcanvas Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Offcanvas Content */}
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-y-auto">
            <div className="p-4 border-b border-zinc-100 flex items-center justify-between sticky top-0 bg-white">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center"
              >
                <img src={logoImg} alt="Silgate" className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:text-black"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-5 flex-1 divide-y divide-zinc-100 space-y-4">
              <div className="pt-2">
                <Link
                  to="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-900"
                >
                  Home
                </Link>
              </div>

              {/* Influencer Accordion */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("influencer")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-900"
                >
                  <span>Influencer</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "influencer" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedSection === "influencer" && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-zinc-700 bg-zinc-50 rounded-xl mt-1">
                    <Link
                      to="/services/influencer-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Influencer Marketing Agency
                    </Link>
                    <Link
                      to="/influencer-marketing-portfolio"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Influencer Portfolio
                    </Link>
                  </div>
                )}
              </div>

              {/* About Us Accordion */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("about")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-900"
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "about" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedSection === "about" && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-zinc-700 bg-zinc-50 rounded-xl mt-1">
                    <Link
                      to="/about"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      About Silgate
                    </Link>
                    <Link
                      to="/about/life-at-Silgate"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      Life at Silgate
                    </Link>
                    <Link
                      to="/about/credo-at-Silgate"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      Credo at Silgate
                    </Link>
                    <Link
                      to="/other-companies"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      Other Companies
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      Products
                    </Link>
                    <Link
                      to="/news-awards"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      News & Awards
                    </Link>
                    <Link
                      to="/kavish-arora"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-medium"
                    >
                      Meet Our Founder
                    </Link>
                  </div>
                )}
              </div>

              {/* Services Accordion */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("services")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-900"
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "services" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedSection === "services" && (
                  <div className="pl-4 py-2 space-y-2 text-sm text-zinc-700 bg-zinc-50 rounded-xl mt-1 max-h-72 overflow-y-auto">
                    <Link
                      to="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1 font-bold text-black border-b border-zinc-200"
                    >
                      All Services Overview →
                    </Link>
                    <Link
                      to="/services/ai-video-production-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      AI Video Production (New)
                    </Link>
                    <Link
                      to="/services/seo-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      SEO Services
                    </Link>
                    <Link
                      to="/aeo-services-company-in-india"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      AEO Services (New)
                    </Link>
                    <Link
                      to="/generative-engine-optimization-india"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      GEO Services (New)
                    </Link>
                    <Link
                      to="/performance-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Performance Marketing
                    </Link>
                    <Link
                      to="/services/b2b-seo-company-in-india"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      B2B SEO
                    </Link>
                    <Link
                      to="/services/local-seo-company-in-india"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Local SEO & GMB
                    </Link>
                    <Link
                      to="/services/social-media-marketing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Social Media Marketing
                    </Link>
                    <Link
                      to="/services/influencer-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Influencer Marketing
                    </Link>
                    <Link
                      to="/services/brand-video-production-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Brand Video Production
                    </Link>
                    <Link
                      to="/services/ugc-video-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      UGC Video Agency
                    </Link>
                    <Link
                      to="/services/website-development-india"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Website Development
                    </Link>
                    <Link
                      to="/services/web-application-development"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Web App Development
                    </Link>
                    <Link
                      to="/services/creative-communication"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Creative & Communication
                    </Link>
                    <Link
                      to="/services/content-marketing"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Content Marketing
                    </Link>
                    <Link
                      to="/services/online-reputation-management"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Online Reputation Mgmt
                    </Link>
                    <Link
                      to="/services/ad-management"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Ad Management
                    </Link>
                  </div>
                )}
              </div>

              {/* Industry Accordion */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("industry")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-900"
                >
                  <span>Industry</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "industry" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedSection === "industry" && (
                  <div className="pl-4 py-2 space-y-1.5 text-sm text-zinc-700 bg-zinc-50 rounded-xl mt-1 max-h-56 overflow-y-auto">
                    <Link
                      to="/automotive-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Automotive
                    </Link>
                    <Link
                      to="/beauty-skin-care-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Beauty & Skin Care
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-business-to-business"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      B2B Marketing
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-education-industry"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Education
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-food-beverage"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Food & Beverage
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-healthcare"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Healthcare
                    </Link>
                    <Link
                      to="/digital-marketing-agency-for-real-estate"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Real Estate
                    </Link>
                    <Link
                      to="/digital-marketing-for-financial-services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Financial Services
                    </Link>
                    <Link
                      to="/digital-marketing-for-travel-tourism"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Travel & Tourism
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-ev"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Electric Vehicles
                    </Link>
                    <Link
                      to="/digital-marketing-services-for-home-decor"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      Home Decor
                    </Link>
                    <Link
                      to="/digital-marketing-for-ecommerce-2"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      E-Commerce
                    </Link>
                  </div>
                )}
              </div>

              {/* International Accordion */}
              <div className="pt-3">
                <button
                  type="button"
                  onClick={() => toggleMobileSubmenu("international")}
                  className="w-full flex items-center justify-between py-2 text-base font-semibold text-zinc-900"
                >
                  <span>International</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobileExpandedSection === "international" ? "rotate-180" : ""}`}
                  />
                </button>
                {mobileExpandedSection === "international" && (
                  <div className="pl-4 py-2 space-y-1.5 text-sm text-zinc-700 bg-zinc-50 rounded-xl mt-1 max-h-56 overflow-y-auto">
                    <Link
                      to="/san-francisco-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇺🇸 San Francisco
                    </Link>
                    <Link
                      to="/seo-services-in-newyork"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇺🇸 New York · SEO
                    </Link>
                    <Link
                      to="/uk-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇬🇧 United Kingdom
                    </Link>
                    <Link
                      to="/london-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇬🇧 London Agency
                    </Link>
                    <Link
                      to="/dubai-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇦🇪 Dubai Agency
                    </Link>
                    <Link
                      to="/canada-digital-marketing-agency"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇨🇦 Canada
                    </Link>
                    <Link
                      to="/digital-marketing-agency-in-australia"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇦🇺 Australia
                    </Link>
                    <Link
                      to="/es"
                      onClick={() => setMobileMenuOpen(false)}
                      className="block py-1"
                    >
                      🇪🇸 Spanish Entry
                    </Link>
                  </div>
                )}
              </div>

              <div className="pt-3">
                <Link
                  to="/clients"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-900"
                >
                  Clients
                </Link>
              </div>

              <div className="pt-3">
                <Link
                  to="/career"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-900"
                >
                  Life at Silgate / Careers
                </Link>
              </div>

              <div className="pt-3">
                <Link
                  to="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-900"
                >
                  Blogs & Insights
                </Link>
              </div>

              <div className="pt-3">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block py-2 text-base font-semibold text-zinc-900"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Drawer Footer */}
            <div className="p-5 border-t border-zinc-100 bg-zinc-50">
              <a
                href="tel:+918108810916"
                className="flex items-center justify-center gap-2 py-3 rounded-full bg-black text-white text-sm font-semibold mb-3"
              >
                <Phone className="w-4 h-4 text-[#FFDF01]" />
                <span>Call +91 81088 10916</span>
              </a>
              <div className="flex items-center justify-center gap-4 text-zinc-500 pt-2">
                <a
                  href="https://youtube.com/@SilgateMedia"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://in.linkedin.com/company/Silgate-media-pvt-ltd"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/Silgate.media/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
