import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Hero from "../components/Hero";
import CTA from "../components/CTA";
import {
  Briefcase,
  MapPin,
  Clock,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
  Heart,
  Coffee,
  Smile,
  Zap,
  Users,
  TrendingUp,
} from "lucide-react";

import gallery5 from "../assets/images/gallery5.webp";
import gallery10 from "../assets/images/gallery10.webp";
import gallery13 from "../assets/images/gallery13.webp";
import gallery14 from "../assets/images/gallery14.webp";
import gallery16 from "../assets/images/gallery16.webp";
import gallery18 from "../assets/images/gallery18.webp";
import gallery21 from "../assets/images/gallery21.webp";
import gallery24 from "../assets/images/gallery24.webp";

export default function Careers() {
  const navigate = useNavigate();
  const [selectedJob, setSelectedJob] = useState("Video Editor");
  const [applied, setApplied] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    experience: "2-4 years",
    portfolio: "",
    coverNote: "",
  });

  const jobs = [
    {
      title: "Video Editor",
      exp: "2+ years experience",
      location: "Noida (HQ) / Hybrid",
      type: "Full-Time",
      description:
        "Create compelling visual stories through high-quality edits for digital campaigns, social media, ads, and brand films. You'll collaborate closely with creative, content, and marketing teams to deliver engaging video content with strong pacing, storytelling, and platform understanding. Proficiency in Premiere Pro & After Effects required.",
      responsibilities: [
        "Assemble raw footage into cinematic brand stories and high-velocity social ads",
        "Implement sound design, audio leveling, and visual graphics",
        "Deliver platform-optimized cutdowns for Instagram Reels, YouTube Shorts, and TVCs",
      ],
    },
    {
      title: "Copywriter",
      exp: "2+ years experience",
      location: "Noida (HQ) / Hybrid",
      type: "Full-Time",
      description:
        "Craft impactful copy for digital campaigns, social media, ads, and brand communication across platforms. You'll work closely with creative and strategy teams to develop sharp, engaging, and insight-driven content that connects with audiences and strengthens brand voice.",
      responsibilities: [
        "Write punchy copy for Meta, Google, and LinkedIn ad hooks",
        "Develop brand manifestos, taglines, and marketing collaterals",
        "Script video commercials, corporate explainer films, and social reels",
      ],
    },
    {
      title: "Group Account Manager",
      exp: "4+ years experience",
      location: "Noida (HQ)",
      type: "Full-Time",
      description:
        "Oversee key client relationships, cross-functional project deliverables, and strategic brand consulting. You will act as the pivotal bridge between client leadership and Silgate's creative, tech, and performance teams.",
      responsibilities: [
        "Manage account health, contract retention, and account growth",
        "Lead strategic brainstorming, sprint reviews, and presentation pitches",
        "Coordinate multi-disciplinary campaign timelines and deliverables",
      ],
    },
    {
      title: "SEO Executive",
      exp: "1+ years experience",
      location: "Noida (HQ)",
      type: "Full-Time",
      description:
        "Execute technical SEO site audits, keyword clustering, internal linking architecture, and high-impact digital PR campaigns. Experience with SEMrush, Ahrefs, and Google Search Console required.",
      responsibilities: [
        "Perform in-depth technical audits, Core Web Vitals and Schema fixes",
        "Build keyword matrices and content briefs for organic search expansion",
        "Monitor live SERP movements and prepare client performance reports",
      ],
    },
    {
      title: "Performance Marketing Manager",
      exp: "2+ years experience",
      location: "Noida (HQ)",
      type: "Full-Time",
      description:
        "Manage and optimize high-budget acquisition funnels across Meta Ads Manager, Google Ads, and LinkedIn Campaign Manager. Relentless focus on ROAS, CAC, conversion optimization, and creative iterations.",
      responsibilities: [
        "Manage daily ad budgets and bidding strategies across channels",
        "Collaborate with design team on high-converting creative variants",
        "Implement advanced attribution, server-side CAPI, and GA4 tracking",
      ],
    },
  ];

  const handleApply = (e) => {
    e.preventDefault();
    setApplied(true);
    setTimeout(() => {
      navigate("/thank-you");
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          badge="Careers at Silgate"
          title="Build Your Best Work With People Who Care"
          subtitle="Join an award-winning collective of creatives, engineers, and digital growth strategists."
          description="We work hard — and we celebrate harder. At Silgate, life isn't measured in decks, it's measured in the impact we create and the memories we make along the way. Explore open roles or tell us why you belong on our team."
          breadcrumbs={[{ label: "Careers & Life at Silgate" }]}
          primaryCtaText="View Open Positions ↓"
          primaryCtaLink="#openings"
          secondaryCtaText="Life as a Digian"
          secondaryCtaLink="/about/life-at-Silgate"
          stats={[
            { value: "50+", label: "Passionate Digians" },
            { value: "4.8/5", label: "Glassdoor Culture Rating" },
            { value: "100%", label: "Merit-Based Growth" },
            { value: "Noida HQ", label: "State-of-the-Art Office" },
          ]}
        />

        {/* Culture / Life as a Digian Gallery */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00529B]/10 text-[#00529B] border border-[#00529B]/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Our Culture
              </div>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 mb-4">
                Life at Silgate
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                We sweat the craft, ship work we’re proud of, and make sure
                every team member has the room to grow, lead, and have fun doing it.
              </p>
            </div>

            {/* Photo Masonry Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                gallery16,
                gallery18,
                gallery24,
                gallery21,
                gallery13,
                gallery14,
                gallery10,
                gallery5,
              ].map((img, i) => (
                <div
                  key={i}
                  className="aspect-[4/3] rounded-2xl overflow-hidden bg-zinc-100 border border-zinc-200 shadow-sm group"
                >
                  <img
                    src={img}
                    alt={`Silgate Culture ${i + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Perks grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12 pt-8 border-t border-zinc-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00529B]/10 text-[#00529B] flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Real Autonomy
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Own your projects end-to-end without micromanagement.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00529B]/10 text-[#00529B] flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Fast-Track Growth
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Bi-annual reviews and transparent promotion tracks.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00529B]/10 text-[#00529B] flex items-center justify-center flex-shrink-0">
                  <Coffee className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Vibrant Workspace
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Express Trade Tower 2, cafeteria, games, and great vibes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#00529B]/10 text-[#00529B] flex items-center justify-center flex-shrink-0">
                  <Heart className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 text-sm">
                    Health & Wellness
                  </h4>
                  <p className="text-xs text-zinc-500 mt-1">
                    Medical coverage, mental health days, and paid leaves.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Current Job Openings */}
        <section
          id="openings"
          className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-2xl mb-12">
              <div className="inline-block px-3 py-1 rounded-full bg-[#00529B]/10 text-[#00529B] border border-[#00529B]/20 text-xs font-semibold uppercase tracking-wider mb-3">
                Current Openings
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                Join our team in Noida, India
              </h2>
            </div>

            <div className="space-y-6">
              {jobs.map((job, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/90 hover:border-[#00529B] transition-all shadow-sm hover:shadow-md flex flex-col lg:flex-row lg:items-center justify-between gap-6"
                >
                  <div className="space-y-3 max-w-3xl">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-[#00529B]">
                        {job.exp}
                      </span>
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{job.location}</span>
                      </span>
                      <span className="text-xs font-medium text-slate-500 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        <span>{job.type}</span>
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {job.title}
                    </h3>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="pt-2">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                        Key Focus:
                      </div>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-600">
                        {job.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a
                      href="#apply-form"
                      onClick={() => setSelectedJob(job.title)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00529B] text-white text-xs font-semibold hover:bg-[#F36C3D] transition-colors shadow-sm"
                    >
                      <span>Apply For This Role</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F6C84A]" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section
          id="apply-form"
          className="py-20 bg-white border-b border-zinc-200/80"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-8">
            <div className="bg-[#FAF9F6] border border-zinc-200/90 rounded-3xl p-8 sm:p-12 shadow-lg">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="badge-new mb-2">Fast Application</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                  Apply for {selectedJob}
                </h3>
                <p className="text-zinc-600 text-xs sm:text-sm mt-2">
                  Drop your details and portfolio. We review all applications
                  and schedule interviews rapidly.
                </p>
              </div>

              {applied ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-zinc-900">
                    Application Submitted!
                  </h4>
                  <p className="text-xs text-zinc-600">
                    Our HR team will reach out to you shortly. Redirecting...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleApply} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Neha Verma"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. neha@gmail.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                        Role Applying For *
                      </label>
                      <select
                        value={selectedJob}
                        onChange={(e) => setSelectedJob(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                      >
                        {jobs.map((j, i) => (
                          <option key={i} value={j.title}>
                            {j.title}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Portfolio Link / Behance / LinkedIn *
                    </label>
                    <input
                      type="url"
                      required
                      placeholder="e.g. https://behance.net/yourprofile or https://linkedin.com/in/..."
                      value={formData.portfolio}
                      onChange={(e) =>
                        setFormData({ ...formData, portfolio: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-1">
                      Brief Introduction
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us what you're passionate about and why you want to join Silgate..."
                      value={formData.coverNote}
                      onChange={(e) =>
                        setFormData({ ...formData, coverNote: e.target.value })
                      }
                      className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 bg-white text-sm"
                    ></textarea>
                  </div>

                  <div className="pt-2 text-right">
                    <Button type="submit" variant="primary" size="md">
                      Submit Job Application
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>

        <CTA
          badge="General Inquiries"
          title="Don't see your specific role?"
          description="We are always looking for exceptional talent. Send your portfolio directly to manoj@silgatehiring.com."
          primaryText="Email Your Resume"
          primaryLink="/contact"
        />
      </main>

      <Footer />
    </div>
  );
}
