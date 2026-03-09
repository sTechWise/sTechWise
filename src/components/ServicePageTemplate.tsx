"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

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

export interface ServiceCapability {
    icon: LucideIcon;
    title: string;
    desc: string;
}

export interface ServiceUseCase {
    title: string;
    desc: string;
    industry: string;
}

export interface ServiceOutcome {
    metric: string;
    label: string;
}

export interface ServicePageProps {
    badge: string;
    headline: string;
    subheadline: string;
    overview: string[];
    capabilities: ServiceCapability[];
    useCases: ServiceUseCase[];
    outcomes: ServiceOutcome[];
    relatedServices?: { label: string; href: string }[];
    accentColor: string;
    accentBg: string;
}

export function ServicePageTemplate({
    badge, headline, subheadline, overview, capabilities, useCases, outcomes, relatedServices, accentColor, accentBg
}: ServicePageProps) {
    const { openDemoModal } = useDemoModal();

    return (
        <main className="relative">
            {/* ─── HERO ─── */}
            <section className="relative bg-brand-primary pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
                    <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-accent/15 rounded-full blur-[100px]" />
                </div>
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <span className={`inline-block text-[11px] font-bold tracking-[0.2em] uppercase ${accentColor} mb-4 font-heading`}>{badge}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-white leading-[1.08] tracking-tight mb-6 font-heading">{headline}</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{subheadline}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-13 px-8 font-bold transition-all hover:scale-[1.03] border-none shadow-xl">
                                Request Enterprise Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                            <Button onClick={openDemoModal} variant="outline" className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded h-13 px-8 font-bold transition-all">
                                Talk to an Expert
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ─── OVERVIEW ─── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Overview</span>
                        {overview.map((p, i) => (
                            <p key={i} className={`text-base text-slate-600 leading-relaxed ${i < overview.length - 1 ? "mb-4" : ""}`}>{p}</p>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CAPABILITIES GRID ─── */}
            <section className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Capabilities</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">What you can automate</h2>
                    </motion.div>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {capabilities.map((cap, i) => (
                            <motion.div key={cap.title} variants={fadeUp} custom={i} className="bg-white border border-slate-200 rounded p-7 group hover:border-brand-accent/20 hover:shadow-lg transition-all duration-300">
                                <div className={`w-12 h-12 rounded ${accentBg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                                    <cap.icon className={`w-5 h-5 ${accentColor}`} />
                                </div>
                                <h3 className="text-lg font-bold text-brand-primary mb-2 font-heading">{cap.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{cap.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── USE CASES ─── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Use Cases</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">Real business applications</h2>
                    </motion.div>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {useCases.map((uc, i) => (
                            <motion.div key={uc.title} variants={fadeUp} custom={i} className="border border-slate-200 rounded overflow-hidden bg-white hover:shadow-lg transition-all duration-300">
                                <div className={`${accentBg} px-7 py-4 border-b border-slate-100`}>
                                    <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">{uc.industry}</span>
                                </div>
                                <div className="p-7">
                                    <h4 className="text-lg font-bold text-brand-primary mb-3 font-heading">{uc.title}</h4>
                                    <p className="text-sm text-slate-500 leading-relaxed">{uc.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── BUSINESS OUTCOMES ─── */}
            <section className="py-24 px-6 lg:px-8 bg-brand-primary relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-brand-accent/20 rounded-full blur-[100px]" />
                </div>
                <div className="mx-auto max-w-7xl relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Business Outcomes</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading">Measurable impact from day one</h2>
                    </motion.div>

                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {outcomes.map((o, i) => (
                            <motion.div key={o.label} variants={fadeUp} custom={i} className="text-center">
                                <p className="text-4xl md:text-5xl font-extrabold text-brand-accent font-heading tracking-tight">{o.metric}</p>
                                <p className="text-sm text-slate-400 mt-2">{o.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ─── CTA ─── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-4xl text-center">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading mb-6">Ready to get started?</h2>
                        <p className="text-slate-500 mb-10 max-w-xl mx-auto text-base">See how sTechWise can transform your automation strategy with a personalized demo.</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                            <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-14 px-10 text-lg font-bold transition-all shadow-xl hover:scale-[1.03] border-none">
                                Request Enterprise Demo
                            </Button>
                            <Button onClick={openDemoModal} variant="outline" className="rounded h-14 px-10 text-lg font-bold border-slate-300 hover:bg-slate-100 transition-all">
                                Talk to Automation Expert
                            </Button>
                        </div>
                        {relatedServices && relatedServices.length > 0 && (
                            <div className="border-t border-slate-100 pt-8">
                                <p className="text-xs font-bold tracking-wider text-slate-400 uppercase mb-4">Explore Related Services</p>
                                <div className="flex flex-wrap gap-3 justify-center">
                                    {relatedServices.map(rs => (
                                        <Link key={rs.href} href={rs.href} className="inline-flex items-center gap-1 text-sm font-medium text-brand-primary hover:text-brand-accent transition-colors bg-slate-50 border border-slate-200 rounded px-4 py-2">
                                            {rs.label} <ChevronRight className="w-3.5 h-3.5" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
