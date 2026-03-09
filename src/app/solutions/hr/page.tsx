"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { Users } from "lucide-react";

export default function HRSolution() {
    return (
        <SolutionPageTemplate
            badge="HR Automation"
            headline="Transform HR from administrative to strategic"
            subheadline="Automate onboarding, payroll, compliance, and employee lifecycle management to focus on people, not paperwork."
            icon={Users}
            problems={[
                "New hire onboarding takes 2–3 weeks of manual coordination across IT, facilities, and compliance",
                "Payroll processing is error-prone with manual data entry across multiple systems",
                "Compliance tracking is fragmented — policy changes require manual updates across dozens of documents",
                "Employee offboarding misses critical steps, creating security and compliance risks"
            ]}
            workflows={[
                { step: "Automated Onboarding", desc: "Triggered by offer acceptance — provisions accounts, assigns equipment, schedules orientation, and tracks completion across 12 systems." },
                { step: "Payroll Integration", desc: "Automatic data sync between HRIS, time tracking, benefits, and payroll systems with validation and exception handling." },
                { step: "Compliance Monitoring", desc: "Continuous tracking of certifications, training requirements, and policy acknowledgments with automated reminders." },
                { step: "Lifecycle Orchestration", desc: "From promotion workflows and internal transfers to offboarding checklists — every transition is automated and audited." },
            ]}
            outcomes={[
                { metric: "48 hrs", label: "Onboarding time" },
                { metric: "0", label: "Payroll errors" },
                { metric: "100%", label: "Compliance tracking" },
                { metric: "70%", label: "Less admin overhead" },
            ]}
            testimonial={{
                quote: "Our HR team went from spending 60% of their time on administrative tasks to focusing entirely on employee experience and strategic initiatives.",
                author: "Michael Torres",
                role: "Chief People Officer",
                company: "TechScale Inc."
            }}
            accentColor="text-blue-600"
            accentBg="bg-blue-50"
        />
    );
}
