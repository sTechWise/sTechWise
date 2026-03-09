"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Workflow, GitBranch, Users, Clock, BarChart3, RefreshCw } from "lucide-react";

export default function WorkflowAutomation() {
    return (
        <ServicePageTemplate
            badge="Workflow Automation"
            headline="Visual workflow automation at enterprise scale"
            subheadline="Build, deploy, and monitor complex business processes with a drag-and-drop orchestration engine designed for reliability."
            overview={[
                "sTechWise Workflow Automation combines a visual process builder with enterprise-grade execution. Design multi-step workflows with conditional branching, parallel execution, error handling, and human-in-the-loop approvals — all without writing code.",
                "From simple task routing to complex cross-departmental orchestrations, our workflow engine handles millions of executions daily with sub-50ms latency and 99.99% uptime."
            ]}
            capabilities={[
                { icon: Workflow, title: "Visual Workflow Builder", desc: "Drag-and-drop canvas with 100+ pre-built actions, conditional logic, loops, and error handling blocks." },
                { icon: GitBranch, title: "Conditional Branching", desc: "Build decision trees with unlimited branching depth, dynamic variables, and expression-based routing." },
                { icon: Users, title: "Human-in-the-Loop", desc: "Insert approval gates, manual review steps, and escalation paths into automated workflows seamlessly." },
                { icon: Clock, title: "Scheduled & Event-Driven", desc: "Trigger workflows on schedules, webhooks, database changes, email events, or custom API calls." },
                { icon: BarChart3, title: "Process Mining & Analytics", desc: "Visualize bottlenecks, measure cycle times, and identify optimization opportunities across all workflows." },
                { icon: RefreshCw, title: "RPA Integration", desc: "Connect robotic process automation bots for legacy system interactions, screen scraping, and desktop automation." },
            ]}
            useCases={[
                { title: "Employee Onboarding Orchestration", industry: "Human Resources", desc: "Coordinate IT provisioning, document collection, training assignment, and compliance checks across 12 systems automatically." },
                { title: "Order-to-Cash Automation", industry: "Finance", desc: "Automate the entire order lifecycle — from validation and credit check to fulfillment and invoicing — with exception handling." },
                { title: "Regulatory Compliance Workflows", industry: "Financial Services", desc: "Build audit-ready compliance processes with automatic evidence collection, approval chains, and deadline tracking." },
            ]}
            outcomes={[
                { metric: "65%", label: "Reduction in manual tasks" },
                { metric: "<50ms", label: "Average execution latency" },
                { metric: "10x", label: "Faster process deployment" },
            ]}
            relatedServices={[
                { label: "AI Automation", href: "/services/ai-automation" },
                { label: "Business Automation", href: "/services/business-automation" },
                { label: "Integration & Data", href: "/services/integration-data" },
            ]}
            accentColor="text-blue-600"
            accentBg="bg-blue-50"
        />
    );
}
