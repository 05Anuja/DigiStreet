import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTA from '../components/CTA';
import Button from '../components/Button';
import { Play, ArrowUpRight, Sparkles } from 'lucide-react';

import artboard17 from '../assets/images/artboard-17.webp';
import artboard18 from '../assets/images/artboard-18.webp';
import artboard19 from '../assets/images/artboard-19.webp';
import artboard20 from '../assets/images/artboard-20.webp';
import artboard21 from '../assets/images/artboard-21.webp';
import artboard22 from '../assets/images/artboard-22.webp';
import bpTvc from '../assets/images/bp-tvc.webp';
import sircaNews from '../assets/images/Sirca-news.jpg';

export default function Showcase() {
  const [filter, setFilter] = useState('All');

  const items = [
    { title: "National TV Commercial & Brand Film", cat: "Video & TVC", img: bpTvc, client: "British Paints" },
    { title: "Italian Luxury Wood Coatings Campaign", cat: "Branding", img: sircaNews, client: "Sirca Paints" },
    { title: "Fintech Platform Web UI & Customer Portal", cat: "Web & UI", img: artboard18, client: "Fintech Enterprise" },
    { title: "University Admissions Digital Campaign", cat: "Performance", img: artboard19, client: "Amity Online" },
    { title: "Contractor Influencer Social Activation", cat: "Social", img: artboard20, client: "Sirca Paints" },
    { title: "Consumer Goods Packaging & Carton Architecture", cat: "Packaging", img: artboard21, client: "FMCG Brand" },
    { title: "Electric Mobility Omnichannel Rollout", cat: "Video & TVC", img: artboard22, client: "Mahindra EV" },
    { title: "Corporate Identity & Brand Guidelines", cat: "Branding", img: artboard17, client: "Industrial Conglomerate" },
  ];

  const categories = ['All', 'Video & TVC', 'Branding', 'Web & UI', 'Packaging', 'Social'];

  const filtered = filter === 'All' ? items : items.filter(it => it.cat === filter);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero 
          badge="Creative Showcase"
          title="Work That Speaks For Itself"
          subtitle="Explore commercials, brand identities, digital storefronts, and performance campaigns built with passion."
          breadcrumbs={[{ label: 'Creative Showcase' }]}
          primaryCtaText="Discuss Your Creative Brief"
          primaryCtaLink="/contact"
        />

        {/* Filter Bar */}
        <section className="py-6 bg-[#FAF9F6] border-b border-zinc-200/80 sticky top-[73px] z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center gap-2 overflow-x-auto text-xs font-semibold">
            {categories.map((c, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setFilter(c)}
                className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                  filter === c 
                    ? 'bg-black text-white' 
                    : 'bg-white text-zinc-700 border border-zinc-200 hover:border-black'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </section>

        {/* Showcase Masonry Grid */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, idx) => (
                <div key={idx} className="group rounded-3xl overflow-hidden border border-zinc-200 bg-[#FAF9F6] shadow-sm hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-900 relative">
                    <img 
                      src={item.img} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 bg-white/95 text-black text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                      {item.cat}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1">
                      {item.client}
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 group-hover:text-black">
                      {item.title}
                    </h3>
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
