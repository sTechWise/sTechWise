"use client";

import { ServicePageTemplate } from "@/components/ServicePageTemplate";
import { Database, Link2, RefreshCw, Webhook, Shield, Zap } from "lucide-react";

export default function IntegrationData() {
    return (
        <ServicePageTemplate
            badge="Integration & Data Automation"
            headline="Connect every system. Unify every data source."
            subheadline="300+ native connectors, real-time data pipelines, and ETL/ELT orchestration across your entire technology stack."
            overview={[
                "sTechWise Integration & Data Automation eliminates data silos by connecting every application, database, and API in your enterprise. Build real-time data pipelines that transform, validate, and route information exactly where it needs to go.",
                "Whether you're syncing CRM data with your data warehouse, orchestrating webhook events across microservices, or building ETL pipelines for analytics, our integration layer handles it with enterprise-grade reliability."
            ]}
            capabilities={[
                { icon: Link2, title: "300+ Native Connectors", desc: "Pre-built integrations for Salesforce, SAP, Workday, Snowflake, AWS, Azure, and hundreds more enterprise platforms." },
                { icon: Database, title: "Data Pipeline Orchestration", desc: "Build ETL/ELT pipelines with transformation, validation, deduplication, and incremental loading at scale." },
                { icon: Webhook, title: "Webhook Management", desc: "Receive, validate, transform, and route webhook events from any source with automatic retry and dead letter queues." },
                { icon: RefreshCw, title: "Real-Time Data Sync", desc: "Bidirectional sync between systems with conflict resolution, change data capture, and configurable sync intervals." },
                { icon: Shield, title: "Data Quality & Governance", desc: "Built-in validation rules, schema enforcement, PII detection, and data lineage tracking across all pipelines." },
                { icon: Zap, title: "API Orchestration", desc: "Chain multiple API calls with retry logic, rate limiting, authentication management, and response transformation." },
            ]}
            useCases={[
                { title: "Customer 360 Data Unification", industry: "Retail", desc: "Sync customer data from 15+ touchpoints into a unified profile, enabling personalized marketing and real-time analytics." },
                { title: "Multi-Cloud Data Pipeline", industry: "Technology", desc: "Orchestrate data flows between AWS, Azure, and GCP with automated transformation, validation, and compliance checks." },
                { title: "ERP-to-Data Warehouse ETL", industry: "Manufacturing", desc: "Automate nightly ETL from SAP to Snowflake with incremental loading, schema evolution, and data quality monitoring." },
            ]}
            outcomes={[
                { metric: "300+", label: "Native connectors" },
                { metric: "99.9%", label: "Data delivery reliability" },
                { metric: "80%", label: "Reduction in integration maintenance" },
            ]}
            relatedServices={[
                { label: "Workflow Automation", href: "/services/workflow-automation" },
                { label: "AI Automation", href: "/services/ai-automation" },
                { label: "Business Automation", href: "/services/business-automation" },
            ]}
            accentColor="text-emerald-600"
            accentBg="bg-emerald-50"
        />
    );
}
