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
import HomeCarousel from "../components/HomeCarousel";
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
import About from "./AboutSilgate";
import TrustMetrics from "../components/TrustMetrics";

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
      {/* <Navbar /> */}

      <main className="flex-1">
        {/* ================= 1. FULL-SCREEN HOME HERO CAROUSEL ================= */}
        <HomeCarousel />
        <TrustMetrics />
        <About />
      </main>

      {/* <Footer /> */}

      {/* Independent Floating Video Player for Home page only */}
      <FloatingHomeVideo />
    </div>
  );
}
