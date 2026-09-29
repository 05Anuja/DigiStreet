import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function BrandVideoProduction() {
  return (
    <ServicePageTemplate
      badge="Commercial Filmmaking"
      title="Brand Video Production Agency in India"
      subtitle="Cinematic Commercials, Corporate Films, Product Explainers & TV Ads from Script to Screen"
      description="Video is the most powerful medium to evoke emotion and drive conviction. Our in-house film studio crafts broadcast-quality television commercials, brand films, and high-impact digital campaign videos."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Brand Video Production" },
      ]}
      stats={[
        { value: "100+", label: "Commercials & TVCs Filmed" },
        { value: "4K / 8K", label: "Cinema Camera Packages" },
        { value: "Full-Cycle", label: "Scripting to Post-Production" },
        { value: "Top Tier", label: "Award-Winning Directors" },
      ]}
      overviewTitle="Cinematic Storytelling Built for Modern Screens"
      overviewText="From high-concept national TVCs for leading coatings and automotive brands to sleek SaaS explainer animations, Silgate houses complete pre-production, filming, and post-production capabilities. We don't just shoot footage; we craft compelling visual narratives that elevate brand prestige."
      overviewPoints={[
        "Complete scriptwriting, storyboarding, location scouting, and professional casting",
        "State-of-the-art camera, lighting, sound, and specialized drone cinematography teams",
        "High-end color grading, sound engineering, 3D motion graphics, and visual effects (VFX)",
      ]}
      features={[
        {
          title: "Television Commercials (TVCs)",
          desc: "Broadcast-ready 30-second commercial spots conceived for high memorability and emotional resonance.",
        },
        {
          title: "Corporate & Heritage Films",
          desc: "Showcasing enterprise scale, manufacturing prowess, founding philosophy, and global footprint.",
        },
        {
          title: "3D Product CGI & Animation",
          desc: "Photorealistic 3D rendering and motion graphics revealing intricate product mechanics and premium finishes.",
        },
        {
          title: "Digital Campaign Cutdowns",
          desc: "Multi-aspect ratio cutdowns optimized for vertical mobile consumption on Instagram, YouTube, and digital outdoor.",
        },
        {
          title: "Sound Design & Original Scores",
          desc: "Custom music composition, audio mastering, and voiceovers across multiple Indian and international languages.",
        },
        {
          title: "Fast-Turnaround Digital Edits",
          desc: "Agile post-production workflows delivering creative variations for rapid performance ad testing.",
        },
      ]}
      faqs={[
        {
          q: "Where does Silgate shoot commercials?",
          a: "We shoot on location across India (Delhi NCR, Mumbai, Bangalore, Goa, Rajasthan) as well as international destinations (Dubai, London, Singapore) with dedicated production crews.",
        },
      ]}
    />
  );
}
