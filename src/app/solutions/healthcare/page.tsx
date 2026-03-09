"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { Stethoscope } from "lucide-react";

export default function HealthcareSolution() {
    return (
        <SolutionPageTemplate
            icon={Stethoscope}
            badge="Healthcare Automation"
            headline="Automate clinical workflows from intake to outcomes"
            subheadline="Reduce administrative burden, accelerate patient processing, and maintain HIPAA compliance across every touchpoint."
            accentColor="text-emerald-500"
            accentBg="bg-emerald-500/10"
            problems={[
                "Patient intake and registration involves redundant manual data entry across systems",
                "Claims processing delays revenue and increases denial rates",
                "Compliance documentation requires hours of manual preparation for every audit",
                "Care coordination across departments is fragmented and error-prone",
            ]}
            workflows={[
                { step: "Automated Patient Intake", desc: "AI extracts patient data from forms, insurance cards, and referrals — auto-populating EHR records and verifying insurance eligibility in real time." },
                { step: "Claims Processing Automation", desc: "Automate claims submission, scrub for errors before submission, and automatically appeal denied claims with supporting documentation." },
                { step: "Compliance & Audit Automation", desc: "Continuous compliance monitoring with automated HIPAA audit trails, consent tracking, and regulatory reporting." },
                { step: "Clinical Decision Support", desc: "AI-powered alerts for drug interactions, care plan recommendations, and predictive risk scoring for patient populations." },
            ]}
            outcomes={[
                { metric: "75%", label: "Reduction in intake processing time" },
                { metric: "45%", label: "Fewer claim denials" },
                { metric: "99.9%", label: "HIPAA compliance accuracy" },
                { metric: "3x", label: "Faster audit preparation" },
            ]}
            testimonial={{
                quote: "sTechWise transformed our patient onboarding from a 45-minute paper process to a 5-minute digital experience. Compliance has never been easier.",
                author: "Dr. Rachel Kim",
                role: "Chief Medical Officer",
                company: "MedTech Health Systems",
            }}
        />
    );
}
