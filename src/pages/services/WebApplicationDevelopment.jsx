import React from "react";
import ServicePageTemplate from "../../components/ServicePageTemplate";

export default function WebApplicationDevelopment() {
  return (
    <ServicePageTemplate
      badge="Full-Stack Engineering"
      title="Web Application Development Company in India"
      subtitle="Scalable Custom Web Apps, Enterprise SaaS Portals & Robust Cloud Architectures"
      description="When off-the-shelf software falls short, we engineer custom web applications that streamline internal operations, delight digital users, and scale seamlessly to millions of transactions."
      breadcrumbs={[
        { label: "Services", link: "/services" },
        { label: "Web Application Development" },
      ]}
      stats={[
        { value: "Full-Stack", label: "React, Node, Cloud Native" },
        { value: "99.99%", label: "System Uptime Standards" },
        { value: "Secure", label: "Bank-Grade Encryption" },
        { value: "Scalable", label: "Microservices & Serverless" },
      ]}
      overviewTitle="Custom Software Engineered for Speed, Security, and Scale"
      overviewText="From customer self-service portals and dealer management systems to complex B2B workflow automation platforms, Silgate's engineering team writes clean, modular, and thoroughly tested code."
      overviewPoints={[
        "Modern frontend architectures using React, Next.js, and TypeScript",
        "Secure RESTful and GraphQL API backends with robust database architectures",
        "CI/CD automated deployment pipelines with zero-downtime releases",
      ]}
      features={[
        {
          title: "Custom SaaS & Customer Portals",
          desc: "Interactive dashboards, billing portals, and role-based access management tailored to your specific workflows.",
        },
        {
          title: "Dealer & Vendor Management Systems",
          desc: "Automating procurement, inventory allocation, and order tracking across national distributor networks.",
        },
        {
          title: "Third-Party API Integration",
          desc: "Connecting payment gateways, ERPs (SAP, Oracle), logistics providers, and internal legacy mainframes.",
        },
        {
          title: "Progressive Web Apps (PWAs)",
          desc: "Delivering app-like speed, offline capabilities, and push notifications directly through web browsers.",
        },
        {
          title: "Automated QA & Security Testing",
          desc: "Rigorous unit testing, end-to-end regression test suites, and vulnerability scanning.",
        },
        {
          title: "Cloud DevOps & Architecture",
          desc: "Designing auto-scaling infrastructure on AWS, Google Cloud, and Azure with cost-optimized provisioning.",
        },
      ]}
      faqs={[
        {
          q: "Who owns the code and intellectual property?",
          a: "You do. 100% of the source code, repositories, and intellectual property belong exclusively to your business upon completion.",
        },
      ]}
    />
  );
}
