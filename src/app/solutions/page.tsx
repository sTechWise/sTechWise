"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, Users, TrendingUp, Headphones, Factory } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import Link from "next/link";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1, y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    })
};

const stagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
};

const solutions = [
    {
        icon: DollarSign, label: "Finance Automation", href: "/solutions/finance",
        desc: "Automate invoice processing, reconciliation, compliance reporting, and financial close workflows.",
        metric: "80% faster invoice processing", color: "text-emerald-600", bg: "bg-emerald-50"
    },
    {
        icon: Users, label: "HR Automation", href: "/solutions/hr",
        desc: "Streamline onboarding, payroll integration, compliance tracking, and employee lifecycle management.",
        metric: "48-hour onboarding", color: "text-blue-600", bg: "bg-blue-50"
    },
    {
        icon: TrendingUp, label: "Sales Automation", href: "/solutions/sales",
        desc: "Accelerate pipeline velocity with intelligent lead routing, CRM automation, and deal acceleration.",
        metric: "2x pipeline velocity", color: "text-violet-600", bg: "bg-violet-50"
    },
    {
        icon: Headphones, label: "Customer Support", href: "/solutions/customer-support",
        desc: "AI-powered ticket routing, automated L1 resolution, and intelligent escalation for 24/7 coverage.",
        metric: "70% L1 auto-resolved", color: "text-sky-600", bg: "bg-sky-50"
    },
    {
        icon: Factory, label: "Operations", href: "/solutions/operations",
        desc: "Supply chain orchestration, procurement automation, predictive planning, and operational intelligence.",
        metric: "45% cost reduction", color: "text-orange-600", bg: "bg-orange-50"
    },
];

export default function SolutionsHub() {
    const { openDemoModal } = useDemoModal();

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
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Solutions by Department</span>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 font-heading">
                            Automation tailored to your business function
                        </h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">
                            Every department has unique automation opportunities. Discover how sTechWise delivers measurable ROI across finance, HR, sales, support, and operations.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* ── SOLUTION CARDS ── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {solutions.map((sol, i) => (
                            <motion.div key={sol.href} variants={fadeUp} custom={i}>
                                <Link href={sol.href} className="block border border-slate-200 rounded bg-white p-8 hover:shadow-xl hover:border-brand-accent/20 transition-all duration-300 group h-full">
                                    <div className={`w-14 h-14 rounded ${sol.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                        <sol.icon className={`w-6 h-6 ${sol.color}`} />
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-primary mb-3 font-heading group-hover:text-brand-accent transition-colors">{sol.label}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed mb-6">{sol.desc}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-brand-primary">{sol.metric}</span>
                                        <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-brand-accent group-hover:translate-x-1 transition-all" />
                                    </div>
                                </Link>
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
                            Not sure where to start?
                        </h2>
                        <p className="text-slate-300 mb-10 text-base max-w-xl mx-auto">
                            Our automation architects will assess your workflows and recommend the highest-impact automation opportunities for your organization.
                        </p>
                        <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-14 px-10 text-lg font-bold transition-all shadow-xl hover:scale-[1.03] border-none">
                            Request Enterprise Demo
                        </Button>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
