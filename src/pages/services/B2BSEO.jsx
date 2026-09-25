import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function B2BSEO() {
  return (
    <ServicePageTemplate
      badge="Enterprise Pipeline"
      title="B2B SEO Company in India"
      subtitle="High-Intent Organic Lead Generation for Industrial, SaaS, and Enterprise Services"
      description="In B2B, traffic quantity means nothing without decision-maker quality. We target the specific technical queries, vendor evaluation criteria, and procurement terms used by C-suite executives and purchasing directors."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'B2B SEO Company' }
      ]}
      stats={[
        { value: "+210%", label: "Average Inbound RFQ Lift" },
        { value: "High-Ticket", label: "Deal-Size Focused" },
        { value: "C-Suite", label: "Executive Search Discovery" },
        { value: "14+", label: "Years Industrial Mastery" }
      ]}
      overviewTitle="SEO Engineered for Long B2B Sales Cycles"
      overviewText="B2B purchases involve multi-stakeholder buying committees, extended evaluation timelines, and high transaction values. Our B2B SEO strategy focuses on creating comprehensive technical whitepapers, product specification tables, and comparison matrices that convince both technical evaluators and finance heads."
      overviewPoints={[
        "Targeting low-volume, ultra-high-value commercial keywords that competitors overlook",
        "Structuring product catalogs and technical data sheets for crawlability",
        "Capturing RFP, RFQ, and enterprise supplier search queries"
      ]}
      features={[
        { title: "Commercial Intent Keyword Discovery", desc: "Unearthing specialized part numbers, enterprise software terms, and industrial procurement keywords." },
        { title: "Technical Content Architecture", desc: "Authoring deep industry whitepapers, regulatory compliance breakdowns, and ROI calculators." },
        { title: "Account-Based Search Positioning", desc: "Aligning organic search presence with target enterprise account lists and key vertical industries." },
        { title: "Specification & Catalog Optimization", desc: "Making engineering catalogs, CAD files, and technical datasheets discoverable to design engineers." },
        { title: "High-Authority B2B Digital PR", desc: "Placing guest analyses in respected trade publications and engineering journals." },
        { title: "CRM & Pipeline Attribution", desc: "Connecting Google Search Console data directly to Salesforce/HubSpot to measure closed-won revenue." }
      ]}
      faqs={[
        { q: "How is B2B SEO different from consumer B2C SEO?", a: "B2C SEO relies on massive search volume and rapid purchase decisions. B2B SEO targets narrow, high-value keyword niches where a single inbound enterprise contract can be worth crores." },
        { q: "Can B2B SEO generate actual RFQs rather than just blog readers?", a: "Yes. By optimizing bottom-of-funnel service pages, specification sheets, and vendor comparison matrices with prominent RFQ request forms, we convert senior decision-makers directly." }
      ]}
    />
  );
}
