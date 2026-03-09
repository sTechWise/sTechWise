"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Lightbulb, Target, Users, Clock, BarChart3, BookOpen } from "lucide-react";

export default function Consulting() {
    return (
        <ServicePageTemplate
            badge="Automation Consulting"
            headline="Expert-led automation strategy and implementation"
            subheadline="From initial assessment to full deployment — our certified enterprise architects accelerate your automation journey."
            overview={[
                "sTechWise Automation Consulting bridges the gap between technology and business outcomes. Our team of certified enterprise architects works alongside your teams to design, implement, and optimize automation programs that deliver measurable ROI.",
                "Whether you're starting your automation journey or scaling an existing program, we provide the strategic guidance, technical expertise, and hands-on implementation support to ensure success."
            ]}
            capabilities={[
                { icon: Target, title: "Automation Strategy & Assessment", desc: "Comprehensive evaluation of your current processes, technology stack, and automation readiness with a prioritized implementation roadmap." },
                { icon: Lightbulb, title: "Process Discovery & Design", desc: "Identify high-impact automation opportunities using process mining, stakeholder interviews, and ROI modeling." },
                { icon: Users, title: "Implementation Sprints", desc: "Rapid 2-4 week implementation sprints with dedicated engineers who build, test, and deploy automations in your environment." },
                { icon: BookOpen, title: "Training & Enablement", desc: "Hands-on training programs for your team — from business analysts building workflows to engineers managing integrations." },
                { icon: BarChart3, title: "Managed Automation Services", desc: "Ongoing monitoring, optimization, and management of your automation portfolio with dedicated support and SLAs." },
                { icon: Clock, title: "Center of Excellence Setup", desc: "Establish an internal automation CoE with governance frameworks, best practices, and scaling methodologies." },
            ]}
            useCases={[
                { title: "Enterprise Automation Roadmap", industry: "Global Enterprise", desc: "6-week strategic engagement to map 200+ processes, prioritize automation candidates, and build a 12-month implementation roadmap with ROI projections." },
                { title: "Rapid Workflow Implementation", industry: "Financial Services", desc: "4-sprint engagement to automate 15 core workflows across trading operations, compliance, and client onboarding — delivering $2M+ annual savings." },
                { title: "Automation CoE Establishment", industry: "Healthcare", desc: "Build an internal Center of Excellence with governance framework, training program, and reusable component library for 500+ staff." },
            ]}
            outcomes={[
                { metric: "90 days", label: "Average deployment timeline" },
                { metric: "3.2x", label: "Average first-year ROI" },
                { metric: "500+", label: "Enterprise deployments" },
            ]}
            relatedServices={[
                { label: "Business Automation", href: "/services/business-automation" },
                { label: "AI Automation", href: "/services/ai-automation" },
                { label: "Workflow Automation", href: "/services/workflow-automation" },
            ]}
            accentColor="text-sky-600"
            accentBg="bg-sky-50"
        />
    );
}
