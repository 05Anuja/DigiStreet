import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function FinancialServices() {
  return (
    <IndustryPageTemplate
      industryName="Financial Services"
      badge="BFSI Practice"
      title="Digital Marketing for Financial Services & FinTech"
      subtitle="Scaling Wealth Management, Lending Apps, InsurTech Platforms & Investment Portals"
      description="In banking, financial services, and insurance (BFSI), security and credibility are the only currency. We build regulatory-compliant customer acquisition engines that earn trust and convert high-value accounts."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Financial Services' }
      ]}
      stats={[
        { value: "₹500Cr+", label: "AUM Growth Influenced" },
        { value: "RBI & SEBI", label: "Strict Compliance Alignment" },
        { value: "-35%", label: "Customer Acquisition Cost" },
        { value: "Bank-Grade", label: "Security & Encryption" }
      ]}
      challenges={[
        { title: "Stringent Regulatory Oversight", desc: "Advertising financial products requires strict adherence to SEBI, RBI, and IRDAI disclosure and disclaimer mandates." },
        { title: "Intense Customer Trust Barriers", desc: "Users are intensely cautious before connecting bank accounts or investing hard-earned capital on digital platforms." },
        { title: "High Drop-Off at KYC Stages", desc: "Friction during document uploads and Aadhaar/PAN verification creates massive drop-offs without real-time assistance." }
      ]}
      solutions={[
        { title: "Frictionless Onboarding Funnel UX", desc: "Streamlining digital KYC and account registration down to under 3 minutes with real-time field validation." },
        { title: "Financial Literacy Video Explainers", desc: "Breaking down complex investment vehicles, tax advantages, and compound returns into simple animations." },
        { title: "High-Intent Financial Query SEO", desc: "Ranking #1 for high-volume commercial searches like 'best portfolio management services', 'SME term loans', and 'health cover'." },
        { title: "Retargeting KYC Drop-Offs via WhatsApp", desc: "Triggering automated assistance messages to users who paused during document verification." }
      ]}
      caseStudyTitle="Scaling Mutual Fund SIP Registrations by 420%"
      caseStudyDesc="Redesigned the onboarding portal and deployed intent-driven Google and YouTube ads for a leading wealth-tech platform."
      caseStudyMetrics={[
        { value: "85,000+", label: "New Monthly SIP Accounts" },
        { value: "4.4x", label: "Return on Media Spend" },
        { value: "92%", label: "KYC Completion Rate" },
        { value: "Top 3", label: "Organic Search Ranking" }
      ]}
      faqs={[
        { q: "How do you ensure our marketing campaigns comply with SEBI and RBI regulations?", a: "Every creative asset, landing page disclaimer, and risk disclosure statement is vetted against the latest SEBI, RBI, and ASAI advertising codes before launching." }
      ]}
    />
  );
}
