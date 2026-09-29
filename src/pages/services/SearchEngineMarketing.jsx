import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function SearchEngineMarketing() {
  return (
    <ServicePageTemplate
      badge="Search Engine Marketing"
      title="Search Engine Marketing (SEM) Agency in India"
      subtitle="Unified Organic SEO & Paid Google Search Advertising for Complete Search Engine Dominance"
      description="Why choose between organic and paid search when you can dominate both? We combine forensic SEO technical architecture with laser-targeted Google Ads search campaigns to capture maximum search share."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Search Engine Marketing" },
      ]}
      stats={[
        { value: "Dual", label: "SEO + PPC Unified Strategy" },
        { value: "Top 3", label: "Paid & Organic Placements" },
        { value: "5.2x", label: "Blended Return on Investment" },
        { value: "14+", label: "Years Search Engine Mastery" },
      ]}
      overviewTitle="Dominating the Entire Search Engine Results Page"
      overviewText="Search Engine Marketing at Silgate combines the immediate traffic generation of Google Paid Ads with the compounding long-term equity of Organic SEO. We synchronize search queries across both channels so you never overpay for terms where you already rank organically, and double-down on commercial high-intent terms."
      overviewPoints={[
        "Total SERP ownership capturing both paid top sponsored positions and organic rank #1",
        "Keyword synergy sharing high-converting search query data between SEO and PPC teams",
        "Landing page optimization engineered to lower Google Quality Score costs and boost organic engagement",
      ]}
      features={[
        {
          title: "Google Search Ads Management",
          desc: "Precision bidding on high-converting keywords with manual negative sculpting and real-time bid adjustments.",
        },
        {
          title: "Organic Technical SEO",
          desc: "Comprehensive site architecture optimization, schema markup, and topical authority building.",
        },
        {
          title: "eCommerce Shopping Ads & Feeds",
          desc: "Optimizing Google Merchant Center feeds and product listing ads (PLAs) for maximum eCommerce sales.",
        },
        {
          title: "Competitor Search Interception",
          desc: "Legally bidding on competitor brand keywords and creating transparent comparison landing pages.",
        },
        {
          title: "Remarketing Lists for Search (RLSA)",
          desc: "Tailoring search bids and messaging for prospective customers who have already visited your site.",
        },
        {
          title: "Unified Attribution Dashboards",
          desc: "Clear reporting displaying blended CAC, organic conversion share, and paid ROAS in a single view.",
        },
      ]}
      faqs={[
        {
          q: "Should I invest in SEO or Google Ads first?",
          a: "We recommend an integrated approach: Paid search delivers immediate leads and validates which keywords actually convert, while organic SEO builds long-term sustainable authority that lowers your blended customer acquisition cost.",
        },
      ]}
    />
  );
}
