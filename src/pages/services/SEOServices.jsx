import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Hero from '../../components/Hero';
import AuditForm from '../../components/AuditForm';
import FAQAccordion from '../../components/FAQAccordion';
import CTA from '../../components/CTA';
import ClientMarquee from '../../components/ClientMarquee';
import { Search, TrendingUp, CheckCircle2, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function SEOServices() {
  const deliverables = [
    { title: "Forensic Technical SEO Audits", desc: "Resolving crawl errors, indexing bottlenecks, XML sitemaps, Core Web Vitals, and JavaScript rendering." },
    { title: "Entity-Based Semantic Clustering", desc: "Structuring topical clusters and content hubs that establish authoritative Topical Authority in Google's Knowledge Graph." },
    { title: "White-Hat Digital PR & Authority Links", desc: "Securing tier-1 editorial contextual backlinks from high-DR publications that move the needle safely." },
    { title: "Commercial Intent Keyword Dominance", desc: "Prioritizing bottom-of-funnel keywords where searchers have active purchasing intent, not just casual curiosity." },
    { title: "Continuous Algorithm Shielding", desc: "Proactive site architecture adjustments ensuring immunity against Google Core, Helpful Content, and Spam updates." },
    { title: "Conversion-Focused On-Page UX", desc: "Fine-tuning title hooks, meta descriptions, internal link equity distribution, and contextual CTAs." }
  ];

  const faqs = [
    {
      q: "How long does it take for SEO to deliver tangible rank and traffic improvements?",
      a: "Technical site fixes and on-page optimization show positive indexation changes within 3 to 6 weeks. Compounding keyword rank breakthroughs into the Top 3 on Google typically solidify between 90 and 180 days."
    },
    {
      q: "Do you guarantee #1 rankings on Google?",
      a: "No credible agency can guarantee #1 placement because search algorithms are proprietary. However, DigiStreet has consistently achieved Page 1 rankings for over 85% of client focus keywords across 14+ years using data-backed semantic architectures."
    },
    {
      q: "What makes DigiStreet's SEO approach superior?",
      a: "We don't use spammy link networks or generic outsourced articles. We leverage proprietary SERP tracking via RankStreet, craft deep entity-rich technical content, and align every keyword with qualified revenue generation."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero 
          badge="Flagship SEO Practice"
          title="Best SEO Services Company in India"
          subtitle="Data-Led Organic Search Engine Optimization for Enterprise Brands & High-Growth Startups"
          description="Capture high-intent prospective buyers at the exact moment they search for your solutions. We engineer sustainable search visibility that compounds organic pipeline and cuts reliance on expensive paid ads."
          breadcrumbs={[
            { label: 'Services', link: '/services' },
            { label: 'SEO Services' }
          ]}
          primaryCtaText="Claim Free SEO Audit"
          primaryCtaLink="#audit-form"
          secondaryCtaText="See Results"
          secondaryCtaLink="#results"
          stats={[
            { value: "#1", label: "Page 1 Organic Placements" },
            { value: "350%+", label: "Average Traffic Lift" },
            { value: "14+", label: "Years Algorithm Mastery" },
            { value: "Zero", label: "Manual Penalty History" }
          ]}
        />

        <ClientMarquee title="Ranked #1 by Industry Leaders Across India & Globally" />

        {/* Deliverables Section */}
        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-14">
              <span className="badge-new mb-2">Our Playbook</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 tracking-tight">
                Complete End-to-End SEO Deliverables
              </h2>
              <p className="text-zinc-600 text-sm sm:text-base mt-2">
                A holistic organic framework covering technical infrastructure, semantic content, and digital authority.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {deliverables.map((item, i) => (
                <div key={i} className="p-8 rounded-3xl bg-[#FAF9F6] border border-zinc-200/90 shadow-sm space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-black text-[#FFDF01] flex items-center justify-center font-bold">
                    0{i+1}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Table Section */}
        <section id="results" className="py-20 bg-[#FAF9F6] border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="max-w-3xl mb-10">
              <span className="badge-new mb-2">Live Proof</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900">
                Verified Search Ranking Compounding
              </h2>
            </div>

            <div className="bg-white rounded-3xl border border-zinc-200/80 overflow-hidden shadow-sm cs-table">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr>
                      <th>Client Vertical</th>
                      <th>Search Keyword Cluster</th>
                      <th>Starting Position</th>
                      <th>Current Ranking</th>
                      <th>Organic Traffic Impact</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="font-semibold text-zinc-900">Heavy Engineering & Manufacturing</td>
                      <td className="text-zinc-600">Industrial Valves & Valve Suppliers India</td>
                      <td className="text-rose-600">Page 5 (#48)</td>
                      <td className="text-emerald-600 font-bold">#1 (Featured Snippet)</td>
                      <td className="font-bold">+380% Qualified Traffic</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-zinc-900">Super Specialty Healthcare</td>
                      <td className="text-zinc-600">Cosmetic Dermatology Clinic Delhi NCR</td>
                      <td className="text-rose-600">Page 4 (#34)</td>
                      <td className="text-emerald-600 font-bold">#2 (Top 3 Pack)</td>
                      <td className="font-bold">+510% Monthly Inquiries</td>
                    </tr>
                    <tr>
                      <td className="font-semibold text-zinc-900">Enterprise FinTech Solution</td>
                      <td className="text-zinc-600">Banking API Integration Software</td>
                      <td className="text-rose-600">Page 3 (#29)</td>
                      <td className="text-emerald-600 font-bold">#3 Nationwide</td>
                      <td className="font-bold">+290% Demo Requests</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <AuditForm title="Get a Free SEO & Keyword Audit For Your Site" />
        <FAQAccordion items={faqs} title="SEO Services FAQs" />
        <CTA title="Ready to take over Page 1 on Google?" />
      </main>

      <Footer />
    </div>
  );
}
