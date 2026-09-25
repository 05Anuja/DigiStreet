import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function InternationalUSA({ city = "United States" }) {
  const isSF = city.toLowerCase().includes("francisco");
  const isNY = city.toLowerCase().includes("york");

  const title = isSF 
    ? "San Francisco Digital Marketing Agency | DigiStreet"
    : isNY 
    ? "SEO Services & Digital Agency in New York | DigiStreet" 
    : "USA Digital Marketing Agency | Global Growth Partner | DigiStreet";

  const subtitle = isSF 
    ? "Full-Stack Tech Marketing, Venture-Backed Scale, Generative AI Search & Performance Ads in Silicon Valley"
    : isNY 
    ? "Wall Street Standard SEO, Luxury E-Commerce Media, PR & Web Design in Manhattan"
    : "Enterprise SEO, High-ROAS Paid Acquisition, Content Creation & Web Engineering Across North America";

  return (
    <LocationPageTemplate
      cityName={city}
      badge="North America Hub"
      title={title}
      subtitle={subtitle}
      description="DigiStreet Media delivers elite digital marketing, technical SEO, generative search optimization (GEO), and high-converting creative services to American brands, enterprise leaders, and Silicon Valley disruptors."
      breadcrumbs={[
        { label: 'International', link: '/services' },
        { label: city }
      ]}
      officeAddress="575 Market St, San Francisco, CA & Broadway, New York, NY 10006, United States"
      stats={[
        { value: "$120M+", label: "Client Pipeline Value" },
        { value: "4.9★", label: "US Client Rating" },
        { value: "14+", label: "Years Global Delivery" },
        { value: "Top 20", label: "Silicon India Awarded" }
      ]}
      localInsightsTitle="Helping US Brands Scale Faster With Agile Global Delivery"
      localInsightsText="American businesses face sky-high domestic agency fees and fragmented deliverables. DigiStreet bridges high-level strategic direction with a world-class global execution engine, delivering 3x higher velocity at a fraction of standard US agency retainers."
      services={[
        { title: "Enterprise Technical SEO & Programmatic Content", desc: "Outranking competitive US search landscapes with comprehensive technical audits, schema implementation, and high-authority digital PR." },
        { title: "AEO & Generative Engine Optimization (GEO)", desc: "Securing primary citation and recommendation in ChatGPT, Perplexity, and Google AI Overviews for US enterprise buyers." },
        { title: "High-ROAS Google & Meta Media Buying", desc: "Disciplined performance marketing with rigorous attribution, custom landing page funnels, and creative variant testing." },
        { title: "Bespoke Web Design & Headless Development", desc: "Ultra-fast Next.js/React websites and Shopify Plus custom builds engineered for peak US consumer conversion rates." }
      ]}
      faqs={[
        { q: "How does DigiStreet handle time zone collaboration with US clients?", a: "We maintain dedicated US-aligned account managers and daily overlap hours across Pacific (PST) and Eastern (EST) time zones, ensuring rapid responses and seamless sprint execution." },
        { q: "How do your pricing models compare to domestic US digital agencies?", a: "By combining US-based strategic leadership with an offshore delivery powerhouse, our clients typically enjoy 40% to 60% lower costs while achieving twice the execution output." }
      ]}
    />
  );
}
