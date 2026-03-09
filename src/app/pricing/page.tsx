"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Pricing() {
    const [isAnnual, setIsAnnual] = useState(true);

    return (
        <main className="relative min-h-screen bg-brand-bg text-brand-primary pt-40 pb-20 overflow-hidden">
            <div className="dot-grid opacity-30 absolute inset-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Header & Toggle */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-8 font-heading"
                    >
                        Simple pricing for <br /><span className="text-brand-accent">complex scale.</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="flex items-center justify-center gap-4 mt-10"
                    >
                        <span className={`font-bold transition-colors ${!isAnnual ? "text-brand-primary" : "text-slate-400"}`}>Monthly</span>
                        <button
                            onClick={() => setIsAnnual(!isAnnual)}
                            className="w-16 h-8 rounded-full bg-slate-200 border border-slate-300 relative transition-colors focus:outline-none"
                        >
                            <motion.div
                                animate={{ x: isAnnual ? 32 : 0 }}
                                className="w-6 h-6 bg-brand-primary rounded-full absolute top-[3px] left-[4px] shadow-sm"
                            />
                        </button>
                        <span className={`font-bold transition-colors flex items-center gap-2 ${isAnnual ? "text-brand-primary" : "text-slate-400"}`}>
                            Annually <span className="text-xs bg-brand-accent/20 text-brand-primary px-2 py-1 rounded-full whitespace-nowrap">Save 20%</span>
                        </span>
                    </motion.div>
                </div>

                {/* Pricing Matrix (3-column Style) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

                    {/* Starter */}
                    <div className="feature-card p-10 bg-white flex flex-col pt-12">
                        <h3 className="text-2xl font-bold font-heading mb-2">Starter</h3>
                        <p className="text-slate-500 mb-6 text-sm">For small teams starting their first automation workflows.</p>
                        <div className="mb-8">
                            <span className="text-5xl font-black font-heading">${isAnnual ? "49" : "59"}</span>
                            <span className="text-slate-500 font-medium">/mo</span>
                        </div>
                        <Button variant="outline" className="w-full rounded h-12 font-bold mb-8 hover:bg-slate-50">Start Free Trial</Button>
                        <div className="space-y-4 flex-1">
                            <p className="font-bold text-sm text-brand-primary mb-4">Includes:</p>
                            {["Up to 10 active workflows", "10,000 events / month", "Standard Integrations", "Email Support"].map((f, i) => (
                                <div key={i} className="flex gap-3 text-sm text-slate-600"><Check className="w-5 h-5 text-slate-400 shrink-0" /> {f}</div>
                            ))}
                        </div>
                    </div>

                    {/* Business (Highlighted) */}
                    <div className="feature-card p-10 bg-white border-2 border-brand-accent shadow-xl shadow-brand-accent/10 flex flex-col relative transform md:-translate-y-4">
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-accent text-brand-primary font-bold text-xs uppercase tracking-widest px-4 py-1.5 rounded-full border border-yellow-300 shadow-sm">
                            Most Popular
                        </div>
                        <h3 className="text-2xl font-bold font-heading mb-2">Business</h3>
                        <p className="text-slate-500 mb-6 text-sm">For growing companies requiring deep data integrations and scale.</p>
                        <div className="mb-8">
                            <span className="text-5xl font-black font-heading">${isAnnual ? "249" : "299"}</span>
                            <span className="text-slate-500 font-medium">/mo</span>
                        </div>
                        <Button className="w-full rounded h-12 font-bold mb-8 bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none shadow-md shadow-brand-accent/20">Upgrade to Business</Button>
                        <div className="space-y-4 flex-1">
                            <p className="font-bold text-sm text-brand-primary mb-4">Everything in Starter, plus:</p>
                            {["Unlimited workflows", "1,000,000 events / month", "Advanced Branching Logic", "Custom Webhooks", "Priority Support"].map((f, i) => (
                                <div key={i} className="flex gap-3 text-sm text-slate-600 font-medium"><Check className="w-5 h-5 text-brand-accent shrink-0" /> {f}</div>
                            ))}
                        </div>
                    </div>

                    {/* Enterprise */}
                    <div className="feature-card p-10 bg-slate-900 border-none text-white flex flex-col pt-12">
                        <h3 className="text-2xl font-bold font-heading mb-2">Enterprise</h3>
                        <p className="text-slate-400 mb-6 text-sm">For highly regulated organizations needing extreme scale and compliance.</p>
                        <div className="mb-8 h-[60px] flex items-center">
                            <span className="text-4xl font-black font-heading">Custom</span>
                        </div>
                        <Button variant="outline" className="w-full rounded h-12 font-bold mb-8 bg-white/10 border-white/20 text-white hover:bg-white/20">Contact Sales</Button>
                        <div className="space-y-4 flex-1">
                            <p className="font-bold text-sm text-white mb-4">Everything in Business, plus:</p>
                            {["Unlimited volume", "SOC 2 Type II Compliance", "Data Residency Controls", "Dedicated Success Manager", "SAML SSO / SCIM"].map((f, i) => (
                                <div key={i} className="flex gap-3 text-sm text-slate-300"><Check className="w-5 h-5 text-slate-500 shrink-0" /> {f}</div>
                            ))}
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
