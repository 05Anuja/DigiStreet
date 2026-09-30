import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { Award, Trophy, Star, Newspaper, ExternalLink } from "lucide-react";

import awardTop20 from "../assets/images/top-20-67b5bf6e19076.webp";
import award30Most from "../assets/images/30-most-67b5bf6d61687.webp";
import googleRating from "../assets/images/google-rting-67b5bf6e10176.webp";
import fbRating from "../assets/images/facebook-rating-67b5bf6d6af99.webp";
import bsLogo from "../assets/images/business-standard-logo.webp";
import adgullyLogo from "../assets/images/adgully-logo.webp";
import afaqsLogo from "../assets/images/afaqs-logo.webp";
import bwLogo from "../assets/images/bwmarketingworld-logo.webp";
import republicLogo from "../assets/images/republicnewsindia-logo.webp";

export default function NewsAwards() {
  const awards = [
    {
      title: "Top 20 Digital Marketing Agency of India",
      issuer: "Silicon India",
      year: "Annual Industry Honors",
      desc: "Recognized for consistent excellence in performance marketing, technical search engine dominance, and creative storytelling.",
      badge: awardTop20,
    },
    {
      title: "30 Most Admired Companies to Watch",
      issuer: "Industry Excellence Awards",
      year: "2024-2025",
      desc: "Selected for pioneering digital solutions, proprietary analytics tooling (RankStreet), and sustained client retention.",
      badge: award30Most,
    },
    {
      title: "Top Healthcare Marketing Agency in India",
      issuer: "Healthcare Leadership Summit",
      year: "2024",
      desc: "Honored for ethical patient acquisition, medical compliance excellence, and clinic expansion funnels across tier-1 cities.",
      badge: null,
    },
    {
      title: "Best Automotive Digital Campaign",
      issuer: "Marcom Guild",
      year: "2023",
      desc: "Awarded for the nationwide electric mobility awareness and test-drive conversion rollout for leading EV manufacturers.",
      badge: null,
    },
  ];

  const press = [
    {
      outlet: "Business Standard",
      logo: bsLogo,
      headline:
        "Silgate Media announces expansion of cross-border digital marketing services for US and UK brands.",
    },
    {
      outlet: "Afaqs!",
      logo: afaqsLogo,
      headline:
        "Inside Silgate's high-impact TV commercial and influencer rollout for Sirca Paints.",
    },
    {
      outlet: "Adgully",
      logo: adgullyLogo,
      headline:
        "How Silgate Media combines algorithmic SEO rigor with bespoke creative brand films.",
    },
    {
      outlet: "BW Marketing World",
      logo: bwLogo,
      headline:
        "Digital marketing strategies for 2026: The shift from traditional SEO to Generative Engine Optimization.",
    },
    {
      outlet: "Republic News India",
      logo: republicLogo,
      headline:
        "Silgate Media ranked among the most innovative digital agencies solving modern consumer acquisition.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          badge="Industry Accolades"
          title="News & Awards"
          subtitle="Customer Favored, Industry Acclaimed · Consistent Excellence Over 14 Years"
          description="At Silgate Media, we believe in turning bold ideas into measurable impact. With a passion for performance and creative depth, our journey has been defined by consistency, transparency, and conversion-led strategies."
          breadcrumbs={[{ label: "News & Awards" }]}
          primaryCtaText="Work With Award-Winning Team"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Services"
          secondaryCtaLink="/services"
        />

        {/* Major Awards Section */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Honors & Accolades
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Industry Recognition
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {awards.map((award, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-200/90 shadow-sm flex flex-col justify-between space-y-4"
                >
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-3">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-zinc-200/80 text-slate-800">
                        {award.issuer} · {award.year}
                      </span>
                      <Trophy className="w-5 h-5 text-[#F36C3D]" />
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                      {award.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {award.desc}
                    </p>
                  </div>

                  {award.badge && (
                    <div className="pt-4 border-t border-slate-200 flex items-center">
                      <img
                        src={award.badge}
                        alt={award.title}
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Press & Media Features */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                In The Headlines
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Featured Across National Press
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {press.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    <div className="h-8 mb-4 flex items-center">
                      {item.logo ? (
                        <img
                          src={item.logo}
                          alt={item.outlet}
                          className="max-h-full max-w-[140px] object-contain"
                        />
                      ) : (
                        <span className="font-bold text-sm text-slate-800">
                          {item.outlet}
                        </span>
                      )}
                    </div>
                    <p className="text-xs sm:text-sm font-medium text-slate-800 leading-snug">
                      "{item.headline}"
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-zinc-100 text-xs font-semibold text-slate-500">
                    Press Coverage
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Partner with an award-winning team"
          description="Let's build award-winning campaigns that deliver record-breaking business outcomes."
        />
      </main>

      <Footer />
    </div>
  );
}
