"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Brain, FileText, TrendingUp, Zap, Eye, Target } from "lucide-react";

export default function AIAutomation() {
    return (
        <ServicePageTemplate
            badge="AI Automation"
            headline="Intelligent automation powered by machine learning"
            subheadline="Deploy ML models, automate document processing, and build predictive workflows that learn from your business data."
            overview={[
                "sTechWise AI Automation goes beyond simple rule-based automation. Our platform embeds machine learning directly into your business processes — from intelligent document extraction to predictive decision engines that improve over time.",
                "Whether you're classifying support tickets, extracting invoice data, or predicting supply chain disruptions, our AI automation layer handles the complexity so your teams can focus on strategy."
            ]}
            capabilities={[
                { icon: Brain, title: "ML Model Orchestration", desc: "Deploy, version, and monitor custom ML models within your automation workflows without managing infrastructure." },
                { icon: FileText, title: "Intelligent Document Processing", desc: "Extract structured data from invoices, contracts, and forms with 99%+ accuracy using vision AI and NLP." },
                { icon: TrendingUp, title: "Predictive Automation", desc: "Build workflows that anticipate outcomes — from churn prediction to demand forecasting — and act proactively." },
                { icon: Zap, title: "Real-Time AI Decisioning", desc: "Make sub-second decisions at scale using embedded scoring models, classification engines, and recommendation systems." },
                { icon: Eye, title: "Anomaly Detection", desc: "Continuously monitor data streams to detect fraud, system failures, and process deviations before they impact operations." },
                { icon: Target, title: "AI-Assisted Workflows", desc: "Augment human decisions with AI suggestions, confidence scores, and automated triage within existing approval chains." },
            ]}
            useCases={[
                { title: "Intelligent Invoice Processing", industry: "Finance", desc: "Automatically extract line items, validate against POs, route exceptions, and post to ERP — reducing invoice cycle time by 80%." },
                { title: "Predictive Maintenance", industry: "Manufacturing", desc: "Analyze sensor data to predict equipment failures 72 hours in advance, automatically scheduling maintenance and ordering parts." },
                { title: "AI-Powered Customer Triage", industry: "Customer Support", desc: "Classify incoming tickets by intent, urgency, and sentiment — routing to the right agent or resolving automatically via AI." },
            ]}
            outcomes={[
                { metric: "40%", label: "Faster decision-making" },
                { metric: "99%+", label: "Document extraction accuracy" },
                { metric: "60%", label: "Reduction in manual review" },
            ]}
            relatedServices={[
                { label: "AI Agents", href: "/services/ai-agents" },
                { label: "Workflow Automation", href: "/services/workflow-automation" },
                { label: "Integration & Data", href: "/services/integration-data" },
            ]}
            accentColor="text-violet-600"
            accentBg="bg-violet-50"
        />
    );
}
