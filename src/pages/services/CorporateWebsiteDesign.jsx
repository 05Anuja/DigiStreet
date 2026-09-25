import React from 'react';
import ServicePageTemplate from '../../components/ServicePageTemplate';

export default function CorporateWebsiteDesign() {
  return (
    <ServicePageTemplate
      badge="Enterprise Web Design"
      title="Corporate Website Design Company in India"
      subtitle="Reflecting Enterprise Stature, Institutional Trust, and Executive Brand Authority"
      description="Enterprise buyers, institutional investors, and global partners evaluate your corporate standing through your website. We design sophisticated, bespoke corporate digital presences that project market leadership."
      breadcrumbs={[
        { label: 'Services', link: '/services' },
        { label: 'Website Development', link: '/services/website-development-india' },
        { label: 'Corporate Website Design' }
      ]}
      stats={[
        { value: "Enterprise", label: "Grade Architecture" },
        { value: "Investor Ready", label: "Financials & Governance" },
        { value: "Global", label: "Multi-Language Support" },
        { value: "14+", label: "Years Enterprise Experience" }
      ]}
      overviewTitle="Corporate Digital Presence Designed for Multi-Stakeholder Trust"
      overviewText="Corporate websites serve a diverse array of stakeholders: board members, institutional investors, prospective enterprise clients, talent recruits, and regulatory bodies. Our design philosophy balances pristine executive aesthetics with robust information architecture."
      overviewPoints={[
        "Interactive annual reports, investor relations portals, and ESG sustainability dashboards",
        "Multi-language and multi-region localization tailored for global holding companies",
        "Strict adherence to global accessibility (WCAG 2.1) and enterprise data security protocols"
      ]}
      features={[
        { title: "Executive Information Architecture", desc: "Intuitive navigation structuring complex subsidiary divisions, brand portfolios, and global office locations." },
        { title: "Investor Relations & ESG Portals", desc: "Dedicated financial reporting modules, stock ticker integrations, and quarterly earnings document repositories." },
        { title: "Custom Micro-Interactions & Animations", desc: "Subtle, refined interface transitions that convey technological maturity without compromising load times." },
        { title: "Talent Acquisition & Culture Showcases", desc: "Dynamic careers sections, employee testimonials, and applicant tracking system (ATS) integrations." },
        { title: "Media Center & Digital PR Rooms", desc: "Organized press release archives, brand assets download kits, and media inquiry forms for journalists." },
        { title: "Enterprise Maintenance & Security SLAs", desc: "24/7 uptime monitoring, penetration testing, regular patch management, and automated disaster recovery." }
      ]}
      faqs={[
        { q: "Can you migrate our legacy corporate website without losing search rankings?", a: "Yes. We execute strict 1-to-1 301 redirect mappings, preserve existing URL structures, and audit metadata to ensure zero loss of historical organic search equity." }
      ]}
    />
  );
}
