import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import CTA from '../components/CTA';

export default function Sitemap() {
  const siteStructure = [
    {
      category: "Main Pages",
      links: [
        { label: "Home", url: "/" },
        { label: "About DigiStreet", url: "/about" },
        { label: "Life at DigiStreet", url: "/about/life-at-digistreet" },
        { label: "Our Credo", url: "/about/credo-at-digistreet" },
        { label: "Meet Our Founder", url: "/kavish-arora" },
        { label: "Services Hub", url: "/services" },
        { label: "Clients & Partners", url: "/clients" },
        { label: "Careers & Openings", url: "/career" },
        { label: "Blog & Insights", url: "/blog" },
        { label: "News & Awards", url: "/news-awards" },
        { label: "Creative Showcase", url: "/showcase" },
        { label: "Influencer Portfolio", url: "/influencer-marketing-portfolio" },
        { label: "Other Companies", url: "/other-companies" },
        { label: "Products", url: "/products" },
        { label: "Contact Us", url: "/contact" },
        { label: "FAQs", url: "/faq" },
      ]
    },
    {
      category: "Core Services",
      links: [
        { label: "SEO Services", url: "/services/seo-services" },
        { label: "AEO Services (Answer Engine Optimization)", url: "/aeo-services-company-in-india" },
        { label: "GEO Services (Generative Engine Optimization)", url: "/generative-engine-optimization-india" },
        { label: "Performance Marketing Agency", url: "/performance-marketing-agency" },
        { label: "B2B SEO Company", url: "/services/b2b-seo-company-in-india" },
        { label: "Local SEO & Google Business Profile", url: "/services/local-seo-company-in-india" },
        { label: "Search Engine Marketing", url: "/services/search-engine-marketing" },
        { label: "Social Media Marketing", url: "/services/social-media-marketing" },
        { label: "Influencer Marketing Agency", url: "/services/influencer-marketing-agency" },
        { label: "Brand Video Production Agency", url: "/services/brand-video-production-agency" },
        { label: "AI Video Production Agency", url: "/services/ai-video-production-agency" },
        { label: "UGC Video Agency", url: "/services/ugc-video-agency" },
        { label: "Website Development India", url: "/services/website-development-india" },
        { label: "Corporate Website Design", url: "/services/website-development-india/corporate-website-design" },
        { label: "Web Application Development", url: "/services/web-application-development" },
        { label: "Creative & Communication", url: "/services/creative-communication" },
        { label: "Content Marketing", url: "/services/content-marketing" },
        { label: "Online Reputation Management", url: "/services/online-reputation-management" },
        { label: "Ad Management", url: "/services/ad-management" },
        { label: "Digital Marketing Retainer", url: "/services/digital-marketing" },
        { label: "RankStreet SEO Suite", url: "/rankstreet" },
        { label: "Managed IT Services", url: "/managed-it-services-usa" },
      ]
    },
    {
      category: "Industry Verticals",
      links: [
        { label: "Automotive Digital Marketing", url: "/automotive-digital-marketing-agency" },
        { label: "Beauty & Skin Care Digital Marketing", url: "/beauty-skin-care-digital-marketing-agency" },
        { label: "B2B Digital Marketing Agency", url: "/digital-marketing-agency-for-business-to-business" },
        { label: "Education Industry Marketing", url: "/digital-marketing-agency-for-education-industry" },
        { label: "Food & Beverage Marketing", url: "/digital-marketing-agency-for-food-beverage" },
        { label: "Healthcare Digital Marketing Services", url: "/digital-marketing-services-for-healthcare" },
        { label: "Real Estate Digital Marketing", url: "/digital-marketing-agency-for-real-estate" },
        { label: "Financial Services Marketing", url: "/digital-marketing-for-financial-services" },
        { label: "Travel & Tourism Marketing", url: "/digital-marketing-for-travel-tourism" },
        { label: "Electric Vehicle (EV) Marketing", url: "/digital-marketing-services-for-ev" },
        { label: "Home Decor Marketing Services", url: "/digital-marketing-services-for-home-decor" },
        { label: "E-Commerce Digital Marketing", url: "/digital-marketing-for-ecommerce-2" },
      ]
    },
    {
      category: "Locations & International",
      links: [
        { label: "Delhi Digital Marketing Agency", url: "/digital-marketing-agency-in-delhi" },
        { label: "SEO Company in Delhi", url: "/seo-company-in-delhi" },
        { label: "Social Media Agency in Noida", url: "/social-media-marketing-agency-in-noida" },
        { label: "Website Design in Gurgaon", url: "/website-design-company-in-gurgaon" },
        { label: "SEO Company in Mumbai", url: "/seo-company-in-mumbai" },
        { label: "Performance Marketing in Bangalore", url: "/performance-marketing-agency-in-bangalore" },
        { label: "SEO Company in Hyderabad", url: "/seo-company-in-hyderabad" },
        { label: "Dubai Digital Marketing Agency", url: "/dubai-digital-marketing-agency" },
        { label: "San Francisco Digital Marketing Agency", url: "/san-francisco-digital-marketing-agency" },
        { label: "SEO Services New York", url: "/seo-services-in-newyork" },
        { label: "UK Digital Marketing Agency", url: "/uk-digital-marketing-agency" },
        { label: "London Digital Marketing Agency", url: "/london-digital-marketing-agency" },
        { label: "Canada Digital Marketing Agency", url: "/canada-digital-marketing-agency" },
        { label: "Australia Digital Marketing Agency", url: "/digital-marketing-agency-in-australia" },
        { label: "Bahrain Digital Marketing Agency", url: "/bahrain-digital-marketing-agency" },
        { label: "Saudi Arabia Digital Marketing Agency", url: "/saudi-arabia-digital-marketing-agency" },
        { label: "Spanish Market Entry", url: "/es" },
        { label: "Italian Market Entry", url: "/it" },
        { label: "German Market Entry", url: "/de" },
        { label: "Japanese Market Entry", url: "/ja" },
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        <Hero 
          badge="HTML Sitemap"
          title="DigiStreet Website Directory"
          subtitle="Explore all publicly accessible pages, services, industry playbooks, and regional hubs."
          breadcrumbs={[{ label: 'Sitemap' }]}
          showCta={false}
        />

        <section className="py-20 bg-white border-b border-zinc-200/80">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {siteStructure.map((cat, idx) => (
                <div key={idx} className="space-y-4">
                  <h3 className="text-lg font-bold text-zinc-900 border-b-2 border-black pb-2">
                    {cat.category}
                  </h3>
                  <ul className="space-y-2 text-xs sm:text-sm text-zinc-600">
                    {cat.links.map((link, lIdx) => (
                      <li key={lIdx}>
                        <Link 
                          to={link.url}
                          className="hover:text-black hover:underline block py-0.5"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTA />
      </main>

      <Footer />
    </div>
  );
}
