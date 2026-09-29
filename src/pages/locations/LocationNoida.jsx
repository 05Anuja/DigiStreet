import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function LocationNoida() {
  return (
    <LocationPageTemplate
      cityName="Noida"
      badge="Global Headquarters"
      title="Digital Marketing Agency in Noida | SEO & Creative Company"
      subtitle="Full-Service Marcom, High-Performance Paid Ads, Brand Design & Website Engineering"
      description="Headquartered in Express Trade Tower 2, Sector 132, Noida, DigiStreet Media is Noida's premier full-service digital marketing agency. We partner with tech innovators, manufacturing leaders, and real estate developers across Greater Noida and Noida Expressway."
      breadcrumbs={[
        { label: "Locations", link: "/services" },
        { label: "Noida (HQ)" },
      ]}
      officeAddress="Express Trade Tower 2, B-36, Sector 132, Noida, Uttar Pradesh 201301"
      stats={[
        { value: "HQ", label: "Noida Sector 132 Campus" },
        { value: "50+", label: "In-House Specialists" },
        { value: "14+", label: "Years in Noida" },
        { value: "Top Rated", label: "Agency in UP & NCR" },
      ]}
      localInsightsTitle="The Digital Heart of Noida Expressway"
      localInsightsText="Noida has emerged as North India's premier tech, real estate, and manufacturing corridor. DigiStreet's 14-year headquarters on the Noida Expressway anchors our deep relationships with enterprise builders, industrial parks, and high-growth IT corridors."
      services={[
        {
          title: "SEO Services in Noida",
          desc: "Dominating local 3-pack maps and organic search for Noida-based enterprises, factories, and clinics.",
        },
        {
          title: "Social Media Agency in Noida",
          desc: "Creative storytelling, video reels, and brand activations filmed directly from our Noida studio.",
        },
        {
          title: "Website Design & Development Noida",
          desc: "High-speed corporate portals and eCommerce stores engineered with modern React and clean code.",
        },
        {
          title: "Performance Marketing & PPC",
          desc: "Maximizing ROAS across Meta, Google, and LinkedIn for Noida real estate and industrial brands.",
        },
      ]}
      faqs={[
        {
          q: "Where is your Noida office located?",
          a: "Our headquarters is located at Express Trade Tower 2, B-36, Sector 132, right on the Noida-Greater Noida Expressway.",
        },
      ]}
    />
  );
}
