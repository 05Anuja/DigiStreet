import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function BeautySkincare() {
  return (
    <IndustryPageTemplate
      industryName="Beauty & Skincare"
      badge="Beauty & Cosmetics Practice"
      title="Beauty & Skin Care Digital Marketing Agency in India"
      subtitle="Scaling D2C Cosmetics, Viral Skincare Reels, Packaging Compliance & US/UK Market Expansion"
      description="In an era of clean beauty and ingredient-conscious consumers, we combine scientific credibility with viral aesthetic storytelling to turn first-time cosmetic shoppers into loyal repeat subscribers."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Beauty & Skin Care' }
      ]}
      stats={[
        { value: "4.8x", label: "Average D2C Blended ROAS" },
        { value: "2M+", label: "Cosmetic Units Sold" },
        { value: "US & UK", label: "FDA Compliant Market Entry" },
        { value: "150+", label: "Beauty Creator Campaigns" }
      ]}
      challenges={[
        { title: "Escalating Customer Acquisition Costs", desc: "Meta ad auctions in beauty are hyper-competitive; brands without high lifetime value and rapid creative testing get crushed." },
        { title: "Strict International Label Compliance", desc: "Exporting Indian formulations to Sephora or US retail requires navigating MoCRA and cosmetic vs. drug claim regulations." },
        { title: "Consumer Ingredient Skepticism", desc: "Shoppers demand dermatological proof, clinical trial data, and authentic unfiltered video reviews before purchase." }
      ]}
      solutions={[
        { title: "Authentic UGC Video Hook Testing", desc: "Deploying 30+ creator video variations monthly highlighting real skin texture, morning routines, and visible results." },
        { title: "High-AOV Bundle Architecture", desc: "Designing 3-step skincare routine sets and subscription replenishment funnels boosting cart value." },
        { title: "Dermatologist-Approved Clinical Content", desc: "Creating scientific explainer graphics breaking down peptides, niacinamide, and retinol percentages." },
        { title: "Retail Packaging & Carton Redesign", desc: "End-to-end shelf packaging engineered to pass US FDA compliance and win prime eye-level retail positioning." }
      ]}
      caseStudyTitle="From D2C Cult Favorite to US Retail Shelves"
      caseStudyDesc="Helped an Indian organic skincare label reformulate packaging messaging, secure US FDA compliance, and scale online revenue."
      caseStudyMetrics={[
        { value: "4.6x", label: "eCommerce Revenue Lift" },
        { value: "32%", label: "Repeat Purchase Rate" },
        { value: "100%", label: "FDA Label Pass Rate" },
        { value: "300+", label: "Retail Doors Opened" }
      ]}
      faqs={[
        { q: "Can you help our beauty brand enter the US and European retail markets?", a: "Yes. We specialize in international market entry, MoCRA cosmetic compliance, retail carton packaging, and localized performance ad funnels." }
      ]}
    />
  );
}
