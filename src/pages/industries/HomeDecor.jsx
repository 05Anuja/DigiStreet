import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function HomeDecor() {
  return (
    <IndustryPageTemplate
      industryName="Home Decor & Furnishings"
      badge="Interior & Living Practice"
      title="Digital Marketing Services for Home Decor & Interiors"
      subtitle="Scaling Luxury Furnishings, Modular Kitchens, Architectural Finishes & D2C Living Spaces"
      description="Selling high-ticket home transformations requires evocative visual aesthetics and spatial visualization. We craft high-engagement interior design campaigns that inspire homeowners and connect with top architects."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Home Decor Marketing' }
      ]}
      stats={[
        { value: "Sirca & British", label: "Coatings & Paint Leaders" },
        { value: "25,000+", label: "Verified Interior Consultations" },
        { value: "4.8x", label: "D2C Furnishings ROAS" },
        { value: "Architect", label: "Influencer Community" }
      ]}
      challenges={[
        { title: "Physical Texture & Color Uncertainty", desc: "Homeowners hesitate to purchase premium upholstery, wall coatings, or furniture online without feeling materials." },
        { title: "Influence of Architects & Contractors", desc: "Over 60% of high-end home finish choices are dictated by interior designers, requiring trade-specific B2B influencer funnels." },
        { title: "Extended Renovation Timelines", desc: "Homeowners research ideas 6 months before ground breaks on a new apartment or renovation project." }
      ]}
      solutions={[
        { title: "Architect & Stylist Influencer Collabs", desc: "Collaborating with renowned interior architects filming house-tour transformations featuring your finishes." },
        { title: "Material Sample Box Fulfillment", desc: "Low-friction D2C sample kit funnels that send fabric swatches or paint sample cards directly to home addresses." },
        { title: "Augmented Reality Room Visualizers", desc: "Enabling customers to view wallpaper, paint shades, and custom sofa configurations in their actual rooms via mobile camera." },
        { title: "Pinterest & Instagram Mood Board SEO", desc: "Capturing organic search queries across Pinterest and Google Images for living room aesthetics." }
      ]}
      caseStudyTitle="Transforming Luxury Italian Wood Coatings in India"
      caseStudyDesc="For Sirca Paints, DigiStreet orchestrated contractor masterclasses, national TV commercial films, and designer social activations."
      caseStudyMetrics={[
        { value: "18M+", label: "National Broadcast & Digital Reach" },
        { value: "+320%", label: "Architect Catalog Downloads" },
        { value: "80+", label: "Top Designers Partnered" },
        { value: "Record", label: "Quarterly Revenue High" }
      ]}
      faqs={[
        { q: "How do you market to professional architects and interior designers?", a: "We run trade-exclusive digital campaigns on LinkedIn and Instagram, host digital continuing education seminars, and provide VIP sample swatch kits directly to architectural design studios." }
      ]}
    />
  );
}
