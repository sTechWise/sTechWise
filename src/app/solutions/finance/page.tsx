"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { DollarSign } from "lucide-react";

export default function FinanceSolution() {
    return (
        <SolutionPageTemplate
            badge="Finance Automation"
            headline="Automate financial operations from invoice to insight"
            subheadline="Eliminate manual data entry, accelerate close cycles, and gain real-time visibility across your financial operations."
            icon={DollarSign}
            problems={[
                "Invoice processing is manual, error-prone, and takes days instead of minutes",
                "Month-end close requires weeks of spreadsheet reconciliation across multiple systems",
                "Compliance reporting is fragmented — evidence collection takes more time than the analysis itself",
                "Cash flow visibility lags behind reality due to disconnected financial systems"
            ]}
            workflows={[
                { step: "Automated Invoice Processing", desc: "AI extracts data from invoices, matches to purchase orders, flags exceptions, and posts to your ERP automatically." },
                { step: "Real-Time Reconciliation", desc: "Continuous reconciliation across bank accounts, sub-ledgers, and payment systems with instant exception alerts." },
                { step: "Compliance Automation", desc: "Automatic evidence collection, policy enforcement, and audit-ready report generation on schedule." },
                { step: "Financial Reporting Pipelines", desc: "Automated data aggregation from 15+ sources into real-time dashboards and scheduled management reports." },
            ]}
            outcomes={[
                { metric: "80%", label: "Faster invoice processing" },
                { metric: "$4.2M", label: "Average annual savings" },
                { metric: "5 days", label: "Faster month-end close" },
                { metric: "99.9%", label: "Reconciliation accuracy" },
            ]}
            testimonial={{
                quote: "sTechWise transformed our accounts payable from a 15-person manual operation to an automated pipeline that processes 50,000 invoices per month with near-zero errors.",
                author: "Sarah Chen",
                role: "VP of Finance",
                company: "GlobalFinance Corp"
            }}
            accentColor="text-emerald-600"
            accentBg="bg-emerald-50"
        />
    );
}
