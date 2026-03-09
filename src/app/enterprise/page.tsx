"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Globe2, FileText, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Enterprise() {
    const { openDemoModal } = useDemoModal();
    return (
        <main className="relative min-h-screen bg-brand-bg text-brand-primary pt-40 pb-20 overflow-hidden">
            <div className="bg-gradient-to-b from-brand-bg to-slate-50 absolute inset-0 pointer-events-none -z-10"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-white text-sm font-bold tracking-wide uppercase mb-6"
                    >
                        Global Compliance
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-heading"
                    >
                        Trust at <span className="text-brand-accent">Scale.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 font-medium mb-10"
                    >
                        sTechWise is architected from the ground up to meet the strict security, compliance, and privacy requirements of Fortune 500 companies.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        <Button onClick={openDemoModal} size="lg" className="rounded bg-brand-primary text-white hover:bg-slate-800 border-none font-bold px-10 shadow-xl transition-transform hover:scale-105">
                            Contact Procurement
                        </Button>
                    </motion.div>
                </div>

                {/* Security Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">

                    <div className="feature-card p-8 text-center bg-white">
                        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm"><ShieldCheck className="w-8 h-8" /></div>
                        <h3 className="font-bold font-heading text-xl mb-3">SOC 2 Type II</h3>
                        <p className="text-sm text-slate-500">Audited annually by independent third parties for strict adherence to trust criteria.</p>
                    </div>

                    <div className="feature-card p-8 text-center bg-white border-brand-accent shadow-lg shadow-brand-accent/5 -translate-y-2">
                        <div className="w-16 h-16 mx-auto bg-brand-accent/10 rounded-full flex items-center justify-center mb-6 text-brand-accent shadow-sm"><Lock className="w-8 h-8" /></div>
                        <h3 className="font-bold font-heading text-xl mb-3">End-to-End Encryption</h3>
                        <p className="text-sm text-slate-500">All data is encrypted in transit (TLS 1.3) and at rest (AES-256) by default.</p>
                    </div>

                    <div className="feature-card p-8 text-center bg-white">
                        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm"><Globe2 className="w-8 h-8" /></div>
                        <h3 className="font-bold font-heading text-xl mb-3">Data Residency</h3>
                        <p className="text-sm text-slate-500">Host your tenant exclusively on US, EU, or APAC regional infrastructure.</p>
                    </div>

                    <div className="feature-card p-8 text-center bg-white">
                        <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center mb-6 text-brand-primary shadow-sm"><FileText className="w-8 h-8" /></div>
                        <h3 className="font-bold font-heading text-xl mb-3">GDPR & CCPA</h3>
                        <p className="text-sm text-slate-500">Full compliance programs, DPAs, and automated data subject request tools built-in.</p>
                    </div>

                </div>

                {/* CTA Section */}
                <section className="text-center">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                        <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-6 font-heading">Ready to see enterprise-grade security in action?</h2>
                        <p className="text-xl text-slate-600 font-medium mb-10 max-w-2xl mx-auto">Our security team will walk you through our compliance infrastructure, data architecture, and custom deployment options.</p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <Button onClick={openDemoModal} size="lg" className="rounded bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none font-bold px-10 shadow-xl transition-transform hover:scale-105">
                                Request Security Review <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button onClick={openDemoModal} size="lg" variant="outline" className="rounded font-bold px-10 border-slate-300 hover:bg-slate-50 transition-transform hover:scale-105">
                                Contact Procurement
                            </Button>
                        </div>
                    </motion.div>
                </section>

            </div>
        </main>
    );
}
