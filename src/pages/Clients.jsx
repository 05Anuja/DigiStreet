import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import { Award, Star, CheckCircle2, ArrowUpRight } from 'lucide-react';

import mahindraLogo from '../assets/images/Mahindra-EV.png';
import mgLogo from '../assets/images/MG-logo-1.png';
import amityLogo from '../assets/images/Amity-logo.png';
import sircaLogo from '../assets/images/sirca.webp';
import vegaLogo from '../assets/images/vega.webp';
import xonLogo from '../assets/images/xon-logo.webp';
import metsoLogo from '../assets/images/metso.png.webp';
import jaksonLogo from '../assets/images/jakson.png.webp';
import sudhirLogo from '../assets/images/sudhir-power-1.png.webp';
import omaxeLogo from '../assets/images/omaxe.webp';
import dearLogo from '../assets/images/dear.webp';
import jbmLogo from '../assets/images/jbm-group.webp';

export default function Clients() {
  const clientList = [
    { name: "Mahindra EV", category: "Automotive & Electric Vehicles", logo: mahindraLogo, desc: "Comprehensive brand positioning and digital lead generation for next-gen electric mobility." },
    { name: "MG Motor", category: "Automotive", logo: mgLogo, desc: "Interactive social activations and regional dealership test-drive acquisition campaigns." },
    { name: "Amity Online", category: "Higher Education", logo: amityLogo, desc: "High-intent student enrollment campaigns generating over 45,000+ validated university admissions." },
    { name: "Sirca Paints", category: "Coatings & Luxury Finishes", logo: sircaLogo, desc: "Nationwide TV commercial production, contractor influencer network, and dealer digital enablement." },
    { name: "Vega", category: "Personal Care & Beauty", logo: vegaLogo, desc: "D2C eCommerce optimization, seasonal ad campaigns, and creator-led viral beauty reels." },
    { name: "XONN", category: "Consumer Electronics", logo: xonLogo, desc: "Multi-market brand identity, packaging design, and performance media management." },
    { name: "Metso Outotec", category: "Heavy Engineering & Mining", logo: metsoLogo, desc: "Global B2B technical search engine optimization and industrial equipment RFP acquisition." },
    { name: "Jakson Solar", category: "Renewable Energy", logo: jaksonLogo, desc: "Enterprise corporate website revamp and commercial solar project lead nurturing." },
    { name: "Sudhir Power", category: "Power Generation", logo: sudhirLogo, desc: "Industrial B2B search dominance and trade show digital orchestration." },
    { name: "Omaxe Real Estate", category: "Real Estate & Infrastructure", logo: omaxeLogo, desc: "High-ticket NRI real estate campaigns driving verified site visits across tier-1 cities." },
    { name: "Dear", category: "FMCG Food & Beverage", logo: dearLogo, desc: "Packaging design, shelf visual assets, and digital retail launch strategy." },
    { name: "JBM Group", category: "Conglomerate & Transit", logo: jbmLogo, desc: "Corporate communications and sustainable mobility PR positioning." },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero 
          badge="Partners in Growth"
          title="Not Just Clients, They Are More Like Partners"
          subtitle="Proudly empowering over 250+ enterprise conglomerates, market leaders, and bold challenger brands."
          description="We do not measure our success in awards on our walls; we measure it by the sustained market dominance and multi-year longevity of the brands that trust us."
          breadcrumbs={[{ label: 'Clients & Partners' }]}
          primaryCtaText="Join Our Client Roster"
          primaryCtaLink="/contact"
          secondaryCtaText="Explore Case Studies"
          secondaryCtaLink="/services"
          stats={[
            { value: "250+", label: "Brands Served" },
            { value: "14+", label: "Years of Trust" },
            { value: "98%", label: "Client Retention" },
            { value: "12+", label: "Industry Verticals" }
          ]}
        />

        {/* Client Grid */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientList.map((client, idx) => (
                <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200/90 hover:border-[#00529B] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="h-16 w-36 mb-6 flex items-center">
                      <img 
                        src={client.logo} 
                        alt={client.name} 
                        className="max-h-full max-w-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'block';
                        }}
                      />
                      <span className="hidden font-bold text-lg text-slate-900">{client.name}</span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-slate-50 text-[#00529B] text-xs font-semibold mb-3 border border-[#00529B]/20">
                      {client.category}
                    </span>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-[#00529B] transition-colors mb-2">
                      {client.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {client.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-700">
                    <span>Verified Partnership</span>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA 
          title="Ready to elevate your brand to the top tier?"
          description="Let's build a customized growth blueprint that puts your business at the forefront of your industry."
        />
      </main>

      <Footer />
    </div>
  );
}
