import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Button from '../components/Button';
import Hero from '../components/Hero';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Coffee, 
  Globe2,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function Contact() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'Full-Service Digital Retainer',
    budget: '₹2,00,000 - ₹5,00,000 / month',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      navigate('/thank-you');
    }, 1200);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        
        {/* Hero Section */}
        <Hero 
          badge="Let's Connect"
          title="Contact Us | Digital Growth Partner"
          subtitle="HAVE A COFFEE WITH US, YOU NEVER KNOW WHAT CLICKS!"
          description="Have a project? Let's make something great! Discuss your vision with the industry's best. We are always up for an invigorating conversation about brand growth and market dominance."
          breadcrumbs={[{ label: 'Contact Us' }]}
          showCta={false}
        />

        {/* Contact Form & Office Info Grid */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              
              {/* Left Column: Contact Form */}
              <div className="lg:col-span-7 bg-[#FAF9F6] border border-zinc-200/90 rounded-3xl p-8 sm:p-12 shadow-sm">
                
                <div className="mb-8">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black text-[#FFDF01] text-xs font-semibold uppercase tracking-wider mb-3">
                    <Coffee className="w-3.5 h-3.5 text-[#FFDF01]" />
                    <span>Drop a Line</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                    Discuss Your Vision With The Industry’s Best
                  </h2>
                  <p className="text-xs sm:text-sm text-zinc-600 mt-2">
                    Customer Favored, Industry Acclaimed · Your Trusted Choice for Top-Rated Solutions
                  </p>
                </div>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-zinc-900">Message Dispatched!</h3>
                    <p className="text-zinc-600 text-sm max-w-sm mx-auto">
                      We've received your brief. A director will get in touch shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input 
                          type="text" 
                          required 
                          placeholder="e.g. Vikram Batra" 
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input 
                          type="email" 
                          required 
                          placeholder="e.g. vikram@company.com" 
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input 
                          type="tel" 
                          required 
                          placeholder="e.g. +91 81088 10916" 
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Company / Brand Website
                        </label>
                        <input 
                          type="text" 
                          placeholder="e.g. companyname.com" 
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Service of Interest
                        </label>
                        <select 
                          value={formData.service}
                          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        >
                          <option value="Full-Service Digital Retainer">Full 360° Digital Marketing Retainer</option>
                          <option value="SEO & Organic Growth">SEO Services (AEO / GEO / Local)</option>
                          <option value="Performance Marketing & PPC">Performance Marketing & PPC</option>
                          <option value="Social Media & Influencer">Social Media & Influencer Marketing</option>
                          <option value="Website & App Development">Website & Mobile App Development</option>
                          <option value="Creative Strategy & TVC">Creative Communication & Video TVC</option>
                          <option value="Online Reputation Management">Online Reputation Management (ORM)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                          Anticipated Monthly Budget
                        </label>
                        <select 
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                        >
                          <option value="< ₹1,00,000 / month">Under ₹1 Lakh / month</option>
                          <option value="₹1,00,000 - ₹2,00,000 / month">₹1 Lakh – ₹2 Lakh / month</option>
                          <option value="₹2,00,000 - ₹5,00,000 / month">₹2 Lakh – ₹5 Lakh / month</option>
                          <option value="₹5,00,000+ / month">₹5 Lakh+ / month</option>
                          <option value="International $3,000+ / month">International ($3,000+ / month)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                        How can we help? *
                      </label>
                      <textarea 
                        rows={4} 
                        required
                        placeholder="Tell us about your objectives, timeline, or current bottlenecks..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-white text-sm focus:ring-2 focus:ring-black focus:outline-none"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 text-xs text-zinc-500">
                        <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span>Strict privacy. No unsolicited emails.</span>
                      </div>
                      <Button type="submit" variant="primary" size="lg" icon="upRight" className="w-full sm:w-auto">
                        Submit Inquiry
                      </Button>
                    </div>

                  </form>
                )}

              </div>

              {/* Right Column: Global Office Details */}
              <div className="lg:col-span-5 space-y-8">
                
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-zinc-900">Where We Work & What We Do</h3>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Headquartered in Noida Delhi NCR with dedicated presence across Rochester (USA) and Canada, we collaborate seamlessly across timezones.
                  </p>
                </div>

                {/* Office 1: Noida HQ */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-base">
                    <MapPin className="w-4 h-4 text-[#FFDF01]" />
                    <span>Noida, INDIA (Corporate HQ)</span>
                  </div>
                  <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                    Express Trade Tower 2, B-36, Sector 132, Noida, Uttar Pradesh 201301
                  </p>
                  <p className="text-xs text-zinc-600 pl-6">
                    Tel: <a href="tel:+918108810916" className="text-black font-semibold hover:underline">+91 81088 10916</a>
                  </p>
                </div>

                {/* Office 2: New Delhi */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-base">
                    <MapPin className="w-4 h-4 text-[#FFDF01]" />
                    <span>New Delhi, INDIA</span>
                  </div>
                  <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                    Dwarka, New Delhi 110045, India
                  </p>
                </div>

                {/* Office 3: USA */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-base">
                    <Globe2 className="w-4 h-4 text-[#FFDF01]" />
                    <span>Rochester, USA</span>
                  </div>
                  <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                    Rochester, NY, United States
                  </p>
                  <p className="text-xs text-zinc-600 pl-6">
                    Tel: <a href="tel:+15853097815" className="text-black font-semibold hover:underline">+1-585-309-7815</a>
                  </p>
                </div>

                {/* Office 4: Canada */}
                <div className="p-6 rounded-3xl bg-white border border-zinc-200 shadow-sm space-y-2">
                  <div className="flex items-center gap-2 text-zinc-900 font-bold text-base">
                    <Globe2 className="w-4 h-4 text-[#FFDF01]" />
                    <span>Canada, NORTH AMERICA</span>
                  </div>
                  <p className="text-xs text-zinc-600 pl-6 leading-relaxed">
                    Toronto & Ottawa Client Engagement Hubs
                  </p>
                </div>

                {/* Direct Communications Box */}
                <div className="p-6 rounded-3xl bg-[#0d0d0d] text-white space-y-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-[#FFDF01]">Direct Inquiries</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-3">
                      <Mail className="w-4 h-4 text-[#FFDF01]" />
                      <a href="mailto:manoj@silgatehiring.com" className="hover:text-[#FFDF01]">manoj@silgatehiring.com</a>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="w-4 h-4 text-[#FFDF01]" />
                      <a href="tel:+918108810916" className="hover:text-[#FFDF01]">+91 81088 10916</a>
                    </div>
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
