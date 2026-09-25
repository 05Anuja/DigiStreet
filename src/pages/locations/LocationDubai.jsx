import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function LocationDubai() {
  return (
    <LocationPageTemplate
      cityName="Dubai, UAE"
      badge="Middle East Commercial Hub"
      title="Digital Marketing & Performance Agency in Dubai | DigiStreet Media"
      subtitle="Bespoke Luxury Branding, High-Net-Worth Lead Generation, Influencer Management & Multilingual Paid Media across UAE & GCC"
      description="DigiStreet Media helps premium real estate developers, hospitality groups, luxury lifestyle brands, and fintech innovators across Dubai, Abu Dhabi, and the GCC dominate digital channels and acquire high-value clients."
      breadcrumbs={[
        { label: 'International', link: '/services' },
        { label: 'Dubai & UAE' }
      ]}
      officeAddress="Business Bay & Downtown Dubai, United Arab Emirates"
      stats={[
        { value: "AED 50M+", label: "Client Revenue Generated" },
        { value: "4.9★", label: "GCC Client Satisfaction" },
        { value: "14+", label: "Years Digital Excellence" },
        { value: "Top 20", label: "Silicon India Awarded" }
      ]}
      localInsightsTitle="Navigating the High-Stakes UAE & GCC Digital Landscape"
      localInsightsText="Dubai is the undisputed commercial crossroads of the world. Engaging affluent consumers and corporate executives across the Emirates requires impeccable visual elegance, Arabic-English bilingual fluency, and sophisticated programmatic targeting."
      services={[
        { title: "Ultra-Luxury Real Estate Lead Generation", desc: "Generating high-intent global investor leads for off-plan and waterfront luxury developments in Palm Jumeirah, Downtown, and Dubai Marina." },
        { title: "Bilingual Arabic & English Performance Marketing", desc: "Precision campaigns on Snapchat, TikTok, Instagram, and Google Search culturally tailored for Emirati and expat demographics." },
        { title: "GCC Influencer & Creator Activations", desc: "Curating verified regional creators and lifestyle influencers to drive authentic brand adoption and immediate social buzz." },
        { title: "Middle East Corporate SEO & Reputation Management", desc: "Protecting executive reputations and dominating localized regional search engines across UAE, Saudi Arabia, and Qatar." }
      ]}
      faqs={[
        { q: "Do you run campaigns in both Arabic and English?", a: "Yes. Our creative and copywriting teams develop native, culturally nuanced content in both Modern Standard Arabic (MSA) / Khaleeji Arabic and English." },
        { q: "How do you generate verified leads for Dubai real estate developers?", a: "We combine high-converting video creative, meta instant forms with strict qualifying questions, and automated CRM integrations to filter and deliver genuine high-net-worth investors." }
      ]}
    />
  );
}
