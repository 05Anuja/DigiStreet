import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function FoodBeverage() {
  return (
    <IndustryPageTemplate
      industryName="Food & Beverage"
      badge="FMCG & F&B Practice"
      title="Digital Marketing Agency for Food & Beverage"
      subtitle="Scaling Packaged Goods, Gourmet D2C Brands, Restaurant Chains & Cloud Kitchens"
      description="In food and beverage, appetite appeal and shelf recall are everything. We create mouth-watering food photography, viral culinary reels, retail packaging design, and omnichannel retail distribution funnels."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Food & Beverage Marketing' }
      ]}
      stats={[
        { value: "5M+", label: "FMCG Packets Sold" },
        { value: "4.5x", label: "Average D2C Grocery ROAS" },
        { value: "Blinkit & Zepto", label: "Quick-Commerce Ad Mastery" },
        { value: "Full-Stack", label: "Packaging to Performance" }
      ]}
      challenges={[
        { title: "Low Order Margin Economics", desc: "Packaged foods require high repeat subscription order frequency and multi-pack bundle strategies to offset advertising CAC." },
        { title: "Physical vs. Digital Cannibalization", desc: "Brands must balance direct D2C website sales with quick-commerce platforms (Blinkit, Zepto, Instamart) and modern trade shelves." },
        { title: "Short Shelf Life & Freshness Claims", desc: "Consumers require immediate reassurance regarding preservatives, sourcing ethics, and nutritional certifications." }
      ]}
      solutions={[
        { title: "Quick-Commerce Media & Ads", desc: "Optimizing in-app visibility, banner placements, and keyword bidding on Blinkit, Zepto, Swiggy Instamart, and Amazon Fresh." },
        { title: "Culinary Recipe Creator Videos", desc: "Partnering with top food vloggers crafting appetizing 30-second recipe reels featuring your hero ingredients." },
        { title: "Subscription & Repeat Order Funnels", desc: "Automating WhatsApp and SMS reorder reminders timed precisely to household consumption cycles." },
        { title: "Shelf Packaging & Label Architecture", desc: "Vibrant, compliant food packaging design that pops on crowded supermarket shelves and thumbnail images." }
      ]}
      caseStudyTitle="Launching a D2C Healthy Snack Brand to ₹15Cr Annual Run Rate"
      caseStudyDesc="Built custom Shopify storefront, executed influencer unboxing campaigns, and synchronized quick-commerce availability."
      caseStudyMetrics={[
        { value: "120,000+", label: "Monthly Repeat Orders" },
        { value: "4.8x", label: "Meta Ad Spend ROAS" },
        { value: "Top 3", label: "Snack Brand on Quick Commerce" },
        { value: "10,000+", label: "Offline Retail Touchpoints" }
      ]}
      faqs={[
        { q: "Can you help our food brand run ads on quick-commerce apps like Blinkit and Zepto?", a: "Yes. We manage end-to-end quick-commerce retail media campaigns, product listing optimization, and localized inventory push ads." }
      ]}
    />
  );
}
