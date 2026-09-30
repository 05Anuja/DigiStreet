import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import {
  ShieldCheck,
  Heart,
  Sparkles,
  Target,
  Compass,
  Users,
} from "lucide-react";

export default function Credo() {
  const values = [
    {
      title: "1. Strive to Make You Different",
      desc: "In an internet inundated with derivative templates and commoditized marketing, differentiation is the only viable survival strategy. We refuse to execute generic work.",
    },
    {
      title: "2. Deep Vision Alignment",
      desc: "Our strategy is simple: genuinely understand the founder and brand vision, and execute it with ruthless creative discipline.",
    },
    {
      title: "3. Radical Accountability",
      desc: "We own our numbers. Whether celebrating a 10x ROAS breakout or diagnosing unexpected SERP shifts, our reporting is 100% candid.",
    },
    {
      title: "4. Constant Evolution & R&D",
      desc: "From Generative Engine Optimization (GEO) to synthetic video production, we test every frontier early so our clients capture unfair advantages.",
    },
    {
      title: "5. Partnership Over Transaction",
      desc: "We treat client capital as our own. We do not sell bloated services you don't need; we build compound value for multi-year relationships.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero
          badge="Our Operating Principles"
          title="The Silgate Credo"
          subtitle="We always strive to make you different. Our strategy is simple: understand your vision and deliver it, creatively."
          breadcrumbs={[
            { label: "About Us", link: "/about" },
            { label: "Credo at Silgate" },
          ]}
          primaryCtaText="Work With Us"
          primaryCtaLink="/contact"
          secondaryCtaText="Meet Our Team"
          secondaryCtaLink="/about"
        />

        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-zinc-900 tracking-tight">
                Our Foundational Convictions
              </h2>
              <p className="text-base text-zinc-600 leading-relaxed">
                Since our founding in 2013, Silgate has operated under the
                principle that digital marketing should be inspiring to
                consumers and indispensable to business growth. We do not look
                at clients as accounts; we look at them as ambitious comrades
                building the future.
              </p>
            </div>

            <div className="space-y-6">
              {values.map((v, i) => (
                <div
                  key={i}
                  className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00529B] hover:shadow-md transition-all duration-300 space-y-2 group"
                >
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00529B] transition-colors">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          title="Ready to build a truly differentiated brand?"
          description="Let's align on your vision and create campaigns that turn heads and move markets."
        />
      </main>

      <Footer />
    </div>
  );
}
