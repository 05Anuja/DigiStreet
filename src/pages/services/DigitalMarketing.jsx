import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function DigitalMarketing() {
  return (
    <ServicePageTemplate
      badge="Full-Service Retainer"
      title="Digital Marketing Agency in India"
      subtitle="360° Digital Campaigns, Business Analytics, Conversion Rate Optimization & Omnichannel Growth"
      description="Accelerate your enterprise with an integrated, full-funnel digital marketing engine. We harmonize brand creative, technical search engine dominance, high-ROAS paid acquisition, and web engineering under one synchronized team."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Digital Marketing" },
      ]}
      stats={[
        { value: "360°", label: "Unified Marketing Stack" },
        { value: "250+", label: "Brands Partnered" },
        { value: "14+", label: "Years Proven Excellence" },
        { value: "4.9/5", label: "Client Satisfaction Rating" },
      ]}
      overviewTitle="The Power of an Integrated 360° Marcom Engine"
      overviewText="Siloed marketing produces disjointed results. When your SEO team doesn't speak to your paid ad team, and your creative designers don't understand conversion psychology, budgets get wasted. Silgate delivers a unified digital growth machine where every component amplifies the others."
      overviewPoints={[
        "Single dedicated Account Director coordinating creative, paid ads, SEO, and web engineering",
        "Weekly sprint reviews, transparent live dashboards, and proactive strategic recommendations",
        "Agile reallocation of budgets and effort based on real-time market opportunities",
      ]}
      features={[
        {
          title: "360° Omnichannel Campaigns",
          desc: "Coordinated digital rollouts spanning organic search, paid social, creator activations, and PR announcements.",
        },
        {
          title: "Conversion Rate Optimization (CRO)",
          desc: "Systematic UI testing, heatmap analysis, and checkout funnel optimization turning more traffic into revenue.",
        },
        {
          title: "Business & Pipeline Analytics",
          desc: "Setting up custom Looker Studio dashboards tracking blended customer acquisition cost (CAC), LTV, and payback periods.",
        },
        {
          title: "eCommerce Scale Solutions",
          desc: "End-to-end catalog feeds, marketplace advertising, email automation (Klaviyo), and cart recovery workflows.",
        },
        {
          title: "B2B Demand Generation",
          desc: "Combining technical content with LinkedIn ads, whitepapers, and retargeting to drive enterprise sales qualified leads.",
        },
        {
          title: "Strategic Quarterly Roadmaps",
          desc: "Forward-looking business consulting identifying new channel opportunities before your competitors catch on.",
        },
      ]}
      faqs={[
        {
          q: "What does an integrated digital marketing retainer include?",
          a: "A full retainer includes dedicated hours across our creative designers, copywriters, performance media buyers, SEO analysts, and web developers, all orchestrated by your senior Account Director.",
        },
      ]}
    />
  );
}
