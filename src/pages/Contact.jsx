import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Hero from "../components/Hero";
import {
  Phone,
  Mail,
  CheckCircle2,
  Coffee,
  ShieldCheck,
  ArrowUpRight,
  MessageCircle,
  Clock3,
} from "lucide-react";

export default function Contact() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "Full-Service Digital Retainer",
    budget: "₹2,00,000 - ₹5,00,000 / month",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      navigate("/thank-you");
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* ==================== HERO ==================== */}
        <Hero
          badge="Let's Connect"
          title="Contact Us | Digital Growth Partner"
          subtitle="HAVE A COFFEE WITH US, YOU NEVER KNOW WHAT CLICKS!"
          description="Have a project? Let's make something great! Discuss your vision with the industry's best. We are always up for an invigorating conversation about brand growth and market dominance."
          breadcrumbs={[{ label: "Contact Us" }]}
          showCta={false}
        />

        {/* ==================== CONTACT SECTION ==================== */}
        <section className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="max-w-2xl mb-10 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-[#00529B]/10 text-[#00529B] border border-[#00529B]/20 px-4 py-2 rounded-full text-[11px] font-bold uppercase tracking-[0.16em]">
                <Coffee className="w-3.5 h-3.5" />
                <span>Start A Conversation</span>
              </div>

              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.05]">
                Let’s Build Something{" "}
                <span className="text-[#00529B]">
                  Remarkable Together.
                </span>
              </h2>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                Tell us what you are working on, what you want to achieve, and
                where you need help. Our team will get back to you with the
                right approach.
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
              {/* ==================== FORM CARD ==================== */}
              <div className="lg:col-span-8">
                <div className="relative overflow-hidden bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                  {/* Top Accent */}
                  <div className="h-1.5 bg-gradient-to-r from-[#F6C84A] via-[#F36C3D] to-[#00529B]" />

                  <div className="p-6 sm:p-8 lg:p-10 xl:p-12">
                    {/* Form Header */}
                    <div className="mb-8">
                      <div className="flex items-center justify-between gap-4 mb-4">
                        <div className="inline-flex items-center gap-2 bg-[#00529B]/10 text-[#00529B] border border-[#00529B]/20 px-3.5 py-1.5 rounded-full text-[11px] font-bold uppercase tracking-[0.12em]">
                          <Coffee className="w-3.5 h-3.5" />
                          Drop a Line
                        </div>

                        <span className="hidden sm:block text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                          We usually respond within 24 hours
                        </span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-extrabold text-slate-900 leading-tight tracking-tight">
                        Discuss Your Vision With
                        <span className="block text-[#00529B]">The Industry’s Best</span>
                      </h3>

                      <p className="mt-3 text-sm text-slate-600 leading-relaxed max-w-2xl">
                        Customer Favored, Industry Acclaimed · Your Trusted
                        Choice for Top-Rated Solutions.
                      </p>
                    </div>

                    {/* ==================== SUCCESS STATE ==================== */}
                    {submitted ? (
                      <div className="min-h-[480px] flex flex-col items-center justify-center text-center px-4">
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-emerald-100 rounded-full blur-xl opacity-70" />

                          <div className="relative w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-10 h-10" />
                          </div>
                        </div>

                        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950">
                          Message Dispatched!
                        </h3>

                        <p className="mt-3 text-sm text-zinc-600 max-w-md leading-relaxed">
                          We've received your brief. A director will get in
                          touch with you shortly.
                        </p>
                      </div>
                    ) : (
                      /* ==================== FORM ==================== */
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Personal Information */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                          {/* Name */}
                          <div>
                            <label
                              htmlFor="name"
                              className="block text-[11px] font-bold text-zinc-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Your Name <span className="text-red-500">*</span>
                            </label>

                            <input
                              id="name"
                              name="name"
                              type="text"
                              required
                              placeholder="e.g. Vikram Batra"
                              value={formData.name}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15"
                            />
                          </div>

                          {/* Email */}
                          <div>
                            <label
                              htmlFor="email"
                              className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Email Address{" "}
                              <span className="text-red-500">*</span>
                            </label>

                            <input
                              id="email"
                              name="email"
                              type="email"
                              required
                              placeholder="e.g. vikram@company.com"
                              value={formData.email}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15"
                            />
                          </div>

                          {/* Phone */}
                          <div>
                            <label
                              htmlFor="phone"
                              className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Phone / WhatsApp{" "}
                              <span className="text-red-500">*</span>
                            </label>

                            <input
                              id="phone"
                              name="phone"
                              type="tel"
                              required
                              placeholder="e.g. +91 81088 10916"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15"
                            />
                          </div>

                          {/* Company */}
                          <div>
                            <label
                              htmlFor="company"
                              className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Company / Brand Website
                            </label>

                            <input
                              id="company"
                              name="company"
                              type="text"
                              placeholder="e.g. companyname.com"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15"
                            />
                          </div>
                        </div>

                        {/* Service & Budget */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-5">
                          {/* Service */}
                          <div>
                            <label
                              htmlFor="service"
                              className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Service of Interest
                            </label>

                            <select
                              id="service"
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15 cursor-pointer"
                            >
                              <option value="Full-Service Digital Retainer">
                                Full 360° Digital Marketing Retainer
                              </option>

                              <option value="SEO & Organic Growth">
                                SEO Services (AEO / GEO / Local)
                              </option>

                              <option value="Performance Marketing & PPC">
                                Performance Marketing & PPC
                              </option>

                              <option value="Social Media & Influencer">
                                Social Media & Influencer Marketing
                              </option>

                              <option value="Website & App Development">
                                Website & Mobile App Development
                              </option>

                              <option value="Creative Strategy & TVC">
                                Creative Communication & Video TVC
                              </option>

                              <option value="Online Reputation Management">
                                Online Reputation Management (ORM)
                              </option>
                            </select>
                          </div>

                          {/* Budget */}
                          <div>
                            <label
                              htmlFor="budget"
                              className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                            >
                              Anticipated Monthly Budget
                            </label>

                            <select
                              id="budget"
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full h-12 px-4 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 outline-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15 cursor-pointer"
                            >
                              <option value="< ₹1,00,000 / month">
                                Under ₹1 Lakh / month
                              </option>

                              <option value="₹1,00,000 - ₹2,00,000 / month">
                                ₹1 Lakh – ₹2 Lakh / month
                              </option>

                              <option value="₹2,00,000 - ₹5,00,000 / month">
                                ₹2 Lakh – ₹5 Lakh / month
                              </option>

                              <option value="₹5,00,000+ / month">
                                ₹5 Lakh+ / month
                              </option>

                              <option value="International $3,000+ / month">
                                International ($3,000+ / month)
                              </option>
                            </select>
                          </div>
                        </div>

                        {/* Message */}
                        <div>
                          <label
                            htmlFor="message"
                            className="block text-[11px] font-bold text-slate-800 uppercase tracking-[0.12em] mb-2"
                          >
                            How Can We Help?{" "}
                            <span className="text-red-500">*</span>
                          </label>

                          <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            placeholder="Tell us about your objectives, timeline, or current bottlenecks..."
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 outline-none resize-none transition-all duration-200 hover:border-slate-300 focus:border-[#00529B] focus:ring-4 focus:ring-[#00529B]/15"
                          />
                        </div>

                        {/* Bottom Action */}
                        <div className="pt-2 border-t border-slate-200/80">
                          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 pt-5">
                            <div className="flex items-center gap-2.5 text-xs text-slate-500">
                              <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              </div>

                              <span>
                                Strict privacy.
                                <span className="block text-slate-400">
                                  No unsolicited emails.
                                </span>
                              </span>
                            </div>

                            <Button
                              type="submit"
                              variant="primary"
                              size="lg"
                              icon="upRight"
                              className="w-full sm:w-auto min-w-[190px] !rounded-lg"
                            >
                              Submit Inquiry
                            </Button>
                          </div>
                        </div>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* ==================== SIDEBAR ==================== */}
              <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-5">
                {/* Direct Inquiries */}
                <div className="relative overflow-hidden rounded-2xl bg-[#07172C] text-white p-7 sm:p-8 border border-[#1E3E6B] shadow-lg">
                  {/* Subtle Orange Glow */}
                  <div className="absolute -top-20 -right-20 w-44 h-44 bg-[#F36C3D]/10 rounded-full blur-3xl pointer-events-none" />

                  <div className="relative">
                    <div className="flex items-center justify-between mb-7">
                      <span className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#F6C84A]">
                        Direct Inquiries
                      </span>

                      <div className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center">
                        <ArrowUpRight className="w-4 h-4 text-[#F36C3D]" />
                      </div>
                    </div>

                    <div className="space-y-5">
                      {/* Email */}
                      <a
                        href="mailto:manoj@silgatehiring.com"
                        className="group flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#00529B]/20 border border-[#00529B]/40 flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-[#F36C3D]" />
                        </div>

                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                            Email
                          </p>

                          <p className="text-sm font-semibold group-hover:text-[#F36C3D] transition-colors break-all">
                            manoj@silgatehiring.com
                          </p>
                        </div>
                      </a>

                      {/* Phone */}
                      <a
                        href="tel:+918108810916"
                        className="group flex items-start gap-4"
                      >
                        <div className="w-10 h-10 rounded-xl bg-[#00529B]/20 border border-[#00529B]/40 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-[#F36C3D]" />
                        </div>

                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-wider mb-1">
                            Phone / WhatsApp
                          </p>

                          <p className="text-sm font-semibold group-hover:text-[#F36C3D] transition-colors">
                            +91 81088 10916
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="rounded-2xl border border-slate-200 bg-white p-7 sm:p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#00529B]/10 flex items-center justify-center">
                      <Clock3 className="w-5 h-5 text-[#00529B]" />
                    </div>

                    <div>
                      <p className="text-[10px] uppercase tracking-[0.14em] font-bold text-slate-400">
                        Response Time
                      </p>

                      <p className="text-sm font-bold text-slate-900">
                        Within 24 Hours
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    Share your requirements with us and our team will review
                    your brief before getting in touch.
                  </p>
                </div>

                {/* Quick Conversation Card */}
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#F36C3D] to-[#D95627] text-white p-7 sm:p-8 shadow-lg">
                  <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-white/20 rounded-full blur-2xl pointer-events-none" />

                  <div className="relative">
                    <div className="w-11 h-11 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-5 text-white">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="text-xl font-extrabold text-white leading-tight">
                      Prefer a quick conversation?
                    </h3>

                    <p className="mt-2 text-sm text-white/90 leading-relaxed">
                      Reach out directly and let's discuss your project.
                    </p>

                    <a
                      href="tel:+918108810916"
                      className="inline-flex items-center gap-2 mt-5 bg-white text-[#091E3A] hover:bg-slate-100 px-5 py-3 rounded-lg text-sm font-bold transition-all shadow-sm"
                    >
                      Call Us
                      <ArrowUpRight className="w-4 h-4 text-[#F36C3D]" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
