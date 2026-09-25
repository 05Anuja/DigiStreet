import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function ContentMarketing() {
  return (
    <ServicePageTemplate
      badge="Strategic Content"
      title="Content Marketing Agency in India"
      subtitle="SEO Copywriting, Industry Whitepapers, Video Scripts & High-Converting Marketing Collaterals"
      description="Content without strategy is noise. We craft high-authority, research-backed content assets that educate prospective buyers, establish industry authority, and drive predictable inbound organic conversions."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'Content Marketing' }
      ]}
      stats={[
        { value: "100%", label: "Original Research-Driven" },
        { value: "SEO Aligned", label: "Topical Cluster Modeling" },
        { value: "Multi-Format", label: "Blogs, Whitepapers, Scripts" },
        { value: "High-Conv", label: "Intent-Focused Copywriting" }
      ]}
      overviewTitle="Content Engineered to Build Authority and Drive Action"
      overviewText="Our editorial team pairs deep domain research with punchy direct-response copywriting. We don't churn out superficial AI fluff; every asset is structured around buyer psychology, search engine entities, and tangible business solutions."
      overviewPoints={[
        "Strategic content roadmaps aligned with customer journey stages from awareness to evaluation and decision",
        "Subject-matter-expert interviews, original industry data, and verified citations",
        "Multi-channel repurposing turning one core whitepaper into 10+ blogs, carousels, and video scripts"
      ]}
      features={[
        { title: "SEO Copywriting & Content Hubs", desc: "Long-form comprehensive cornerstone guides targeting high-volume commercial and informational keyword clusters." },
        { title: "B2B Whitepapers & Ebooks", desc: "Deep-dive research papers and gated industry reports capturing qualified senior leadership email leads." },
        { title: "Video Commercial & TVC Scripts", desc: "Crafting captivating narrative hooks, story arcs, and emotional payoffs for commercials and social reels." },
        { title: "Website Sales Copywriting", desc: "Writing benefit-driven headlines, scannable value propositions, and irresistible call-to-actions for web pages." },
        { title: "Case Studies & Customer Success Stories", desc: "Documenting client challenges, strategic solutions, and verified ROI into persuasive proof assets." },
        { title: "Executive Thought Leadership", desc: "Ghostwriting insightful LinkedIn articles and guest op-eds for founders and C-suite executives." }
      ]}
      faqs={[
        { q: "How do you ensure content accuracy in technical or specialized industries?", a: "We conduct structured discovery interviews with your internal technical and product leaders, and each draft undergoes two rounds of subject-matter fact-checking before publication." }
      ]}
    />
  );
}
