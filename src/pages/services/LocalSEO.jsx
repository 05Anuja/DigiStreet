import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function LocalSEO() {
  return (
    <ServicePageTemplate
      badge="Hyper-Local Dominance"
      title="Local SEO Company in India"
      subtitle="Google Business Profile Optimization, Google Maps 3-Pack Dominance & Multi-Location Search"
      description="Capture nearby customers at the exact moment they search for services in your city or neighborhood. We optimize your local digital presence to generate direct phone calls, footfall, and high-converting local leads."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'Local SEO Company' }
      ]}
      stats={[
        { value: "#1 to #3", label: "Google Maps 3-Pack Rank" },
        { value: "+340%", label: "Direct Phone Inquiries" },
        { value: "100%", label: "NAP Consistency" },
        { value: "500+", label: "Locations Managed" }
      ]}
      overviewTitle="Dominating the Google Maps 3-Pack"
      overviewText="When high-intent consumers search 'near me' or include city names in their search queries, Google serves the prominent Local Map 3-Pack above traditional organic listings. Our Local SEO practice ensures your business commands that prime real estate across all target branch locations."
      overviewPoints={[
        "Complete Google Business Profile (GBP) audit, categorization, and optimization",
        "Consistent Name, Address, and Phone (NAP) citation distribution across 50+ local directories",
        "Automated customer review generation systems and reputation protection"
      ]}
      features={[
        { title: "Google Business Profile Optimization", desc: "Crafting optimized GBP descriptions, secondary categories, service menus, geotagged photos, and weekly updates." },
        { title: "Local Citation Syndication", desc: "Ensuring 100% consistent business information across Justdial, IndiaMART, Sulekha, Yelp, and regional maps." },
        { title: "Localized Geo Landing Pages", desc: "Building hyper-local location pages on your website with localized Schema markup, embedded maps, and local testimonials." },
        { title: "Review Velocity & Sentiment", desc: "Implementing SMS and WhatsApp review request workflows that safely compound positive 5-star Google ratings." },
        { title: "Geo-Grid Rank Tracking", desc: "Monitoring local keyword rankings at 1km grid intervals across your entire city via proprietary local tracking tools." },
        { title: "Local Link & Digital PR Building", desc: "Securing backlinks from local news portals, regional chambers of commerce, and community sponsorships." }
      ]}
      faqs={[
        { q: "How long does it take to rank in Google Maps 3-Pack?", a: "Most businesses see noticeable ranking improvements on Google Maps within 30 to 60 days following citation cleanup, profile optimization, and review velocity acceleration." },
        { q: "Can you manage local SEO for multi-location franchises?", a: "Yes. We manage multi-location local search architecture for healthcare chains, automobile dealerships, retail networks, and salon franchises across India." }
      ]}
    />
  );
}
