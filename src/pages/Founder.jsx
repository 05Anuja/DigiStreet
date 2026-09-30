import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Hero from "../components/Hero";
import { Award, Mail, Quote, CheckCircle2, ArrowUpRight } from "lucide-react";
import { Linkedin, Twitter } from "../assets/icons/SocialIcons";
import kavishImg from "../assets/images/kavish-arora-co-founder-coo-Silgate-media-v2.webp";

export default function Founder() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          badge="Leadership Profile"
          title="Meet Our Founder: Kavish Arora"
          subtitle="Co-Founder & COO, Silgate Solutions"
          description="A seasoned digital marketing strategist, operational architect, and brand visionary driving high-growth narratives and enterprise digital transformation for over 14 years."
          breadcrumbs={[
            { label: "About Us", link: "/about" },
            { label: "Kavish Arora" },
          ]}
          primaryCtaText="Get in Touch"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Company Credo"
          secondaryCtaLink="/about/credo-at-Silgate"
        />

        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              <div className="lg:col-span-5">
                <div className="rounded-3xl overflow-hidden border border-zinc-200 shadow-xl bg-zinc-900 sticky top-28">
                  <img
                    src={kavishImg}
                    alt="Kavish Arora - Co-Founder & COO"
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-6 bg-white border-t border-zinc-100">
                    <h3 className="text-xl font-bold text-slate-900">
                      Kavish Arora
                    </h3>
                    <div className="text-xs font-semibold text-[#00529B] uppercase tracking-wider mb-4">
                      Co-Founder & Chief Operating Officer
                    </div>

                    <div className="flex items-center gap-3 pt-2 border-t border-zinc-100">
                      <a
                        href="https://in.linkedin.com/company/Silgate-media-pvt-ltd"
                        target="_blank"
                        rel="noreferrer"
                        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#00529B] hover:text-white transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a
                        href="mailto:manoj@silgatehiring.com"
                        className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700 hover:bg-[#00529B] hover:text-white transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                <div className="space-y-4">
                  <span className="badge-new">Strategic Leadership</span>
                  <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                    "Great marketing doesn't just sell a product once; it
                    cements an enduring relationship that compounds over time."
                  </h2>
                  <p className="text-base text-slate-600 leading-relaxed">
                    With an entrepreneurial background spanning over a decade in
                    media, digital engineering, and marketing communications,
                    Kavish co-founded Silgate Solutions to break the conventional
                    agency mold. Under his leadership, Silgate has grown from a
                    boutique Delhi NCR setup into an internationally recognized
                    full-stack agency managing campaigns across four continents.
                  </p>
                </div>

                <div className="p-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm space-y-4">
                  <h3 className="text-xl font-bold text-slate-900">
                    Core Areas of Focus
                  </h3>
                  <ul className="space-y-3 text-sm text-zinc-700">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Omnichannel Brand Orchestration:</strong>{" "}
                        Aligning performance media, technical search dominance,
                        and high-impact creative storytelling.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Global Market Entry:</strong> Formulating
                        customized entry playbooks for US, European, and
                        Australian brands entering India, and Indian D2C scaling
                        abroad.
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span>
                        <strong>Next-Gen Search Technologies:</strong>{" "}
                        Pioneering early adoption of Generative Engine
                        Optimization (GEO) and Answer Engine Optimization (AEO).
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-zinc-900">
                    Executive Philosophy
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    Kavish actively mentors emerging digital talent, frequently
                    writes on modern Marcom strategies, and works directly with
                    enterprise client CMOs to resolve complex positioning and
                    customer acquisition bottlenecks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA
          title="Connect directly with our leadership"
          description="Have an ambitious brand challenge? Kavish and the senior strategy team are ready to consult."
          primaryText="Schedule Strategic Call"
          primaryLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
