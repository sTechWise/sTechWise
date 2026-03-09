"use client";

import { motion } from "framer-motion";
import { Github, Play, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Sandbox() {
    return (
        <main className="relative min-h-screen bg-brand-bg text-brand-primary flex items-center justify-center p-6 lg:p-12 overflow-hidden">
            <div className="dot-grid opacity-30 absolute inset-0 pointer-events-none"></div>

            <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative z-10 items-center">

                {/* Left: Value Prop */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <div className="w-16 h-16 bg-brand-primary rounded flex items-center justify-center mb-8 shadow-sm">
                        <span className="text-white font-bold text-3xl font-heading leading-none">s</span>
                    </div>
                    <h1 className="text-5xl lg:text-6xl font-black tracking-tighter font-heading leading-tight">
                        Deploy your first <br /><span className="text-brand-accent">event pipeline</span><br />in 60 seconds.
                    </h1>
                    <p className="text-xl text-slate-600 font-medium">
                        Jump directly into a fully-provisioned sTechWise environment. No credit card required. No sales calls. Just pure building.
                    </p>

                    <div className="space-y-4 pt-4">
                        <div className="flex items-center gap-3 text-slate-700 font-bold">
                            <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" /> Pre-loaded dummy data and 5 boilerplate workflows.
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-bold">
                            <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" /> 14 days of full Enterprise access (SOC 2 environment).
                        </div>
                        <div className="flex items-center gap-3 text-slate-700 font-bold">
                            <CheckCircle2 className="w-6 h-6 text-brand-accent flex-shrink-0" /> Immediate API key generation and Webhook access.
                        </div>
                    </div>
                </motion.div>

                {/* Right: Auth Card */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                >
                    <div className="feature-card p-10 bg-white shadow-2xl relative overflow-hidden">
                        {/* Decorative Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-20 -mt-20"></div>

                        <div className="relative z-10 text-center space-y-8">
                            <h2 className="text-3xl font-bold font-heading">Start Sandbox</h2>
                            <p className="text-sm text-slate-500 font-medium mb-8">Join 15,000+ engineers building reliable automation.</p>

                            <Button
                                variant="outline"
                                className="w-full h-14 rounded font-bold text-lg bg-slate-900 text-white hover:bg-slate-800 border-none transition-transform hover:scale-[1.02] shadow-md flex items-center gap-3"
                            >
                                <Github className="w-5 h-5" /> Continue with GitHub
                            </Button>

                            <div className="relative flex items-center py-2">
                                <div className="flex-grow border-t border-slate-200"></div>
                                <span className="flex-shrink-0 mx-4 text-slate-400 text-xs font-bold uppercase tracking-widest">or email</span>
                                <div className="flex-grow border-t border-slate-200"></div>
                            </div>

                            <div className="space-y-4">
                                <input
                                    id="sandbox-email"
                                    type="email"
                                    placeholder="company@example.com"
                                    aria-label="Business email address"
                                    className="w-full h-14 px-6 rounded border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all text-brand-primary placeholder:text-slate-400 font-medium"
                                />
                                <Button
                                    className="w-full h-14 rounded font-bold text-lg bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none transition-transform hover:scale-[1.02] shadow-lg shadow-brand-accent/20 flex items-center gap-2 group"
                                >
                                    Launch Workspace <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </div>

                            <p className="text-xs text-slate-400 pt-6">
                                By proceeding, you agree to our Terms of Service, Privacy Policy, and Data Processing Addendum.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
