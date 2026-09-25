import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function InternationalAustralia() {
  return (
    <LocationPageTemplate
      cityName="Australia"
      badge="Asia-Pacific & ANZ Hub"
      title="Digital Marketing Agency in Australia | Sydney & Melbourne | DigiStreet"
      subtitle="Enterprise Search Engine Optimisation (SEO), High-ROAS Performance Marketing & Creative Video Production Down Under"
      description="DigiStreet Media partners with premier Australian enterprises, fast-growing eCommerce disruptors, and B2B pioneers across Sydney, Melbourne, Brisbane, and Perth to capture market leadership and unlock scalable growth."
      breadcrumbs={[
        { label: 'International', link: '/services' },
        { label: 'Australia' }
      ]}
      officeAddress="George Street, Sydney NSW 2000 & Collins Street, Melbourne VIC 3000, Australia"
      stats={[
        { value: "AUD 55M+", label: "Client Pipeline Generated" },
        { value: "4.8★", label: "Aussie Client Rating" },
        { value: "14+", label: "Years Digital Excellence" },
        { value: "Top 20", label: "Silicon India Awarded" }
      ]}
      localInsightsTitle="Conquering the Australian Digital Landscape"
      localInsightsText="Australian consumers and enterprise buyers value genuine transparency, high product quality, and straightforward value propositions. DigiStreet delivers data-led digital marketing that cuts through noise and delivers profitable client acquisition across Australia and New Zealand."
      services={[
        { title: "Technical SEO for Australian Search Engines", desc: "Outranking local competitors across Google.com.au with targeted local schema, technical audits, and authoritative ANZ backlink building." },
        { title: "E-Commerce ROAS Optimization", desc: "Scale Shopify Plus and WooCommerce stores across Melbourne and Sydney with full-funnel Meta, Google Shopping, and TikTok ads." },
        { title: "B2B Lead Generation for Aussie Tech & Mining", desc: "Precision account-based marketing and LinkedIn thought leadership targeting Australian corporate decision-makers." },
        { title: "Creative Video Production & Social Ads", desc: "High-engagement short-form video reels and brand ads designed to resonate with modern Australian audiences." }
      ]}
      faqs={[
        { q: "How do you work with clients across Australian time zones (AEST/AEDT)?", a: "We maintain dedicated APAC-aligned operational hours, ensuring live communication, daily reporting updates, and fast iteration cycles." },
        { q: "What industries does DigiStreet support in Australia?", a: "We actively support E-Commerce, Retail, SaaS & Technology, Mining & Resources, Real Estate, and Financial Services across Sydney, Melbourne, and Brisbane." }
      ]}
    />
  );
}
