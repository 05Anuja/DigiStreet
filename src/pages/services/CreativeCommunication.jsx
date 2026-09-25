import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function CreativeCommunication() {
  return (
    <ServicePageTemplate
      badge="Brand & Visual Identity"
      title="Creative & Communication Agency in India"
      subtitle="Brand Strategy, Logo Identity, Packaging Architecture & Memorable Advertising Collateral"
      description="Brand communication is the soul of your enterprise. We distill your core mission into unforgettable visual identities, packaging design, and marketing narratives that win hearts and outshine competitors."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'Creative & Communication' }
      ]}
      stats={[
        { value: "360°", label: "Brand Strategy to Packaging" },
        { value: "200+", label: "Brand Identities Created" },
        { value: "Iconic", label: "Award-Winning Creative Craft" },
        { value: "Retail Ready", label: "Compliant Packaging" }
      ]}
      overviewTitle="Building Enduring Brand Equity"
      overviewText="Great design isn't just decoration—it is commercial leverage. When your brand communicates with clarity, distinctive visual codes, and emotional resonance, price sensitivity evaporates and customer loyalty compounds."
      overviewPoints={[
        "Comprehensive brand discovery: brand positioning, customer personas, and competitive differentiation",
        "Visual identity systems: logos, typography scales, brand color theories, and comprehensive brand books",
        "Packaging and retail shelf design adhering to global FDA and international compliance guidelines"
      ]}
      features={[
        { title: "Brand Strategy & Positioning", desc: "Defining your unique value proposition, brand archetype, tone of voice, and long-term brand narrative." },
        { title: "Logo & Visual Identity Design", desc: "Crafting iconic, timeless logos, color palettes, typography guidelines, and digital brand style guides." },
        { title: "Product Packaging & Label Design", desc: "Designing eye-catching cartons, bottles, and pouches engineered to dominate physical retail shelves and unboxing videos." },
        { title: "Brochures & Enterprise Presentations", desc: "Bespoke pitch decks, investor prospectuses, and sales collaterals that close enterprise deals." },
        { title: "Print & Out-of-Home (OOH) Advertising", desc: "Billboard layouts, newspaper full-page spreads, and airport digital signage designed for high impact at speed." },
        { title: "Brand Architecture for Multi-Products", desc: "Structuring masterbrand, sub-brand, and product-line hierarchies for seamless enterprise expansion." }
      ]}
      faqs={[
        { q: "What deliverables are included in a full brand identity package?", a: "Our full brand identity packages include the primary and secondary logo suites, color palette specifications (Pantone, CMYK, RGB), typography licensing guidelines, iconography sets, stationery design, social media kits, and a comprehensive 50+ page Brand Guidelines Book." }
      ]}
    />
  );
}
