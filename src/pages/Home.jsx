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
import FloatingHomeVideo from "../components/FloatingHomeVideo";
import {
  ArrowUpRight,
  Sparkles,
  Award,
  TrendingUp,
  Target,
  ShieldCheck,
  CheckCircle,
  Cpu,
  X,
} from "lucide-react";

// Authentic DigiStreet Assets
import heroPoster from "../assets/images/digistreet-home-desktop-poster-2026.webp";
import badge10Beyond from "../assets/images/10beyond.webp";
import rankstreetPreview from "../assets/images/rankstreet-real-audit-preview-2026.webp";
import xonnImg from "../assets/images/xonn-fintech-website-design-portfolio.webp";
import vegaImg from "../assets/images/vega-grooming-social-media-campaign-portfolio.webp";
import omaxeImg from "../assets/images/omaxechowk-real-website-design-portfolio.webp";
import bpImg from "../assets/images/british-paints-brand-film-portfolio.webp";
import sircaImg from "../assets/images/sirca-paints-brand-film-portfolio.webp";
import halonixImg from "../assets/images/halonix-real-website-design-portfolio.webp";
import jashnImg from "../assets/images/jashn-real-estate-campaign-design-portfolio.webp";
import jaksonImg from "../assets/images/jakson-real-website-design-portfolio.webp";
import regencoImg from "../assets/images/regenco-social-media-creative-1.webp";
import pravekImg from "../assets/images/pravek-ayurveda-shopify-store.jpg.webp";

// Creative Wall assets
import garnierImg from "../assets/images/garnier-beauty-influencer-campaign-portfolio.webp";
import amityImg from "../assets/images/amity-online-social-media-work-portfolio.webp";
import farmerFreshImg from "../assets/images/farmer-fresh-food-brand-creative-portfolio.webp";
import dearImg from "../assets/images/dear-consumer-brand-campaign-portfolio.webp";
import apjImg from "../assets/images/apj-client-campaign-creative-portfolio.webp";
import mahindraImg from "../assets/images/mahindra-influencer-campaign-portfolio.webp";
import metsoImg from "../assets/images/metso-industrial-b2b-creative-portfolio.webp";

// Fallback & Insight images
import blogPackaging from "../assets/images/brand-packaging-beauty-brands-us-retail-1024x576.webp";
import blogDubai from "../assets/images/corporate-films-real-estate-developers-dubai-1024x576.webp";
import blogSearch from "../assets/images/search-advertising-professional-services-new-york-1024x576.webp";
import homePageVideo from "../assets/videos/home_page_video.mp4";

export default function Home() {
  const [activeWorkFilter, setActiveWorkFilter] = useState("all");
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const workItems = [
    {
      id: "xonn",
      client: "XONN Fintech",
      title: "A digital home for a financial platform",
      category: "web",
      catLabel: "Web & Technology",
      image: xonnImg,
      summary:
        "Designed and deployed a frictionless institutional trading portal and high-converting investor onboarding workflow.",
      deliverables: [
        "UI/UX System",
        "React Web Architecture",
        "Conversion Optimization",
      ],
      metric: "+340% Sign-up Conversion",
      link: "/services/website-development-india",
    },
    {
      id: "vega",
      client: "Vega Grooming",
      title: "Product stories with a recognisable voice",
      category: "campaigns",
      catLabel: "Campaigns & Social",
      image: vegaImg,
      summary:
        "Multi-channel lifestyle creator campaign and short-form video formats generating massive viral engagement across India.",
      deliverables: ["Creator Briefs", "Reels Production", "Moment Marketing"],
      metric: "18M+ Organic Impressions",
      link: "/services/social-media-marketing",
    },
    {
      id: "omaxe",
      client: "Omaxe Chowk",
      title: "A retail destination, made digital",
      category: "web",
      catLabel: "Web & Technology",
      image: omaxeImg,
      summary:
        "Architectural heritage mall digital transformation featuring interactive store directory, leasing lead funnels, and 3D walkthroughs.",
      deliverables: [
        "Interactive Store Portal",
        "Hyperlocal SEO",
        "Leasing Campaigns",
      ],
      metric: "45,000+ Monthly Visitors",
      link: "/digital-marketing-agency-for-real-estate",
    },
    {
      id: "british-paints",
      client: "British Paints",
      title: "Colourful ideas for everyday spaces",
      category: "tvcs",
      catLabel: "Commercial TVCs",
      image: bpImg,
      summary:
        "National television commercial, cinema spots, and festival digital activations celebrating everyday homes and vibrant shades.",
      deliverables: [
        "TVC Direction",
        "Color Grading",
        "Multilingual Voiceovers",
      ],
      metric: "42M+ TV & Digital Viewers",
      link: "/services/brand-video-production-agency",
    },
    {
      id: "sirca",
      client: "Sirca Paints",
      title: "Identity that lives beyond a logo",
      category: "tvcs",
      catLabel: "Commercial TVCs",
      image: sircaImg,
      summary:
        "High-concept ad film showcasing Italian luxury wood coatings, contractor loyalty activations, and premium architectural branding.",
      deliverables: ["Brand Film", "Architect Conclave", "Contractor App"],
      metric: "4.8x Dealer Orders",
      link: "/services/creative-communication",
    },
    {
      id: "halonix",
      client: "Halonix Technologies",
      title: "Lighting products, clearly presented",
      category: "web",
      catLabel: "Web & Technology",
      image: halonixImg,
      summary:
        "Enterprise product catalog architecture with intelligent wattage/room calculators, smart lighting IoT showcase, and distributor locator.",
      deliverables: ["Catalog Architecture", "Fast Search UX", "Technical SEO"],
      metric: "#1 Search for Smart Lighting",
      link: "/services/website-development-india",
    },
    {
      id: "jashn",
      client: "Jashn Real Estate",
      title: "Creative connected to qualified demand",
      category: "campaigns",
      catLabel: "Campaigns & Social",
      image: jashnImg,
      summary:
        "Luxury real estate launch campaign blending ultra-targeted Meta ads, Google Search capturing high-intent NRIs, and sleek landing pages.",
      deliverables: [
        "Performance Ads",
        "High-Net-Worth Lead Funnel",
        "Print & Outdoor",
      ],
      metric: "₹120Cr+ Inventory Sold",
      link: "/performance-marketing-agency",
    },
    {
      id: "jakson",
      client: "Jakson Solar & Clean Energy",
      title: "A digital presence for an energy business",
      category: "web",
      catLabel: "Web & Technology",
      image: jaksonImg,
      summary:
        "Corporate portal and sustainability report hub communicating enterprise renewable energy infrastructure and commercial solar installations.",
      deliverables: [
        "B2B Web Development",
        "Investor Deck UI",
        "Corporate Storytelling",
      ],
      metric: "99.98% Core Web Vitals",
      link: "/digital-marketing-services-for-ev",
    },
    {
      id: "regenco",
      client: "Regenco Green Energy",
      title: "A consistent voice for a mobility brand",
      category: "campaigns",
      catLabel: "Campaigns & Social",
      image: regencoImg,
      summary:
        "Moment marketing, informative carousels, and green technology advocacy establishing executive thought leadership in clean power.",
      deliverables: [
        "LinkedIn Executive Comms",
        "Infographic Design",
        "Community Building",
      ],
      metric: "+280% LinkedIn Followers",
      link: "/services/social-media-marketing",
    },
    {
      id: "pravek",
      client: "Pravek Ayurveda",
      title: "From 200 to 500 orders per month",
      category: "d2c",
      catLabel: "D2C & Skincare",
      image: pravekImg,
      summary:
        "Headless Shopify D2C store optimization, CRO audits, and precision Meta & Google shopping ad scaling for authentic ayurvedic remedies.",
      deliverables: [
        "Shopify Store Revamp",
        "CAPI Server Tracking",
        "Retention Email Flows",
      ],
      metric: "2.5x Monthly D2C Revenue",
      link: "/digital-marketing-for-ecommerce-2",
    },
  ];

  const filteredWork =
    activeWorkFilter === "all"
      ? workItems
      : workItems.filter((item) => item.category === activeWorkFilter);

  const creativeWallItems = [
    { name: "Mahindra EV", cat: "Creator Activation", img: mahindraImg },
    { name: "Garnier Beauty", cat: "Influencer Campaign", img: garnierImg },
    { name: "Amity Online", cat: "Education Enrollment", img: amityImg },
    { name: "British Paints", cat: "National Broadcast TVC", img: bpImg },
    { name: "Sirca Paints", cat: "Italian Luxury Film", img: sircaImg },
    { name: "Vega Hair & Care", cat: "Product Story", img: vegaImg },
    { name: "Dear Consumer", cat: "Packaging & Identity", img: dearImg },
    { name: "XONN Fintech", cat: "Design System", img: xonnImg },
    { name: "Farmer Fresh", cat: "Organic Food Branding", img: farmerFreshImg },
    { name: "APJ Group", cat: "Corporate Story", img: apjImg },
    { name: "Metso Outotec", cat: "Industrial B2B Portal", img: metsoImg },
  ];

  const homeFaqs = [
    {
      q: "What makes Silgate Solutions different from other digital marketing agencies?",
      a: "DigiStreet combines creative storytelling with ruthless performance engineering. While most agencies specialize in either creative design or technical marketing, we house full-stack brand strategy, high-end video production, technical SEO, and data-driven performance marketing under one roof.",
    },
    {
      q: "Which digital marketing services do you provide?",
      a: "We provide comprehensive 360° digital services including Technical & Organic SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Performance Marketing (Google, Meta, LinkedIn Ads), Brand Identity & Packaging, Website & Mobile App Development, Social Media Marketing, Influencer Marketing, and Corporate Video Production.",
    },
    {
      q: "How fast can we expect measurable business results?",
      a: "For Performance Marketing and Paid Ads, measurable traffic and qualified lead generation begin within the first 7 to 14 days. For organic Search Engine Optimization (SEO), noticeable rank improvements and organic traffic compounding typically materialize within 60 to 90 days.",
    },
    {
      q: "Does Silgate Solutions work with international clients outside India?",
      a: "Yes. DigiStreet proudly manages cross-border digital campaigns and web development for clients across the United States (San Francisco, New York, Florida), the United Kingdom, Canada, Australia, Singapore, and the Middle East (Dubai, Bahrain, Saudi Arabia).",
    },
    {
      q: "How do I get a proposal or audit for my brand?",
      a: "You can request a complimentary SEO and Digital Audit using our form below, email us directly at info@digistreetmedia.com, or speak with our directors directly by calling +91 9990622122.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <section>
          <video src={homePageVideo} autoPlay muted loop></video>
        </section>
        {/* ================= 1. HERO SECTION (Matches Live DigiStreet) ================= */}
        <section className="relative pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-gradient-to-b from-[#F8FAFC] via-white to-white border-b border-slate-200/80">
          {/* Subtle brand swoosh glow */}
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-[#00529B]/15 via-[#F36C3D]/12 to-[#F6C84A]/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Headlines & Call to Actions */}
              <div className="lg:col-span-7 space-y-6">
                {/* Ranking & 10 Beyond Badges */}
                <div className="flex flex-wrap items-center gap-3">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider shadow-sm">
                    <Award className="w-3.5 h-3.5 text-[#F36C3D]" />
                    <span>
                      Premier Enterprise Digital & Technology Solutions
                    </span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#FFF1EC] border border-[#FED7AA] text-[#F36C3D] text-xs font-bold">
                    <img
                      src={badge10Beyond}
                      alt="10 Years and Beyond"
                      className="h-4 w-auto object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <span>10+ Years of Innovation</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#F36C3D]">
                    ENTERPRISE DIGITAL & MARCOM SOLUTIONS
                  </div>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 leading-[1.08]">
                    Award-Winning{" "}
                    {/* <span className="relative inline-block text-[#00529B]"> */}
                    Digital Solutions
                    {/* <span className="absolute bottom-1 left-0 w-full h-1.5 bg-gradient-to-r from-[#F6C84A] via-[#F36C3D] to-[#F36C3D] rounded-full"></span>
                    </span>{" "} */}
                    & Marketing in India
                  </h1>
                </div>

                <h2 className="text-lg sm:text-2xl font-semibold text-slate-800 tracking-tight leading-snug">
                  Transforming Global Brands with Strategic Innovation &
                  Technology.
                </h2>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  When the creativity and productivity of ordinary agencies end,
                  that is from where we start. We are Silgate Solutions, an
                  enterprise digital technology and creative solutions company
                  based in India. Our foundation is built on strategic thinking,
                  high-recall communication, and scalable digital architectures
                  that help brands reach unprecedented heights.
                </p>

                {/* Primary Action Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button
                    to="/contact"
                    variant="primary"
                    size="lg"
                    icon="upRight"
                  >
                    Discuss Your Project
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    Explore All Services
                  </Button>
                  <a
                    href="#audit-form"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-3 text-slate-700 hover:text-black hover:underline"
                  >
                    <span>Get Free Audit ↓</span>
                  </a>
                </div>

                {/* Key Metrics Strip (14+ Yrs, 250+ Brands, 5+ Yrs Retention, 40+ Team) */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-slate-200">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00529B]">
                      14+
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Years Experience
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00529B]">
                      250+
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Global Brands
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00529B]">
                      5+ Yrs
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      Avg. Client Retention
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#00529B]">
                      40+
                    </div>
                    <div className="text-xs text-slate-500 font-medium">
                      In-House Specialists
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Graphic */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-zinc-900 aspect-[4/5] group">
                    <img
                      src={heroPoster}
                      alt="DigiStreet Media Creative Work"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = sircaImg;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent flex flex-col justify-end p-6 sm:p-8 text-white">
                      <span className="badge-new w-fit mb-2">
                        Featured Work
                      </span>
                      <h3 className="text-xl font-bold tracking-tight mb-1 text-white">
                        Impact That Resonates
                      </h3>
                      <p className="text-xs text-zinc-300">
                        Transforming ambitious brands into category leaders
                        across the globe.
                      </p>
                    </div>
                  </div>

                  {/* Floating Google / Silicon India Rating Card */}
                  <div className="absolute -bottom-5 -left-5 bg-white border border-slate-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3 hidden sm:flex">
                    <div className="w-10 h-10 rounded-full bg-[#00529B] flex items-center justify-center font-bold text-white text-sm">
                      ★ 4.9
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        Top-Rated Digital Solutions
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Google & SiliconIndia Certified
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 2. CLIENT LOGOS MARQUEE ================= */}
        <ClientMarquee title="Not just clients, they are more like partners" />

        {/* ================= 3. AGENCY PHILOSOPHY & INTRO ================= */}
        <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-4">
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-700 text-xs font-semibold uppercase tracking-wider">
                  Agency Philosophy
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900 leading-tight">
                  Some just talk. <br />
                  <span className="text-[#00529B]">Some deliver results.</span>
                </h2>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  We don't believe in vanity metrics or empty jargon. We believe
                  in high-recall storytelling, rock-solid technical SEO
                  architectures, and media buying funnels that demonstrably grow
                  revenue.
                </p>
                <div className="pt-2">
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-sm font-bold text-black hover:text-[#F36C3D] group"
                  >
                    <span>Read About Our DNA & Philosophy</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00529B]/40 hover:shadow-lg space-y-2.5 hover:border-black/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Strategic Precision
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Data-informed market positioning and granular customer
                    persona mapping before touching ad dollars.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00529B]/40 hover:shadow-lg space-y-2.5 hover:border-black/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Creative Edge
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    National TVCs, bespoke packaging, and thumb-stopping
                    vertical content that commands instant attention.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00529B]/40 hover:shadow-lg space-y-2.5 hover:border-black/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Technical Power
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Semantic search engineering, schema graphs, Core Web Vitals
                    optimization, and custom software tools.
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-slate-200/80 hover:border-[#00529B]/40 hover:shadow-lg space-y-2.5 hover:border-black/30 transition-all">
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900">
                    Compounding Equity
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Organic search rankings and brand affinity that continue
                    generating returns long after campaigns end.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 4. CORE SERVICES GRID ================= */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Full-Funnel Capabilities
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                Full-Service Digital Solutions for Brands That Want to Win
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                From brand strategy and creative design to precision performance
                marketing and generative AI search, our integrated teams deliver
                measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <ServiceCard
                title="Search Engine Marketing"
                tag="Organic & Paid"
                description="Dominating SERPs with high-intent keyword strategies, technical site architecture, link building, and Google Ads."
                features={[
                  "Technical SEO & Core Web Vitals",
                  "AEO & GEO Search Optimization",
                  "Lead Generation via Organic Search",
                ]}
                link="/services/search-engine-marketing"
              />

              <ServiceCard
                title="Performance Marketing"
                tag="ROI / ROAS"
                badge="HOT"
                description="Hyper-targeted paid acquisition campaigns across Meta, Google, LinkedIn and Amazon engineered for profitable scale."
                features={[
                  "Multi-Channel Ad Campaigns",
                  "Conversion Rate Optimization (CRO)",
                  "Advanced Attribution Analytics",
                ]}
                link="/performance-marketing-agency"
                featured={true}
              />

              <ServiceCard
                title="Creative & Communication"
                tag="Brand Identity"
                description="Distill your brand's unique ethos into striking visual identities, packaging design, and memorable narratives."
                features={[
                  "Brand Strategy & Architecture",
                  "Logo & Visual Identity",
                  "Product Packaging Design",
                ]}
                link="/services/creative-communication"
              />

              <ServiceCard
                title="Website & App Development"
                tag="Engineering"
                description="Bespoke corporate websites, high-speed headless eCommerce stores, and scalable custom web applications."
                features={[
                  "Corporate Website Design",
                  "E-Commerce Architecture",
                  "Mobile App Development",
                ]}
                link="/services/website-development-india"
              />

              <ServiceCard
                title="Social Media Marketing"
                tag="Engagement"
                description="Cultivate organic communities, viral content formats, and culturally relevant conversations across digital channels."
                features={[
                  "Instagram & LinkedIn Growth",
                  "Community Management",
                  "Social Brand Campaigns",
                ]}
                link="/services/social-media-marketing"
              />

              <ServiceCard
                title="Influencer Marketing"
                tag="Influence"
                description="End-to-end influencer curation, creative brief orchestration, and measurable creator-led conversion funnels."
                features={[
                  "Macro & Micro-Influencers",
                  "Contracting & Execution",
                  "Performance Tracking",
                ]}
                link="/services/influencer-marketing-agency"
              />

              <ServiceCard
                title="AI & UGC Video Production"
                tag="Cutting-Edge"
                badge="NEW"
                description="Next-generation generative AI video workflows and authentic UGC creator ads delivering high engagement."
                features={[
                  "Prompt-to-Cinema Pipelines",
                  "Virtual Brand Ambassadors",
                  "High-Velocity Ad Variations",
                ]}
                link="/services/ai-video-production-agency"
              />

              <ServiceCard
                title="Ad Management & Media Buying"
                tag="Scaling"
                description="Strategic media planning, multi-platform account scaling, and real-time bid adjustments for maximum ROAS."
                features={[
                  "Cross-Device Attribution",
                  "Audience Cohort Testing",
                  "First-Party CAPI Integration",
                ]}
                link="/services/ad-management"
              />
            </div>

            <div className="text-center mt-12">
              <Button to="/services" variant="primary" size="lg" icon="upRight">
                View All Specialized Services
              </Button>
            </div>
          </div>
        </section>

        {/* ================= 5. CLIENT WORK SHOWCASE (#hw26 / #work) ================= */}
        <section
          id="work"
          className="py-20 bg-white border-b border-slate-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  Proven Impact
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
                  Digital Marketing Agency Work Showcase
                </h2>
              </div>
              <Link
                to="/clients"
                className="text-sm font-semibold text-black hover:text-[#F36C3D] flex items-center gap-1 group flex-shrink-0"
              >
                <span>View Full Client Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-zinc-100">
              {[
                { id: "all", label: "All Work" },
                { id: "web", label: "Web & Technology" },
                { id: "campaigns", label: "Campaigns & Social" },
                { id: "tvcs", label: "Commercial TVCs" },
                { id: "d2c", label: "D2C & Skincare" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  onClick={() => setActiveWorkFilter(pill.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    activeWorkFilter === pill.id
                      ? "bg-[#EBF3FB] text-[#00529B] border border-blue-200 shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-[#EBF3FB] hover:text-[#00529B]"
                  }`}
                >
                  {pill.label}
                </button>
              ))}
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWork.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setSelectedCaseStudy(item)}
                  className="group rounded-3xl overflow-hidden border border-slate-200 bg-white hover:shadow-2xl transition-all duration-300 flex flex-col justify-between cursor-pointer"
                >
                  <div>
                    <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-black text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                        {item.catLabel}
                      </span>
                      <span className="absolute bottom-4 right-4 bg-[#091E3A]/90 text-[#F6C84A] border border-white/10 text-[11px] font-bold px-3 py-1 rounded-full">
                        {item.metric}
                      </span>
                    </div>

                    <div className="p-6">
                      <div className="text-xs font-semibold uppercase tracking-wider text-amber-600 mb-1">
                        {item.client}
                      </div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-black transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2">
                        {item.summary}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2 border-t border-zinc-100 flex items-center justify-between text-xs font-semibold text-slate-500 group-hover:text-black">
                    <span>Inspect Case Study</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Modal Lightbox for Project Inspection */}
        {selectedCaseStudy && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 max-h-[90vh] flex flex-col relative">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 bg-black/70 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="aspect-video w-full bg-zinc-900 overflow-hidden relative">
                <img
                  src={selectedCaseStudy.image}
                  alt={selectedCaseStudy.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-3 left-4 bg-[#091E3A]/90 text-[#F6C84A] border border-white/10 px-3.5 py-1 rounded-full text-xs font-bold">
                  {selectedCaseStudy.metric}
                </div>
              </div>

              <div className="p-6 sm:p-8 overflow-y-auto space-y-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-600">
                    {selectedCaseStudy.client} · {selectedCaseStudy.catLabel}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {selectedCaseStudy.title}
                  </h3>
                </div>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {selectedCaseStudy.summary}
                </p>

                <div className="space-y-2 pt-2 border-t border-zinc-100">
                  <div className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                    Key Deliverables
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedCaseStudy.deliverables.map((deliv, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-zinc-100 text-slate-800 text-xs font-medium rounded-full"
                      >
                        ✓ {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <Button
                    to={selectedCaseStudy.link}
                    variant="primary"
                    size="md"
                    icon="upRight"
                    onClick={() => setSelectedCaseStudy(null)}
                  >
                    Explore Related Service
                  </Button>
                  <Button
                    to="/contact"
                    variant="outline"
                    size="md"
                    onClick={() => setSelectedCaseStudy(null)}
                  >
                    Request Similar Proposal
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= 6. SOFTWARE & PRODUCT PLATFORMS (#rp26) ================= */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider">
                Proprietary Tech Suite
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
                Web & mobile app development. <br />
                Digital marketing for global brands.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We engineer proprietary software tools that give our client
                brands deep ranking telemetry, brand safety monitoring, and
                automated visibility insights.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Product 1: RankStreet */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all space-y-6">
                <div className="flex items-center justify-between">
                  <span className="badge-new">Search Intelligence</span>
                  <div className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    Live SGE & AI Tracking
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-zinc-100 bg-zinc-950">
                  <img
                    src={rankstreetPreview}
                    alt="RankStreet Real Audit Tool"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    RankStreet
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Our flagship enterprise search intelligence platform
                    tracking millions of keywords across Google, Bing, and
                    Search Generative Experience AI overviews down to
                    hyper-local pin-code precision.
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Real-time daily SERP tracking across 120+ countries
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Automated algorithmic drop and search volatility alerts
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      SGE / AI Overview mention and citation verification
                    </span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Button
                    to="/rankstreet"
                    variant="primary"
                    size="md"
                    icon="upRight"
                  >
                    Explore RankStreet Tool
                  </Button>
                </div>
              </div>

              {/* Product 2: Silgate Monitor */}
              <div className="bg-white border border-slate-200/90 rounded-3xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-all space-y-6">
                <div className="flex items-center justify-between">
                  <span className="badge-new">Reputation Intelligence</span>
                  <div className="text-xs font-bold text-amber-600 flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Brand Protection
                  </div>
                </div>

                <div className="aspect-[16/9] rounded-2xl overflow-hidden border border-[#1E3E6B] bg-gradient-to-br from-[#091E3A] to-[#07172C] flex flex-col justify-center p-8 text-white relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-[#F36C3D]/20 via-[#F6C84A]/10 to-transparent rounded-full blur-2xl"></div>
                  <div className="relative z-10 space-y-3">
                    <div className="text-xs font-bold uppercase tracking-wider text-[#F6C84A]">
                      Real-Time Sentiment Engine
                    </div>
                    <div className="text-2xl font-black">
                      24/7 Brand Defense
                    </div>
                    <p className="text-xs text-slate-300 max-w-sm">
                      Continuous web & social listening alerting enterprise
                      executives before negative reviews escalate.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">
                    Silgate Monitor
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Enterprise reputation intelligence providing real-time
                    telemetry across review sites, forums, news portals, and
                    social channels to protect your hard-won brand prestige.
                  </p>
                </div>

                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Continuous automated Google Maps & review aggregation
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>
                      Immediate Slack/Email alerts for defamatory listings
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Proactive review generation campaigns</span>
                  </li>
                </ul>

                <div className="pt-2">
                  <Button
                    to="/services/online-reputation-management"
                    variant="outline"
                    size="md"
                    icon="upRight"
                  >
                    Explore ORM Solutions
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 7. THE CREATIVE WALL (#cw26) ================= */}
        <section className="py-20 bg-[#07172C] text-white overflow-hidden border-b border-[#132C4E]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-10 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-[#F6C84A] text-xs font-semibold uppercase tracking-wider mb-3">
              Visual Excellence
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white mb-3">
              Social Media & Website Design Portfolio
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base max-w-2xl mx-auto">
              A curated glimpse into high-performing social posts, campaigns,
              and digital artboards crafted by our designers.
            </p>
          </div>

          {/* Infinite Horizontal Gallery Scroller */}
          <div className="relative w-full overflow-hidden flex whitespace-nowrap py-4">
            <div className="animate-marquee flex items-center gap-6 flex-shrink-0">
              {[...creativeWallItems, ...creativeWallItems].map((item, idx) => (
                <div
                  key={idx}
                  className="w-72 sm:w-80 h-96 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 relative group flex-shrink-0 transition-transform duration-500 hover:scale-[1.03]"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-5 text-left">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#F6C84A] mb-1">
                      {item.cat}
                    </span>
                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {item.name}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ================= 8. VERIFIED SEO CASE STUDIES TABLE ================= */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                Measurable Impact
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-3">
                SEO Case Studies & Results
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Take a look at verified ranking and lead growth milestones
                achieved across diverse client categories.
              </p>
            </div>

            <div className="bg-[#F8FAFC] rounded-3xl border border-slate-200/80 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-sm">
                  <thead>
                    <tr className="bg-zinc-100/70 border-b border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider">
                      <th className="p-4 sm:p-5">Account Category</th>
                      <th className="p-4 sm:p-5">Primary Target Keyword</th>
                      <th className="p-4 sm:p-5">Before Silgate</th>
                      <th className="p-4 sm:p-5">Current Position</th>
                      <th className="p-4 sm:p-5">Qualified Traffic Lift</th>
                      <th className="p-4 sm:p-5">Verified Lead Delta</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200/80">
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">
                        National Automotive Brand
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        Electric Vehicle Dealerships India
                      </td>
                      <td className="p-4 sm:p-5 text-rose-600 font-medium">
                        Not in Top 100
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-600 font-bold">
                        #1 Google Organic
                      </td>
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        +640%
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-700 font-semibold">
                        +320% Test Drives
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">
                        High-Ticket D2C Skincare
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        Organic Retinol Serum India
                      </td>
                      <td className="p-4 sm:p-5 text-rose-600 font-medium">
                        #44 (Page 5)
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-600 font-bold">
                        #2 (Above Fold)
                      </td>
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        +490%
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-700 font-semibold">
                        4.8x Monthly GMV
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">
                        Global IT Support & Managed Services
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        Managed IT Services Provider UK
                      </td>
                      <td className="p-4 sm:p-5 text-rose-600 font-medium">
                        #38 (Page 4)
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-600 font-bold">
                        #3 Google UK
                      </td>
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        +310%
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-700 font-semibold">
                        +175% SLA Contracts
                      </td>
                    </tr>
                    <tr className="hover:bg-white transition-colors">
                      <td className="p-4 sm:p-5 font-semibold text-slate-900">
                        Luxury Interior Surface Brands
                      </td>
                      <td className="p-4 sm:p-5 text-slate-600">
                        Italian PU Wood Coating India
                      </td>
                      <td className="p-4 sm:p-5 text-rose-600 font-medium">
                        #62 (Page 7)
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-600 font-bold">
                        #1 Google Organic
                      </td>
                      <td className="p-4 sm:p-5 font-bold text-slate-900">
                        +520%
                      </td>
                      <td className="p-4 sm:p-5 text-emerald-700 font-semibold">
                        +240% Architect Enquiries
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 9. CLIENT TESTIMONIALS ("Our clients say") ================= */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider">
                Trusted Endorsements
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
                Our clients say
              </h2>
              <p className="text-slate-600 text-sm sm:text-base">
                Hear directly from business leaders who partnered with Silgate
                Solutions to transform their category presence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1 text-sm">★★★★★</div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "Silgate has been our branding and digital powerhouse for
                    years. From high-impact TV commercials to architect
                    engagement programs, they understand how to present luxury
                    products with elegance."
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <div className="font-bold text-slate-900 text-sm">
                    Sanjay Agarwal
                  </div>
                  <div className="text-xs text-slate-500">
                    Managing Director · Sirca Paints India
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1 text-sm">★★★★★</div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "Their understanding of search engine optimization and B2B
                    communication is unmatched. They don't just generate
                    arbitrary website clicks; they deliver qualified leads that
                    turn into high-ticket contracts."
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <div className="font-bold text-slate-900 text-sm">
                    Amit Anand
                  </div>
                  <div className="text-xs text-slate-500">
                    Vice President · JBM Group
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-white border border-slate-200/80 shadow-sm flex flex-col justify-between space-y-6 hover:shadow-lg transition-all">
                <div className="space-y-4">
                  <div className="flex text-amber-400 gap-1 text-sm">★★★★★</div>
                  <p className="text-slate-700 text-sm leading-relaxed italic">
                    "The Omaxe Chowk digital launch was executed with meticulous
                    attention to detail. Silgate created an interactive portal
                    that conveyed the grandeur of Old Delhi's biggest commercial
                    destination."
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100">
                  <div className="font-bold text-slate-900 text-sm">
                    Mohit Goel
                  </div>
                  <div className="text-xs text-slate-500">
                    Managing Director · Omaxe Ltd.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= 10. THOUGHT LEADERSHIP & BLOGS ================= */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  Strategic Perspectives
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                  An amazing thought can build a brilliant world. <br />
                  <span className="text-[#00529B]">Here are some of ours.</span>
                </h2>
              </div>
              <Link
                to="/blog"
                className="text-sm font-semibold text-black hover:text-[#F36C3D] flex items-center gap-1 group flex-shrink-0"
              >
                <span>Read All Insights</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Link
                to="/blog"
                className="group block rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
                  <img
                    src={blogPackaging}
                    alt="Packaging and Branding"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    Brand Strategy
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-black">
                    Why Product Packaging is the Silent Salesperson on Retail
                    Shelves
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    How tactile finishes, typography hierarchy, and color
                    psychology influence immediate purchasing decisions.
                  </p>
                </div>
              </Link>

              <Link
                to="/blog"
                className="group block rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
                  <img
                    src={blogDubai}
                    alt="Video Marketing"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    Commercial Video
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-black">
                    How TV Commercials & Digital Ads Multiply Each Other's ROI
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Integrating broadcast media authority with hyper-targeted
                    digital retargeting funnels.
                  </p>
                </div>
              </Link>

              <Link
                to="/blog"
                className="group block rounded-3xl overflow-hidden border border-slate-200/90 bg-white hover:shadow-xl transition-all"
              >
                <div className="aspect-[16/9] overflow-hidden bg-zinc-100">
                  <img
                    src={blogSearch}
                    alt="AI and Search"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="text-[11px] font-bold text-amber-600 uppercase tracking-wider">
                    AI Search & GEO
                  </span>
                  <h3 className="text-lg font-bold text-slate-900 mt-2 mb-2 group-hover:text-black">
                    The Rise of Answer Engine Optimization (AEO) and AI Search
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2">
                    Adapting SEO architectures for Google SGE, Perplexity, and
                    ChatGPT citation models.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>

        {/* ================= 11. AUDIT & PROPOSAL FORM (#audit-form) ================= */}
        <AuditForm
          title="Get a Free SEO and Digital Audit for your Brand"
          subtitle="Discover ranking drops, competitor keyword gaps, and conversion opportunities with zero obligations."
        />

        {/* ================= 12. MASTER HOMEPAGE FAQS ================= */}
        <div id="faqs">
          <FAQAccordion
            items={homeFaqs}
            title="Frequently Asked Questions"
            subtitle="Straightforward answers about our deliverables, onboarding process, and agency models."
          />
        </div>

        {/* ================= 13. FINAL CTA BANNER ================= */}
        <CTA
          badge="The Marcom Agency"
          title="The Digital Marketing Agency You Deserve"
          description="Let's build something unforgettable together. Talk to our directors and discover what true compounding digital growth feels like."
          primaryText="Discuss Your Brief"
          primaryLink="/contact"
        />
      </main>

      <Footer />

      {/* Independent Floating Video Player for Home page only */}
      <FloatingHomeVideo />
    </div>
  );
}
