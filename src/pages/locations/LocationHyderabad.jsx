import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function LocationHyderabad() {
  return (
    <LocationPageTemplate
      cityName="Hyderabad"
      badge="HITEC City Tech & Pharma Capital"
      title="Top Digital Marketing & SEO Agency in Hyderabad | DigiStreet"
      subtitle="Enterprise B2B Lead Generation, Life Sciences & Pharma Marketing, Real Estate Dominance & Web Development in Cyberabad"
      description="DigiStreet Media drives market leadership for Hyderabad's global technology powerhouses, pharmaceutical manufacturers, healthcare institutions, and premier real estate developers in HITEC City, Gachibowli, and Financial District."
      breadcrumbs={[
        { label: "Locations", link: "/services" },
        { label: "Hyderabad" },
      ]}
      officeAddress="HITEC City & Financial District, Hyderabad, Telangana 500081"
      stats={[
        { value: "#1", label: "Enterprise Tech Agency" },
        { value: "4.6x", label: "Pharma & B2B Pipeline Value" },
        { value: "14+", label: "Years Digital Leadership" },
        { value: "Top 20", label: "Silicon India Awarded" },
      ]}
      localInsightsTitle="Accelerating Enterprise Digital Transformation in Cyberabad"
      localInsightsText="With world-class infrastructure and global pharmaceutical and tech headquarters, Hyderabad requires a balance of institutional trust and modern digital agility. We create data-backed multi-channel campaigns that build global brand credibility."
      services={[
        {
          title: "Pharma, Biotech & Healthcare Digital Marketing",
          desc: "Patient acquisition, healthcare professional (HCP) educational campaigns, and HIPAA/regulatory-compliant digital media.",
        },
        {
          title: "Enterprise B2B Technology Demand Generation",
          desc: "Account-based marketing (ABM) and technical content funnels driving demo requests from global enterprise buyers.",
        },
        {
          title: "Real Estate & Commercial Development Marketing",
          desc: "Lead generation funnels and 3D architectural walkthrough video campaigns for luxury high-rises in Gachibowli and Kokapet.",
        },
        {
          title: "Corporate Web Applications & SEO",
          desc: "High-performance web applications, multilingual SEO, and online reputation management for Hyderabad's multinational enterprises.",
        },
      ]}
      faqs={[
        {
          q: "What distinguishes DigiStreet's work in Hyderabad?",
          a: "We combine deep technical rigor in SEO and performance media with world-class creative video production, uniquely suited for Hyderabad's tech and healthcare ecosystem.",
        },
        {
          q: "Can DigiStreet support international lead generation for Hyderabad exporters?",
          a: "Absolutely. We manage multi-region campaigns across North America, Europe, and the Middle East for Hyderabad exporters and IT services companies.",
        },
      ]}
    />
  );
}
