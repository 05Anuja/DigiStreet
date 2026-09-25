import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function UGCVideoAgency() {
  return (
    <ServicePageTemplate
      badge="Authentic Video Ads"
      title="UGC Video Agency in India"
      subtitle="Relatable User-Generated Content Video Ads That Outperform Polished Commercials"
      description="Consumers no longer trust overly scripted, glossy corporate commercials. We source real creators to film authentic, relatable video testimonials and problem-solution hooks that skyrocket click-through rates."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'UGC Video Agency' }
      ]}
      stats={[
        { value: "3.2x", label: "Higher Click-Through Rates" },
        { value: "500+", label: "Vetted UGC Creators" },
        { value: "7 Days", label: "Script-to-Delivery Turnaround" },
        { value: "-40%", label: "Average CAC Reduction" }
      ]}
      overviewTitle="Why Real Footage Beats Studio Ads Every Time"
      overviewText="User Generated Content (UGC) feels native to the user's social feed. Shot on smartphones with authentic lighting and unvarnished honesty, UGC videos disarm consumer skepticism and demonstrate tangible product value in real-life settings."
      overviewPoints={[
        "Access to diverse demographic creators across India, the US, UK, and Europe",
        "Direct-response scripting engineered around first-3-second scroll-stopping hooks",
        "Full commercial usage rights for Meta, TikTok, YouTube Shorts, and Amazon storefronts"
      ]}
      features={[
        { title: "Direct-Response Scriptwriting", desc: "Writing conversational scripts focusing on common pain points, surprising hooks, and natural transitions to the CTA." },
        { title: "Demographic-Matched Creator Casting", desc: "Matching your product with authentic creators fitting your exact customer age, gender, lifestyle, and ethnicity." },
        { title: "Unboxing & First-Impression Videos", desc: "Capturing genuine reactions to packaging, texture, fragrance, and setup that build immediate buyer trust." },
        { title: "Problem-Solution & Transformation Ads", desc: "Visualizing before-and-after transformations and everyday utility that convince hesitant shoppers." },
        { title: "High-Volume B-Roll & Cutdowns", desc: "Supplying raw B-roll, green-screen reactions, and multiple hook variations for ongoing performance ad testing." },
        { title: "Subtitles, Captions & Native Overlays", desc: "Adding on-screen dynamic text, stickers, and sound effects matching native social media editing styles." }
      ]}
      faqs={[
        { q: "How quickly can we get UGC videos produced?", a: "Once products are delivered to selected creators, our standard turnaround for scripted, edited UGC videos is typically 5 to 7 business days." }
      ]}
    />
  );
}
