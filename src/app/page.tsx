"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, Brain, Workflow, Database, Bot, Building2, Lightbulb,
  ChevronRight, Shield, Lock, Globe2, Check, Copy, ExternalLink,
  TrendingUp, Clock, Target, Zap, BarChart3, Users, Headphones,
  DollarSign, Briefcase, Factory, Sparkles, Eye, FileSearch,
  Layers, ShieldCheck
} from "lucide-react";
import { TrustRow } from "@/components/TrustRow";
import CanvasShowcase from "@/components/CanvasShowcase";
import { useDemoModal } from "@/context/DemoModalContext";
import Link from "next/link";

/* ─────────────── Shared animation variants ─────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  })
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

/* ─────────────── Data ─────────────── */
const SERVICE_CATEGORIES = [
  {
    icon: Brain, title: "AI Automation",
    desc: "ML model orchestration, intelligent document processing, and predictive automation that learns from your business patterns.",
    href: "/services/ai-automation",
    stats: "40% faster decisions",
    color: "from-violet-500/10 to-purple-500/10",
    iconColor: "text-violet-600"
  },
  {
    icon: Workflow, title: "Workflow Automation",
    desc: "Visual workflow builder with conditional branching, approval chains, and human-in-the-loop orchestration at enterprise scale.",
    href: "/services/workflow-automation",
    stats: "65% less manual work",
    color: "from-blue-500/10 to-cyan-500/10",
    iconColor: "text-blue-600"
  },
  {
    icon: Database, title: "Integration & Data",
    desc: "300+ native connectors, real-time data pipelines, ETL/ELT orchestration, and webhook management across your entire stack.",
    href: "/services/integration-data",
    stats: "300+ connectors",
    color: "from-emerald-500/10 to-teal-500/10",
    iconColor: "text-emerald-600"
  },
  {
    icon: Bot, title: "AI Agents",
    desc: "Autonomous agents that handle complex multi-step tasks, from customer support resolution to data analysis and reporting.",
    href: "/services/ai-agents",
    stats: "24/7 autonomous ops",
    color: "from-amber-500/10 to-orange-500/10",
    iconColor: "text-amber-600"
  },
  {
    icon: Building2, title: "Business Automation",
    desc: "End-to-end process automation across departments — from procurement to compliance — with full audit trails.",
    href: "/services/business-automation",
    stats: "3x operational throughput",
    color: "from-rose-500/10 to-pink-500/10",
    iconColor: "text-rose-600"
  },
  {
    icon: Lightbulb, title: "Automation Consulting",
    desc: "Strategy workshops, implementation sprints, and managed automation services from certified enterprise architects.",
    href: "/services/consulting",
    stats: "90-day deployment",
    color: "from-sky-500/10 to-indigo-500/10",
    iconColor: "text-sky-600"
  },
];

const SOLUTIONS = [
  {
    id: "finance", label: "Finance", icon: DollarSign,
    headline: "Automate financial operations end-to-end",
    problems: ["Manual invoice processing delays cash flow", "Reconciliation errors cost time and money", "Compliance reporting requires days of manual effort"],
    outcomes: ["Invoice cycle time reduced by 80%", "99.9% reconciliation accuracy", "Audit-ready reports generated in minutes"],
    href: "/solutions/finance"
  },
  {
    id: "hr", label: "HR", icon: Users,
    headline: "Transform HR from administrative to strategic",
    problems: ["Onboarding takes weeks of manual coordination", "Payroll processing is error-prone and slow", "Compliance tracking is fragmented across systems"],
    outcomes: ["Employee onboarding in 48 hours", "Zero payroll processing errors", "Real-time compliance dashboards"],
    href: "/solutions/hr"
  },
  {
    id: "sales", label: "Sales", icon: TrendingUp,
    headline: "Accelerate pipeline velocity with intelligent automation",
    problems: ["Lead routing is manual and inconsistent", "CRM data entry steals selling time", "Pipeline visibility requires manual spreadsheet updates"],
    outcomes: ["Lead response time under 5 minutes", "85% reduction in CRM admin time", "Real-time pipeline analytics"],
    href: "/solutions/sales"
  },
  {
    id: "support", label: "Customer Support", icon: Headphones,
    headline: "Deliver instant, intelligent customer resolution",
    problems: ["Ticket routing is slow and inaccurate", "Agents spend 40% of time on repetitive queries", "Escalation paths are unclear and inconsistent"],
    outcomes: ["70% of L1 tickets resolved by AI", "Average handle time reduced by 55%", "Customer satisfaction up 30 points"],
    href: "/solutions/customer-support"
  },
  {
    id: "ops", label: "Operations", icon: Factory,
    headline: "Optimize operations with intelligent orchestration",
    problems: ["Supply chain visibility is fragmented", "Procurement cycles are slow and manual", "Resource allocation is reactive, not predictive"],
    outcomes: ["End-to-end supply chain visibility", "Procurement cycle time cut by 60%", "Predictive resource allocation"],
    href: "/solutions/operations"
  },
];

const METRICS = [
  { value: "65%", label: "Reduction in manual processing", suffix: "" },
  { value: "3", label: "Month average time-to-value", suffix: "mo" },
  { value: "99.99%", label: "Platform uptime SLA", suffix: "" },
];

const CASE_STUDIES = [
  { company: "GlobalFinance Corp", industry: "Financial Services", result: "80% faster invoice processing", metric: "$4.2M", metricLabel: "Annual savings", quote: "sTechWise transformed our entire accounts payable workflow in 90 days." },
  { company: "MedTech Systems", industry: "Healthcare", result: "70% reduction in compliance overhead", metric: "99.9%", metricLabel: "Compliance accuracy", quote: "We went from weeks of manual audit prep to automated, real-time compliance." },
  { company: "RetailEdge Group", industry: "Retail & E-Commerce", result: "3x faster order fulfillment", metric: "55%", metricLabel: "Cost reduction", quote: "Our supply chain automation paid for itself within the first quarter." },
];

/* ─────────────── Section wrapper for consistent spacing ─────────────── */
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  return <section id={id} className={`py-24 lg:py-32 px-6 lg:px-8 ${className}`}><div className="mx-auto max-w-7xl">{children}</div></section>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">{children}</span>;
}

/* ─────────────── HOMEPAGE ─────────────── */
export default function Home() {
  const { openDemoModal } = useDemoModal();
  const [activeSolution, setActiveSolution] = useState("finance");
  const [archHover, setArchHover] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`import { sTechWise } from "@stechwise/node";

const client = new sTechWise(process.env.STECHWISE_KEY);

await client.workflows.trigger({
  id: "enterprise-onboarding",
  audience: "technical-buyers"
});`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  const currentSolution = SOLUTIONS.find(s => s.id === activeSolution)!;

  return (
    <main className="relative">

      {/* ═══════════════ S2: HERO ═══════════════ */}
      <section ref={heroRef} className="relative min-h-[100vh] flex flex-col items-center justify-center bg-brand-primary overflow-hidden pt-32 pb-16 px-6 lg:px-8">
        {/* Background mesh */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-brand-accent/15 rounded-full blur-[100px]" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[80px]" />
        </div>
        <div className="dot-grid absolute inset-0 opacity-[0.03]" />

        <div className="mx-auto max-w-4xl w-full relative z-10 flex flex-col items-center text-center">

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.06] tracking-tight mb-6 font-heading"
          >
            Intelligent Automation for{" "}
            <span className="text-gradient-accent">Complex Workflows</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed mb-10"
          >
            Automate processes, accelerate decisions, and scale integrations — with enterprise security and predictable ROI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Button
              onClick={openDemoModal}
              className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded-lg h-14 px-10 text-base font-bold transition-all shadow-xl shadow-brand-accent/20 hover:scale-[1.03] active:scale-[0.98] border-none"
            >
              Request Enterprise Demo <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Link href="/sandbox">
              <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded-lg h-14 px-10 text-base font-bold transition-all hover:scale-[1.03] active:scale-[0.98] w-full sm:w-auto">
                Start Free — No Credit Card
              </Button>
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-400 font-medium mb-16"
          >
            <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-emerald-400" /> SOC 2 Type II</div>
            <div className="flex items-center gap-2"><Lock className="w-4 h-4 text-blue-400" /> End-to-End Encrypted</div>
            <div className="flex items-center gap-2"><Globe2 className="w-4 h-4 text-violet-400" /> GDPR & CCPA Compliant</div>
          </motion.div>
        </div>

        {/* Product mockup card — centered below hero text */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.92 }}
          animate={heroInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full max-w-5xl mx-auto"
          style={{ perspective: "1200px" }}
        >
          <div className="absolute -inset-6 bg-gradient-to-r from-brand-accent/20 via-violet-500/15 to-blue-500/20 rounded-2xl blur-3xl opacity-50" />
          <div className="relative bg-[#0d1117] border border-white/10 rounded-xl overflow-hidden shadow-2xl" style={{ transform: "rotateX(4deg)" }}>
            {/* Top bar */}
            <div className="flex items-center gap-2 px-5 py-3 border-b border-white/10 bg-white/[0.03]">
              <div className="w-3 h-3 rounded-full bg-red-500/60" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
              <div className="w-3 h-3 rounded-full bg-green-500/60" />
              <span className="ml-4 text-xs text-slate-500 font-mono">sTechWise — Automation Dashboard</span>
            </div>
            {/* Dashboard content */}
            <div className="p-6 md:p-8">
              {/* Header row */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-accent/20 flex items-center justify-center"><Workflow className="w-5 h-5 text-brand-accent" /></div>
                  <div>
                    <p className="text-base font-bold text-white">Enterprise Onboarding Pipeline</p>
                    <p className="text-xs text-slate-500">12 steps • Auto-retry • 3 branches</p>
                  </div>
                </div>
                <span className="text-xs font-bold text-emerald-400 bg-emerald-400/10 px-3 py-1.5 rounded-full">● LIVE</span>
              </div>
              {/* Pipeline steps */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                {[
                  { label: "Data Validation", status: "done", time: "23ms" },
                  { label: "AI Classification", status: "done", time: "156ms" },
                  { label: "Route to Agent", status: "done", time: "1.2s" },
                  { label: "Approval Chain", status: "active", time: "—" },
                ].map((step) => (
                  <div key={step.label} className={`rounded-lg border p-3 ${step.status === 'active' ? 'border-brand-accent/40 bg-brand-accent/5' : 'border-white/5 bg-white/[0.02]'}`}>
                    <div className="flex items-center gap-2 mb-1.5">
                      {step.status === 'done' ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <span className="w-3 h-3 rounded-full bg-brand-accent animate-pulse" />
                      )}
                      <span className={`text-xs font-semibold ${step.status === 'active' ? 'text-white' : 'text-slate-400'}`}>{step.label}</span>
                    </div>
                    <p className="text-[10px] text-slate-600 font-mono">{step.time}</p>
                  </div>
                ))}
              </div>
              {/* Stats row */}
              <div className="grid grid-cols-4 gap-4 pt-4 border-t border-white/5">
                {[
                  { l: "Latency", v: "<50ms", color: "text-emerald-400" },
                  { l: "Uptime", v: "99.99%", color: "text-blue-400" },
                  { l: "Events/sec", v: "100k+", color: "text-violet-400" },
                  { l: "Success Rate", v: "99.7%", color: "text-brand-accent" },
                ].map(s => (
                  <div key={s.l} className="text-center">
                    <p className="text-[10px] text-slate-600 uppercase tracking-wider">{s.l}</p>
                    <p className={`text-sm font-bold ${s.color}`}>{s.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ═══════════════ S3: PROOF & OUTCOMES ═══════════════ */}
      <section className="relative border-b border-slate-100">
        {/* Logo marquee */}
        <div className="py-10 bg-white">
          <TrustRow />
        </div>
        {/* Metric tiles */}
        <div className="bg-slate-50 border-t border-slate-100">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {METRICS.map((m, i) => (
                <motion.div
                  key={m.label}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i}
                  className="text-center"
                >
                  <p className="text-4xl md:text-5xl font-extrabold text-brand-primary font-heading tracking-tight">{m.value}</p>
                  <p className="text-sm text-slate-500 mt-2 font-medium">{m.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════ CANVAS SHOWCASE ═══════════════ */}
      <CanvasShowcase />

      {/* ═══════════════ S4: PROBLEM → SOLUTION ═══════════════ */}
      <Section>
        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Problem side */}
          <motion.div variants={fadeUp}>
            <SectionLabel>The Challenge</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-8 font-heading leading-tight">
              Enterprise automation is fragmented, expensive, and slow to deploy
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Disjointed systems", desc: "Siloed tools create data gaps and process bottlenecks across departments." },
                { title: "Manual overhead", desc: "Teams spend 40%+ of time on repetitive tasks that should be automated." },
                { title: "Slow time-to-value", desc: "Traditional automation deployments take 12–18 months before delivering ROI." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-base">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Solution side */}
          <motion.div variants={fadeUp} custom={3}>
            <SectionLabel>Our Approach</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight mb-8 font-heading leading-tight">
              One platform for orchestration, AI decisioning, and integration
            </h2>
            <ul className="space-y-6">
              {[
                { title: "Unified orchestration layer", desc: "Connect every system, team, and process in a single enterprise-grade platform." },
                { title: "AI-powered decisioning", desc: "Intelligent agents and ML models automate complex decisions in real time." },
                { title: "90-day time-to-value", desc: "Pre-built templates, 300+ connectors, and expert onboarding accelerate deployment." },
              ].map((item) => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-base">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Section>

      {/* ═══════════════ S5: PLATFORM OVERVIEW — 3 PILLARS ═══════════════ */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Platform</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Three pillars. One platform.</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base">Built from the ground up for enterprises that demand reliability, security, and scale.</p>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Workflow, title: "Orchestration",
              desc: "Visual workflow builder with conditional branching, parallel execution, sub-workflows, and human-in-the-loop approvals.",
              bullets: ["Drag-and-drop workflow canvas", "Event-driven architecture", "Real-time monitoring & debugging"],
              mockup: [
                { label: "trigger", color: "bg-emerald-400" },
                { label: "condition", color: "bg-blue-400" },
                { label: "action", color: "bg-violet-400" },
                { label: "notify", color: "bg-amber-400" }
              ]
            },
            {
              icon: Brain, title: "AI Decisioning",
              desc: "Embedded ML models and AI agents that make intelligent decisions within your automation workflows.",
              bullets: ["Custom model deployment", "Pre-built AI templates", "Continuous learning & feedback loops"],
              mockup: [
                { label: "95.2%", color: "bg-emerald-400" },
                { label: "87.8%", color: "bg-blue-400" },
                { label: "91.4%", color: "bg-violet-400" }
              ]
            },
            {
              icon: Database, title: "Integrations & Data",
              desc: "Connect every tool in your stack with 300+ native connectors and a universal data transformation layer.",
              bullets: ["REST, GraphQL, gRPC support", "Real-time CDC pipelines", "Data quality & validation"]
            },
          ].map((pillar, i) => (
            <motion.div
              key={pillar.title}
              variants={fadeUp}
              custom={i}
              className="bg-white border border-slate-200 rounded p-8 group hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded bg-brand-primary flex items-center justify-center mb-6 group-hover:bg-brand-accent transition-colors duration-300">
                <pillar.icon className="w-6 h-6 text-white group-hover:text-brand-primary transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-bold text-brand-primary mb-3 font-heading">{pillar.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">{pillar.desc}</p>
              <ul className="space-y-2">
                {pillar.bullets.map(b => (
                  <li key={b} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />{b}
                  </li>
                ))}
              </ul>
              <Link href="/platform" className="inline-flex items-center gap-1 text-sm font-bold text-brand-primary mt-6 hover:text-brand-accent transition-colors group/link">
                Learn more <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════ S6: ARCHITECTURE DIAGRAM ═══════════════ */}
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Architecture</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Enterprise-grade automation architecture</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base">From data ingestion to governance — every component is designed for scale, security, and observability.</p>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded-lg p-8 lg:p-12 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 left-1/3 w-[300px] h-[300px] bg-violet-500/30 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-brand-accent/20 rounded-full blur-[80px]" />
            </div>
            {/* Flow label */}
            <div className="relative z-10 flex items-center gap-2 mb-8">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase">Live Pipeline Flow</span>
            </div>
            {/* Architecture nodes */}
            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { id: "ingest", label: "Data Ingest", desc: "APIs, webhooks, file drops, event streams", icon: Database, accent: "bg-blue-500" },
                { id: "orchestration", label: "Orchestration Engine", desc: "Visual workflow builder with conditional branching", icon: Workflow, accent: "bg-violet-500" },
                { id: "ai", label: "AI Decision Engine", desc: "ML models, NLP, predictive analytics", icon: Brain, accent: "bg-emerald-500" },
                { id: "agents", label: "Agent Framework", desc: "Autonomous agents for complex multi-step tasks", icon: Bot, accent: "bg-amber-500" },
                { id: "integrations", label: "Integration Layer", desc: "300+ connectors, real-time sync, ETL/ELT", icon: Layers, accent: "bg-pink-500" },
                { id: "governance", label: "Governance & Audit", desc: "SOC2, GDPR, role-based access, audit logs", icon: ShieldCheck, accent: "bg-cyan-500" },
              ].map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setArchHover(node.id)}
                  onMouseLeave={() => setArchHover(null)}
                  className={`relative p-5 rounded-lg border text-center cursor-default transition-all duration-300 overflow-hidden ${archHover === node.id ? 'bg-white/15 border-white/30 shadow-2xl scale-[1.05]' : 'bg-white/[0.05] border-white/10 hover:bg-white/[0.08]'}`}
                >
                  {/* Top accent bar */}
                  <div className={`absolute top-0 left-0 w-full h-1 ${node.accent}`} />
                  <div className={`w-10 h-10 rounded-lg ${node.accent}/20 flex items-center justify-center mx-auto mb-3`}>
                    <node.icon className={`w-5 h-5 ${archHover === node.id ? 'text-white' : 'text-slate-300'} transition-colors`} />
                  </div>
                  <p className={`text-sm font-bold mb-1.5 font-heading ${archHover === node.id ? 'text-white' : 'text-slate-200'}`}>{node.label}</p>
                  <p className={`text-[11px] leading-relaxed ${archHover === node.id ? 'text-slate-300' : 'text-slate-500'}`}>{node.desc}</p>
                  {/* Connector arrow (hidden on last and mobile) */}
                  {i < 5 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 z-20">
                      <ChevronRight className="w-4 h-4 text-slate-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            {/* Bottom connector line */}
            <div className="relative z-10 hidden lg:flex items-center justify-center mt-6">
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
              <span className="px-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">End-to-End Encrypted • SOC 2 Type II Compliant • 99.99% Uptime SLA</span>
              <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent" />
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════ S6b: AI SPOTLIGHT — Reasoning UI ═══════════════ */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — AI Reasoning Mockup */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-violet-500/10 via-blue-500/10 to-brand-accent/10 rounded blur-2xl opacity-60" />
              <div className="relative bg-[#0d1117] border border-white/10 rounded overflow-hidden shadow-2xl">
                {/* Top bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                  <Sparkles className="w-4 h-4 text-violet-400" />
                  <span className="text-xs text-slate-400 font-mono">sTechWise AI — Decision Engine</span>
                </div>
                {/* AI content */}
                <div className="p-6 space-y-5">
                  {/* Input ticket */}
                  <div className="bg-white/[0.04] border border-white/10 rounded p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <FileSearch className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-bold text-white">Incoming support ticket #4891</span>
                    </div>
                    <p className="text-xs text-slate-400">"Our payment integration stopped processing transactions since 3am. Revenue impact estimated at $12K/hr."</p>
                  </div>
                  {/* AI reasoning */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-3.5 h-3.5 text-violet-400 animate-pulse" />
                      <span className="text-xs font-bold text-violet-400">sTechWise AI reasoning</span>
                    </div>
                    <div className="space-y-2 pl-5 border-l border-violet-500/30">
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} viewport={{ once: true }} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-slate-300">Classified as: <span className="font-bold text-red-400">P1 — Critical</span></span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.5 }} viewport={{ once: true }} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-slate-300">Revenue impact detected — <span className="font-bold text-brand-accent">SLA breach risk</span></span>
                      </motion.div>
                      <motion.div initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.7 }} viewport={{ once: true }} className="flex items-center gap-2">
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-xs text-slate-300">Routed to: <span className="font-bold text-white">Payment Engineering (on-call)</span></span>
                      </motion.div>
                    </div>
                  </div>
                  {/* Confidence */}
                  <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                    <div className="flex-1">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-slate-500">AI Confidence</span>
                        <span className="font-bold text-emerald-400">97.3%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div initial={{ width: 0 }} whileInView={{ width: "97.3%" }} transition={{ duration: 1, delay: 0.8 }} viewport={{ once: true }} className="h-full bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                      </div>
                    </div>
                    <span className="text-xs font-bold text-white bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded">Auto-approved</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Content */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2}>
            <SectionLabel>AI That Explains Itself</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading mb-6 leading-tight">
              AI decisions with full transparency
            </h2>
            <p className="text-slate-500 text-base leading-relaxed mb-8">
              Unlike black-box automation, sTechWise AI shows its reasoning for every decision — classification, priority scoring, routing, and escalation. Your team stays in control.
            </p>
            <ul className="space-y-4 mb-8">
              {[
                { title: "Explainable classification", desc: "See why every ticket, document, or request was classified the way it was." },
                { title: "Confidence scoring", desc: "AI shows its confidence level. Low confidence? It routes to a human automatically." },
                { title: "Decision audit trail", desc: "Full trace of every AI decision for compliance and continuous improvement." },
              ].map(item => (
                <li key={item.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded bg-violet-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Eye className="w-4 h-4 text-violet-600" />
                  </div>
                  <div>
                    <p className="font-bold text-brand-primary text-base">{item.title}</p>
                    <p className="text-slate-500 text-sm mt-1">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/services/ai-automation">
              <Button className="bg-brand-primary text-white hover:bg-slate-800 rounded h-11 px-6 font-bold border-none transition-all hover:scale-[1.03]">
                Explore AI Capabilities <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ S7: CORE CAPABILITIES — 6 SERVICE CARDS ═══════════════ */}
      <Section className="bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-accent/15 rounded-full blur-[100px]" />
        </div>

        <div className="relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading">Everything you need to automate at scale</h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto text-base">Six integrated capability layers that cover every automation need across your enterprise.</p>
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICE_CATEGORIES.map((cat, i) => (
              <motion.div key={cat.title} variants={fadeUp} custom={i}>
                <Link href={cat.href} className="block h-full">
                  <div className={`h-full bg-white/[0.05] backdrop-blur-sm border border-white/10 rounded p-7 group hover:bg-white/[0.08] hover:border-white/20 transition-all duration-300 hover:shadow-xl`}>
                    <div className={`w-12 h-12 rounded bg-gradient-to-br ${cat.color} flex items-center justify-center mb-5`}>
                      <cat.icon className={`w-5 h-5 ${cat.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 font-heading">{cat.title}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed mb-4">{cat.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-brand-accent">{cat.stats}</span>
                      <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ S8: SOLUTIONS — TABBED BY FUNCTION ═══════════════ */}
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Solutions</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Automation tailored to your department</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base">Purpose-built solutions for the teams that need them most.</p>
        </motion.div>

        {/* Tab bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SOLUTIONS.map(s => (
            <button
              key={s.id}
              onClick={() => setActiveSolution(s.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded text-sm font-bold transition-all duration-200 ${activeSolution === s.id ? 'bg-brand-primary text-white shadow-lg' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}`}
            >
              <s.icon className="w-4 h-4" />
              {s.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSolution}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            <div>
              <h3 className="text-2xl font-bold text-brand-primary mb-6 font-heading">{currentSolution.headline}</h3>

              <div className="mb-8">
                <p className="text-xs font-bold tracking-wider text-red-500/80 uppercase mb-3">Common Challenges</p>
                <ul className="space-y-3">
                  {currentSolution.problems.map(p => (
                    <li key={p} className="flex gap-3 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 mt-2" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>

              <Link href={currentSolution.href}>
                <Button className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-12 px-8 font-bold transition-all hover:scale-[1.03] border-none">
                  Explore {currentSolution.label} Solutions <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100 rounded p-8">
              <p className="text-xs font-bold tracking-wider text-emerald-600 uppercase mb-4">Business Outcomes</p>
              <ul className="space-y-4">
                {currentSolution.outcomes.map(o => (
                  <li key={o} className="flex gap-3">
                    <div className="w-8 h-8 rounded bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-base font-medium text-brand-primary">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </Section>

      {/* ═══════════════ S9: CUSTOMER STORIES ═══════════════ */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Case Studies</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Trusted by industry leaders</h2>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {CASE_STUDIES.map((cs, i) => (
            <motion.div key={cs.company} variants={fadeUp} custom={i} className="bg-white border border-slate-200 rounded overflow-hidden group hover:shadow-lg hover:border-brand-accent/20 transition-all duration-300">
              <div className="p-7">
                <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">{cs.industry}</span>
                <h4 className="text-lg font-bold text-brand-primary mt-2 mb-1 font-heading">{cs.company}</h4>
                <p className="text-sm text-slate-500 italic mb-5">&quot;{cs.quote}&quot;</p>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="text-3xl font-extrabold text-brand-primary font-heading">{cs.metric}</span>
                  <span className="text-sm text-slate-500">{cs.metricLabel}</span>
                </div>
                <p className="text-sm font-medium text-emerald-600">{cs.result}</p>
              </div>
              <div className="px-7 py-4 bg-slate-50 border-t border-slate-100">
                <Link href="/customers" className="text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors cursor-pointer inline-flex items-center gap-1">
                  Read full story <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Section>

      {/* ═══════════════ S10: ROI CALCULATOR TEASER ═══════════════ */}
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-gradient-to-br from-brand-primary via-slate-800 to-slate-900 rounded p-10 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-1/4 w-[300px] h-[300px] bg-brand-accent/20 rounded-full blur-[80px]" />
          </div>
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center text-left">
              {/* Left — Calculator UI */}
              <div>
                <div className="bg-white/[0.06] border border-white/10 rounded p-6 space-y-5">
                  <div>
                    <label className="text-xs font-bold text-slate-400 mb-2.5 block">Department</label>
                    <div className="flex flex-wrap gap-2">
                      {["Finance", "HR", "Sales", "Operations", "Support"].map(dept => (
                        <button key={dept} className="px-4 py-2.5 rounded text-sm font-semibold transition-all first:bg-brand-accent first:text-brand-primary bg-white/10 text-white/80 border border-white/10 hover:bg-white/20">{dept}</button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="roi-users" className="text-xs font-bold text-slate-400 mb-2 block">Team Size</label>
                    <input id="roi-users" type="number" defaultValue={50} className="w-full px-4 py-3 rounded bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                  </div>
                  <div>
                    <label htmlFor="roi-hours" className="text-xs font-bold text-slate-400 mb-2 block">Manual Hours/Week</label>
                    <input id="roi-hours" type="number" defaultValue={200} className="w-full px-4 py-3 rounded bg-white/10 border border-white/10 text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50" />
                  </div>
                  {/* Visual output preview */}
                  <div className="border-t border-white/10 pt-5 space-y-3">
                    <p className="text-xs font-bold text-brand-accent uppercase tracking-wider">Estimated Annual Impact</p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-white/[0.05] rounded p-3 text-center">
                        <p className="text-2xl font-extrabold text-white font-heading">$1.2M</p>
                        <p className="text-[10px] text-slate-500 mt-1">Cost Savings</p>
                      </div>
                      <div className="bg-white/[0.05] rounded p-3 text-center">
                        <p className="text-2xl font-extrabold text-emerald-400 font-heading">3.2x</p>
                        <p className="text-[10px] text-slate-500 mt-1">ROI</p>
                      </div>
                      <div className="bg-white/[0.05] rounded p-3 text-center">
                        <p className="text-2xl font-extrabold text-white font-heading">6,500</p>
                        <p className="text-[10px] text-slate-500 mt-1">Hours Saved</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Right — Content */}
              <div>
                <div className="w-16 h-16 rounded bg-brand-accent/20 flex items-center justify-center mb-6">
                  <BarChart3 className="w-7 h-7 text-brand-accent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-heading">Estimate your automation ROI</h2>
                <p className="text-slate-400 mb-6 text-base leading-relaxed">Our enterprise customers see an average 3.2x return within the first year. See what automation can save your organization.</p>
                <ul className="space-y-3 mb-8">
                  {["Calculates based on your actual team size and workflows", "Factors in industry benchmarks from 500+ deployments", "Includes implementation and training costs"].map(item => (
                    <li key={item} className="flex items-center gap-3 text-sm text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-12 px-8 font-bold transition-all hover:scale-[1.03] border-none">
                  Get Full ROI Report <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </Section>

      {/* ═══════════════ S11: DEVELOPER SNAPSHOT ═══════════════ */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionLabel>Developer Platform</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading mb-6">Ship your first automation in minutes</h2>
            <p className="text-slate-500 text-base mb-8 leading-relaxed">
              Full REST API, native SDKs for Node.js and Python, comprehensive webhooks, and a sandbox environment to test everything before production.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {["OpenAPI 3.0", "Node.js SDK", "Python SDK", "Webhooks", "Sandbox"].map(t => (
                <span key={t} className="bg-white border border-slate-200 rounded px-3 py-1.5 text-xs font-bold text-slate-600">{t}</span>
              ))}
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/developers">
                <Button className="bg-brand-primary text-white hover:bg-slate-800 rounded h-11 px-6 font-bold border-none transition-all hover:scale-[1.03]">
                  Open API Docs <ExternalLink className="ml-2 w-3.5 h-3.5" />
                </Button>
              </Link>
              <Link href="/sandbox">
                <Button variant="outline" className="rounded h-11 px-6 font-bold border-slate-300 hover:bg-slate-100 transition-all">
                  Start Sandbox
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <div className="relative">
              <div className="bg-[#0d1117] rounded overflow-hidden border border-slate-800 shadow-2xl">
                <div className="flex items-center justify-between px-5 py-3 border-b border-white/10 bg-white/[0.03]">
                  <span className="text-xs text-slate-500 font-mono">quickstart.ts</span>
                  <button onClick={handleCopy} className="flex items-center gap-1 text-xs text-slate-500 hover:text-white transition-colors">
                    {copied ? <><Check className="w-3 h-3 text-emerald-400" /> Copied</> : <><Copy className="w-3 h-3" /> Copy</>}
                  </button>
                </div>
                <pre className="p-6 text-sm text-gray-300 font-mono overflow-x-auto leading-relaxed">
                  <code>
                    <span className="text-pink-400">import</span> {"{ sTechWise }"} <span className="text-pink-400">from</span> <span className="text-green-300">&quot;@stechwise/node&quot;</span>;{"\n\n"}
                    <span className="text-pink-400">const</span> client = <span className="text-pink-400">new</span> sTechWise(process.env.STECHWISE_KEY);{"\n\n"}
                    <span className="text-gray-500">// Trigger an enterprise workflow</span>{"\n"}
                    <span className="text-pink-400">await</span> client.workflows.<span className="text-blue-300">trigger</span>({"{\n"}
                    {"  "}id: <span className="text-green-300">&quot;enterprise-onboarding&quot;</span>,{"\n"}
                    {"  "}audience: <span className="text-green-300">&quot;technical-buyers&quot;</span>{"\n"}
                    {"}"});
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ S12: SECURITY & COMPLIANCE ═══════════════ */}
      <Section>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
          <SectionLabel>Trust & Security</SectionLabel>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Built for the most regulated industries</h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-base">Enterprise-grade security is not an add-on — it&apos;s the foundation of every feature we ship.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left — Compliance Dashboard Mockup */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="lg:col-span-2">
            <div className="bg-[#0d1117] border border-slate-800 rounded overflow-hidden shadow-2xl h-full">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.03]">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-slate-400 font-mono">Compliance Dashboard</span>
              </div>
              <div className="p-5 space-y-4">
                {[
                  { label: "SOC 2 Type II", status: "Active", date: "Renewed Mar 2026", color: "text-emerald-400", bg: "bg-emerald-400" },
                  { label: "GDPR Compliance", status: "Active", date: "Last audit: Feb 2026", color: "text-emerald-400", bg: "bg-emerald-400" },
                  { label: "HIPAA Ready", status: "Active", date: "BAA on file", color: "text-emerald-400", bg: "bg-emerald-400" },
                  { label: "Data Residency", status: "3 regions", date: "US, EU, APAC", color: "text-blue-400", bg: "bg-blue-400" },
                ].map(item => (
                  <div key={item.label} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                    <div>
                      <p className="text-sm font-bold text-white">{item.label}</p>
                      <p className="text-xs text-slate-500 mt-0.5">{item.date}</p>
                    </div>
                    <span className={`text-xs font-bold ${item.color} ${item.bg}/10 px-2 py-1 rounded`}>{item.status}</span>
                  </div>
                ))}
                <div className="pt-2">
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-slate-500">Overall compliance score</span>
                    <span className="font-bold text-emerald-400">98.7%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full w-[98.7%] bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Badge Grid */}
          <div className="lg:col-span-3">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { icon: Shield, label: "SOC 2 Type II", sub: "Certified" },
                { icon: Lock, label: "TLS 1.3", sub: "End-to-end" },
                { icon: Globe2, label: "GDPR", sub: "Compliant" },
                { icon: Target, label: "SSO / SAML", sub: "Enterprise" },
                { icon: Briefcase, label: "Data Residency", sub: "Configurable" },
                { icon: Zap, label: "99.99% SLA", sub: "Guaranteed" },
              ].map((badge, i) => (
                <motion.div key={badge.label} variants={fadeUp} custom={i} className="border border-slate-200 rounded p-5 text-center hover:border-brand-accent/20 hover:shadow-md transition-all duration-300 bg-white">
                  <badge.icon className="w-6 h-6 text-brand-primary mx-auto mb-3" />
                  <p className="text-sm font-bold text-brand-primary font-heading">{badge.label}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{badge.sub}</p>
                </motion.div>
              ))}
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mt-8">
              <Link href="/enterprise" className="inline-flex items-center gap-2 text-sm font-bold text-brand-primary hover:text-brand-accent transition-colors">
                View Security & Compliance Details <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* ═══════════════ S13: PRICING ENTRY TEASER ═══════════════ */}
      <Section className="bg-slate-50 border-y border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <SectionLabel>Pricing</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading mb-6">Predictable pricing. No surprises.</h2>
            <p className="text-slate-500 text-base mb-8 leading-relaxed">
              Simple, transparent plans designed for enterprise scale. Volume discounts, custom SLAs, and dedicated support included.
            </p>
            <ul className="space-y-3 mb-8">
              {["Unlimited workflows and automations", "Enterprise SSO and role-based access", "Dedicated customer success manager", "Custom SLA and data residency options"].map(item => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                  <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing">
                <Button className="bg-brand-primary text-white hover:bg-slate-800 rounded h-11 px-6 font-bold border-none transition-all hover:scale-[1.03]">
                  View Plans & Pricing <ArrowRight className="ml-2 w-3.5 h-3.5" />
                </Button>
              </Link>
              <Button onClick={openDemoModal} variant="outline" className="rounded h-11 px-6 font-bold border-slate-300 hover:bg-slate-100 transition-all">
                Request Custom Pricing
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={2} className="hidden lg:block">
            <div className="grid grid-cols-2 gap-4">
              {[
                { plan: "Business", price: "Custom", features: ["Up to 500 users", "Priority support", "Standard SLA"] },
                { plan: "Enterprise", price: "Custom", features: ["Unlimited users", "Dedicated CSM", "Custom SLA"], featured: true },
              ].map(p => (
                <div key={p.plan} className={`rounded p-6 border ${p.featured ? 'bg-brand-primary text-white border-brand-primary' : 'bg-white border-slate-200'}`}>
                  <p className="text-xs font-bold tracking-wider uppercase mb-4 opacity-60">{p.plan}</p>
                  <p className={`text-2xl font-extrabold font-heading mb-4 ${p.featured ? 'text-brand-accent' : 'text-brand-primary'}`}>{p.price}</p>
                  <ul className="space-y-2">
                    {p.features.map(f => (
                      <li key={f} className={`flex items-center gap-2 text-sm ${p.featured ? 'text-slate-300' : 'text-slate-500'}`}>
                        <Check className={`w-3.5 h-3.5 ${p.featured ? 'text-brand-accent' : 'text-emerald-500'}`} />{f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ═══════════════ S14: FINAL CTA ═══════════════ */}
      <section className="relative bg-brand-primary overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-accent/10 rounded-full blur-[120px]" />
        </div>
        <div className="mx-auto max-w-4xl px-6 lg:px-8 py-24 lg:py-32 text-center relative z-10">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight font-heading mb-6">
              Ready to automate at enterprise scale?
            </h2>
            <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
              Join hundreds of enterprises that trust sTechWise to orchestrate their most critical business processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-14 px-10 text-lg font-bold transition-all shadow-xl shadow-brand-accent/20 hover:scale-[1.03] active:scale-[0.98] border-none">
                Request Enterprise Demo
              </Button>
              <Link href="/sandbox">
                <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded h-14 px-10 text-lg font-bold transition-all hover:scale-[1.03] active:scale-[0.98]">
                  Start Sandbox Free
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5"><Shield className="w-3.5 h-3.5" /> SOC 2 Type II</span>
              <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> 90-day time-to-value</span>
              <span className="flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> 99.99% uptime SLA</span>
            </div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
