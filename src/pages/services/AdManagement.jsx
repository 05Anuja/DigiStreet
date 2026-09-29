import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function AdManagement() {
  return (
    <ServicePageTemplate
      badge="Paid Media Buying"
      title="Digital Ad Management Agency in India"
      subtitle="Large-Scale Media Buying, Search Advertising, Display Marketing & Product Listing Ads (PLAs)"
      description="Maximize the efficiency of every rupee or dollar spent on advertising. We plan, execute, and continuously optimize multi-million media buying budgets across programmatic, search, social, and video networks."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Ad Management" },
      ]}
      stats={[
        { value: "₹50Cr+", label: "Ad Budgets Stewarded" },
        { value: "-30%", label: "Average CPL Reduction" },
        { value: "100%", label: "Transparent Fee Structure" },
        { value: "Multi-Platform", label: "Google, Meta, Amazon, Native" },
      ]}
      overviewTitle="Strategic Capital Allocation Across High-Yield Ad Channels"
      overviewText="Effective ad management isn't just about turning campaigns on; it's about dynamic capital allocation. We continuously shift ad budgets toward the highest-performing audiences, keywords, and geographic regions based on real-time margin and pipeline data."
      overviewPoints={[
        "Strategic media planning matching target demographic consumption patterns with optimal ad formats",
        "Rigorous A/B testing of bidding strategies (tCPA, tROAS, Max Conversions, Manual CPC)",
        "Zero hidden markups—clients retain direct ownership and visibility of their ad accounts",
      ]}
      features={[
        {
          title: "Search Advertising (Google & Bing)",
          desc: "Capturing high-intent users at the decision stage with tightly themed ad groups and responsive search ads.",
        },
        {
          title: "Display & Programmatic Advertising",
          desc: "Building brand reach and retargeting engaged visitors across top news websites and contextual apps.",
        },
        {
          title: "Product Listing Ads (PLAs & Google Shopping)",
          desc: "Optimizing product title feeds, high-resolution imagery, and negative keyword filtering for eCommerce scale.",
        },
        {
          title: "YouTube Video Advertising",
          desc: "Non-skippable bumper ads, in-stream skippable commercials, and direct-response video action campaigns.",
        },
        {
          title: "Lead-Based Performance Campaigns",
          desc: "Generating verified phone numbers and business emails with custom landing pages and native lead gen forms.",
        },
        {
          title: "Cross-Device Attribution Modeling",
          desc: "Understanding the true customer journey across desktop, mobile, and offline conversions.",
        },
      ]}
      faqs={[
        {
          q: "Do you own our ad accounts or do we?",
          a: "You always retain 100% ownership and direct billing of all your ad accounts (Google Ads, Meta Business Manager, LinkedIn). Silgate operates as an authorized agency partner.",
        },
      ]}
    />
  );
}
