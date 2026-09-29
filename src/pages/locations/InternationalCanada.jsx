import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function InternationalCanada({ city = "Canada" }) {
  const isToronto = city.toLowerCase().includes("toronto");

  return (
    <LocationPageTemplate
      cityName={isToronto ? "Toronto, ON" : "Canada"}
      badge="Canadian Operations Hub"
      title={
        isToronto
          ? "Toronto Digital Marketing Agency | DigiStreet"
          : "Canada Digital Marketing & SEO Agency | DigiStreet"
      }
      subtitle="Bilingual English-French Optimization, B2B Demand Gen, Performance Advertising & Web Engineering across the GTA & Nationally"
      description="DigiStreet Media is Canada's preferred growth partner for tech innovators in the Waterloo-Toronto tech corridor, retail brands, and industrial manufacturers seeking scalable North American dominance."
      breadcrumbs={[
        { label: "International", link: "/services" },
        { label: isToronto ? "Toronto, ON" : "Canada" },
      ]}
      officeAddress="King Street West, Downtown Toronto, ON M5V 1M7, Canada"
      stats={[
        { value: "CAD 60M+", label: "Client Revenue Generated" },
        { value: "4.9★", label: "Canadian Client Score" },
        { value: "14+", label: "Years Digital Leadership" },
        { value: "Top 20", label: "Silicon India Awarded" },
      ]}
      localInsightsTitle="Accelerating Market Expansion Across the Great White North"
      localInsightsText="From Toronto's booming tech and financial ecosystem to Vancouver's creative pulse and Montreal's multilingual commercial base, Canadian enterprises require agile digital execution that balances competitive US market dynamics with Canadian cultural affinity."
      services={[
        {
          title: "Cross-Border Canada-US SEO & Expansion",
          desc: "Positioning Canadian brands to capture market share both domestically across Google.ca and south of the border in the US market.",
        },
        {
          title: "B2B Tech Lead Generation in the GTA",
          desc: "Generating qualified demos and sales pipelines for enterprise SaaS, IT services, and commercial equipment companies.",
        },
        {
          title: "Multi-Platform Performance Paid Ads",
          desc: "High-return Google Ads, Meta Ads, and LinkedIn campaigns tailored for Canadian demographics and regional nuances.",
        },
        {
          title: "Modern Web Engineering & Headless eCommerce",
          desc: "Custom, ultra-fast web applications built on modern JavaScript stacks with Canadian payment gateway integrations.",
        },
      ]}
      faqs={[
        {
          q: "Do you support bilingual English and Canadian French campaigns?",
          a: "Yes, our team can execute localized marketing and SEO tailored for both nationwide English consumers and Quebec French audiences.",
        },
        {
          q: "Where is your team based in Canada?",
          a: "We have client relations based in Downtown Toronto, coordinating directly with our international technical and creative delivery hubs.",
        },
      ]}
    />
  );
}
