import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import Button from './Button';

export default function AuditForm({ title = "Get a Free SEO and Digital Audit for your Brand", subtitle = "Tell us about your brand goals. Our digital strategists will analyze your online presence and send an actionable growth roadmap." }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'SEO & Organic Growth',
    message: '',
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
    <section className="py-16 sm:py-24 bg-white border-b border-slate-200/80" id="audit-form">
      <div className="max-w-5xl mx-auto px-4 sm:px-8">
        
        <div className="bg-[#F8FAFC] border border-slate-200/90 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-lg">
          
          <div className="max-w-2xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-md bg-[#EBF3FB] text-[#00529B] border border-blue-200 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F36C3D]" />
              <span>Complimentary Audit</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 mb-3">
              {title}
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900">Audit Request Received!</h3>
              <p className="text-zinc-600 text-sm max-w-md mx-auto">
                Thank you! Our strategists are already evaluating your digital presence. Redirecting to confirmation...
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Your Name *
                  </label>
                  <input 
                    type="text"
                    required
                    placeholder="e.g. Rahul Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Work Email *
                  </label>
                  <input 
                    type="email"
                    required
                    placeholder="e.g. rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Phone / WhatsApp *
                  </label>
                  <input 
                    type="tel"
                    required
                    placeholder="e.g. +91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                    Website or Brand URL *
                  </label>
                  <input 
                    type="url"
                    required
                    placeholder="e.g. https://yourbrand.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                  Primary Service Needed
                </label>
                <select 
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                >
                  <option value="SEO & Organic Growth">SEO & Organic Growth (Rankings & Traffic)</option>
                  <option value="Performance Marketing">Performance Marketing & PPC (ROI & ROAS)</option>
                  <option value="Social Media & Influencer">Social Media & Influencer Marketing</option>
                  <option value="Website Design & Development">Website & Mobile App Development</option>
                  <option value="Brand Strategy & Creative">Brand Strategy & Creative Identity</option>
                  <option value="AEO & GEO Optimization">AEO & GEO (AI Search Engine Optimization)</option>
                  <option value="Full 360 Digital Marketing">Full 360° Digital Marketing Retainer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-700 uppercase tracking-wider mb-2">
                  Project Details / Target Goals
                </label>
                <textarea 
                  rows={4}
                  placeholder="Share current challenges, target geography, timeline, or key objectives..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#00529B] focus:border-[#00529B] text-sm text-slate-800"
                ></textarea>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-2 text-xs text-zinc-500">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>100% Confidential. NDA signed upon request. No spam guaranteed.</span>
                </div>
                <Button type="submit" variant="primary" size="lg" icon="upRight" className="w-full sm:w-auto">
                  Get My Free Audit & Proposal
                </Button>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
