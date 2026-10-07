import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Clock,
  Users,
  CheckCircle,
  Building2,
  Target,
  Eye,
  Briefcase,
  Sliders,
  Share2,
  TrendingUp,
  UserCheck,
  RefreshCw,
  Code2,
  Search,
  Megaphone,
  Palette,
  Video,
  Landmark,
  Wallet,
  ShieldCheck,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Plane,
  Lightbulb,
  SlidersHorizontal,
  Layers,
  FileCheck,
  BarChart3,
  Award,
} from "lucide-react";

import heroPuzzleImg from "../assets/images/heroPuzzleImg.png";
import buildingImg from "../assets/images/About_Us_Img.jfif";

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white text-slate-800 font-sans selection:bg-[#00529B] selection:text-white">
      {/* =========================================================================
          SECTION 1 — ABOUT US HERO
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#07172C] text-white py-14 sm:py-20 lg:py-24 border-b border-[#132C4E]">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00529B]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-10 w-80 h-80 bg-[#F36C3D]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-6 text-center lg:text-left">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
                ABOUT SILGATE DIGITAL
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] mb-5">
                Digital Expertise Built Around Business Growth
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8">
                We combine technology, creativity and strategy to help
                businesses build stronger digital experiences and create
                meaningful opportunities for growth.
              </p>

              <div>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#F36C3D] to-[#E63900] hover:from-[#E63900] hover:to-[#D92D20] text-white font-bold text-sm shadow-lg hover:shadow-orange-500/25 transition-all duration-200"
                >
                  <span>Explore Our Services</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Hero Puzzle Graphic */}
            <div className="lg:col-span-6">
              <div className="relative max-w-lg mx-auto rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-slate-900/60 backdrop-blur-sm group">
                <img
                  src={heroPuzzleImg}
                  alt="Digital Expertise Built Around Business Growth - Strategy, Creativity, Technology to Growth"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07172C]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 2 — WHO WE ARE
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                WHO WE ARE
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                A Digital Partner for Today's Business Needs
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Silgate Digital is a technology, marketing and creative
                solutions company focused on helping businesses build,
                strengthen and grow their digital presence. We combine strategic
                thinking, creative ideas and technology expertise to deliver
                solutions that address real business requirements.
              </p>
            </div>

            {/* Right Image with Orange Corner Accent */}
            <div className="lg:col-span-6">
              <div className="relative max-w-lg mx-auto">
                {/* Orange rounded accent card positioned behind bottom-left */}
                <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 w-28 h-28 sm:w-36 sm:h-36 bg-[#F36C3D] rounded-2xl -z-0" />
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl border border-slate-200 bg-white">
                  <img
                    src={buildingImg}
                    alt="Silgate Digital Headquarters"
                    className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 3 — OUR JOURNEY / COMPANY SNAPSHOT
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Column Text */}
            <div className="lg:col-span-6">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR JOURNEY
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                A Journey of Growth, Built on Trust and Delivery
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                Over the years, we have had the opportunity to work with diverse
                businesses, deliver meaningful digital solutions and build
                long-term relationships.
              </p>
            </div>

            {/* Right Column: 2x2 Metric Cards */}
            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {/* 7+ Years Experience */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00529B] leading-none">
                      7+
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-snug">
                      Years
                      <br />
                      Experience
                    </div>
                  </div>
                </div>

                {/* 50+ Clients Served */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00529B] leading-none">
                      50+
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-snug">
                      Clients
                      <br />
                      Served
                    </div>
                  </div>
                </div>

                {/* 125+ Projects Delivered */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00529B] leading-none">
                      125+
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-snug">
                      Projects
                      <br />
                      Delivered
                    </div>
                  </div>
                </div>

                {/* 8+ Industries Served */}
                <div className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-black text-[#00529B] leading-none">
                      8+
                    </div>
                    <div className="text-xs sm:text-sm font-bold text-slate-700 mt-1 leading-snug">
                      Industries
                      <br />
                      Served
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 4 — OUR APPROACH
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6">
              <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
                OUR APPROACH
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight mb-5">
                Strategy, Creativity and Technology for Real Business Growth
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-xl">
                We bring together strategic thinking, creative ideas and
                technical expertise to build digital solutions that create
                measurable business value.
              </p>
            </div>

            {/* Right Approach Diagram: Interlocking Venn Circles -> Business Growth */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-md bg-[#F8FAFC] border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm flex items-center justify-center">
                <svg
                  viewBox="0 0 420 220"
                  className="w-full h-auto"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Top Circle: Strategy */}
                  <circle
                    cx="120"
                    cy="80"
                    r="46"
                    fill="#FFF7ED"
                    stroke="#F36C3D"
                    strokeWidth="2"
                    strokeDasharray="4 3"
                  />
                  {/* Target Icon in Strategy */}
                  <circle
                    cx="120"
                    cy="65"
                    r="7"
                    stroke="#F36C3D"
                    strokeWidth="2"
                  />
                  <circle cx="120" cy="65" r="3" fill="#F36C3D" />
                  <text
                    x="120"
                    y="88"
                    textAnchor="middle"
                    fill="#C2410C"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    Strategy
                  </text>

                  {/* Bottom Left Circle: Creativity */}
                  <circle
                    cx="80"
                    cy="145"
                    r="46"
                    fill="#EFF6FF"
                    stroke="#00529B"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <text
                    x="80"
                    y="149"
                    textAnchor="middle"
                    fill="#00529B"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    Creativity
                  </text>

                  {/* Bottom Right Circle: Technology */}
                  <circle
                    cx="160"
                    cy="145"
                    r="46"
                    fill="#EFF6FF"
                    stroke="#00529B"
                    strokeWidth="2"
                    opacity="0.9"
                  />
                  <text
                    x="160"
                    y="149"
                    textAnchor="middle"
                    fill="#00529B"
                    fontSize="11"
                    fontWeight="700"
                    fontFamily="sans-serif"
                  >
                    Technology
                  </text>

                  {/* Flow Arrow Bracket */}
                  <path
                    d="M 225 110 C 245 110, 255 110, 275 110"
                    stroke="#F36C3D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <path
                    d="M 270 102 L 280 110 L 270 118"
                    stroke="#F36C3D"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Business Growth Target Card */}
                  <g transform="translate(300, 50)">
                    {/* Growth Chart Icon */}
                    <path
                      d="M 12 75 L 22 55 L 34 65 L 48 40"
                      stroke="#F36C3D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M 40 40 H 48 V 48"
                      stroke="#F36C3D"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <rect
                      x="8"
                      y="78"
                      width="8"
                      height="18"
                      fill="#FED7AA"
                      rx="1.5"
                    />
                    <rect
                      x="20"
                      y="66"
                      width="8"
                      height="30"
                      fill="#FDBA74"
                      rx="1.5"
                    />
                    <rect
                      x="32"
                      y="54"
                      width="8"
                      height="42"
                      fill="#FB923C"
                      rx="1.5"
                    />
                    <rect
                      x="44"
                      y="42"
                      width="8"
                      height="54"
                      fill="#F36C3D"
                      rx="1.5"
                    />

                    <text
                      x="30"
                      y="114"
                      textAnchor="middle"
                      fill="#0F172A"
                      fontSize="13"
                      fontWeight="800"
                      fontFamily="sans-serif"
                    >
                      Business
                    </text>
                    <text
                      x="30"
                      y="130"
                      textAnchor="middle"
                      fill="#F36C3D"
                      fontSize="13"
                      fontWeight="800"
                      fontFamily="sans-serif"
                    >
                      Growth
                    </text>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 5 — OUR MISSION & VISION
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center sm:text-left mb-8">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-1">
              OUR MISSION & VISION
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Our Mission */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#E63900] to-[#F36C3D] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
                <Target className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Our Mission
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To help businesses build stronger digital presence through
                  technology, marketing and creative solutions.
                </p>
              </div>
            </div>

            {/* Card 2: Our Vision */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#E63900] to-[#F36C3D] text-white flex items-center justify-center flex-shrink-0 shadow-md shadow-orange-500/20">
                <Eye className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-slate-900 mb-2">
                  Our Vision
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  To be a trusted digital partner for businesses across
                  industries, known for our expertise, creativity and commitment
                  to delivering meaningful results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 6 — WHAT WE BRING TO THE TABLE
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              WHAT WE BRING TO THE TABLE
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              More Than Services. A Stronger Partnership.
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                title: "Business Understanding",
                icon: Briefcase,
              },
              {
                title: "Customized Solutions",
                icon: Sliders,
              },
              {
                title: "Multi-Disciplinary Expertise",
                icon: Share2,
              },
              {
                title: "Scalable Execution",
                icon: TrendingUp,
              },
              {
                title: "Collaborative Approach",
                icon: UserCheck,
              },
              {
                title: "Continuous Improvement",
                icon: RefreshCw,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#F36C3D]/40 transition-all text-center flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F36C3D] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 7 — OUR CAPABILITIES
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              OUR CAPABILITIES
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              End-to-End Digital Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                title: "Web Development",
                icon: Code2,
              },
              {
                title: "SEO",
                icon: Search,
              },
              {
                title: "Social Media Management",
                icon: Share2,
              },
              {
                title: "Digital Marketing",
                icon: Megaphone,
              },
              {
                title: "Creative & Graphic Design",
                icon: Palette,
              },
              {
                title: "UGC & Content Creation",
                icon: Video,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00529B]/40 transition-all text-center flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F36C3D] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 8 — INDUSTRIES WE UNDERSTAND
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              INDUSTRIES WE UNDERSTAND
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Experience Across Diverse Industries
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
            {[
              { name: "BFSI", icon: Landmark },
              { name: "Fintech", icon: Wallet },
              { name: "Insurance", icon: ShieldCheck },
              { name: "Real Estate", icon: Building2 },
              { name: "Education", icon: GraduationCap },
              { name: "Healthcare", icon: HeartPulse },
              { name: "Retail & E-commerce", icon: ShoppingCart },
              { name: "Travel & Hospitality", icon: Plane },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-4 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#00529B]/40 transition-all text-center flex flex-col items-center justify-center min-h-[110px]"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center mb-2.5">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs font-bold text-slate-800 leading-tight">
                    {item.name}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 9 — WHY BUSINESSES WORK WITH US
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-[#F8FAFC] border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              WHY BUSINESSES WORK WITH US
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              A Partner Focused on Your Business Growth
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
            {[
              {
                title: "Business-First Thinking",
                icon: Lightbulb,
              },
              {
                title: "Tailored Approach",
                icon: SlidersHorizontal,
              },
              {
                title: "Integrated Expertise",
                icon: Layers,
              },
              {
                title: "Transparent Working",
                icon: FileCheck,
              },
              {
                title: "Scalability",
                icon: BarChart3,
              },
              {
                title: "Continuous Optimization",
                icon: Target,
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white rounded-2xl p-5 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#F36C3D]/40 transition-all text-center flex flex-col items-center justify-center min-h-[140px]"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-50 text-[#F36C3D] flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" strokeWidth={2.2} />
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.title}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 10 — OUR CLIENTS
      ========================================================================= */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200/80 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center sm:text-left">
            <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-2">
              OUR CLIENTS
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight leading-tight">
              Trusted by Businesses Across Industries
            </h2>
          </div>

          {/* Client Logo Boxes (Matching the clean reference mockup layout) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4">
            {[1, 2, 3, 4, 5, 6, 7].map((num) => (
              <div
                key={num}
                className="bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-[#00529B]/30 hover:shadow-sm transition-all h-20 sm:h-24 flex flex-col items-center justify-center gap-1.5 p-2 select-none"
              >
                <div className="w-6 h-6 rounded border border-dashed border-slate-300 flex items-center justify-center">
                  <Award className="w-3.5 h-3.5 text-slate-400" />
                </div>
                <span className="text-[11px] font-semibold text-slate-400 tracking-wide">
                  Client Logo
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 11 — FINAL CTA
      ========================================================================= */}
      <section className="relative overflow-hidden bg-[#07172C] text-white py-16 sm:py-24">
        {/* Subtle orange/red ambient light curves */}
        <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#F36C3D]/15 via-[#E63900]/10 to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-full bg-gradient-to-r from-[#00529B]/25 via-transparent to-transparent pointer-events-none" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="text-[#F36C3D] text-xs sm:text-sm font-bold tracking-widest uppercase mb-3">
            LET'S WORK TOGETHER
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-4">
            Have a Digital Requirement?
            <br />
            Let's Build the Right Solution Together.
          </h2>

          <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Whether you're looking to build your digital presence, improve
            online visibility, strengthen your content or scale your digital
            marketing efforts, our team is ready to understand your requirements
            and explore the right way forward.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-gradient-to-r from-[#F36C3D] to-[#E63900] hover:from-[#E63900] hover:to-[#D92D20] text-white font-bold text-sm shadow-xl hover:shadow-orange-500/25 transition-all duration-200"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg border border-white/50 hover:bg-white/10 text-white font-bold text-sm transition-all duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SECTION 12 — FOOTER
          (Rendered globally by AppContent directly below Section 11)
      ========================================================================= */}
    </div>
  );
}
