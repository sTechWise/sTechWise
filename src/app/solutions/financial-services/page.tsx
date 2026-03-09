"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { Landmark } from "lucide-react";

export default function FinancialServicesSolution() {
    return (
        <SolutionPageTemplate
            icon={Landmark}
            badge="Financial Services Automation"
            headline="Accelerate financial operations with intelligent automation"
            subheadline="From trade processing to regulatory compliance — automate the workflows that drive revenue and reduce risk across your financial institution."
            accentColor="text-blue-500"
            accentBg="bg-blue-500/10"
            problems={[
                "Trade settlement and reconciliation involve complex manual processes",
                "KYC/AML compliance checks are time-intensive and error-prone",
                "Regulatory reporting requires extracting data from multiple disparate systems",
                "Client onboarding takes weeks due to document verification bottlenecks",
            ]}
            workflows={[
                { step: "Trade & Settlement Automation", desc: "Automate trade matching, exception handling, and settlement workflows across asset classes with real-time reconciliation." },
                { step: "KYC/AML Compliance", desc: "AI-powered identity verification, sanctions screening, and ongoing monitoring with automated suspicious activity reporting." },
                { step: "Regulatory Reporting", desc: "Automated data aggregation, validation, and submission for SEC, FINRA, MiFID II, and Basel III reporting requirements." },
                { step: "Client Onboarding", desc: "Digital-first onboarding with automated document collection, verification, and account provisioning in days instead of weeks." },
            ]}
            outcomes={[
                { metric: "90%", label: "Faster trade reconciliation" },
                { metric: "60%", label: "Reduction in compliance costs" },
                { metric: "99.8%", label: "Reporting accuracy" },
                { metric: "5 days", label: "Client onboarding (from 4 weeks)" },
            ]}
            testimonial={{
                quote: "sTechWise cut our trade settlement exceptions by 85% and made our quarterly regulatory reporting nearly automatic. The ROI was immediate.",
                author: "James Thornton",
                role: "VP of Operations",
                company: "Meridian Capital Partners",
            }}
        />
    );
}
