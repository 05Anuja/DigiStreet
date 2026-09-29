import React from "react";
import LocationPageTemplate from "../../components/LocationPageTemplate";

export default function InternationalGulf({ country = "Saudi Arabia" }) {
  const isBahrain = country.toLowerCase().includes("bahrain");

  return (
    <LocationPageTemplate
      cityName={isBahrain ? "Bahrain" : "Saudi Arabia"}
      badge="Gulf Cooperation Council (GCC) Hub"
      title={
        isBahrain
          ? "Digital Marketing Agency in Bahrain | Silgate"
          : "Digital Marketing Agency in Saudi Arabia (KSA) | Silgate"
      }
      subtitle="Vision 2030 Aligned Digital Transformation, Arabic SEO, High-Value Lead Generation & Luxury Creative Campaigns across the Kingdom & GCC"
      description={`Silgate Media is the trusted growth partner for enterprise brands, government initiatives, retail groups, and industrial leaders across ${isBahrain ? "Bahrain" : "Riyadh, Jeddah, and the Kingdom of Saudi Arabia"}.`}
      breadcrumbs={[
        { label: "International", link: "/services" },
        { label: isBahrain ? "Bahrain" : "Saudi Arabia" },
      ]}
      officeAddress={
        isBahrain
          ? "Manama Financial Harbour, Kingdom of Bahrain"
          : "King Fahd Road, Riyadh & Al Andalus, Jeddah, Kingdom of Saudi Arabia"
      }
      stats={[
        { value: "SAR 80M+", label: "Client Revenue Generated" },
        { value: "98%", label: "Client Retention Rate" },
        { value: "14+", label: "Years Digital Leadership" },
        { value: "Vision 2030", label: "Aligned Strategies" },
      ]}
      localInsightsTitle={`Capitalizing on the Historic Economic Transformation in ${isBahrain ? "Bahrain" : "Saudi Arabia"}`}
      localInsightsText={`With massive diversification under Vision 2030, ${isBahrain ? "Bahrain and the GCC" : "Saudi Arabia"} represent the world's most dynamic investment environment. Brands entering or expanding in this market require high-prestige creative storytelling, deep cultural reverence, and bilingual Arabic-English precision.`}
      services={[
        {
          title: "Native Arabic SEO & Search Engine Authority",
          desc: "Dominating Arabic search queries across Google.com.sa with linguistically accurate keywords, structured data, and local citations.",
        },
        {
          title: "Snapchat, TikTok & Instagram Ad Dominance",
          desc: "Engineering high-engagement video ads on the GCC's most active social platforms, driving verified footfall and eCommerce revenue.",
        },
        {
          title: "High-Net-Worth Lead Generation & Real Estate",
          desc: "Generating qualified investors for mega-projects, luxury commercial developments, and private wealth offerings.",
        },
        {
          title: "Bespoke Arabic Brand Design & Identity",
          desc: "Crafting luxurious bilingual Arabic typography, packaging, and digital assets that convey prestige and regional heritage.",
        },
      ]}
      faqs={[
        {
          q: "Do you have native Arabic copywriters and creative directors?",
          a: "Yes. All creative concepts, ad copy, and search strategies are crafted by native Arabic copywriters with deep understanding of local dialects and cultural nuances.",
        },
        {
          q: "How do you align with Saudi Vision 2030 initiatives?",
          a: "We work with private and semi-governmental entities across tourism, entertainment, fintech, and manufacturing to deliver modern, internationally benchmarked digital campaigns.",
        },
      ]}
    />
  );
}
