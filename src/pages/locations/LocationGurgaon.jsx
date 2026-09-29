import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function LocationGurgaon() {
  return (
    <LocationPageTemplate
      cityName="Gurgaon (Gurugram)"
      badge="Millennium City Tech Hub"
      title="Digital Marketing & Social Media Agency in Gurgaon | Silgate"
      subtitle="Data-Led Performance Marketing, Social Media Creative, Brand Storytelling & B2B Growth Engines in Cyber City"
      description="Silgate Media is Gurgaon's trusted digital powerhouse, serving Fortune 500 corporations, high-growth unicorn startups, and premier real estate developers across DLF CyberCity, Golf Course Road, and Udyog Vihar."
      breadcrumbs={[
        { label: "Locations", link: "/services" },
        { label: "Gurgaon" },
      ]}
      officeAddress="Golf Course Extension Road & Cyber City Hub, Gurugram, Haryana 122002"
      stats={[
        { value: "300+", label: "Unicorns & Corporates" },
        { value: "4.8x", label: "Average B2B Pipeline Growth" },
        { value: "14+", label: "Years Serving Gurgaon" },
        { value: "Top 20", label: "Silicon India Awarded" },
      ]}
      localInsightsTitle="Accelerating Enterprise & Tech Growth in Cyber City"
      localInsightsText="Gurgaon represents India's nexus of global corporate enterprises and disruptive SaaS ventures. In an ecosystem where high-ticket decision-makers command the market, generic marketing fails. We engineer enterprise-grade multi-channel ABM campaigns, high-impact founder branding, and algorithmic paid search."
      services={[
        {
          title: "B2B Performance & Account-Based Marketing (ABM)",
          desc: "Hyper-targeted LinkedIn, Google Search, and programmatic advertising campaigns targeting enterprise C-suite executives in CyberCity and Udyog Vihar.",
        },
        {
          title: "Social Media & Thought Leadership",
          desc: "Crafting viral founder brands, executive personal branding, and compelling social storytelling that establishes enterprise authority.",
        },
        {
          title: "High-Ticket Real Estate & Luxury Marketing",
          desc: "Generating verified, high-net-worth investor inquiries for luxury residential and commercial towers along Golf Course Road and Dwarka Expressway.",
        },
        {
          title: "Enterprise Technical SEO & AEO",
          desc: "Positioning tech and industrial brands at the top of Google Search and generative AI engines for high-intent enterprise keywords.",
        },
      ]}
      faqs={[
        {
          q: "Why choose Silgate for digital marketing in Gurgaon?",
          a: "With 14+ years of cross-industry expertise and deep proximity to Gurgaon's corporate corridor, Silgate provides agile strategy, direct senior director involvement, and verified ROI without bureaucratic agency overhead.",
        },
        {
          q: "How do you handle B2B lead generation for SaaS and enterprise firms in Gurgaon?",
          a: "We integrate rigorous account-based marketing (ABM), Google search intent harvesting, LinkedIn thought leadership, and custom landing page optimization to deliver high-quality, sales-qualified leads.",
        },
      ]}
    />
  );
}
