import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import {
  Sparkles,
  Heart,
  Coffee,
  Users,
  PartyPopper,
  Flame,
  Award,
  ArrowUpRight,
} from "lucide-react";

import gallery5 from "../assets/images/gallery5.webp";
import gallery10 from "../assets/images/gallery10.webp";
import gallery13 from "../assets/images/gallery13.webp";
import gallery14 from "../assets/images/gallery14.webp";
import gallery16 from "../assets/images/gallery16.webp";
import gallery18 from "../assets/images/gallery18.webp";
import gallery21 from "../assets/images/gallery21.webp";
import gallery24 from "../assets/images/gallery24.webp";

export default function LifeAtSilgate() {
  const galleryPhotos = [
    { src: gallery16, caption: "Annual Silgate Awards & Gala Celebration" },
    { src: gallery18, caption: "Collaborative Design Sprints in our Noida HQ" },
    { src: gallery24, caption: "Team Outings & Offsite Adventures" },
    { src: gallery21, caption: "Festival Celebrations & Diwali at Silgate" },
    { src: gallery13, caption: "Creative Brainstorming & Whiteboarding" },
    { src: gallery14, caption: "Friday Jam Sessions & Knowledge Sharing" },
    { src: gallery10, caption: "Client Milestone Celebrations & Cakes" },
    { src: gallery5, caption: "Our Dedicated Digital Marketing Pods" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* <Navbar /> */}

      <main className="flex-1">
        <Hero
          badge="Life at Silgate"
          title="We Work Hard — And We Celebrate Harder"
          subtitle="A peek inside the vibrant culture, boundless passion, and tight-knit community of Digians."
          description="At Silgate, life isn't measured in pitch decks. It's measured in the impact we create, the skills we nurture, and the unforgettable moments we share every single day. Welcome to our home."
          breadcrumbs={[
            { label: "About Us", link: "/about" },
            { label: "Life at Silgate" },
          ]}
          primaryCtaText="Explore Careers & Jobs"
          primaryCtaLink="/career"
          secondaryCtaText="Read Our Credo"
          secondaryCtaLink="/about/credo-at-Silgate"
        />

        {/* Culture Narrative Section */}
        <section className="py-20 bg-white border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <span className="badge-new">What It Means to Be a Digian</span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  Where Curiosity Meets Craft and Camaraderie
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Silgate isn’t just an agency; it’s an incubator for restless
                  dreamers and analytical minds. We foster an environment where
                  juniors challenge seniors, wild ideas get tested on live
                  platforms, and success is celebrated collectively as one
                  family.
                </p>
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF3FB] flex items-center justify-center font-bold text-[#00529B] text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Freedom to Experiment
                      </h4>
                      <p className="text-xs text-slate-500">
                        Every team member has dedicated R&D time to test new
                        generative AI tools, viral formats, and automation.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#EBF3FB] flex items-center justify-center font-bold text-[#00529B] text-sm flex-shrink-0">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm">
                        Zero Hierarchical Friction
                      </h4>
                      <p className="text-xs text-slate-500">
                        Our founders and directors sit right on the floor with
                        everyone. The best idea always wins, regardless of
                        title.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-6">
                <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-zinc-900">
                  <img
                    src={gallery16}
                    alt="Silgate Celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-20 bg-[#F8FAFC] border-b border-slate-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <div className="inline-block px-3 py-1 rounded-full bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-3">
                Memories in Frames
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Moments That Define Silgate
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {galleryPhotos.map((photo, i) => (
                <div
                  key={i}
                  className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-zinc-100">
                    <img
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>
                  <div className="p-4 text-xs font-medium text-slate-700 text-center">
                    {photo.caption}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA
          badge="Join Our Crew"
          title="Want to experience life as a Digian?"
          description="We are constantly hunting for curious storytellers, passionate designers, and relentless digital growth specialists."
          primaryText="See Open Roles"
          primaryLink="/career"
        />
      </main>

      <Footer />
    </div>
  );
}
