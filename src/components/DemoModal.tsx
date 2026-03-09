"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2 } from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";
import { Button } from "@/components/ui/button";

export function DemoModal() {
    const { isDemoModalOpen, closeDemoModal } = useDemoModal();

    return (
        <AnimatePresence>
            {isDemoModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 font-sans">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeDemoModal}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 300 }}
                        className="relative w-full max-w-5xl bg-white rounded shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
                    >
                        {/* Left Panel: Value Props */}
                        <div className="w-full md:w-5/12 bg-slate-50 p-10 md:p-14 border-r border-slate-100 flex flex-col justify-center relative overflow-hidden hidden md:flex">
                            {/* Decorative background circle */}
                            <div className="absolute top-0 left-0 w-64 h-64 bg-brand-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

                            <div className="relative z-10">
                                <h2 className="text-3xl font-black font-heading text-brand-primary mb-8 leading-tight">
                                    See sTechWise <br />in action
                                </h2>
                                <p className="text-brand-primary/70 mb-10 text-sm font-medium">Watch our demo videos or schedule a call to see how to:</p>

                                <ul className="space-y-6">
                                    {[
                                        "Automate complex workflows visually",
                                        "Sync large datasets in real-time",
                                        "Maintain SOC2-compliant data security",
                                        "Consolidate your entire tech stack"
                                    ].map((prop, idx) => (
                                        <li key={idx} className="flex items-start gap-4 text-brand-primary text-sm font-semibold">
                                            <div className="mt-0.5 relative shrink-0">
                                                <div className="absolute inset-0 bg-green-500 blur-sm opacity-20 rounded-full"></div>
                                                <CheckCircle2 className="w-5 h-5 text-green-500 drop-shadow-sm relative z-10" />
                                            </div>
                                            <span className="leading-snug">{prop}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Right Panel: Form */}
                        <div className="w-full md:w-7/12 p-8 md:p-14 bg-white overflow-y-auto">
                            <button
                                onClick={closeDemoModal}
                                className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 transition-colors text-slate-400 hover:text-slate-600 z-10"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <form className="space-y-6 max-w-md mx-auto relative pt-4" onSubmit={(e) => { e.preventDefault(); alert('Thank you! Your demo request has been received. Our team will contact you within 24 hours.'); closeDemoModal(); }}>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="demo-first-name" className="text-xs font-bold text-slate-600 block">First Name: *</label>
                                        <input id="demo-first-name" type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="demo-last-name" className="text-xs font-bold text-slate-600 block">Last Name: *</label>
                                        <input id="demo-last-name" type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="demo-email" className="text-xs font-bold text-slate-600 block">Business Email: *</label>
                                        <input id="demo-email" type="email" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm" />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="demo-company" className="text-xs font-bold text-slate-600 block">Company: *</label>
                                        <input id="demo-company" type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm" />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="demo-company-size" className="text-xs font-bold text-slate-600 block">Company Size: *</label>
                                        <select id="demo-company-size" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm bg-white text-slate-700 appearance-none">
                                            <option>Select...</option>
                                            <option>1-50</option>
                                            <option>51-500</option>
                                            <option>500+</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="demo-country" className="text-xs font-bold text-slate-600 block">Country: *</label>
                                        <select id="demo-country" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm bg-white text-slate-700 appearance-none">
                                            <option>Select...</option>
                                            <option>United States</option>
                                            <option>United Kingdom</option>
                                            <option>Canada</option>
                                            <option>Germany</option>
                                            <option>France</option>
                                            <option>Netherlands</option>
                                            <option>Australia</option>
                                            <option>India</option>
                                            <option>Singapore</option>
                                            <option>Japan</option>
                                            <option>Brazil</option>
                                            <option>United Arab Emirates</option>
                                            <option>South Korea</option>
                                            <option>Switzerland</option>
                                            <option>Other</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="demo-job-title" className="text-xs font-bold text-slate-600 block">Job Title: *</label>
                                    <input id="demo-job-title" type="text" className="w-full px-4 py-2.5 rounded border border-slate-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-sm" />
                                </div>

                                <div className="pt-2">
                                    <Button type="submit" size="lg" className="w-full sm:w-auto bg-brand-primary text-white hover:bg-slate-800 rounded font-bold px-8 shadow-md transition-transform hover:scale-105 active:scale-95">
                                        Watch the demo
                                    </Button>
                                </div>

                                <div className="pt-6">
                                    <p className="text-[10px] text-slate-400 leading-relaxed max-w-sm">
                                        Fields marked with an asterisk (*) are required.<br /><br />
                                        By completing and submitting the form, you will receive information, tips, and promotions from sTechWise. To learn more about how sTechWise uses your information, see our <a href="/privacy" className="font-bold text-slate-600 hover:text-brand-primary underline">Privacy Statement</a>.
                                    </p>
                                </div>
                            </form>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
