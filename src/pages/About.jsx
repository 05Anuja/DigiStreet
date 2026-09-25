import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Hero from '../components/Hero';
import ClientMarquee from '../components/ClientMarquee';
import CTA from '../components/CTA';
import { 
  Sparkles, 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Heart, 
  Award, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';

import kavishImg from '../assets/images/kavish-arora-co-founder-coo-digistreet-media-v2.webp';
import darpanImg from '../assets/images/darpan-sharma.webp';
import malikaImg from '../assets/images/malika.webp';
import divyaniImg from '../assets/images/Divyani.webp';
import amitImg from '../assets/images/amitsingh.webp';
import rajkamalImg from '../assets/images/Rajkaml.webp';
import neetuImg from '../assets/images/Neetu.webp';
import gauravImg from '../assets/images/Gaurav.webp';
import tusharikaImg from '../assets/images/Tusharika.webp';
import harshitImg from '../assets/images/Harshit.webp';

export default function About() {
  const leaders = [
    {
      name: "Darpan Sharma",
      role: "CEO & Co-Founder",
      image: darpanImg,
      bio: "Visionary brand strategist steering DigiStreet's 14-year evolution into a premier global marketing powerhouse."
    },
    {
      name: "Kavish Arora",
      role: "Co-Founder & COO",
      image: kavishImg,
      bio: "Operations architect and creative strategist ensuring flawless campaign orchestration and client compounding."
    },
    {
      name: "Malika",
      role: "Creative Director",
      image: malikaImg,
      bio: "Leading creative visualizers, brand aesthetics, packaging, and commercial film direction."
    },
    {
      name: "Divyani",
      role: "Head of Client Relations",
      image: divyaniImg,
      bio: "Driving account partnerships, client satisfaction, and multi-market communications."
    },
    {
      name: "Amit Singh",
      role: "Technical Lead",
      image: amitImg,
      bio: "Full-stack web architecture, custom web app development, and headless CMS systems."
    },
    {
      name: "Rajkamal",
      role: "Senior Art Director",
      image: rajkamalImg,
      bio: "Transforming brand narratives into distinctive typography, layout, and visual identity systems."
    },
    {
      name: "Neetu",
      role: "Head of SEO & Analytics",
      image: neetuImg,
      bio: "Architecting high-intent organic search strategies, AEO/GEO entity graphs, and technical audits."
    },
    {
      name: "Gaurav",
      role: "Performance Marketing Lead",
      image: gauravImg,
      bio: "Managing multi-crore ad budgets across Meta, Google, and LinkedIn with relentless ROAS discipline."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero 
          badge="About DigiStreet Media"
          title="We Are a Digital Marketing Agency with a Creative Edge"
          subtitle="Understanding your vision and delivering it, creatively and measurably."
          description="When the creativity and productivity of other agencies end, it is from where we start. Based in India with a global footprint, our bucket is ever filled with fresh marketing ideas that elevate brands to their highest potential."
          breadcrumbs={[{ label: 'About Us' }]}
          primaryCtaText="Meet Our Team"
          primaryCtaLink="#team"
          secondaryCtaText="Life at DigiStreet"
          secondaryCtaLink="/about/life-at-digistreet"
          stats={[
            { value: "14+", label: "Years of Excellence" },
            { value: "250+", label: "Brands Elevated" },
            { value: "98%", label: "Client Retention Rate" },
            { value: "50+", label: "Passionate Digians" }
          ]}
        />

        <ClientMarquee />

        {/* Philosophy & Plant Metaphor Section */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider">
                  Our Philosophy
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight leading-tight">
                  "If you have a seed and soil in a pot, will it grow? No, it needs nurturing in the form of water."
                </h2>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  The digital age of social media has revolutionized the way of doing business. To remain relevant in this volatile market, one needs the right care and help. Good marketing not just helps in building the name of the brand, but it paves the way for new customers to come in. After all, a plant always needs water, even after it has bloomed.
                </p>
                <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                  We at DigiStreet don’t call ourselves knight in shining armour of our clients, but we do take immense pride in our approach. It involves deep creative ideation and digital audits along with extensive background research in tailoring strategies.
                </p>
                <div className="pt-2">
                  <Link to="/about/credo-at-digistreet" className="text-sm font-semibold text-black hover:text-amber-600 inline-flex items-center gap-1.5">
                    <span>Read Our Core Credo</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-zinc-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                    01
                  </div>
                  <h4 className="font-bold text-zinc-900 text-base">In-Depth Research</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Granular audience intelligence, competitor audit, and market gap discovery before running any creative.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-zinc-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                    02
                  </div>
                  <h4 className="font-bold text-zinc-900 text-base">Customisation</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    No cookie-cutter templates. Every campaign, website, and SEO architecture is handcrafted for your distinct goals.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-zinc-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                    03
                  </div>
                  <h4 className="font-bold text-zinc-900 text-base">Creative Communication</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Visualizing ideas that captivate users within 3 seconds, building lasting recall and brand prestige.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#FAF9F6] border border-zinc-200 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                    04
                  </div>
                  <h4 className="font-bold text-zinc-900 text-base">Real-Time Analytics</h4>
                  <p className="text-xs text-zinc-600 leading-relaxed">
                    Data-driven feedback loops continually optimizing conversion rates and compound return on ad spend.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section id="team" className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            
            <div className="max-w-2xl mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                The Minds Behind DigiStreet
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-zinc-900 mb-3">
                Leadership & Creative Visionaries
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base leading-relaxed">
                Meet the seasoned strategists, designers, engineers, and growth hackers dedicated to your brand's market supremacy.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {leaders.map((person, idx) => (
                <div key={idx} className="group bg-white rounded-3xl overflow-hidden border border-zinc-200/80 hover:shadow-xl hover:border-black/30 transition-all duration-300">
                  <div className="aspect-[4/5] overflow-hidden bg-zinc-100 relative">
                    <img 
                      src={person.image} 
                      alt={person.name} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-zinc-800 text-white font-bold items-center justify-center text-lg">
                      {person.name}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-zinc-900">{person.name}</h3>
                    <div className="text-xs font-semibold text-[#c7a900] uppercase tracking-wider mb-2">
                      {person.role}
                    </div>
                    <p className="text-xs text-zinc-600 leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Culture & Life at DigiStreet Teaser */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="bg-[#0d0d0d] text-white rounded-3xl p-8 sm:p-14 relative overflow-hidden">
              <div className="max-w-2xl space-y-6 relative z-10">
                <span className="badge-new">Culture & Life as a Digian</span>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  We work hard — and we celebrate harder.
                </h3>
                <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
                  At DigiStreet, life isn't measured in pitches and decks; it's measured in the people we work with and the memories we make along the way. We sweat the craft, ship work we're proud of, and make sure every Digian has the room to lead and have fun doing it.
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <Button to="/about/life-at-digistreet" variant="yellow" size="md">
                    Explore Life at DigiStreet
                  </Button>
                  <Button to="/career" variant="darkOutline" size="md">
                    View Career Openings
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CTA 
          title="Looking for a partner that treats your brand like their own?"
          description="Schedule a consultation with our directors to discuss customized solutions for your business."
        />

      </main>

      <Footer />
    </div>
  );
}
