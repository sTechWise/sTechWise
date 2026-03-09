"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { Headphones } from "lucide-react";

export default function CustomerSupportSolution() {
    return (
        <SolutionPageTemplate
            badge="Customer Support"
            headline="Deliver instant, intelligent customer resolution"
            subheadline="AI-powered ticket routing, automated resolution, and intelligent escalation that transforms your support operation."
            icon={Headphones}
            problems={[
                "Ticket routing is slow and inaccurate — customers wait hours for the right agent",
                "Agents spend 40% of time on repetitive L1 queries that could be automated",
                "Escalation paths are unclear — critical issues get lost in the queue",
                "Knowledge base is fragmented — agents search 5+ systems to find answers"
            ]}
            workflows={[
                { step: "AI Ticket Classification", desc: "Incoming tickets are automatically classified by intent, urgency, product area, and customer tier — routing to the right agent or AI in seconds." },
                { step: "Automated L1 Resolution", desc: "AI agent handles 70% of L1 tickets by searching knowledge bases, taking actions in connected systems, and resolving issues without human intervention." },
                { step: "Smart Escalation", desc: "AI detects sentiment shifts, complex issues, and VIP customers — escalating to the right specialist with full context automatically." },
                { step: "Continuous Improvement", desc: "Resolution analytics identify common issues, knowledge gaps, and training opportunities — feeding back into AI improvement loops." },
            ]}
            outcomes={[
                { metric: "70%", label: "L1 tickets resolved by AI" },
                { metric: "55%", label: "Lower average handle time" },
                { metric: "+30", label: "NPS improvement" },
                { metric: "24/7", label: "Support coverage" },
            ]}
            testimonial={{
                quote: "Within 90 days of deploying sTechWise, our AI agent was resolving 70% of L1 tickets. Our human agents now focus exclusively on complex, high-value interactions.",
                author: "Lisa Wang",
                role: "Director of Customer Success",
                company: "MedTech Systems"
            }}
            accentColor="text-sky-600"
            accentBg="bg-sky-50"
        />
    );
}
