"use client";

import { motion, type Variants } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
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

export interface SolutionWorkflow {
    step: string;
    desc: string;
}

export interface SolutionPageProps {
    badge: string;
    headline: string;
    subheadline: string;
    icon: LucideIcon;
    problems: string[];
    workflows: SolutionWorkflow[];
    outcomes: { metric: string; label: string }[];
    testimonial: { quote: string; author: string; role: string; company: string };
    accentColor: string;
    accentBg: string;
}

export function SolutionPageTemplate({
    badge, headline, subheadline, icon: Icon, problems, workflows, outcomes, testimonial, accentColor, accentBg
}: SolutionPageProps) {
    const { openDemoModal } = useDemoModal();

    return (
        <main className="relative">
            {/* ── HERO ── */}
            <section className="relative bg-brand-primary pt-40 pb-24 px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-[120px]" />
                </div>
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                        <div className={`w-16 h-16 rounded ${accentBg} flex items-center justify-center mx-auto mb-6`}>
                            <Icon className={`w-7 h-7 ${accentColor}`} />
                        </div>
                        <span className={`inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading`}>{badge}</span>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-[1.08] tracking-tight mb-6 font-heading">{headline}</h1>
                        <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-10">{subheadline}</p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-13 px-8 font-bold transition-all hover:scale-[1.03] border-none shadow-xl">
                                Request a Tailored Demo <ArrowRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ── CHALLENGES ── */}
            <section className="py-24 px-6 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-red-500 mb-4 font-heading">Common Challenges</span>
                            <h2 className="text-3xl font-bold text-brand-primary tracking-tight font-heading mb-8">Sound familiar?</h2>
                            <ul className="space-y-5">
                                {problems.map(p => (
                                    <li key={p} className="flex gap-4">
                                        <div className="w-8 h-8 rounded bg-red-50 flex items-center justify-center shrink-0 mt-0.5">
                                            <div className="w-2 h-2 rounded-full bg-red-400" />
                                        </div>
                                        <p className="text-base text-slate-600">{p}</p>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} custom={3}>
                            <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-emerald-600 mb-4 font-heading">How sTechWise Helps</span>
                            <h2 className="text-3xl font-bold text-brand-primary tracking-tight font-heading mb-8">Automated workflows</h2>
                            <ul className="space-y-5">
                                {workflows.map((w, i) => (
                                    <li key={w.step} className="flex gap-4">
                                        <div className="w-8 h-8 rounded bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5 text-sm font-bold text-emerald-600">
                                            {i + 1}
                                        </div>
                                        <div>
                                            <p className="font-bold text-brand-primary text-base">{w.step}</p>
                                            <p className="text-sm text-slate-500 mt-1">{w.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── OUTCOMES ── */}
            <section className="py-24 px-6 lg:px-8 bg-slate-50 border-y border-slate-100">
                <div className="mx-auto max-w-7xl">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
                        <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">Results</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight font-heading">What our customers achieve</h2>
                    </motion.div>
                    <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {outcomes.map((o, i) => (
                            <motion.div key={o.label} variants={fadeUp} custom={i} className="text-center">
                                <p className="text-4xl font-extrabold text-brand-primary font-heading">{o.metric}</p>
                                <p className="text-sm text-slate-500 mt-2">{o.label}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ── TESTIMONIAL ── */}
            <section className="py-24 px-6 lg:px-8">
                <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
                    <div className="text-5xl text-brand-accent mb-6 font-heading">&ldquo;</div>
                    <p className="text-xl md:text-2xl text-brand-primary font-medium leading-relaxed mb-8 italic">{testimonial.quote}</p>
                    <p className="font-bold text-brand-primary">{testimonial.author}</p>
                    <p className="text-sm text-slate-500">{testimonial.role}, {testimonial.company}</p>
                </motion.div>
            </section>

            {/* ── CTA ── */}
            <section className="bg-brand-primary py-24 px-6 lg:px-8 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-accent/20 rounded-full blur-[100px]" />
                </div>
                <div className="mx-auto max-w-4xl text-center relative z-10">
                    <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight font-heading mb-6">See how sTechWise can transform your {badge.toLowerCase()}</h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button onClick={openDemoModal} className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-14 px-10 text-lg font-bold transition-all shadow-xl hover:scale-[1.03] border-none">
                                Request a Tailored Demo
                            </Button>
                            <Link href="/services">
                                <Button variant="outline" className="border-white/20 bg-transparent hover:bg-white/10 text-white rounded h-14 px-10 text-lg font-bold transition-all">
                                    Explore All Services
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </main>
    );
}
