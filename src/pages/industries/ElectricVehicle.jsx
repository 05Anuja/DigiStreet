import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function ElectricVehicle() {
  return (
    <IndustryPageTemplate
      industryName="Electric Vehicles"
      badge="Clean Mobility Practice"
      title="Digital Marketing Services for Electric Vehicles (EV)"
      subtitle="Accelerating EV Adoption, Two-Wheeler & Four-Wheeler Pre-Bookings & Charging Infrastructure Growth"
      description="The future of mobility is electric. We design digital awareness and high-conversion pre-booking campaigns that demystify range, battery longevity, and running costs for Indian and global consumers."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Electric Vehicle Marketing' }
      ]}
      stats={[
        { value: "30,000+", label: "EV Test Drives & Bookings" },
        { value: "Mahindra EV", label: "Strategic Brand Partner" },
        { value: "Top Rank", label: "EV Search Engine Dominance" },
        { value: "Pan-India", label: "Dealership Digital Scaling" }
      ]}
      challenges={[
        { title: "Range & Battery Anxiety", desc: "First-time buyers worry about running out of charge on highways or incurring massive battery replacement expenses." },
        { title: "Dealership Transition Frictions", desc: "Traditional auto dealers struggle to explain regenerative braking, connected software updates, and smart charging apps." },
        { title: "Intense Price Competition", desc: "New Chinese and domestic EV entrants flood feeds with aggressive subsidy and financing claims." }
      ]}
      solutions={[
        { title: "TCO & Fuel Savings Calculators", desc: "Interactive widgets showing prospective buyers exactly how much money they save on petrol/diesel every month." },
        { title: "Charging Map & Station Finders", desc: "Embedding interactive nationwide fast-charging network maps into product launch landing pages." },
        { title: "Real-World Long-Distance Video Trials", desc: "Filming popular auto YouTubers driving EVs from Delhi to Jaipur or Mumbai to Goa on a single charge." },
        { title: "Hyper-Local EV Dealership Ads", desc: "Geo-targeted Meta and Google ads targeting daily commuters within a 15km radius of certified EV dealerships." }
      ]}
      caseStudyTitle="Launching a Flagship Electric Two-Wheeler to 12,000+ Pre-Bookings"
      caseStudyDesc="Orchestrated digital teaser launch, interactive pre-order configurator, and city-by-city test-ride tour."
      caseStudyMetrics={[
        { value: "12,400+", label: "Token Pre-Orders" },
        { value: "₹6.2Cr", label: "Booking Advance Collected" },
        { value: "35M+", label: "Launch Video Impressions" },
        { value: "#1", label: "Trending on YouTube Auto" }
      ]}
      faqs={[
        { q: "How do you help EV brands overcome buyer hesitation?", a: "We pair emotional lifestyle video creative with hard financial proof (fuel savings calculators, battery warranty explainers, and real owner testimonials)." }
      ]}
    />
  );
}
