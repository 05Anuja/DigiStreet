import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function TravelTourism() {
  return (
    <IndustryPageTemplate
      industryName="Travel & Tourism"
      badge="Hospitality & Travel"
      title="Digital Marketing for Travel & Tourism"
      subtitle="Scaling Direct Resort Bookings, Luxury Itineraries & International Tourism Boards"
      description="Inspire wanderlust and capture travelers during their dreaming, planning, and booking micro-moments. We build visual storytelling and direct booking funnels that reduce reliance on costly OTA commissions."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Travel & Tourism' }
      ]}
      stats={[
        { value: "45,000+", label: "Direct Vacation Bookings" },
        { value: "-40%", label: "OTA Commission Savings" },
        { value: "Cinematic", label: "Destination Video Ads" },
        { value: "Multi-Market", label: "Domestic & Outbound" }
      ]}
      challenges={[
        { title: "Heavy Reliance on OTAs", desc: "Hotels and resorts lose 18-25% of gross revenue to Booking.com and MakeMyTrip commissions without strong direct channels." },
        { title: "Extreme Seasonal Booking Swings", desc: "Operators struggle with vacancy during shoulder seasons without targeted advance-purchase campaigns." },
        { title: "Long Visual Browsing Behavior", desc: "Vacationers view an average of 38 travel websites before entering credit card details." }
      ]}
      solutions={[
        { title: "Direct Booking Engine UX", desc: "Streamlining hotel reservation workflows with best-rate guarantees, package add-ons, and immediate room confirmation." },
        { title: "Breathtaking Drone & Lifestyle Content", desc: "Producing cinematic vertical videos of pristine pools, private dining, and local excursions that drive spontaneous bookings." },
        { title: "Seasonal Advance-Booking Flash Sales", desc: "Deploying time-limited early-bird promotions across Meta and Google Search 90 days before peak holiday seasons." },
        { title: "Travel Influencer Experience Stays", desc: "Curating authentic content stays with luxury travel creators who showcase unedited resort experiences." }
      ]}
      caseStudyTitle="Driving ₹18Cr in Direct Bookings for Luxury Resort Chain"
      caseStudyDesc="Built direct booking engine, executed drone video campaigns, and optimized local destination search terms."
      caseStudyMetrics={[
        { value: "62%", label: "Direct Website Booking Share" },
        { value: "5.4x", label: "Google Ads ROAS" },
        { value: "₹2.8Cr", label: "Saved in OTA Commissions" },
        { value: "94%", label: "Peak Season Occupancy" }
      ]}
      faqs={[
        { q: "How can our hotel compete with massive OTAs on Google Search?", a: "We bid on your exact brand terms (preventing OTAs from stealing your direct traffic), optimize your Google Hotel Ads integration, and offer unique direct-booking perks like complimentary breakfast or room upgrades." }
      ]}
    />
  );
}
