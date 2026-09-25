import React from 'react';
import LocationPageTemplate from '../../components/LocationPageTemplate';

export default function LocationDelhi() {
  return (
    <LocationPageTemplate
      cityName="Delhi NCR"
      badge="Delhi NCR Corporate Hub"
      title="Digital Marketing Agency in Delhi | Best SEO Company"
      subtitle="Full-Stack Marcom, Technical SEO, High-ROAS Media Buying & Web Development in National Capital Region"
      description="DigiStreet Media is Delhi's premier award-winning digital marketing and creative agency. We partner with established industrial giants, luxury retail brands, and high-growth startups across Delhi NCR to drive market leadership."
      breadcrumbs={[
        { label: 'Locations', link: '/services' },
        { label: 'Delhi NCR' }
      ]}
      officeAddress="Dwarka, New Delhi 110045 & Express Trade Tower 2, Sector 132, Noida NCR"
      stats={[
        { value: "#1", label: "Top Delhi SEO Agency" },
        { value: "250+", label: "Delhi NCR Brands" },
        { value: "14+", label: "Years Capital Presence" },
        { value: "Top 20", label: "Silicon India Awarded" }
      ]}
      localInsightsTitle="Navigating the Competitive Delhi NCR Business Arena"
      localInsightsText="Delhi NCR is India's most commercially competitive economic zone. From corporate headquarters in Connaught Place and Aerocity to manufacturing hubs in Okhla and Mayapuri, standing out requires both commanding local search visibility and culturally resonant creative storytelling."
      services={[
        { title: "Technical SEO in Delhi NCR", desc: "Capturing high-intent B2B and consumer searches across Delhi, Noida, and Gurgaon with precision entity schema and local citations." },
        { title: "Performance Paid Acquisition", desc: "Meta and Google ad campaigns optimized for affluent Delhi NCR demographics with hyper-local geo-fencing." },
        { title: "Corporate Web Design & Development", desc: "Bespoke corporate websites and headless eCommerce platforms built for sub-second speeds." },
        { title: "Social Media & Moment Marketing", desc: "Viral video reels and brand narratives tapping directly into the cultural pulse of the capital." }
      ]}
      faqs={[
        { q: "Where is DigiStreet located in Delhi NCR?", a: "We have offices in Dwarka, New Delhi 110045 and our corporate creative headquarters at Express Trade Tower 2, Sector 132, Noida." },
        { q: "Can we schedule an in-person discovery meeting in Delhi?", a: "Yes. Our senior directors and strategy leads regularly host in-person strategy sessions at our offices or at client headquarters across Delhi NCR." }
      ]}
    />
  );
}
