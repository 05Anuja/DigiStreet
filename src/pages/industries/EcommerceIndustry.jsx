import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function EcommerceIndustry() {
  return (
    <IndustryPageTemplate
      industryName="E-Commerce & D2C"
      badge="eCommerce Practice"
      title="E-Commerce Digital Marketing Agency in India"
      subtitle="Scaling Shopify Stores, Multi-Channel Performance Marketing, Retention Funnels & Marketplace Ads"
      description="Scale your online revenue with data-driven customer acquisition and retention. We design high-converting storefronts, optimize product feeds, execute high-ROAS Meta and Google ads, and build automated retention engines."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'E-Commerce Marketing' }
      ]}
      stats={[
        { value: "₹100Cr+", label: "eCommerce GMV Generated" },
        { value: "4.8x", label: "Average Blended ROAS" },
        { value: "-25%", label: "Cart Abandonment Drop" },
        { value: "Shopify Plus", label: "Certified Partner" }
      ]}
      challenges={[
        { title: "Rising Customer Acquisition Costs", desc: "First-purchase profitability has become increasingly difficult without immediate post-purchase upsells and email retention." },
        { title: "High Cart Abandonment Rates", desc: "Over 70% of shoppers add products to their carts but bounce due to unexpected shipping fees, slow load times, or complicated checkouts." },
        { title: "Return to Origin (RTO) in India", desc: "High Cash-on-Delivery (COD) refusal rates destroy margins for Indian D2C brands without automated address verification." }
      ]}
      solutions={[
        { title: "High-ROAS Meta Advantage+ Campaigns", desc: "Scaling catalog sales and dynamic product ads (DPAs) with broad audience targeting powered by server-side CAPI." },
        { title: "Google Performance Max & Merchant Center", desc: "Automating product title optimization and negative keyword exclusions to capture active product shoppers." },
        { title: "Automated RTO Reduction Workflows", desc: "Incentivizing prepaid UPI checkouts with instant discounts and confirming COD orders via automated WhatsApp bots." },
        { title: "Klaviyo Email & SMS Lifecycle Marketing", desc: "Deploying high-converting abandoned cart, welcome series, VIP loyalty, and win-back email automations." }
      ]}
      caseStudyTitle="Scaling a D2C Fashion Brand from ₹20L to ₹1.5Cr Monthly Revenue"
      caseStudyDesc="Rebuilt headless Shopify store, implemented server-side CAPI tracking, and deployed viral UGC creator reels."
      caseStudyMetrics={[
        { value: "7.5x", label: "Monthly Revenue Growth" },
        { value: "5.1x", label: "Blended Meta & Google ROAS" },
        { value: "-38%", label: "Customer Acquisition Cost" },
        { value: "42%", label: "Repeat Customer Rate" }
      ]}
      faqs={[
        { q: "How do you help reduce Cash-on-Delivery (COD) RTO rates in India?", a: "We integrate automated WhatsApp order confirmation bots, verify pincode deliverability against courier APIs, and offer instant 5-10% prepaid discounts at checkout to convert COD orders into prepaid." }
      ]}
    />
  );
}
