import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ClientMarquee from "../components/ClientMarquee";
import ServiceCard from "../components/ServiceCard";
import AuditForm from "../components/AuditForm";
import FAQAccordion from "../components/FAQAccordion";
import CTA from "../components/CTA";
import {
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Search,
  TrendingUp,
  Share2,
  Laptop,
  ShieldCheck,
  Video,
  BarChart3,
  Target,
  Award,
  ChevronRight,
} from "lucide-react";

export default function Services() {
  const [activeTab, setActiveTab] = useState("all");

  const servicesFaqs = [
    {
      q: "What does a digital marketing services company do?",
      a: "A full-service digital marketing company manages every touchpoint between your brand and prospective customers online. At Silgate Media, this spans organic search engine visibility (SEO, AEO, GEO), paid customer acquisition (PPC, performance advertising across Meta, Google, LinkedIn), brand strategy and creative design, website and application engineering, social media community growth, and video production.",
    },
    {
      q: "Why choose Silgate as your digital marketing services company in India?",
      a: "Silgate is distinguished by our 14+ years track record, 250+ enterprise and high-growth brand partners, proprietary technology like RankStreet, and our hybrid capability uniting high-aesthetic creative craft with rigorous ROI performance marketing. We don't focus on vanity impressions; our campaigns are tied to bottom-line pipeline and revenue.",
    },
    {
      q: "Which digital marketing services do you offer?",
      a: "We offer complete full-funnel digital marketing solutions: Technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Performance Marketing, B2B Lead Gen SEO, Local SEO & Google Business Profile, Social Media Marketing, Influencer Marketing, Brand & UGC Video Production, Website & Web App Development, Creative Communication, Brand Reputation Management, and Content Marketing.",
    },
    {
      q: "Which industries does Silgate serve?",
      a: "We have proven domain expertise across Automotive & Electric Vehicles, Healthcare & Pharmaceuticals, B2B Heavy Engineering, Real Estate, Higher Education, FMCG Food & Beverage, Beauty & Skincare, Luxury Interior Architecture, Financial Services, and Global eCommerce.",
    },
    {
      q: "How much do digital marketing services cost in India?",
      a: "Digital marketing investment varies based on project scope, target geographic market (India domestic vs. cross-border US/UK/Middle East), and service mix. We provide transparent, outcome-oriented retainers and milestone-based project models tailored to each client's specific business scale.",
    },
    {
      q: "Do you work with international clients outside India?",
      a: "Yes. Over 40% of our portfolio consists of brands based in the United States, United Kingdom, Canada, Australia, Singapore, and the GCC Middle East. We specialize in cross-border scaling and global search dominance.",
    },
    {
      q: "How long before we see results from digital marketing?",
      a: "Paid advertising and performance campaigns generate validated clicks and conversions within the first 1-2 weeks. Organic search engine optimization and generative AI visibility compound exponentially over a 3 to 6-month trajectory.",
    },
    {
      q: "Do you only do SEO, or do you handle the full digital stack?",
      a: "While our SEO practice is recognized among the best in India, Silgate is an end-to-end Marcom and digital engineering agency. We handle creative design, video shoots, copywriting, website builds, and multi-channel performance advertising under one synchronized roof.",
    },
    {
      q: "Why is Silgate considered one of the best digital marketing companies in India?",
      a: "Ranked among the Top 20 Digital Marketing Agencies of India by Silicon India and recipient of numerous industry honors, Silgate stands out for client retention (>98%), proprietary data methodologies, and multi-year partnerships with market leaders like Mahindra, Sirca, Amity, and Metso.",
    },
    {
      q: "How do I get started with Silgate Media?",
      a: "You can submit an audit request on this page, email manoj@silgatehiring.com, or call +91 81088 10916 to schedule a strategic discovery session with our senior account leads.",
    },
  ];

  const allServicesList = [
    {
      title: "SEO Services",
      tag: "Search Engine Optimization",
      badge: "Flagship",
      description:
        "Comprehensive technical audits, on-page optimization, content cluster architecture, and authoritative link building that captures rank #1 organic positions.",
      features: [
        "Technical SEO & Core Web Vitals",
        "Keyword Intelligence & Clustering",
        "High-Authority Digital PR & Backlinks",
      ],
      link: "/services/seo-services",
      category: "search",
    },
    {
      title: "Answer Engine Optimisation (AEO)",
      tag: "AI & Zero-Click",
      badge: "NEW",
      description:
        "Optimize your brand for ChatGPT, Perplexity, Google Gemini, and voice search to win direct zero-click AI answer boxes.",
      features: [
        "Semantic Entity Extraction",
        "FAQ Schema & Knowledge Graphs",
        "AI Conversational Query Target",
      ],
      link: "/aeo-services-company-in-india",
      category: "search",
    },
    {
      title: "Generative Engine Optimisation (GEO)",
      tag: "Next-Gen AI Search",
      badge: "NEW",
      description:
        "Dominate Google's Search Generative Experience (SGE) and generative AI summaries where traditional blue links no longer suffice.",
      features: [
        "AI Overview Optimization",
        "Contextual Brand Citations",
        "Algorithmic Authority Building",
      ],
      link: "/generative-engine-optimization-india",
      category: "search",
    },
    {
      title: "Performance Marketing",
      tag: "Paid Acquisition",
      badge: "MOST DEMANDED",
      description:
        "Data-driven media buying across Google Ads, Meta Ads, and LinkedIn Ads maximizing ROAS, customer acquisition, and qualified sales pipelines.",
      features: [
        "Multi-Channel Paid Ads",
        "Conversion Rate Optimization (CRO)",
        "Real-Time Attribution Modeling",
      ],
      link: "/performance-marketing-agency",
      featured: true,
      category: "performance",
    },
    {
      title: "B2B SEO Company",
      tag: "Enterprise Pipeline",
      description:
        "High-ticket B2B keyword strategies, technical content, and account-based search positioning that delivers RFQs from enterprise decision-makers.",
      features: [
        "Long-Tail High-Intent Keywords",
        "Whitepapers & Gated Assets",
        "C-Suite Search Discovery",
      ],
      link: "/services/b2b-seo-company-in-india",
      category: "search",
    },
    {
      title: "Local SEO & GMB",
      tag: "Google Business Profile",
      description:
        "Multi-location Google Business Profile management, local citation audits, and geo-targeted ranking strategies that drive footfall and calls.",
      features: [
        "Google 3-Pack Dominance",
        "Local Citation Building",
        "Customer Review Management",
      ],
      link: "/services/local-seo-company-in-india",
      category: "search",
    },
    {
      title: "Social Media Marketing",
      tag: "Community & Brand",
      description:
        "Creative storytelling, bespoke social grids, reels, carousels, and high-engagement community management on Instagram, LinkedIn, and YouTube.",
      features: [
        "Content Calendar & Curation",
        "Viral Short-Form Formats",
        "Active Community Engagement",
      ],
      link: "/services/social-media-marketing",
      category: "social",
    },
    {
      title: "Influencer Marketing",
      tag: "Creator Partnerships",
      description:
        "Connecting your brand with authentic nano, micro, and celebrity influencers for credible, viral endorsements that convert audiences into buyers.",
      features: [
        "Vetted Creator Network",
        "Brief Formulation & Contracts",
        "Performance ROI Attribution",
      ],
      link: "/services/influencer-marketing-agency",
      category: "social",
    },
    {
      title: "Brand Video Production",
      tag: "Commercials & Films",
      description:
        "End-to-end commercial filmmaking, television ads, corporate brand films, and high-impact digital campaign videos from script to screen.",
      features: [
        "TVC Commercial Production",
        "Corporate & Explainer Films",
        "Cinematic Post-Production",
      ],
      link: "/services/brand-video-production-agency",
      category: "creative",
    },
    {
      title: "AI Video Production",
      tag: "Generative AI",
      badge: "NEW",
      description:
        "Cutting-edge synthetic video pipelines, AI voiceovers, virtual brand ambassadors, and agile video variations created at unparalleled speed.",
      features: [
        "Prompt-to-Cinema Generation",
        "Hyper-Realistic Avatars",
        "Multilingual Localization",
      ],
      link: "/services/ai-video-production-agency",
      category: "creative",
    },
    {
      title: "UGC Video Agency",
      tag: "User-Generated Content",
      description:
        "Relatable, authentic short-form video ads shot by real consumers and creators that outperform polished studio commercials on TikTok and Reels.",
      features: [
        "High-Converting Hook Testing",
        "Authentic Consumer Testimonials",
        "Rapid Creative Iterations",
      ],
      link: "/services/ugc-video-agency",
      category: "creative",
    },
    {
      title: "Website Development",
      tag: "Engineering & UI/UX",
      description:
        "High-performance WordPress, Shopify, and custom React web development optimized for lightning speed, mobile UX, and maximum conversion rates.",
      features: [
        "Custom UI/UX Architecture",
        "Mobile-First Responsiveness",
        "SEO-Friendly Clean Code",
      ],
      link: "/services/website-development-india",
      category: "web",
    },
    {
      title: "Web App Development",
      tag: "Scalable Systems",
      description:
        "Robust, secure, and modern SaaS web applications, customer portals, and internal dashboards built with scalable modern cloud architectures.",
      features: [
        "React & Node Engineering",
        "API & Third-Party Integrations",
        "Enterprise-Grade Security",
      ],
      link: "/services/web-application-development",
      category: "web",
    },
    {
      title: "Creative & Communication",
      tag: "Brand Architecture",
      description:
        "Brand naming, visual identities, packaging guidelines, messaging tone-of-voice, and complete advertising collateral design.",
      features: [
        "Brand Identity & Guidelines",
        "Packaging & Label Design",
        "Print & Out-of-Home Creatives",
      ],
      link: "/services/creative-communication",
      category: "creative",
    },
    {
      title: "Online Reputation Management",
      tag: "ORM & Trust",
      description:
        "Proactive narrative defense, suppression of defamatory search results, Google review optimization, and executive personal branding.",
      features: [
        "SERP Suppression Strategies",
        "Crisis Communication Support",
        "Executive Brand Protection",
      ],
      link: "/services/online-reputation-management",
      category: "content",
    },
  ];

  const filteredServices =
    activeTab === "all"
      ? allServicesList
      : allServicesList.filter((s) => s.category === activeTab);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1">
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-[#F7F6F2] to-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            {/* Breadcrumbs */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
              <Link to="/" className="hover:text-black">
                Home
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              <span className="text-slate-800 font-medium">Services</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5 text-[#F36C3D]" />
              <span>Full-Stack Digital Agency Ecosystem</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 leading-[1.08] mb-6 max-w-4xl">
              Best Digital Marketing Services Company in India
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-700 tracking-tight mb-6 max-w-3xl">
              Full-Service Digital Marketing & SEO Solutions for Brands That
              Want to Win
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-8">
              Every business has unique growth challenges. We offer an
              integrated, multi-disciplinary digital marketing ecosystem
              engineered to scale search visibility, accelerate customer
              acquisition, enhance brand equity, and generate measurable
              revenue.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button to="/contact" variant="primary" size="lg" icon="upRight">
                Get Free Services Proposal
              </Button>
              <a
                href="#services-grid"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3.5 rounded-full bg-white text-black border border-zinc-300 hover:border-black transition-colors"
              >
                <span>Browse All 15+ Services ↓</span>
              </a>
            </div>
          </div>
        </section>

        {/* ================= STICKY IN-PAGE SECTION NAV ================= */}
        <div className="sticky top-[73px] z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-600">
            <div className="flex items-center gap-6 overflow-x-auto py-1">
              <a href="#why-us" className="hover:text-black transition-colors">
                Why Choose Us
              </a>
              <a href="#pillars" className="hover:text-black transition-colors">
                Core Pillars
              </a>
              <a
                href="#services-grid"
                className="text-black font-bold border-b-2 border-black pb-1"
              >
                All Services
              </a>
              <a
                href="#industries"
                className="hover:text-black transition-colors"
              >
                Industries
              </a>
              <a href="#results" className="hover:text-black transition-colors">
                Case Results
              </a>
              <a href="#faqs" className="hover:text-black transition-colors">
                FAQs
              </a>
            </div>
            <a
              href="#audit-form"
              className="text-black hover:text-[#F36C3D] flex items-center gap-1 font-bold"
            >
              <span>Free Audit Form →</span>
            </a>
          </div>
        </div>

        {/* ================= CLIENT LOGOS MARQUEE ================= */}
        <ClientMarquee title="Trusted by 250+ Category Leaders Across India & Globally" />

        {/* ================= 6 CORE PILLARS SECTION ================= */}
        <section
          id="why-us"
          className="py-20 bg-white border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                Proven Excellence
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                What makes us India's best digital marketing services company
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We combine the strategic depth of top management consulting with
                the boundless agility of modern digital growth hackers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  14+
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  14+ Years of Proven Expertise
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Steering brands through every major algorithm shift from Panda
                  and Penguin to Core Updates, Search Generative Experience, and
                  AI LLM search.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  360°
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Full-Funnel, Under One Roof
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  No messy handoffs between disparate creative agencies,
                  performance buyers, and web developers. We control the
                  complete customer journey.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  250+
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  250+ Brands. Every Category.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Deep contextual benchmarks across B2B manufacturing,
                  high-growth D2C, real estate, healthcare, education, and
                  finance.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  ROI
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Outcomes, Not Vanity Metrics
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  We measure success in qualified SQLs, inbound RFQs, blended
                  CAC reduction, and net revenue compounding rather than
                  meaningless impressions.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  GLO
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Cross-Border. Global Scale.
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Trusted by enterprises across North America, the UK, Europe,
                  Australia, and the Middle East to navigate local nuances with
                  Indian cost efficiencies.
                </p>
              </div>

              <div className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 space-y-3">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center font-bold text-lg mb-4">
                  100%
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Transparent Live Reporting
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Direct access to real-time custom dashboards, verified search
                  engine rankings via RankStreet, and bi-weekly strategic review
                  calls.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4 CORE PILLARS OVERVIEW ================= */}
        <section
          id="pillars"
          className="py-20 bg-[#F8FAFC] border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Core Competencies
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                India's full-stack SEO, Performance, Social & Web agency
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                  <Search className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  India's Best SEO Agency
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ranking on page 1 of Google is the single highest-margin
                  growth asset any business can build. We execute forensic
                  on-page restructuring, programmatic entity-rich schema, and
                  white-hat link acquisition that withstands all algorithmic
                  turbulence.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/seo-services"
                    className="text-sm font-semibold text-black hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore SEO Capabilities</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Performance Marketing That Compounds ROI
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  We don't burn budgets hoping for luck. Our performance
                  marketers deploy granular audience segmentation, dynamic
                  creative variations, server-side CAPI tracking, and dedicated
                  conversion landing pages to ensure positive unit economics.
                </p>
                <div className="pt-2">
                  <Link
                    to="/performance-marketing-agency"
                    className="text-sm font-semibold text-black hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Performance Marketing</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                  <Share2 className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  India's Leading Social Media Agency
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Transform passive scrollers into passionate brand advocates.
                  From culturally resonant social memes and thought leadership
                  on LinkedIn to viral creator campaigns on Instagram, we give
                  your brand an authoritative voice.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/social-media-marketing"
                    className="text-sm font-semibold text-black hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Social Media Services</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/90 shadow-sm space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBF3FB] text-[#00529B] border border-blue-200 flex items-center justify-center">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">
                  Website Design Agency for Brands That Convert
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  A beautiful website that doesn't convert is just expensive
                  digital wallpaper. We engineer lightning-fast digital
                  storefronts and corporate sites with intuitive UX, sub-second
                  load times, and frictionless lead capture forms.
                </p>
                <div className="pt-2">
                  <Link
                    to="/services/website-development-india"
                    className="text-sm font-semibold text-black hover:underline inline-flex items-center gap-1"
                  >
                    <span>Explore Web Design Services</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= ALL 15 SERVICES COMPLETE DIRECTORY ================= */}
        <section
          id="services-grid"
          className="py-20 bg-white border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Complete Catalog
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                Every digital marketing service, under one roof
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Click into any service below to explore dedicated case studies,
                processes, methodologies, and deliverables.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs font-semibold">
              <button
                type="button"
                onClick={() => setActiveTab("all")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "all" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                All 15+ Services
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("search")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "search" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                Search & SEO (5)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("performance")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "performance" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                Performance (1)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("social")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "social" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                Social & Influencer (2)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("creative")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "creative" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                Creative & Video (4)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab("web")}
                className={`px-4 py-2 rounded-full transition-colors ${activeTab === "web" ? "bg-black text-white" : "bg-zinc-100 text-slate-700 hover:bg-zinc-200"}`}
              >
                Web & Apps (2)
              </button>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, idx) => (
                <ServiceCard
                  key={idx}
                  title={service.title}
                  tag={service.tag}
                  badge={service.badge}
                  description={service.description}
                  features={service.features}
                  link={service.link}
                  featured={service.featured}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ================= INDUSTRIES WE SERVE ================= */}
        <section
          id="industries"
          className="py-20 bg-[#F8FAFC] border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Domain Mastery
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
                Industries We Serve
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Tailored digital growth playbooks tuned for the distinct
                compliance, customer lifecycles, and economics of each vertical.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                {
                  name: "Automotive & EV",
                  link: "/automotive-digital-marketing-agency",
                  icon: "🚗",
                },
                {
                  name: "Beauty & Skin Care",
                  link: "/beauty-skin-care-digital-marketing-agency",
                  icon: "✨",
                },
                {
                  name: "B2B & Industrial",
                  link: "/digital-marketing-agency-for-business-to-business",
                  icon: "🏢",
                },
                {
                  name: "Education & EdTech",
                  link: "/digital-marketing-agency-for-education-industry",
                  icon: "🎓",
                },
                {
                  name: "Food & Beverage",
                  link: "/digital-marketing-agency-for-food-beverage",
                  icon: "🍔",
                },
                {
                  name: "Healthcare & Pharma",
                  link: "/digital-marketing-services-for-healthcare",
                  icon: "🩺",
                },
                {
                  name: "Real Estate & Spaces",
                  link: "/digital-marketing-agency-for-real-estate",
                  icon: "🏠",
                },
                {
                  name: "Financial Services",
                  link: "/digital-marketing-for-financial-services",
                  icon: "💳",
                },
                {
                  name: "Travel & Hospitality",
                  link: "/digital-marketing-for-travel-tourism",
                  icon: "✈️",
                },
                {
                  name: "Electric Vehicles (EV)",
                  link: "/digital-marketing-services-for-ev",
                  icon: "⚡",
                },
                {
                  name: "Home Decor & Living",
                  link: "/digital-marketing-services-for-home-decor",
                  icon: "🛋️",
                },
                {
                  name: "eCommerce & D2C",
                  link: "/digital-marketing-for-ecommerce-2",
                  icon: "🛍️",
                },
              ].map((ind, i) => (
                <Link
                  key={i}
                  to={ind.link}
                  className="p-5 rounded-2xl bg-white border border-slate-200/80 hover:border-black hover:shadow-md transition-all flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{ind.icon}</span>
                    <span className="text-sm font-bold text-slate-900 group-hover:text-black">
                      {ind.name}
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ================= CASE STUDY RESULTS TABLE ================= */}
        <section
          id="results"
          className="py-20 bg-white border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-10">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3">
                Measurable Impact
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
                Why Silgate Media is the Best Digital Marketing Services Company
                for Your Brand
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Take a look at verified ranking and lead growth milestones
                achieved across diverse client categories.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm cs-table">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th>Account Category</th>
                      <th>Primary Target Keyword</th>
                      <th>Before Silgate</th>
                      <th>Current Position</th>
                      <th>Qualified Traffic Lift</th>
                      <th>Verified Lead Delta</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-slate-900">
                        National Automotive Brand
                      </td>
                      <td className="text-slate-600">
                        Electric Vehicle Dealerships India
                      </td>
                      <td className="text-rose-600 font-medium">
                        Not in Top 100
                      </td>
                      <td className="text-emerald-600 font-bold">
                        #1 Google Organic
                      </td>
                      <td className="font-bold text-slate-900">+640%</td>
                      <td className="text-emerald-700 font-semibold">
                        +320% Test Drives
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">
                        High-Ticket D2C Skincare
                      </td>
                      <td className="text-slate-600">
                        Organic Retinol Serum India
                      </td>
                      <td className="text-rose-600 font-medium">
                        #44 (Page 5)
                      </td>
                      <td className="text-emerald-600 font-bold">
                        #2 (Above Fold)
                      </td>
                      <td className="font-bold text-slate-900">+490%</td>
                      <td className="text-emerald-700 font-semibold">
                        4.8x Monthly GMV
                      </td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-slate-900">
                        Global IT Support & Managed Services
                      </td>
                      <td className="text-slate-600">
                        Managed IT Services Provider UK
                      </td>
                      <td className="text-rose-600 font-medium">
                        #38 (Page 4)
                      </td>
                      <td className="text-emerald-600 font-bold">#3</td>
                      <td className="font-bold text-slate-900">+310%</td>
                      <td className="text-emerald-700 font-semibold">
                        +175% SLA Contracts
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ================= AUDIT & PROPOSAL FORM ================= */}
        <AuditForm
          title="Get My FREE Our Services Proposal"
          subtitle="Tell us about your brand's growth goals. Our directors will conduct an audit and prepare a comprehensive proposal."
        />

        {/* ================= 10 AUTHENTIC FAQS ================= */}
        <div id="faqs">
          <FAQAccordion
            items={servicesFaqs}
            title="Digital Marketing Services FAQs"
            subtitle="Everything you need to know about our service models, deliverables, and onboarding."
          />
        </div>

        {/* ================= CTA BANNER ================= */}
        <CTA
          title="Let's make something great together"
          description="Walk the digital talk with Silgate Media. Discuss your brief with our account directors today."
        />
      </main>

      <Footer />
    </div>
  );
}
