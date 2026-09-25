import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function InternationalSingapore() {
  return (
    <LocationPageTemplate
      cityName="Singapore"
      badge="Southeast Asia Regional HQ"
      title="Digital Marketing Agency in Singapore | DigiStreet Media"
      subtitle="ASEAN Digital Expansion, FinTech Lead Gen, Technical SEO & Performance Marketing in Marina Bay & Raffles Place"
      description="DigiStreet Media serves Singapore's premier financial institutions, technology startups, regional corporate headquarters, and luxury hospitality brands looking to scale across Southeast Asia."
      breadcrumbs={[
        { label: 'International', link: '/services' },
        { label: 'Singapore' }
      ]}
      officeAddress="Marina Bay Financial Centre & Raffles Place, Singapore 018981"
      stats={[
        { value: "SGD 40M+", label: "Regional Pipeline" },
        { value: "4.9★", label: "Client Satisfaction" },
        { value: "14+", label: "Years Experience" },
        { value: "ASEAN", label: "Multi-Market Reach" }
      ]}
      localInsightsTitle="Scaling Across Southeast Asia from the Lion City"
      localInsightsText="Singapore acts as the primary gateway to Southeast Asia's 650+ million digital consumers. Winning in Singapore requires high technical sophistication, clear data governance, and multi-country operational efficiency."
      services={[
        { title: "ASEAN Multi-Country SEO & Localization", desc: "Coordinating multi-market SEO across Singapore, Malaysia, Indonesia, and the Philippines with proper hreflang and localized content." },
        { title: "FinTech & B2B Customer Acquisition", desc: "Rigorous compliance-friendly lead generation for wealthtech, payments, and enterprise software companies." },
        { title: "High-ROAS Google & Meta Advertising", desc: "Laser-targeted paid media campaigns optimized for Singapore's high-spending urban population." },
        { title: "Corporate Web Architecture & Modern Apps", desc: "Lightning-fast, highly secure web applications tailored to regional corporate governance requirements." }
      ]}
      faqs={[
        { q: "How do you manage multi-country campaigns from Singapore?", a: "We build centralized growth strategies from Singapore and deploy localized media and language variants across ASEAN target markets." },
        { q: "What is your turnaround time for launching campaigns?", a: "Our agile sprint model enables full technical audit and campaign launch within 10 to 14 business days." }
      ]}
    />
  );
}
