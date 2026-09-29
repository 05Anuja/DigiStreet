import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function PerformanceMarketing() {
  return (
    <ServicePageTemplate
      badge="Most Demanded"
      title="Performance Marketing Agency in India"
      subtitle="Scalable Paid Customer Acquisition Across Google, Meta, LinkedIn & Amazon Engineered for Maximum ROAS"
      description="Stop burning advertising capital on vanity clicks. We design, deploy, and scale high-velocity performance marketing funnels that predictably compound customer acquisition and revenue."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Performance Marketing" },
      ]}
      stats={[
        { value: "4.6x", label: "Average Blended ROAS" },
        { value: "₹50Cr+", label: "Ad Spend Managed" },
        { value: "-35%", label: "Average CAC Reduction" },
        { value: "100%", label: "First-Party CAPI Tracking" },
      ]}
      overviewTitle="Engineering Profitable Customer Acquisition Funnels"
      overviewText="Performance marketing at Silgate is an exact science. We eliminate guesswork through rigorous creative testing, high-converting dedicated landing pages, granular cohort segmentation, and advanced server-side tracking (CAPI) that bypasses browser ad blockers and iOS privacy restrictions."
      overviewPoints={[
        "Full-funnel media buying across Meta Ads, Google Ads (Search, PMax, YouTube), LinkedIn, and Programmatic",
        "Weekly creative production generating 20+ bespoke ad hooks, reels, and graphic iterations",
        "Landing page UX optimization engineered for minimum bounce and maximum lead conversion",
      ]}
      features={[
        {
          title: "Meta Ads (Facebook & Instagram)",
          desc: "High-converting dynamic product ads, video reels, and advantage+ campaigns scaled with precision lookalike audiences.",
        },
        {
          title: "Google Ads & Performance Max",
          desc: "Intent-driven Google Search, high-intent shopping feeds, and automated PMax campaigns capturing ready-to-buy consumers.",
        },
        {
          title: "LinkedIn B2B Lead Gen",
          desc: "Account-based targeting reaching verified decision-makers, CXOs, and VP-level buyers for high-ticket contracts.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          desc: "A/B testing headlines, offer structures, form fields, and trust badges on custom landing pages.",
        },
        {
          title: "First-Party Attribution & CAPI",
          desc: "Direct server-to-server tracking setups ensuring accurate data feedback into ad platform AI bidding algorithms.",
        },
        {
          title: "Retention & Retargeting Funnels",
          desc: "Multi-touch remarketing sequences addressing customer objections and driving repeat purchase frequency.",
        },
      ]}
      faqs={[
        {
          q: "What is your minimum budget requirement for performance marketing?",
          a: "We work with growth-stage startups and enterprise brands with monthly ad spend starting from ₹1,50,000 up to multi-crore enterprise allocations.",
        },
        {
          q: "How quickly do we see results from paid campaigns?",
          a: "Ad campaigns go live within 5 to 7 days of onboarding following creative production and tracking integration. Validated lead generation begins immediately.",
        },
      ]}
    />
  );
}
