import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import { Layers, ArrowUpRight, CheckCircle2, ShieldCheck } from "lucide-react";

export default function OtherCompanies() {
  const companies = [
    {
      name: "RankStreet",
      tagline: "Proprietary Enterprise SEO & SERP Intelligence Platform",
      desc: "An in-house automated search rank tracker, backlink monitor, and technical audit scanner engineered specifically for high-velocity enterprise organic operations.",
      link: "/rankstreet",
      features: [
        "Real-time daily SERP tracking across 120+ countries",
        "Automated technical error and 404 detection",
        "Competitor keyword gap alerts",
      ],
    },
    {
      name: "Silgate Monitor",
      tagline: "24/7 Brand Reputation & SERP Defense Tool",
      desc: "Continuous monitoring of negative sentiment, unlinked press mentions, defamatory reviews, and rogue search engine listings.",
      link: "/services/online-reputation-management",
      features: [
        "Multi-platform review aggregation",
        "Sentiment shift notifications",
        "Executive profile search auditing",
      ],
    },
    {
      name: "DigiStudio Motion Labs",
      tagline: "Commercial Video, 3D CGI & TVC Production Arm",
      desc: "Our dedicated studio production entity handling commercial ad films, architectural rendering, broadcast TVCs, and generative AI synthetic video.",
      link: "/services/brand-video-production-agency",
      features: [
        "Full 4K/8K cinema camera packages",
        "In-house editing, color grading, sound design",
        "AI virtual production & CGI integration",
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1">
        <Hero
          badge="Silgate Ecosystem"
          title="Other Companies & Strategic Ventures"
          subtitle="Specialized proprietary ventures and technology products built under the Silgate umbrella."
          breadcrumbs={[
            { label: "About Us", link: "/about" },
            { label: "Other Companies" },
          ]}
          primaryCtaText="Explore Ventures"
          primaryCtaLink="#ventures"
        />

        <section
          id="ventures"
          className="py-20 bg-white border-b border-zinc-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {companies.map((c, i) => (
                <div
                  key={i}
                  className="p-8 rounded-3xl bg-[#FAF9F6] border border-zinc-200/80 hover:border-black transition-all flex flex-col justify-between"
                >
                  <div className="space-y-4">
                    <span className="badge-new">Silgate Group</span>
                    <h3 className="text-2xl font-bold text-zinc-900">
                      {c.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#c7a900] uppercase tracking-wider">
                      {c.tagline}
                    </p>
                    <p className="text-sm text-zinc-600 leading-relaxed">
                      {c.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-zinc-200">
                      {c.features.map((f, fi) => (
                        <li
                          key={fi}
                          className="flex items-start gap-2 text-xs text-zinc-700"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-6 mt-6 border-t border-zinc-200">
                    <a
                      href={c.link}
                      className="text-xs font-bold text-black hover:text-amber-600 inline-flex items-center gap-1"
                    >
                      <span>Learn More</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
