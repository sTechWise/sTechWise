"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Heart, ShoppingCart, Landmark, Factory, Headphones } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

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

const STORIES = [
    {
        company: "GlobalFinance Corp",
        industry: "Financial Services",
        industryIcon: Landmark,
        result: "80% faster invoice processing",
        metric: "$4.2M",
        metricLabel: "Annual savings",
        quote: "sTechWise transformed our entire accounts payable workflow in 90 days. The AI classification alone eliminated 30 hours of weekly manual work.",
        person: "Sarah Chen",
        role: "CFO",
        challenge: "Manual invoice processing across 12 regional offices with inconsistent data formats.",
        solution: "AI-powered document extraction + automated 3-way matching + ERP integration.",
        timeline: "90-day deployment",
    },
    {
        company: "MedTech Health Systems",
        industry: "Healthcare",
        industryIcon: Heart,
        result: "70% reduction in compliance overhead",
        metric: "99.9%",
        metricLabel: "Compliance accuracy",
        quote: "We went from weeks of manual audit prep to automated, real-time compliance. HIPAA documentation is now effortless.",
        person: "Dr. Rachel Kim",
        role: "Chief Medical Officer",
        challenge: "Manual compliance documentation and audit preparation consuming 200+ staff hours monthly.",
        solution: "Automated HIPAA audit trails + continuous compliance monitoring + regulatory report generation.",
        timeline: "120-day deployment",
    },
    {
        company: "RetailEdge Group",
        industry: "Retail & E-Commerce",
        industryIcon: ShoppingCart,
        result: "3x faster order fulfillment",
        metric: "55%",
        metricLabel: "Cost reduction",
        quote: "Our supply chain automation paid for itself within the first quarter. Inventory accuracy went from 85% to 99.2%.",
        person: "Maria Santos",
        role: "COO",
        challenge: "Fragmented inventory across 200+ stores with manual reconciliation and frequent stockouts.",
        solution: "Real-time inventory sync + AI demand forecasting + automated vendor reordering.",
        timeline: "60-day deployment",
    },
    {
        company: "Apex Manufacturing",
        industry: "Operations",
        industryIcon: Factory,
        result: "45% reduction in production downtime",
        metric: "2.8x",
        metricLabel: "ROI in Year 1",
        quote: "Predictive maintenance alone saved us $1.2M in the first year. The IoT data pipeline integration was seamless.",
        person: "Robert Zhang",
        role: "VP of Operations",
        challenge: "Reactive maintenance causing unplanned downtime and missed production targets.",
        solution: "IoT sensor integration + predictive maintenance models + automated work order generation.",
        timeline: "90-day deployment",
    },
    {
        company: "Pinnacle Insurance",
        industry: "Financial Services",
        industryIcon: Landmark,
        result: "85% faster claims processing",
        metric: "12 min",
        metricLabel: "Avg claim resolution",
        quote: "Claims that took 3 weeks now resolve in minutes. Customer satisfaction scores increased 40 points.",
        person: "Jennifer Park",
        role: "Head of Claims",
        challenge: "Manual claims intake, verification, and adjudication causing 3-week average resolution time.",
        solution: "AI document extraction + automated fraud detection + straight-through processing for eligible claims.",
        timeline: "75-day deployment",
    },
    {
        company: "TalentVault HR",
        industry: "Enterprise",
        industryIcon: Building2,
        result: "Employee onboarding in 48 hours",
        metric: "92%",
        metricLabel: "New hire satisfaction",
        quote: "What used to take 3 weeks of coordination across 6 departments now happens automatically in 2 days.",
        person: "David Okafor",
        role: "CHRO",
        challenge: "Onboarding required manual coordination across IT, HR, Finance, Legal, Facilities, and Security.",
        solution: "Cross-department workflow orchestration + automated provisioning + progress tracking dashboard.",
        timeline: "45-day deployment",
    },
];

const INDUSTRIES = ["All", "Financial Services", "Healthcare", "Retail & E-Commerce", "Operations", "Enterprise"];

export default function CustomerStories() {
    const { openDemoModal } = useDemoModal();
    const [filter, setFilter] = useState("All");

    const filtered = filter === "All" ? STORIES : STORIES.filter(s => s.industry === filter);

    return (
        <main className="relative">
            {/* ── HERO ── */}
            <section className="relative bg-brand-primary pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/15 rounded-full blur-[100px]" />
                </div>
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Customer Stories</span>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 font-heading">
                            Real results from real enterprises
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                            See how industry leaders use sTechWise to automate complex workflows, reduce costs, and accelerate growth.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── FILTER BAR ── */}
            <div className="bg-slate-50 border-b border-slate-200 py-4 px-6 lg:px-8 sticky top-0 z-30">
                <div className="mx-auto max-w-7xl flex flex-wrap justify-center gap-2">
                    {INDUSTRIES.map(ind => (
                        <button
                            key={ind}
                            onClick={() => setFilter(ind)}
                            className={`px-4 py-2 rounded text-sm font-bold transition-all ${filter === ind ? 'bg-brand-primary text-white shadow-md' : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'}`}
                        >
                            {ind}
                        </button>
                    ))}
                </div>
            </div>

            {/* ── STORIES GRID ── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filtered.map((story, i) => (
                            <motion.div key={story.company} variants={fadeUp} custom={i} className="border border-slate-200 rounded bg-white overflow-hidden hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 group flex flex-col">
                                {/* Header */}
                                <div className="bg-brand-primary p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <story.industryIcon className="w-4 h-4 text-brand-accent" />
                                        <span className="text-xs font-bold text-brand-accent">{story.industry}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white font-heading mb-1">{story.company}</h3>
                                    <p className="text-sm text-slate-300">{story.result}</p>
                                </div>
                                {/* Metric */}
                                <div className="flex items-center gap-4 p-6 border-b border-slate-100">
                                    <div>
                                        <p className="text-3xl font-extrabold text-brand-primary font-heading">{story.metric}</p>
                                        <p className="text-xs text-slate-500 font-medium">{story.metricLabel}</p>
                                    </div>
                                    <div className="w-px h-10 bg-slate-200" />
                                    <div>
                                        <p className="text-xs text-slate-500">{story.timeline}</p>
                                    </div>
                                </div>
                                {/* Content */}
                                <div className="p-6 flex-1 flex flex-col">
                                    <div className="mb-4">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Challenge</p>
                                        <p className="text-sm text-slate-600">{story.challenge}</p>
                                    </div>
                                    <div className="mb-6">
                                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Solution</p>
                                        <p className="text-sm text-slate-600">{story.solution}</p>
                                    </div>
                                    {/* Quote */}
                                    <div className="mt-auto pt-4 border-t border-slate-100">
                                        <p className="text-sm text-slate-600 italic mb-3">&ldquo;{story.quote}&rdquo;</p>
                                        <p className="text-sm font-bold text-brand-primary">{story.person}</p>
                                        <p className="text-xs text-slate-500">{story.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-brand-primary py-24 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/20 rounded-full blur-[100px]" />
                </div>
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading mb-6">
                            Ready to write your success story?
                        </h2>
                        <p className="text-slate-300 mb-10 text-base max-w-xl mx-auto">
                            Join 500+ enterprises that have transformed their operations with sTechWise.
                        </p>
                        <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-14 px-10 text-lg font-bold transition-all shadow-xl hover:scale-[1.03] border-none">
                            Request Enterprise Demo <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
