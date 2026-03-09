"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { TrendingUp } from "lucide-react";

export default function SalesSolution() {
    return (
        <SolutionPageTemplate
            badge="Sales Automation"
            headline="Accelerate pipeline velocity with intelligent automation"
            subheadline="From lead capture to closed-won — automate the workflows that steal selling time and accelerate revenue."
            icon={TrendingUp}
            problems={[
                "Lead routing is manual and inconsistent — high-value leads sit unactioned for hours",
                "Sales reps spend 30% of their time on CRM data entry instead of selling",
                "Pipeline reporting requires manual spreadsheet updates from multiple systems",
                "Handoff between marketing and sales is fragmented, losing context and momentum"
            ]}
            workflows={[
                { step: "Intelligent Lead Routing", desc: "AI scores, enriches, and routes leads to the right rep based on territory, capacity, and deal characteristics — in under 5 minutes." },
                { step: "CRM Automation", desc: "Automatic activity logging, contact creation, deal stage updates, and follow-up scheduling based on engagement signals." },
                { step: "Pipeline Intelligence", desc: "Real-time pipeline dashboards with AI-powered forecasting, risk scoring, and next-best-action recommendations." },
                { step: "Deal Acceleration", desc: "Automated proposal generation, approval routing, contract creation, and signature collection to close deals faster." },
            ]}
            outcomes={[
                { metric: "<5 min", label: "Lead response time" },
                { metric: "85%", label: "Less CRM admin" },
                { metric: "30%", label: "Higher win rates" },
                { metric: "2x", label: "Pipeline velocity" },
            ]}
            testimonial={{
                quote: "Our sales team recovered 12 hours per week per rep by automating CRM updates and lead routing. That's 12 more hours of selling time every single week.",
                author: "David Park",
                role: "VP of Sales",
                company: "ScaleUp Technologies"
            }}
            accentColor="text-violet-600"
            accentBg="bg-violet-50"
        />
    );
}
