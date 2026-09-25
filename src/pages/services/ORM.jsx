import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function ORM() {
  return (
    <ServicePageTemplate
      badge="Reputation Defense"
      title="Online Reputation Management (ORM) Company in India"
      subtitle="Proactive SERP Shielding, Defamation Suppression, Review Optimization & Executive Brand Protection"
      description="In the digital age, perception is reality. A single negative article or defamatory review on Page 1 can cost millions in lost revenue. We systematically protect, repair, and enhance your digital reputation."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'Online Reputation Management' }
      ]}
      stats={[
        { value: "Page 1", label: "Negative SERP Suppression" },
        { value: "4.8+", label: "Target Google Review Score" },
        { value: "24/7", label: "Real-Time Sentiment Monitoring" },
        { value: "100%", label: "Strict Confidentiality" }
      ]}
      overviewTitle="Taking Total Control of Your Search & Digital Narrative"
      overviewText="When prospective clients, partners, or investors Google your brand or founder name, what they see on Page 1 determines whether they proceed. We deploy legal, technical, and digital PR strategies to push negative listings down while elevating authoritative positive assets."
      overviewPoints={[
        "Ethical suppression of defamatory URLs, biased blog posts, and rogue consumer forum threads",
        "Strategic publishing and promotion of high-authority verified media features",
        "Comprehensive review acceleration campaigns transforming customer sentiment across Google, Glassdoor, and Trustpilot"
      ]}
      features={[
        { title: "SERP Suppression & De-Indexing", desc: "Outranking harmful search results with high-authority biographical portals, corporate Wikipedia, and press assets." },
        { title: "Google Review Management & Growth", desc: "Automated SMS/Email review funnels capturing 5-star ratings from satisfied clients while resolving disputes privately." },
        { title: "Executive & Founder Reputation", desc: "Positioning leadership profiles across Forbes, Crunchbase, LinkedIn, and verified industry panels." },
        { title: "Crisis Communications & PR Defense", desc: "Immediate rapid-response holding statements, SEO counter-narratives, and media relations during PR crises." },
        { title: "Defamatory Content Removal", desc: "Facilitating legal takedowns under copyright, trademark infringement, and platform terms-of-service violations." },
        { title: "24/7 Brand Sentiment Telemetry", desc: "Real-time web listening detecting negative spikes, unauthorized brand impersonations, and rogue reviews instantly." }
      ]}
      faqs={[
        { q: "How long does it take to push down a negative search result?", a: "Depending on the domain authority of the negative URL, noticeable suppression to Page 2 and Page 3 typically takes between 3 to 6 months of systematic content publication and link equity distribution." }
      ]}
    />
  );
}
