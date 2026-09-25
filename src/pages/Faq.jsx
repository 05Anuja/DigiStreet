import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import FAQAccordion from '../components/FAQAccordion';
import CTA from '../components/CTA';

export default function Faq() {
  const masterFaqs = [
    {
      q: "What digital marketing services does DigiStreet offer?",
      a: "DigiStreet is an end-to-end digital marketing and creative communication agency. Our services encompass Technical SEO, Answer Engine Optimization (AEO), Generative Engine Optimization (GEO), Performance Marketing (Meta, Google, LinkedIn Ads), Social Media Marketing, Influencer Marketing, Brand Video & Commercial Production, Synthetic AI Video, Website & Mobile App Development, Brand Identity Design, and Online Reputation Management."
    },
    {
      q: "Where is DigiStreet Media located?",
      a: "Our corporate headquarters is located at Express Trade Tower 2, B-36, Sector 132, Noida, Uttar Pradesh 201301. We also operate executive offices in Dwarka, New Delhi 110045, with international client engagement hubs in Rochester, NY, USA and Canada."
    },
    {
      q: "How does DigiStreet guarantee ROI on digital marketing?",
      a: "We tie our campaigns to business metrics rather than vanity impressions. Before launching, we conduct deep competitive audits, install strict tracking attribution (GA4, CAPI), develop tailored conversion assets, and implement rigorous weekly optimization sprints."
    },
    {
      q: "What is AEO and GEO, and why does my business need them?",
      a: "Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO) are next-generation search disciplines. As users increasingly rely on ChatGPT, Perplexity, and Google AI Overviews to make purchasing decisions, AEO and GEO ensure your brand is cited and recommended as the authoritative source by generative AI models."
    },
    {
      q: "Can DigiStreet handle international campaigns outside India?",
      a: "Yes. DigiStreet actively manages cross-border digital campaigns, creative design, and search optimization for clients based in the United States, United Kingdom, Canada, Australia, Singapore, and the GCC Middle East."
    },
    {
      q: "How do we get started with DigiStreet?",
      a: "Contact us via our online form, email us at manoj@silgatehiring.com, or call +91 81088 10916. We will arrange a strategic discovery session and provide a complimentary audit of your digital presence."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero 
          badge="Knowledge Base"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about our services, methodologies, pricing, and onboarding."
          breadcrumbs={[{ label: 'FAQs' }]}
          primaryCtaText="Contact Our Team"
          primaryCtaLink="/contact"
        />

        <FAQAccordion 
          items={masterFaqs} 
          title="All Answers in One Place"
          subtitle="Clear, transparent information about partnering with India's premier digital marketing agency."
        />

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
