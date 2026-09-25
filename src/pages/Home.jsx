import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import ClientMarquee from '../components/ClientMarquee';
import ServiceCard from '../components/ServiceCard';
import BlogCard from '../components/BlogCard';
import AuditForm from '../components/AuditForm';
import FAQAccordion from '../components/FAQAccordion';
import CTA from '../components/CTA';
import { 
  ArrowUpRight, 
  Sparkles, 
  Award, 
  TrendingUp, 
  Users, 
  Globe2, 
  Search, 
  Palette, 
  Code, 
  Share2, 
  Video, 
  Target, 
  ShieldCheck, 
  Star,
  CheckCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

// Import images
import heroArtboard from '../assets/images/artboard-17.webp';
import artboard18 from '../assets/images/artboard-18.webp';
import artboard19 from '../assets/images/artboard-19.webp';
import artboard20 from '../assets/images/artboard-20.webp';
import artboard21 from '../assets/images/artboard-21.webp';
import artboard22 from '../assets/images/artboard-22.webp';
import sircaNews from '../assets/images/Sirca-news.jpg';
import bpTvc from '../assets/images/bp-tvc.webp';
import blogPackaging from '../assets/images/brand-packaging-beauty-brands-us-retail-1024x576.webp';
import blogDubai from '../assets/images/corporate-films-real-estate-developers-dubai-1024x576.webp';
import blogSearch from '../assets/images/search-advertising-professional-services-new-york-1024x576.webp';

export default function Home() {
  const homeFaqs = [
    {
      q: "What makes DigiStreet Media different from other digital marketing agencies?",
      a: "DigiStreet combines creative storytelling with ruthless performance engineering. While most agencies specialize in either creative design or technical marketing, we house full-stack brand strategy, high-end video production, technical SEO, and data-driven performance marketing under one roof."
    },
    {
      q: "Which digital marketing services do you provide?",
      a: "We provide comprehensive 360° digital services including Technical & Organic SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Performance Marketing (Google, Meta, LinkedIn Ads), Brand Identity & Packaging, Website & Mobile App Development, Social Media Marketing, Influencer Marketing, and Corporate Video Production."
    },
    {
      q: "How fast can we expect measurable business results?",
      a: "For Performance Marketing and Paid Ads, measurable traffic and qualified lead generation begin within the first 7 to 14 days. For organic Search Engine Optimization (SEO), noticeable rank improvements and organic traffic compounding typically materialize within 60 to 90 days."
    },
    {
      q: "Does DigiStreet work with international clients outside India?",
      a: "Yes. DigiStreet proudly manages cross-border digital campaigns and web development for clients across the United States (San Francisco, New York, Florida), the United Kingdom, Canada, Australia, Singapore, and the Middle East (Dubai, Bahrain, Saudi Arabia)."
    },
    {
      q: "How do I get a proposal or audit for my brand?",
      a: "You can request a complimentary SEO and Digital Audit using our form below, email us directly at manoj@silgatehiring.com, or speak with our directors directly by calling +91 81088 10916."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        
        {/* ================= HERO SECTION ================= */}
        <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F7F6F2] via-white to-white border-b border-zinc-200/80">
          
          {/* Subtle background glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FFDF01]/15 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-7 space-y-6">
                
                {/* Ranking Pill */}
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider shadow-sm">
                  <Award className="w-3.5 h-3.5 text-[#FFDF01]" />
                  <span>Ranked as Top 20 Digital Marketing Agency of India</span>
                </div>

                <div className="space-y-2">
                  <div className="text-sm font-bold uppercase tracking-widest text-zinc-500">
                    The Marcom Company
                  </div>
                  <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-zinc-900 leading-[1.08]">
                    Award-Winning <span className="underline decoration-[#FFDF01] decoration-4 underline-offset-4">Digital Marketing</span> Agency in India
                  </h1>
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-zinc-800 tracking-tight">
                  We are a Digital Marketing Agency with a Creative Strong-arm.
                </h3>

                <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-2xl">
                  When the creativity and productivity of other agencies end, it is from where we start. We are DigiStreet, a digital marketing agency with a creative edge based in India. Our bucket is ever filled with unique marketing ideas that help brands reach unprecedented heights. Adopting a 360-degree approach, we provide creative designs, communication, content, web design, SEO, social media, and performance advertising.
                </p>

                {/* Primary CTA Buttons */}
                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <Button to="/contact" variant="primary" size="lg" icon="upRight">
                    Discuss Your Project
                  </Button>
                  <Button to="/services" variant="outline" size="lg">
                    Explore All Services
                  </Button>
                  <a 
                    href="#audit-form" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-3 text-zinc-700 hover:text-black hover:underline"
                  >
                    <span>Get Free Audit ↓</span>
                  </a>
                </div>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-3 gap-6 pt-8 border-t border-zinc-200">
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black">14+</div>
                    <div className="text-xs text-zinc-500 font-medium">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black">250+</div>
                    <div className="text-xs text-zinc-500 font-medium">Global Brands</div>
                  </div>
                  <div>
                    <div className="text-2xl sm:text-3xl font-extrabold text-black">98%</div>
                    <div className="text-xs text-zinc-500 font-medium">Client Retention</div>
                  </div>
                </div>

              </div>

              {/* Hero Visual Mockup */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-md lg:max-w-none">
                  <div className="relative rounded-3xl overflow-hidden border border-zinc-200 shadow-2xl bg-zinc-900 aspect-[4/5] group">
                    <img 
                      src={heroArtboard} 
                      alt="DigiStreet Media Creative Work" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      onError={(e) => {
                        e.target.src = sircaNews;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 text-white">
                      <span className="badge-new w-fit mb-2">Featured Showcase</span>
                      <h4 className="text-xl font-bold tracking-tight mb-1">Impact That Resonates</h4>
                      <p className="text-xs text-zinc-300">Transforming ambitious brands into category leaders across the globe.</p>
                    </div>
                  </div>

                  {/* Floating Highlight Card */}
                  <div className="absolute -bottom-6 -left-6 bg-white border border-zinc-200/90 rounded-2xl p-4 shadow-xl flex items-center gap-3 hidden sm:flex">
                    <div className="w-10 h-10 rounded-full bg-[#FFDF01] flex items-center justify-center font-bold text-black text-sm">
                      ★ 4.9
                    </div>
                    <div>
                      <div className="text-xs font-bold text-zinc-900">Top-Rated Marcom Agency</div>
                      <div className="text-[11px] text-zinc-500">Google & Silicon India Rated</div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ================= CLIENT LOGOS MARQUEE ================= */}
        <ClientMarquee title="Not just clients, they are more like partners" />

        {/* ================= CORE SERVICES GRID ================= */}
        <section className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="max-w-3xl mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                Full-Funnel Agency
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 mb-4">
                Full-Service Digital Solutions for Brands That Want to Win
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                From brand strategy and creative design to precision performance marketing and generative AI search, our integrated teams deliver measurable outcomes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              <ServiceCard 
                title="Search Engine Marketing"
                tag="Organic & Paid"
                description="Dominating SERPs with high-intent keyword strategies, technical site architecture, link building, and Google Ads."
                features={["Technical SEO & Core Web Vitals", "AEO & GEO Search Optimization", "Lead Generation via SEO"]}
                link="/services/search-engine-marketing"
              />

              <ServiceCard 
                title="Performance Marketing"
                tag="ROI / ROAS"
                badge="HOT"
                description="Hyper-targeted paid acquisition campaigns across Meta, Google, LinkedIn and Amazon engineered for profitable scale."
                features={["Multi-Channel Ad Campaigns", "Conversion Rate Optimization (CRO)", "Advanced Attribution Analytics"]}
                link="/performance-marketing-agency"
                featured={true}
              />

              <ServiceCard 
                title="Creative & Communication"
                tag="Brand Identity"
                description="Distill your brand's unique ethos into striking visual identities, packaging design, and memorable narratives."
                features={["Brand Strategy & Architecture", "Logo & Visual Identity", "Product Packaging Design"]}
                link="/services/creative-communication"
              />

              <ServiceCard 
                title="Website & App Development"
                tag="Engineering"
                description="Bespoke corporate websites, high-speed headless eCommerce stores, and scalable custom web applications."
                features={["Corporate Website Design", "E-Commerce Architecture", "Mobile App Development"]}
                link="/services/website-development-india"
              />

              <ServiceCard 
                title="Social Media Marketing"
                tag="Engagement"
                description="Cultivate organic communities, viral content formats, and culturally relevant conversations across digital channels."
                features={["Instagram & LinkedIn Growth", "Community Management", "Social Brand Campaigns"]}
                link="/services/social-media-marketing"
              />

              <ServiceCard 
                title="Influencer Marketing"
                tag="Influence"
                description="End-to-end influencer curation, creative brief orchestration, and measurable creator-led conversion funnels."
                features={["Macro & Micro-Influencers", "Contracting & Execution", "Performance Tracking"]}
                link="/services/influencer-marketing-agency"
              />

              <ServiceCard 
                title="AI Video Production"
                tag="Cutting-Edge"
                badge="NEW"
                description="Next-generation generative AI video workflows and virtual avatars delivering cinematic quality at fraction of traditional costs."
                features={["Prompt-to-Cinema Pipelines", "Virtual Brand Ambassadors", "High-Velocity Ad Variations"]}
                link="/services/ai-video-production-agency"
              />

              <ServiceCard 
                title="UGC Content Creation"
                tag="Authenticity"
                description="Authentic user-generated video ads and testimonial content that builds instant trust and drives high click-through rates."
                features={["Creator Network Across India & US", "High-Converting Ad Hooks", "A/B Testing Creatives"]}
                link="/services/ugc-video-agency"
              />

            </div>

            <div className="text-center mt-12">
              <Button to="/services" variant="primary" size="lg" icon="upRight">
                View All 15+ Specialized Services
              </Button>
            </div>

          </div>
        </section>

        {/* ================= WORK SHOWCASE / CASE STUDIES ================= */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-zinc-100 text-zinc-700 text-xs font-semibold uppercase tracking-wider mb-3">
                  Proven Impact
                </div>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900">
                  Digital Marketing Agency Work Showcase
                </h2>
              </div>
              <Link 
                to="/clients" 
                className="text-sm font-semibold text-black hover:text-amber-600 flex items-center gap-1 group flex-shrink-0"
              >
                <span>View Full Client Portfolio</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Showcase Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={artboard18} 
                    alt="Financial Platform Work" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = bpTvc; }}
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Fintech & Web
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">A digital home for a financial platform</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Designed and deployed high-converting institutional portals and frictionless investor sign-up workflows.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={artboard19} 
                    alt="Education & Brand Voice" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = sircaNews; }}
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Education & Amity
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Product stories with a recognisable voice</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Digital campaigns and enrollment acquisition funnels driving over 45,000+ prospective student applications.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={artboard20} 
                    alt="Sirca & British Paints" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => { e.target.src = bpTvc; }}
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Creative & Paints
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Colourful ideas for everyday spaces</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Nationwide TVC, digital branding, and contractor influencer activations for Sirca Paints and British Paints.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={artboard21} 
                    alt="Packaging Identity" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Packaging & FMCG
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">Identity that lives beyond a logo</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    End-to-end carton, label, and packaging redesign compliant with global US FDA and retail shelf guidelines.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={artboard22} 
                    alt="Mahindra EV Mobility" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Automotive & EV
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">A consistent voice for a mobility brand</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Electric mobility communication, digital test-drive bookings, and omnichannel lead nurturing pipelines.
                  </p>
                </div>
              </div>

              <div className="group rounded-3xl overflow-hidden border border-zinc-200 bg-white hover:shadow-xl transition-all duration-300">
                <div className="aspect-[4/3] overflow-hidden bg-zinc-100 relative">
                  <img 
                    src={blogPackaging} 
                    alt="D2C Scale" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    D2C Performance
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-zinc-900 mb-2">From 200 to 500+ orders per month</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                    Scalable paid ad funnels, cart abandonment recovery, and creative testing tripling eCommerce sales.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= REAL SEO CASE STUDY RESULTS TABLE ================= */}
        <section className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                Measurable Proof
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 mb-3">
                Our Clients SEO Results That Compound ROI
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Rankings on page 1 of Google are not an accident. Here are real performance snapshots from our enterprise and high-growth accounts.
              </p>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/80 overflow-hidden shadow-sm cs-table">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th>Industry / Account</th>
                      <th>Target Keyword Group</th>
                      <th>Initial Rank</th>
                      <th>Current Rank</th>
                      <th>Organic Traffic Growth</th>
                      <th>Lead Volume</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-zinc-900">B2B Manufacturing & Industrial</td>
                      <td className="text-zinc-600">Heavy Engineering & Valves India</td>
                      <td className="text-rose-600 font-medium">#48 (Page 5)</td>
                      <td className="text-emerald-600 font-bold">#1 (Featured Snippet)</td>
                      <td className="font-bold text-zinc-900">+380%</td>
                      <td className="text-emerald-700 font-semibold">+210% RFQs</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-zinc-900">Healthcare & Dermatology Chain</td>
                      <td className="text-zinc-600">Skin Specialist & Clinic Near Me</td>
                      <td className="text-rose-600 font-medium">#32 (Page 4)</td>
                      <td className="text-emerald-600 font-bold">#2 (Local 3-Pack)</td>
                      <td className="font-bold text-zinc-900">+510%</td>
                      <td className="text-emerald-700 font-semibold">+340% Appointments</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-zinc-900">Luxury Interior Architecture</td>
                      <td className="text-zinc-600">Interior Designers in Delhi NCR</td>
                      <td className="text-rose-600 font-medium">#54 (Page 6)</td>
                      <td className="text-emerald-600 font-bold">#1</td>
                      <td className="font-bold text-zinc-900">+420%</td>
                      <td className="text-emerald-700 font-semibold">+185% High-Ticket Leads</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-zinc-900">Fintech SaaS Platform</td>
                      <td className="text-zinc-600">API Banking Software India</td>
                      <td className="text-rose-600 font-medium">#28 (Page 3)</td>
                      <td className="text-emerald-600 font-bold">#3</td>
                      <td className="font-bold text-zinc-900">+290%</td>
                      <td className="text-emerald-700 font-semibold">+160% Enterprise Demos</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between text-xs text-zinc-500 flex-wrap gap-4">
              <span>* Data verified via Google Search Console & RankStreet proprietary tracker.</span>
              <Link to="/services/seo-services" className="font-semibold text-black hover:underline flex items-center gap-1">
                <span>Learn about our SEO process</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

          </div>
        </section>

        {/* ================= TESTIMONIALS SECTION ================= */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                Client Testimonials
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                Our Clients Say It Best
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <div className="bg-[#FAF9F6] border border-zinc-200/80 p-8 rounded-3xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#FFDF01]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    "DigiStreet Media took our paint brands from conventional print into the modern digital era. Their creative scripts and TVC execution paired with targeted meta ads produced our highest ROI quarter in five years."
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200">
                  <div className="font-bold text-zinc-900 text-sm">Marketing Director</div>
                  <div className="text-xs text-zinc-500">Leading Indian Coatings & Paints Brand</div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] border border-zinc-200/80 p-8 rounded-3xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#FFDF01]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    "Their technical SEO and B2B lead generation capabilities are simply world-class. We rank #1 across India for all our critical heavy engineering and equipment terms."
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200">
                  <div className="font-bold text-zinc-900 text-sm">Vice President Growth</div>
                  <div className="text-xs text-zinc-500">Global Industrial Equipment Conglomerate</div>
                </div>
              </div>

              <div className="bg-[#FAF9F6] border border-zinc-200/80 p-8 rounded-3xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex gap-1 text-[#FFDF01]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-zinc-700 leading-relaxed italic">
                    "The team is responsive, deeply analytical, and treats our budget as if it were their own. They scaled our D2C eCommerce operations across North America smoothly."
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-zinc-200">
                  <div className="font-bold text-zinc-900 text-sm">Founder & CEO</div>
                  <div className="text-xs text-zinc-500">Fast-Growing Skincare Brand</div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ================= LATEST INSIGHTS & BLOGS ================= */}
        <section className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                  Thought Leadership
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                  An amazing thought can build a brilliant world. Here are some of ours.
                </h2>
              </div>
              <Link 
                to="/blog" 
                className="text-sm font-semibold text-black hover:text-amber-600 flex items-center gap-1 group flex-shrink-0"
              >
                <span>Read All Insights</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              <BlogCard 
                title="Brand packaging design for beauty brands entering the US retail market"
                slug="brand-packaging-design-beauty-brands-us-retail-market"
                excerpt="Digistreet explains how brand packaging design for beauty brands entering the US retail market wins shelf attention and passes FDA compliance checks."
                image={blogPackaging}
                date="September 24, 2026"
                category="Branding & Packaging"
              />

              <BlogCard 
                title="Corporate films for real estate developers in Dubai"
                slug="corporate-films-real-estate-developers-dubai"
                excerpt="Digistreet explains how corporate films for real estate developers in Dubai build the trust that turns international buyers into booked sales."
                image={blogDubai}
                date="September 20, 2026"
                category="Video Production"
              />

              <BlogCard 
                title="Search advertising for professional services firms in New York"
                slug="search-advertising-professional-services-new-york"
                excerpt="Digistreet explains how search advertising for professional services firms in New York turns costly clicks into qualified client consultations."
                image={blogSearch}
                date="September 16, 2026"
                category="Search Advertising"
              />

            </div>

          </div>
        </section>

        {/* ================= COMPLIMENTARY AUDIT FORM ================= */}
        <AuditForm />

        {/* ================= FAQ SECTION ================= */}
        <FAQAccordion 
          items={homeFaqs} 
          title="The Digital Marketing Agency You Deserve" 
          subtitle="Clear answers to common questions about partnering with DigiStreet Media."
        />

        {/* ================= GLOBAL CTA BANNER ================= */}
        <CTA />

      </main>

      <Footer />
    </div>
  );
}
