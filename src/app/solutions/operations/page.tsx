"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { Factory } from "lucide-react";

export default function OperationsSolution() {
    return (
        <SolutionPageTemplate
            badge="Operations Automation"
            headline="Optimize operations with intelligent orchestration"
            subheadline="From supply chain to procurement — automate complex operational workflows for predictability, speed, and cost reduction."
            icon={Factory}
            problems={[
                "Supply chain visibility is fragmented across 10+ systems with no unified view",
                "Procurement cycles take weeks of manual vendor management and approval routing",
                "Resource allocation is reactive — capacity issues are caught too late",
                "Operational reporting requires manual data aggregation from multiple departments"
            ]}
            workflows={[
                { step: "Supply Chain Orchestration", desc: "End-to-end visibility with automated order tracking, inventory monitoring, and exception alerting across all logistics partners." },
                { step: "Procurement Automation", desc: "From requisition to payment — automated vendor selection, PO generation, approval routing, and invoice matching." },
                { step: "Predictive Resource Planning", desc: "AI analyzes historical patterns and demand signals to predict resource needs and automatically adjust allocations." },
                { step: "Operational Intelligence", desc: "Real-time dashboards aggregating data from all operational systems with anomaly detection and automated reporting." },
            ]}
            outcomes={[
                { metric: "60%", label: "Shorter procurement cycles" },
                { metric: "45%", label: "Reduction in operational costs" },
                { metric: "100%", label: "Supply chain visibility" },
                { metric: "3x", label: "Faster operational reporting" },
            ]}
            testimonial={{
                quote: "sTechWise gave us complete supply chain visibility for the first time. We went from 3-day lag in reporting to real-time dashboards that drive proactive decisions.",
                author: "James Okonkwo",
                role: "COO",
                company: "RetailEdge Group"
            }}
            accentColor="text-orange-600"
            accentBg="bg-orange-50"
        />
    );
}
