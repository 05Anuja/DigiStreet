import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function InternationalUK({ city = "United Kingdom" }) {
  const isLondon = city.toLowerCase().includes("london");

  return (
    <LocationPageTemplate
      cityName={isLondon ? "London, UK" : "United Kingdom"}
      badge="Europe & British Isles Hub"
      title={
        isLondon
          ? "Digital Marketing Agency in London | Silgate Media"
          : "UK Digital Marketing & SEO Agency | Silgate"
      }
      subtitle="B2B Demand Generation, Creative Brand Communication, Technical SEO & Performance Marketing in the City of London & Across Britain"
      description="Silgate Media partners with ambitious British brands, London FinTech innovators, luxury lifestyle retailers, and B2B enterprises to engineer predictable organic growth and measurable advertising ROI."
      breadcrumbs={[
        { label: "International", link: "/services" },
        { label: isLondon ? "London, UK" : "United Kingdom" },
      ]}
      officeAddress="Canary Wharf & Central London, EC2M 7PP, United Kingdom"
      stats={[
        { value: "£45M+", label: "UK Pipeline Driven" },
        { value: "4.8★", label: "British Client Rating" },
        { value: "14+", label: "Years Digital Track Record" },
        { value: "Top 20", label: "Silicon India Awarded" },
      ]}
      localInsightsTitle="Conquering the British & European Digital Marketplace"
      localInsightsText="From the financial boardrooms of the Square Mile and Canary Wharf to emerging tech startups in Shoreditch and Manchester, UK businesses demand intellectual rigour, clear return on investment, and refined creative communications."
      services={[
        {
          title: "UK & European SEO Strategy",
          desc: "Targeting high-intent commercial keywords across Google.co.uk with deep local schema, authoritative backlinks, and GDPR-compliant analytics.",
        },
        {
          title: "B2B Lead Generation & Account-Based Marketing",
          desc: "Connecting enterprise software, consulting, and industrial services with key decision-makers across London and EMEA.",
        },
        {
          title: "E-Commerce & High-Converting Paid Media",
          desc: "Omnichannel performance ad management across Google Ads, Meta, and TikTok optimized for UK consumer purchasing habits.",
        },
        {
          title: "Creative Brand Identity & Visual Design",
          desc: "Sophisticated brand identities, packaging, and digital collateral that appeal to discerning British aesthetics.",
        },
      ]}
      faqs={[
        {
          q: "Are your campaigns fully compliant with UK GDPR regulations?",
          a: "Yes, all data gathering, tracking pixels, forms, and analytical pipelines strictly adhere to UK GDPR and ICO privacy standards.",
        },
        {
          q: "How do we coordinate with the Silgate team from the UK?",
          a: "Our UK operations feature dedicated GMT/BST account managers and scheduled weekly video reviews, providing proactive communication and agile campaign updates.",
        },
      ]}
    />
  );
}
