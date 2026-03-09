"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Building2, BarChart3, Shield, Users, FileText, RefreshCw } from "lucide-react";

export default function BusinessAutomation() {
    return (
        <ServicePageTemplate
            badge="Business Automation Solutions"
            headline="End-to-end process automation across your enterprise"
            subheadline="Automate complex cross-departmental processes from procurement to compliance with full audit trails and governance."
            overview={[
                "sTechWise Business Automation connects every department in your organization through unified process orchestration. From finance and HR to operations and compliance, automate entire business processes — not just individual tasks.",
                "Our platform provides the governance, visibility, and control that enterprise leaders need while giving operations teams the speed and flexibility to adapt processes quickly."
            ]}
            capabilities={[
                { icon: Building2, title: "Cross-Department Orchestration", desc: "Automate processes that span finance, HR, operations, and legal with unified workflows and shared data context." },
                { icon: BarChart3, title: "Process Performance Analytics", desc: "Real-time dashboards showing cycle times, bottlenecks, SLA compliance, and cost-per-process across all automations." },
                { icon: Shield, title: "Compliance Automation", desc: "Built-in regulatory compliance with automatic evidence collection, policy enforcement, and audit-ready reporting." },
                { icon: Users, title: "Stakeholder Collaboration", desc: "Role-based access, approval workflows, and notification routing that keep the right people informed and empowered." },
                { icon: FileText, title: "Document Lifecycle Management", desc: "Automate document generation, routing, e-signature collection, archival, and retrieval across business processes." },
                { icon: RefreshCw, title: "Continuous Process Improvement", desc: "Process mining and analytics that identify optimization opportunities and automate improvement implementation." },
            ]}
            useCases={[
                { title: "Procure-to-Pay Automation", industry: "Enterprise Operations", desc: "Automate the entire procurement lifecycle — from requisition and vendor selection through PO creation, invoice matching, and payment processing." },
                { title: "Regulatory Reporting Automation", industry: "Financial Services", desc: "Automatically collect data from 20+ systems, validate against regulatory requirements, generate reports, and submit to authorities on schedule." },
                { title: "Contract Lifecycle Management", industry: "Legal", desc: "Automate contract creation from templates, route for review and approval, collect e-signatures, track obligations, and manage renewals." },
            ]}
            outcomes={[
                { metric: "3x", label: "Operational throughput" },
                { metric: "85%", label: "Reduction in process cycle time" },
                { metric: "100%", label: "Audit trail coverage" },
            ]}
            relatedServices={[
                { label: "Workflow Automation", href: "/services/workflow-automation" },
                { label: "Integration & Data", href: "/services/integration-data" },
                { label: "Consulting", href: "/services/consulting" },
            ]}
            accentColor="text-rose-600"
            accentBg="bg-rose-50"
        />
    );
}
