import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function Education() {
  return (
    <IndustryPageTemplate
      industryName="Education & EdTech"
      badge="Education Practice"
      title="Digital Marketing Agency for Education Industry"
      subtitle="Scaling Student Enrollments for Universities, Online Degree Platforms & EdTech Institutions"
      description="Higher education admissions have shifted entirely online. We build data-driven student enrollment pipelines that reduce cost-per-acquisition, qualify candidates, and fill degree batches ahead of admission deadlines."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Education Marketing Agency' }
      ]}
      stats={[
        { value: "100,000+", label: "Verified Admissions Driven" },
        { value: "Amity Online", label: "Multi-Year Partner" },
        { value: "-32%", label: "Average Cost Per Enrollment" },
        { value: "360°", label: "Search, Social & Campus Tours" }
      ]}
      challenges={[
        { title: "High Lead Drop-Off Rates", desc: "Prospective students submit inquiries across dozens of colleges but rarely complete admission fee payments without automated counseling nurturing." },
        { title: "Seasonal Admission Deadlines", desc: "Institutions must scale inquiry volume exponentially during critical 60-day summer and winter application windows." },
        { title: "Parent & Family Decision Dynamics", desc: "Academic campaigns must address both the career ambitions of students and the financial security questions of fee-paying parents." }
      ]}
      solutions={[
        { title: "Multi-Stage Counseling Funnels", desc: "Automated WhatsApp chatbots answering course questions, syllabus modules, and scheduling admissions counselor calls." },
        { title: "Alumni Success Story Videos", desc: "High-production video interviews showcasing real career promotions, salary hikes, and campus culture." },
        { title: "Search Engine Optimization for Degrees", desc: "Dominating high-intent search terms like 'Online MBA programs India', 'Executive MCA degree', and specialized diplomas." },
        { title: "Retargeting Application Abandonment", desc: "Targeted ad sequences guiding students who started their application back to the payment portal." }
      ]}
      caseStudyTitle="Driving 45,000+ Enrolled Students for Online Degree Programs"
      caseStudyDesc="Deployed full-funnel digital media buying, dynamic course landing pages, and lead scoring models for a leading Indian university."
      caseStudyMetrics={[
        { value: "45,000+", label: "Verified Course Admissions" },
        { value: "4.2x", label: "Blended Application ROAS" },
        { value: "-35%", label: "Lower Cost Per Student" },
        { value: "100%", label: "Cohort Capacity Reached" }
      ]}
      faqs={[
        { q: "How do you help education brands maintain low student acquisition costs?", a: "We combine high-intent Google search ads with organic degree search rankings and automated lead qualification bots to prevent counseling teams from chasing low-intent applicants." }
      ]}
    />
  );
}
