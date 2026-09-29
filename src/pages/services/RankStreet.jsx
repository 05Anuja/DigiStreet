import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function RankStreet() {
  return (
    <ServicePageTemplate
      badge="Proprietary Technology"
      title="RankStreet SEO Intelligence Suite"
      subtitle="Enterprise Real-Time Search Rank Tracking, Algorithm Penalty Alerts & SERP Analysis Engine"
      description="RankStreet is Silgate's proprietary search intelligence platform tracking millions of keywords across Google, Bing, and Search Generative Experience AI overviews down to hyper-local pin-code precision."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "RankStreet" },
      ]}
      stats={[
        { value: "Daily", label: "Automated SERP Scrapes" },
        { value: "120+", label: "Countries Tracked" },
        { value: "Pin-Code", label: "Hyper-Local Accuracy" },
        { value: "Real-Time", label: "Algorithm Shift Alerts" },
      ]}
      overviewTitle="Search Intelligence Engineered for Enterprise Dominance"
      overviewText="Standard commercial SEO software updates weekly and often obscures volatile local fluctuations. RankStreet was engineered by Silgate's technical leads to give our client brands instantaneous visibility into SERP shifts, competitor maneuvers, and AI answer inclusions."
      overviewPoints={[
        "Tracking desktop, mobile, and AI Overview synthesized snippets simultaneously",
        "Automated alerts delivered to Slack and email when unexpected rank drops occur",
        "Competitor keyword interception revealing emerging terms before they saturate the market",
      ]}
      features={[
        {
          title: "Daily Accurate Rank Tracking",
          desc: "Verifying exact organic, map pack, and featured snippet positions across any device and geographic coordinate.",
        },
        {
          title: "SGE & AI Overview Monitoring",
          desc: "Checking whether generative AI summaries cite your domain and monitoring competitor citation volume.",
        },
        {
          title: "Technical Crawl & 404 Detectors",
          desc: "Automated daily site health checks catching broken redirect chains and de-indexed pages immediately.",
        },
        {
          title: "Keyword Cannibalization Audits",
          desc: "Identifying instances where multiple internal pages compete against each other for the same query.",
        },
        {
          title: "Competitor Market-Share Insights",
          desc: "Visualizing total organic search visibility and share-of-voice against top category rivals.",
        },
        {
          title: "White-Label Client Dashboards",
          desc: "Beautiful, interactive live reporting portals accessible to your leadership team 24/7.",
        },
      ]}
      faqs={[
        {
          q: "Do Silgate SEO clients get free access to RankStreet?",
          a: "Yes. All enterprise and retainer SEO clients receive complimentary enterprise access to the RankStreet monitoring portal and automated reporting.",
        },
      ]}
    />
  );
}
