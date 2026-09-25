import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function AEOServices() {
  return (
    <ServicePageTemplate
      badge="Next-Gen Search AI"
      title="AEO Services Company in India"
      subtitle="Answer Engine Optimization for ChatGPT, Perplexity, Gemini, and Zero-Click Search"
      description="Modern searchers no longer click through ten blue links—they demand direct synthesized answers from AI assistants. We position your brand as the canonical, authoritative answer cited by AI answer engines."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'AEO Services' }
      ]}
      stats={[
        { value: "Zero-Click", label: "Direct Answer Targeting" },
        { value: "100%", label: "Semantic Entity Alignment" },
        { value: "4x", label: "Higher Qualified Intent" },
        { value: "Future-Proof", label: "AI Engine Optimization" }
      ]}
      overviewTitle="The Shift from Keywords to Natural Language Answers"
      overviewText="Answer Engine Optimization (AEO) re-engineers your content architecture so that conversational AI algorithms and zero-click search snippets recognize your business as the definitive source. We optimize structured data, conversational Q&A formats, and authoritative knowledge graphs."
      overviewPoints={[
        "Targeting answer cards in Google SGE, Perplexity AI, ChatGPT, and Apple Intelligence",
        "Direct natural-language formatting addressing precise customer queries",
        "Deep JSON-LD Schema markup and Wikidata entity graph linkage"
      ]}
      features={[
        { title: "Conversational Q&A Structuring", desc: "Crafting modular, scannable answer blocks that AI scrapers and summary algorithms easily digest and quote." },
        { title: "Entity Graph Association", desc: "Establishing clear contextual relationships between your brand, founders, products, and industry topics in Knowledge Bases." },
        { title: "Zero-Click Snippet Capture", desc: "Winning Google Featured Snippets, People Also Ask dropdowns, and voice assistant responses." },
        { title: "Fact-Density Content Enhancement", desc: "Injecting verified statistics, original research, and canonical data that AI engines favor when synthesizing answers." },
        { title: "Citation Velocity Building", desc: "Securing authoritative references across third-party industry journals and databases that LLMs train on." },
        { title: "Voice Search Optimization", desc: "Optimizing for spoken, conversational queries on Siri, Google Assistant, and smart home hardware." }
      ]}
      faqs={[
        { q: "How is AEO different from traditional SEO?", a: "While traditional SEO focuses on ranking web pages for keyword searches, AEO optimizes for synthesized, direct answers provided by AI search bots and zero-click modules where no traditional click occurs." },
        { q: "Which AI engines do you optimize for?", a: "We optimize for Perplexity AI, ChatGPT search, Google AI Overviews, Microsoft Copilot, Claude, and voice search systems." }
      ]}
    />
  );
}
