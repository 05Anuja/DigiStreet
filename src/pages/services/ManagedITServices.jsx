import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function ManagedITServices() {
  return (
    <ServicePageTemplate
      badge="IT & Cloud Infrastructure"
      title="Managed IT Services in USA & UK"
      subtitle="24/7 Cloud Monitoring, Enterprise Cybersecurity, Helpdesk Support & Network Management for SMBs"
      description="Reduce operational downtime, harden enterprise cybersecurity, and control IT expenses with 24/7 proactive managed IT services, cloud infrastructure oversight, and compliance management."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Managed IT Services" },
      ]}
      stats={[
        { value: "24/7/365", label: "Proactive NOC Monitoring" },
        { value: "<15 Min", label: "Critical Incident Response" },
        { value: "99.99%", label: "Infrastructure Uptime" },
        { value: "SOC 2", label: "Compliance Standards" },
      ]}
      overviewTitle="Enterprise-Grade IT Support Without the Enterprise Overhead"
      overviewText="Modern small and medium-sized businesses face sophisticated ransomware threats, complex multi-cloud migrations, and escalating compliance mandates (HIPAA, GDPR, SOC 2). Silgate's Managed IT division delivers round-the-clock peace of mind."
      overviewPoints={[
        "Full-spectrum network administration, server virtualization, and endpoint security",
        "Disaster recovery planning with automated offsite cloud backups and rapid failovers",
        "Dedicated Tier 1 to Tier 3 helpdesk engineers available via phone, chat, and ticketing",
      ]}
      features={[
        {
          title: "24/7 Network Operations Center (NOC)",
          desc: "Continuous automated monitoring of servers, switches, firewalls, and cloud instances preventing downtime.",
        },
        {
          title: "Cybersecurity & Endpoint Protection",
          desc: "Deploying next-gen EDR, multi-factor authentication (MFA), email spam filtering, and security training.",
        },
        {
          title: "Cloud Migration & Management (AWS/Azure)",
          desc: "Architecting, provisioning, and cost-optimizing scalable cloud environments with automated scaling.",
        },
        {
          title: "Backup & Disaster Recovery (BDR)",
          desc: "Immutable cloud backups ensuring rapid recovery of business data within minutes of any disruption.",
        },
        {
          title: "Regulatory Compliance Management",
          desc: "Audit preparation and data governance for HIPAA, GDPR, PCI-DSS, and ISO 27001 certifications.",
        },
        {
          title: "Strategic vCIO Advisory",
          desc: "Regular quarterly technology roadmapping and IT budgeting aligned with executive business expansion.",
        },
      ]}
      faqs={[
        {
          q: "What geographic areas do your Managed IT engineers cover?",
          a: "We provide round-the-clock remote IT infrastructure management for businesses across the United States (East Coast, West Coast, Midwest) and the United Kingdom.",
        },
      ]}
    />
  );
}
