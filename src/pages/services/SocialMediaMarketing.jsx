import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function SocialMediaMarketing() {
  return (
    <ServicePageTemplate
      badge="Social Media Agency"
      title="Social Media Marketing Agency in India"
      subtitle="Creative Brand Storytelling, High-Engagement Video Content, and Vibrant Community Growth"
      description="Social media is not just about posting pretty pictures. It is about building an emotional connection, commanding attention in crowded feeds, and turning passive scrollers into passionate brand advocates."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Social Media Marketing" },
      ]}
      stats={[
        { value: "250M+", label: "Organic Impressions Delivered" },
        { value: "3.5x", label: "Above Industry Engagement" },
        { value: "100%", label: "In-House Creative Studio" },
        { value: "Multi-Platform", label: "Instagram, LinkedIn, YouTube" },
      ]}
      overviewTitle="Building Cultural Relevance on Digital Feeds"
      overviewText="At Silgate, we manage end-to-end social media ecosystems for market leaders. We develop monthly creative calendars, produce high-velocity short-form reels and carousels, engage in real-time moment marketing, and cultivate genuine brand communities."
      overviewPoints={[
        "Content tailored specifically for the algorithms and behaviors of Instagram, LinkedIn, YouTube, and X",
        "In-house production team of graphic designers, motion animators, copywriters, and video editors",
        "Active community management responding to customer comments, DMs, and mentions",
      ]}
      features={[
        {
          title: "Monthly Creative Strategy & Calendar",
          desc: "Developing strategic content pillars aligned with product launches, seasonal festivals, and brand milestones.",
        },
        {
          title: "Short-Form Video Production (Reels & Shorts)",
          desc: "Writing, filming, and editing viral 15-30 second reels with high-retention pacing and trending audio.",
        },
        {
          title: "LinkedIn Corporate & Executive Branding",
          desc: "Positioning your founders and leadership as recognized industry authorities with thought-provoking long-form posts.",
        },
        {
          title: "Visual Grid Architecture & Aesthetics",
          desc: "Crafting a distinctive visual design language, custom iconography, and recognizable brand templates.",
        },
        {
          title: "Real-Time Moment Marketing",
          desc: "Capitalizing on trending cultural events, memes, and industry news within hours to capture organic virality.",
        },
        {
          title: "Community Management & Listening",
          desc: "Proactively monitoring brand mentions, fostering discussions, and escalating customer service inquiries.",
        },
      ]}
      faqs={[
        {
          q: "How many posts per week do you recommend?",
          a: "We typically recommend 4 to 6 high-quality, high-effort content assets per week (combining video reels, carousels, and interactive stories) rather than flooding feeds with low-value daily static images.",
        },
      ]}
    />
  );
}
