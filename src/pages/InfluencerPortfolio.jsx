import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Button from "../components/Button";
import {
  Star,
  Users,
  Play,
  Heart,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";

import artboard20 from "../assets/images/artboard-20.webp";
import artboard22 from "../assets/images/artboard-22.webp";
import blogPackaging from "../assets/images/brand-packaging-beauty-brands-us-retail-1024x576.webp";
import sircaNews from "../assets/images/Sirca-news.jpg";

export default function InfluencerPortfolio() {
  const campaigns = [
    {
      title: "Sirca Paints Contractor & Architect Influencer Drive",
      category: "Home & Interior Influencers",
      stats: "12M+ Impressions · 420K Engagements",
      desc: "Activated 80+ top architects, interior stylists, and master paint contractors creating authentic transformation reels demonstrating Italian luxury coatings.",
      image: artboard20,
    },
    {
      title: "Vega Beauty Viral Unboxing & Hairstyling Blitz",
      category: "D2C Beauty & Fashion",
      stats: "24M+ Video Views · 3.8x ROAS",
      desc: "Curated 150+ macro and micro beauty creators demonstrating heat styling tools across Instagram and YouTube with custom swipe-up discount tags.",
      image: blogPackaging,
    },
    {
      title: "Electric Mobility Test-Drive Creator Sprint",
      category: "Automotive & Tech Creators",
      stats: "8.5M+ Views · 14,000+ Test Drive Bookings",
      desc: "Partnered with auto journalists and lifestyle vloggers taking new EV models on real-world long-distance road trips across major national expressways.",
      image: artboard22,
    },
    {
      title: "Gourmet Foods D2C Creator Recipe Challenge",
      category: "Food & Beverage",
      stats: "6.2M+ Reach · 28,000+ First-Time Orders",
      desc: "Top food bloggers and home chefs incorporating organic ingredients into quick 30-second recipe videos with direct Shopify buy links.",
      image: sircaNews,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          badge="Creator Activations"
          title="Influencer Marketing Portfolio"
          subtitle="Real Voices. Credible Endorsements. Measurable Conversions."
          description="Explore creator campaigns engineered by Silgate Media. We marry rigorous audience vetting with captivating storytelling to turn creator engagement into profitable customer acquisition."
          breadcrumbs={[
            { label: "Services", link: "/services" },
            {
              label: "Influencer Marketing Agency",
              link: "/services/influencer-marketing-agency",
            },
            { label: "Influencer Portfolio" },
          ]}
          primaryCtaText="Launch Creator Campaign"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Agency Services"
          secondaryCtaLink="/services/influencer-marketing-agency"
          stats={[
            { value: "2,500+", label: "Vetted Creators in Network" },
            { value: "150M+", label: "Video Views Generated" },
            { value: "4.2x", label: "Average Campaign ROAS" },
            { value: "100%", label: "Brand-Safety Audited" },
          ]}
        />

        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {campaigns.map((c, idx) => (
                <div
                  key={idx}
                  className="group rounded-3xl overflow-hidden border border-zinc-200 bg-[#FAF9F6] shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/9] overflow-hidden bg-zinc-900 relative">
                    <img
                      src={c.image}
                      alt={c.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {c.category}
                    </div>
                  </div>
                  <div className="p-8 space-y-3">
                    <div className="text-xs font-bold text-[#c7a900] uppercase tracking-wider">
                      {c.stats}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 leading-snug">
                      {c.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">
                      {c.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to harness creator influence for your brand?"
          description="We'll curate an exclusive roster of vetted creators tailored to your demographic and growth target."
        />
      </main>

      <Footer />
    </div>
  );
}
