"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Bot, MessageSquare, Cpu, Network, Eye, Zap } from "lucide-react";

export default function AIAgents() {
    return (
        <ServicePageTemplate
            badge="AI Agents & Autonomous Systems"
            headline="Autonomous agents that work alongside your team"
            subheadline="Deploy AI teammates that handle complex multi-step tasks — from customer resolution to data analysis — 24/7."
            overview={[
                "sTechWise AI Agents go beyond simple chatbots. Our agent framework enables you to build autonomous systems that understand context, make decisions, take actions across multiple tools, and learn from outcomes.",
                "Whether it's resolving customer support tickets, processing invoices, or conducting research, AI agents operate within your governance framework with full audit trails and human escalation paths."
            ]}
            capabilities={[
                { icon: Bot, title: "Autonomous Task Execution", desc: "Agents that independently complete multi-step workflows — reading data, making decisions, and triggering actions across systems." },
                { icon: MessageSquare, title: "Conversational AI", desc: "Natural language interfaces for internal tools, customer support, and process initiation with context-aware responses." },
                { icon: Cpu, title: "Agent Orchestration Framework", desc: "Coordinate multiple specialized agents working together on complex tasks with handoff protocols and shared context." },
                { icon: Network, title: "Tool & API Integration", desc: "Agents connect to any API, database, or internal tool — performing actions across your entire technology stack automatically." },
                { icon: Eye, title: "Observability & Guardrails", desc: "Full trace logging, confidence scoring, and configurable guardrails to maintain quality and compliance at scale." },
                { icon: Zap, title: "Continuous Learning", desc: "Agents improve over time through feedback loops, outcome monitoring, and supervised fine-tuning on your domain data." },
            ]}
            useCases={[
                { title: "L1 Support Resolution Agent", industry: "Customer Support", desc: "AI agent that handles 70% of L1 tickets — reading tickets, searching knowledge bases, taking actions, and resolving issues without human intervention." },
                { title: "Financial Data Analysis Agent", industry: "Finance", desc: "Agent that pulls data from multiple sources, runs analysis, generates reports, and distributes findings to stakeholders on schedule." },
                { title: "Procurement Assistant Agent", industry: "Operations", desc: "Agent that manages vendor communications, compares quotes, flags anomalies, and routes approvals through the procurement workflow." },
            ]}
            outcomes={[
                { metric: "70%", label: "Tickets resolved without human intervention" },
                { metric: "24/7", label: "Autonomous operation" },
                { metric: "55%", label: "Reduction in average handle time" },
            ]}
            relatedServices={[
                { label: "AI Automation", href: "/services/ai-automation" },
                { label: "Workflow Automation", href: "/services/workflow-automation" },
                { label: "Business Automation", href: "/services/business-automation" },
            ]}
            accentColor="text-amber-600"
            accentBg="bg-amber-50"
        />
    );
}
