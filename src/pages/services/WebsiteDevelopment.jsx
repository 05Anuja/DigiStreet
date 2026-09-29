import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function WebsiteDevelopment() {
  return (
    <ServicePageTemplate
      badge="Engineering & Web Design"
      title="Website Development Company in India"
      subtitle="Bespoke Corporate Websites, High-Speed eCommerce & Custom React Web Portals"
      description="Your website is the single most critical asset in your digital ecosystem. We engineer stunning, ultra-fast websites designed to captivate visitors, establish undeniable credibility, and convert traffic into pipeline."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Website Development India" },
      ]}
      stats={[
        { value: "sub-1s", label: "Page Load Speeds" },
        { value: "100%", label: "Mobile-First Responsive" },
        { value: "300+", label: "Websites Engineered" },
        { value: "SEO Native", label: "Clean Semantic Architecture" },
      ]}
      overviewTitle="Where Aesthetic Craft Meets High-Performance Code"
      overviewText="At Silgate, web development is not about dragging elements in pre-made templates. We design custom design systems from scratch, conduct rigorous UI/UX wireframing, and code clean, lightweight frontend architectures optimized for Google Core Web Vitals."
      overviewPoints={[
        "Custom WordPress, headless Shopify, Webflow, and modern React/Next.js architectures",
        "Conversion-focused layouts engineered to reduce bounce rates and maximize inquiry submissions",
        "Enterprise-grade security, automated backups, and 99.9% uptime reliability",
      ]}
      features={[
        {
          title: "Bespoke Corporate Website Design",
          desc: "Reflecting institutional scale, brand prestige, and seamless investor and stakeholder navigation.",
        },
        {
          title: "High-Conversion eCommerce Stores",
          desc: "Custom Shopify and WooCommerce setups with frictionless one-page checkouts, upselling, and inventory sync.",
        },
        {
          title: "Core Web Vitals & Speed Optimization",
          desc: "Passing Google Core Web Vitals with sub-second LCP, minimal CLS, and advanced CDN asset caching.",
        },
        {
          title: "Content Management Systems (CMS)",
          desc: "Intuitive, clean admin panels empowering your internal marketing team to publish content without developer dependencies.",
        },
        {
          title: "Technical SEO Clean Code",
          desc: "Built-in structured data Schema, semantic HTML5, clean URL slugs, and canonical tags right out of the box.",
        },
        {
          title: "API & Third-Party Integrations",
          desc: "Flawlessly connecting your website with CRMs (HubSpot, Salesforce, Zoho), ERPs, and marketing automation tools.",
        },
      ]}
      faqs={[
        {
          q: "How long does a website redesign take?",
          a: "Standard corporate websites typically launch within 4 to 6 weeks. Complex enterprise portals and custom eCommerce platforms take between 8 to 12 weeks from initial wireframes to production release.",
        },
      ]}
    />
  );
}
