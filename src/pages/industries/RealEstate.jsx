import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function RealEstate() {
  return (
    <IndustryPageTemplate
      industryName="Real Estate"
      badge="Real Estate Practice"
      title="Digital Marketing Agency for Real Estate"
      subtitle="Generating High-Ticket Homebuyer Leads, NRI Property Investors & Verified Site Visits"
      description="Selling multimillion-rupee luxury villas, commercial floors, and township apartments requires high-trust digital storytelling. We design full-funnel property campaigns that convert browsing investors into booked site visits."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Real Estate Marketing' }
      ]}
      stats={[
        { value: "₹2,500Cr+", label: "Property Inventory Sold" },
        { value: "60,000+", label: "Verified Site Visits Driven" },
        { value: "Global", label: "NRI Buyer Acquisition" },
        { value: "Top Developers", label: "Omaxe, Signature Partner" }
      ]}
      challenges={[
        { title: "Low-Intent Property Broker Leads", desc: "Generic Facebook lead forms flood sales desks with curiosity seekers and real estate brokers rather than genuine homebuyers." },
        { title: "NRI Cross-Border Trust Barriers", desc: "Non-resident Indian buyers in Dubai, the US, and UK require complete transparency, video walkthroughs, and legal clarity." },
        { title: "Volatile Project Launch Windows", desc: "Developers have tight 30-day pre-launch booking targets to secure project financing and regulatory momentum." }
      ]}
      solutions={[
        { title: "Cinematic Drone & CGI Project Walkthroughs", desc: "High-definition architectural walkthroughs capturing project lifestyle, clubhouse amenities, and skyline views." },
        { title: "NRI Cross-Border Geo-Targeted Campaigns", desc: "Targeting high-net-worth Indian expats in the UAE, USA, UK, and Singapore with currency arbitrage calculations." },
        { title: "Interactive Unit Customizers & Pricing Sheets", desc: "Allowing prospective buyers to view floor plans, select tower floors, and view custom installment payment schedules." },
        { title: "Automated Cab-to-Site Visit Concierge", desc: "Instant booking of private chauffeur pickup services for qualified prospective homebuyers directly through WhatsApp." }
      ]}
      caseStudyTitle="Selling Out a Luxury Golf Township Pre-Launch"
      caseStudyDesc="Orchestrated digital advertising, interactive 3D virtual towers, and global NRI campaigns for an integrated luxury township."
      caseStudyMetrics={[
        { value: "380+", label: "Luxury Units Booked" },
        { value: "₹450Cr", label: "Gross Merchandise Value" },
        { value: "1,800+", label: "VIP Site Visits" },
        { value: "45 Days", label: "Pre-Launch Velocity" }
      ]}
      faqs={[
        { q: "How do you filter genuine buyers from casual property seekers?", a: "We deploy multi-stage qualifying questionnaires requiring buyers to specify preferred budget, possession timeframe, and employment status before routing them to the sales floor." }
      ]}
    />
  );
}
