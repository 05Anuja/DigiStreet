import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function InfluencerMarketing() {
  return (
    <ServicePageTemplate
      badge="Creator Partnerships"
      title="Influencer Marketing Agency in India"
      subtitle="Strategic Creator Collaborations, Viral Social Campaigns, and Performance-Driven Influencer Funnels"
      description="Connect your brand with authentic creators who already hold the trust and attention of your target audience. We handle creator discovery, contractual management, creative briefs, and ROI tracking."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Influencer Marketing Agency" },
      ]}
      stats={[
        { value: "2,500+", label: "Vetted Creator Network" },
        { value: "150M+", label: "Campaign Impressions" },
        { value: "3.8x", label: "Average Influencer ROAS" },
        { value: "100%", label: "Brand Safety Guaranteed" },
      ]}
      overviewTitle="Influencer Marketing That Actually Drives Revenue"
      overviewText="Influencer marketing has evolved beyond paid selfies. At Silgate, we build creator campaigns designed to achieve measurable business outcomes. We analyze creator engagement quality, audience demographics, fake follower ratios, and historical conversion performance before recommending any talent."
      overviewPoints={[
        "Nano, micro, macro, and celebrity influencer curation tailored to your target niche",
        "Rigorous contracts guaranteeing deliverable quality, revision rights, and usage licensing for paid ads",
        "Performance tracking via custom UTM parameters, unique discount promo codes, and dedicated landing pages",
      ]}
      features={[
        {
          title: "Creator Discovery & Audience Vetting",
          desc: "Auditing follower demographics, engagement integrity, comment sentiment, and previous brand collaborations.",
        },
        {
          title: "Creative Brief & Narrative Direction",
          desc: "Crafting structured yet natural creative briefs that preserve the creator's genuine voice while highlighting key USPs.",
        },
        {
          title: "Contract Negotiation & Rights Management",
          desc: "Drafting ironclad legal agreements covering deliverable schedules, exclusivity clauses, and digital ad usage rights.",
        },
        {
          title: "Whitelisting & Paid Creator Licensing",
          desc: "Running paid ads directly through creator social handles to supercharge conversion rates and social proof.",
        },
        {
          title: "Product Gifting & Seeding Sprints",
          desc: "Orchestrating unboxing gifting experiences to hundreds of relevant micro-influencers for authentic organic reach.",
        },
        {
          title: "Attribution & Sales Tracking",
          desc: "Providing granular post-campaign reporting detailing cost per engagement (CPE), CTR, and attributed order revenue.",
        },
      ]}
      faqs={[
        {
          q: "Do you work with micro-influencers or only celebrities?",
          a: "We work across the entire creator spectrum. In fact, targeted micro and nano-influencer cohorts often deliver 2-3x higher engagement and conversion rates compared to celebrity endorsements at a fraction of the cost.",
        },
      ]}
    />
  );
}
