import React from 'react';
import IndustryPageTemplate from '../../components/IndustryPageTemplate';

export default function Healthcare() {
  return (
    <IndustryPageTemplate
      industryName="Healthcare"
      badge="Top Healthcare Agency 2024"
      title="Digital Marketing Agency for Healthcare Industry India"
      subtitle="Ethical Patient Acquisition, Doctor Branding, Hospital Footfall & Medical Compliance Excellence"
      description="Named Top Healthcare Marketing Agency in 2024. We build compliant, trust-centered patient acquisition ecosystems for hospital networks, specialized clinics, pharmaceutical innovators, and health-tech platforms."
      breadcrumbs={[
        { label: 'Industries', link: '/services' },
        { label: 'Healthcare Marketing' }
      ]}
      stats={[
        { value: "Top Agency", label: "Healthcare Summit 2024" },
        { value: "250,000+", label: "Verified Patient Consultations" },
        { value: "100%", label: "MCI & Google Health Compliant" },
        { value: "40+", label: "Hospitals & Clinics Scaled" }
      ]}
      challenges={[
        { title: "Strict Medical Advertising Regulations", desc: "Ad platforms enforce rigorous policies banning sensationalized clinical claims, non-compliant before-after images, and unverified treatments." },
        { title: "Patient Anxiety & Trust Deficits", desc: "Patients undergoing elective or critical surgeries conduct extensive credential checks on surgeons before stepping into a hospital." },
        { title: "High No-Show Clinic Rates", desc: "Online appointment bookings frequently fail to materialize without automated multi-touch confirmation sequences." }
      ]}
      solutions={[
        { title: "Doctor Authority & Video Explainer Series", desc: "Filming empathetic specialist doctors answering common patient symptoms, procedure details, and recovery milestones." },
        { title: "Local Healthcare Google 3-Pack Dominance", desc: "Optimizing multi-specialty hospital Google Business Profiles to rank #1 for 'best cardiologist/orthopedic near me'." },
        { title: "High-Intent Medical Condition SEO", desc: "Authoring medically reviewed symptom guides capturing prospective patients at the diagnosis phase." },
        { title: "Automated WhatsApp Patient Booking Concierge", desc: "Instant consultation scheduling, pre-op instructions, and location maps sent directly to patients." }
      ]}
      caseStudyTitle="Scaling Inpatient Surgeries for Multi-Specialty Hospital Network"
      caseStudyDesc="Deployed localized Google Search campaigns, doctor video Q&As, and reputation protection across 8 regional centers."
      caseStudyMetrics={[
        { value: "320%", label: "Increase in Surgical Bookings" },
        { value: "#1", label: "Rankings Across 40+ Medical Terms" },
        { value: "4.8★", label: "Average Google Review Score" },
        { value: "-42%", label: "Lower Cost Per Patient Lead" }
      ]}
      faqs={[
        { q: "How do you navigate medical advertising compliance on Google and Meta?", a: "Our dedicated healthcare regulatory team ensures all creatives, claims, and landing pages strictly comply with the Medical Council of India (MCI) guidelines and platform medical advertising standards." }
      ]}
    />
  );
}
