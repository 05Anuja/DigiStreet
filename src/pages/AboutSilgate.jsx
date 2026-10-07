import React from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import {
  Target,
  Lightbulb,
  Cpu,
  TrendingUp,
  Code2,
  BarChart3,
  Palette,
  ArrowRight,
  Landmark,
  Wallet,
  ShieldCheck,
  Building2,
  HeartPulse,
  GraduationCap,
  ShoppingCart,
  Boxes,
  Brain,
  Layers,
  Sparkles,
  PieChart,
  Sliders,
  Headphones,
  Eye,
  Compass,
  PenTool,
  Rocket,
  Activity,
  Clock,
} from "lucide-react";
import { Instagram } from "../assets/icons/SocialIcons";

import aboutSilgateImg from "../assets/images/About_Silgate.png";
import hdfcLogo from "../assets/images/clients/hdfc-bank.svg";
import tataLogo from "../assets/images/clients/tata.svg";
import mahindraLogo from "../assets/images/clients/mahindra.svg";
import amazonLogo from "../assets/images/clients/amazon.svg";
import bajajLogo from "../assets/images/clients/bajaj.svg";
import flipkartLogo from "../assets/images/clients/flipkart.svg";
import godrejLogo from "../assets/images/clients/godrej.svg";
import dlfLogo from "../assets/images/clients/dlf.svg";
import jashnImg from "../assets/images/jashn-real-estate-campaign-design-portfolio.webp";
import amityWorkImg from "../assets/images/amity-online-social-media-work-portfolio.webp";
import xonnImg from "../assets/images/xonn-fintech-website-design-portfolio.webp";
import blogWebImg from "../assets/images/web-app-development-fintech-startups-bangalore-1024x576.webp";
import blogSocialImg from "../assets/images/brand-generated-content-d2c-brands-1024x576.webp";
import blogSeoImg from "../assets/images/search-advertising-professional-services-new-york-1024x576.webp";

const capabilities = [
  {
    title: "Strategy Driven",
    description: "Solutions built around business requirements",
    icon: Target,
  },
  {
    title: "Creative Excellence",
    description: "Ideas designed to communicate and engage",
    icon: Lightbulb,
  },
  {
    title: "Technology Enabled",
    description: "Modern, scalable digital execution",
    icon: Cpu,
  },
  {
    title: "Growth Focused",
    description: "Digital initiatives aligned with business outcomes",
    icon: TrendingUp,
  },
];

const services = [
  {
    title: "Web Development",
    description: "Custom websites & web applications",
    icon: Code2,
    link: "/services/website-development-india",
  },
  {
    title: "Digital Marketing",
    description: "SEO, performance marketing & online campaigns",
    icon: BarChart3,
    link: "/services/search-engine-marketing",
  },
  {
    title: "Social Media Management",
    description: "Strategic content, campaigns & UGC",
    icon: Instagram,
    link: "/services/social-media-marketing",
  },
  {
    title: "Creative Design",
    description: "Branding, UI/UX, visuals & creatives",
    icon: Palette,
    link: "/services/creative-communication",
  },
];

const industries = [
  { name: "BFSI", icon: Landmark },
  { name: "Fintech", icon: Wallet },
  { name: "Insurance", icon: ShieldCheck },
  { name: "Real Estate", icon: Building2 },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: GraduationCap },
  { name: "Retail & FMCG", icon: ShoppingCart },
  { name: "Other Industries", icon: Boxes },
];

const whyChooseUSPs = [
  { title: "Industry Understanding", icon: Brain },
  { title: "End-to-End Digital Solutions", icon: Layers },
  { title: "Creative & Performance Focus", icon: Sparkles },
  { title: "Data-Driven Approach", icon: PieChart },
  { title: "Customized Strategies", icon: Sliders },
  { title: "Dedicated Support", icon: Headphones },
];

const processSteps = [
  {
    step: "Understand",
    subtext: "Your goals & audience",
    icon: Eye,
  },
  {
    step: "Strategize",
    subtext: "Plan the right approach",
    icon: Compass,
  },
  {
    step: "Create",
    subtext: "Design & develop",
    icon: PenTool,
  },
  {
    step: "Execute",
    subtext: "Launch & manage",
    icon: Rocket,
  },
  {
    step: "Optimize",
    subtext: "Measure & improve",
    icon: Activity,
  },
];

const caseStudies = [
  {
    title: "Real Estate Brand",
    result: "3x increase in qualified leads through digital campaigns",
    image: jashnImg,
    link: "/clients",
  },
  {
    title: "Education Platform",
    result: "200% growth in social media engagement",
    image: amityWorkImg,
    link: "/clients",
  },
  {
    title: "Fintech Company",
    result: "Higher website traffic and lead generation through SEO",
    image: xonnImg,
    link: "/clients",
  },
];

const clientLogos = [
  { name: "HDFC Bank", logo: hdfcLogo },
  { name: "Tata", logo: tataLogo },
  { name: "Mahindra", logo: mahindraLogo },
  { name: "amazon", logo: amazonLogo },
  { name: "Bajaj", logo: bajajLogo },
  { name: "Flipkart", logo: flipkartLogo },
  { name: "Godrej", logo: godrejLogo },
  { name: "DLF", logo: dlfLogo },
];

const articles = [
  {
    title: "How a Strong Website Drives Business Growth",
    readTime: "5 min read",
    image: blogWebImg,
    link: "/blog",
  },
  {
    title: "Social Media Trends Businesses Should Watch",
    readTime: "5 min read",
    image: blogSocialImg,
    link: "/blog",
  },
  {
    title: "SEO Best Practices for 2026",
    readTime: "5 min read",
    image: blogSeoImg,
    link: "/blog",
  },
];

export default function About() {
  const handleScrollToCapabilities = () => {
    const el = document.getElementById("capabilities");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1 bg-white">
        {/* =========================================================
            ABOUT US (HERO) SECTION
        ========================================================= */}
        <section className="py-10 sm:py-14 lg:py-20 bg-gradient-to-b from-[#F8FAFC] via-white to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="order-2 lg:order-1 lg:col-span-5 w-full">
                <div className="w-full max-w-lg mx-auto lg:max-w-none overflow-hidden rounded-2xl shadow-lg border border-slate-200/80 bg-white">
                  <img
                    src={aboutSilgateImg}
                    alt="About Silgate Digital"
                    className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </div>

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

            {/* =========================================================
                CAPABILITIES SECTION
            ========================================================= */}
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
        </section>

        {/* =========================================================
            1. OUR SERVICES
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC] border-y border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Services
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                End-to-end digital solutions to help your business grow online.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
              {services.map((service) => (
                <Link
                  key={service.title}
                  to={service.link}
                  className="group bg-white rounded-2xl p-6 border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] border border-blue-200/60 flex items-center justify-center mb-4 group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] group-hover:border-orange-200 transition-colors">
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00529B] transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex justify-end pt-4 mt-2">
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F36C3D] group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <Button to="/services" variant="primary" size="md" icon="right">
                View All Services
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            2. INDUSTRIES WE SERVE
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Industries We Serve
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Tailored digital solutions for businesses across sectors.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 sm:gap-4">
              {industries.map((ind) => (
                <div
                  key={ind.name}
                  className="group bg-white rounded-xl p-4 border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-md transition-all duration-200 text-center flex flex-col items-center justify-center gap-2.5"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#EBF3FB] text-[#00529B] flex items-center justify-center group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] transition-colors">
                    <ind.icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                    {ind.name}
                  </span>
                </div>
              ))}
            </div>

            {/* <div className="mt-8 sm:mt-10 text-center">
              <Button to="/services" variant="primary" size="md" icon="right">
                View All Industries
              </Button>
            </div> */}
          </div>
        </section>

        {/* =========================================================
            3. WHY CHOOSE SILGATE DIGITAL?
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Choose Silgate Digital?
              </h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5">
              {whyChooseUSPs.map((usp) => (
                <div
                  key={usp.title}
                  className="group bg-white rounded-2xl p-5 border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] border border-blue-200/60 flex items-center justify-center mb-3 group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] group-hover:border-orange-200 transition-colors">
                    <usp.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {usp.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            4. OUR PROCESS
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Process
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
              {processSteps.map((step, idx) => (
                <div
                  key={step.step}
                  className="relative group bg-[#F8FAFC] rounded-2xl p-5 border border-slate-200/90 flex flex-col items-center text-center justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#EBF3FB] text-[#00529B] border border-blue-200/60 flex items-center justify-center mb-3 group-hover:bg-[#FFF1EC] group-hover:text-[#F36C3D] transition-colors">
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-900 mb-1">
                      {step.step}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.subtext}
                    </p>
                  </div>

                  {idx < processSteps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-6 h-6 rounded-full bg-white border border-slate-300 items-center justify-center text-slate-400">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================
            5. OUR WORK
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Our Work
              </h2>
              <p className="text-sm sm:text-base text-slate-600 mt-2">
                Real results for real businesses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {caseStudies.map((cs) => (
                <Link
                  key={cs.title}
                  to={cs.link}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={cs.image}
                      alt={cs.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00529B] transition-colors mb-2">
                        {cs.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                        {cs.result}
                      </p>
                    </div>
                    <div className="flex justify-end pt-4 mt-2">
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F36C3D] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <Button to="/clients" variant="primary" size="md" icon="right">
                View All Case Studies
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            6. OUR CLIENTS
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center sm:text-left">
            <h2 className="text-2xl sm:text-3xl text-center lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Our Clients
            </h2>
          </div>

          <div className="relative w-full overflow-hidden flex whitespace-nowrap">
            <div className="animate-marquee flex items-center gap-10 sm:gap-16 flex-shrink-0">
              {[...clientLogos, ...clientLogos, ...clientLogos].map(
                (client, idx) => (
                  <div
                    key={idx}
                    className="h-10 sm:h-12 px-4 sm:px-6 flex items-center justify-center transition-transform duration-300 hover:scale-105"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-full max-w-[120px] sm:max-w-[140px] object-contain"
                    />
                  </div>
                ),
              )}
            </div>
          </div>
        </section>

        {/* =========================================================
            7. INSIGHTS & RESOURCES
        ========================================================= */}
        <section className="py-12 sm:py-16 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
                Insights & Resources
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((art) => (
                <Link
                  key={art.title}
                  to={art.link}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 hover:border-[#00529B]/40 hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  <div className="aspect-[16/10] overflow-hidden bg-slate-100 relative">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-[#00529B] transition-colors mb-3 leading-snug">
                        {art.title}
                      </h3>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{art.readTime}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#F36C3D] group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 sm:mt-10 text-center">
              <Button to="/blog" variant="primary" size="md" icon="right">
                View All Articles
              </Button>
            </div>
          </div>
        </section>

        {/* =========================================================
            8. FINAL CTA
        ========================================================= */}
        <section className="relative overflow-hidden bg-gradient-to-r from-[#FF6900] via-[#FF4B00] to-[#F52222] text-white">
          {/* Smooth Blue Curved Shape */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1000 120"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
        M 0 0
        H 400
        C 500 8, 560 28, 625 55
        C 690 82, 750 108, 820 120
        H 0
        Z
      "
              fill="#073F91"
            />
          </svg>

          {/* CTA Content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="min-h-[105px] flex items-center">
              {/* Text */}
              <div className="flex-1 min-w-0">
                <h2
                  className="
            text-lg
            sm:text-xl
            md:text-2xl
            lg:text-3xl
            font-extrabold
            leading-tight
          "
                >
                  Let's Build Your Digital Success Story
                </h2>

                <p
                  className="
            mt-1
            text-xs
            sm:text-sm
            md:text-base
            text-white/90
            leading-relaxed
          "
                >
                  Partner with Silgate Digital to create, engage and grow your
                  brand online.
                </p>
              </div>

              {/* Contact Button */}
              <div className="ml-5 sm:ml-8 flex-shrink-0">
                <Button
                  to="/contact"
                  variant="white"
                  size="lg"
                  icon="right"
                  className="
            !bg-white
            !text-[#E63900]
            font-bold
            px-7
            sm:px-9
            py-3
            rounded-md
            shadow-md
            hover:shadow-lg
            transition-all
            whitespace-nowrap
          "
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
