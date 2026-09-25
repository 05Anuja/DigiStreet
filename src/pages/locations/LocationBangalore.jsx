import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function LocationBangalore() {
  return (
    <LocationPageTemplate
      cityName="Bangalore (Bengaluru)"
      badge="Silicon Valley of India"
      title="Performance Marketing & SEO Agency in Bangalore | DigiStreet"
      subtitle="Data-Obsessed Growth Marketing, SaaS Scale-Up Engines, Generative Engine Optimization (GEO) & Full-Stack Tech in Koramangala & Indiranagar"
      description="DigiStreet Media is Bangalore's strategic growth partner for venture-backed SaaS startups, deep-tech innovators, D2C brands, and multinational tech enterprises looking to scale profitably."
      breadcrumbs={[
        { label: 'Locations', link: '/services' },
        { label: 'Bangalore' }
      ]}
      officeAddress="Outer Ring Road, Koramangala & Indiranagar, Bengaluru, Karnataka 560034"
      stats={[
        { value: "400+", label: "Tech Brands Scaled" },
        { value: "320%", label: "Average MQL Growth" },
        { value: "14+", label: "Years Digital Mastery" },
        { value: "Top 20", label: "Silicon India Awarded" }
      ]}
      localInsightsTitle="Engineering Scalable Growth in India's High-Tech Capital"
      localInsightsText="Bangalore founders and product marketing leaders demand data accuracy, CAC-to-LTV efficiency, and rapid experimentation cycles. We replace vanity metrics with rigorous attribution models, programmatic SEO frameworks, and AI-enabled video workflows."
      services={[
        { title: "B2B SaaS Growth & Funnel Optimization", desc: "Full-funnel demand generation integrating product-led content, high-intent Google search capture, and programmatic retargeting." },
        { title: "Generative Engine Optimization (GEO) & AEO", desc: "Ensuring your software or platform is directly cited by ChatGPT Search, Google Gemini, and Perplexity when tech buyers research solutions." },
        { title: "Performance Paid Acquisition & CRO", desc: "Iterative testing across Meta, Google Search, LinkedIn, and YouTube with custom conversion-rate-optimized landing pages." },
        { title: "Tech Employer Branding & Culture Marketing", desc: "High-caliber video storytelling and recruitment marketing campaigns designed to attract top engineering and product talent." }
      ]}
      faqs={[
        { q: "How do you partner with venture-backed tech startups in Bangalore?", a: "We work alongside founders and growth teams to implement rapid-fire growth sprints, optimizing conversion rates and slashing customer acquisition costs (CAC) within 60 to 90 days." },
        { q: "Do you offer international expansion campaigns from Bangalore?", a: "Yes. Many of our Bangalore clients target the US, UK, and Middle East. We specialize in cross-border digital marketing, international SEO, and localized media buying." }
      ]}
    />
  );
}
