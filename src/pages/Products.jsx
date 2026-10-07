import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import Button from "../components/Button";
import {
  Sparkles,
  BarChart,
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";

export default function Products() {
  const products = [
    {
      name: "RankStreet SEO Suite",
      badge: "Proprietary Tech",
      desc: "Our flagship enterprise search intelligence tool tracking real-time Google, Bing, and Search Generative Experience AI rankings across millions of keyword combinations.",
      features: [
        "Hyper-local SERP tracking down to pin-code level",
        "Algorithmic penalty & search drop alerts",
        "Automated Schema and entity verification",
        "Competitor market-share visualization",
      ],
      link: "/rankstreet",
    },
    {
      name: "Silgate Monitor",
      badge: "Reputation Intelligence",
      desc: "Enterprise brand safety, sentiment monitoring, and rapid review aggregation providing real-time alerts when defamatory listings or negative review surges occur.",
      features: [
        "Continuous 24/7 web & social listening",
        "Executive identity risk assessment",
        "Automated alert webhooks to Slack/Teams",
        "One-click review generation campaigns",
      ],
      link: "/services/online-reputation-management",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1">
        <Hero
          badge="Technology Stack"
          title="Proprietary Technology Products"
          subtitle="Software and analytics platforms built in-house to give our clients an unfair competitive advantage."
          description="We don't merely rely on off-the-shelf third-party tools. Silgate engineers custom software to unlock deeper ranking insights, brand safety telemetry, and conversion analytics."
          breadcrumbs={[
            { label: "About Us", link: "/about" },
            { label: "Products" },
          ]}
          primaryCtaText="Request Software Demo"
          primaryCtaLink="/contact"
        />

        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {products.map((p, i) => (
                <div
                  key={i}
                  className="p-8 sm:p-10 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00529B] hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <span className="badge-new">{p.badge}</span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 group-hover:text-[#00529B] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                        Key Capabilities
                      </div>
                      <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                        {p.features.map((f, fi) => (
                          <li key={fi} className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-8 border-t border-slate-100 flex items-center justify-between">
                    <Button to={p.link} variant="primary" size="sm">
                      Explore {p.name.split(" ")[0]}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Want to integrate our technology into your brand stack?"
          description="Schedule a product walkthrough with our engineering leads."
        />
      </main>

      <Footer />
    </div>
  );
}
