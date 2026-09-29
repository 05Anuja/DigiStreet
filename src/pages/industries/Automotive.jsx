import React from "react";
import IndustryPageTemplate from "../../components/IndustryPageTemplate";

export default function Automotive() {
  return (
    <IndustryPageTemplate
      industryName="Automotive"
      badge="Automotive Practice"
      title="Automotive Digital Marketing Agency in India"
      subtitle="Driving High-Intent Dealership Test Drives, Model Launches & Aftersales Engagement"
      description="From traditional ICE passenger vehicles to next-generation electric mobility, we engineer digital acquisition funnels that convert online automotive interest into confirmed showroom test drives."
      breadcrumbs={[
        { label: "Industries", link: "/services" },
        { label: "Automotive Marketing Agency" },
      ]}
      stats={[
        { value: "45,000+", label: "Verified Test Drives Booked" },
        { value: "350+", label: "Dealerships Supported" },
        { value: "-28%", label: "Average Cost Per Booking" },
        { value: "Top Tier", label: "Mahindra & MG Partner" },
      ]}
      challenges={[
        {
          title: "High Dealership No-Show Rates",
          desc: "Digital leads frequently flake on scheduled showroom visits without automated multi-channel WhatsApp and SMS appointment reminders.",
        },
        {
          title: "Long Buyer Research Cycles",
          desc: "Automotive consumers compare specs, YouTube reviews, and financing across 60+ days before committing.",
        },
        {
          title: "EV Charging & Range Anxiety",
          desc: "Electric vehicle prospects demand educational content dispelling battery degradation and public charging fears.",
        },
      ]}
      solutions={[
        {
          title: "Hyper-Local Dealership Geo-Fencing",
          desc: "Deploying high-intent radius ads around competing car dealerships and target affluent residential sectors.",
        },
        {
          title: "Virtual 3D Car Showrooms",
          desc: "Interactive web 360-degree exterior walkarounds, interior cabin exploration, and color customization widgets.",
        },
        {
          title: "Automated WhatsApp Test Drive Bot",
          desc: "Instant calendar confirmation and map directions sent to prospective car buyers within 60 seconds.",
        },
        {
          title: "Automotive Influencer Road Trips",
          desc: "Top auto journalists testing vehicle dynamics, real-world range, and boot space on highway runs.",
        },
      ]}
      caseStudyTitle="Scaling Electric Mobility Test Drives Across 24 Cities"
      caseStudyDesc="For a premier Indian EV brand, Silgate designed a seamless online booking portal paired with localized Meta and Google search ads."
      caseStudyMetrics={[
        { value: "14,200+", label: "Test Drives in 90 Days" },
        { value: "₹420", label: "Cost Per Test Drive" },
        { value: "+380%", label: "Showroom Footfall Lift" },
        { value: "#1", label: "Google Organic Keyword" },
      ]}
      faqs={[
        {
          q: "How do you verify test drive lead quality?",
          a: "We implement OTP phone verification and integrated CRM validation before passing booked leads to dealership sales reps.",
        },
      ]}
    />
  );
}
