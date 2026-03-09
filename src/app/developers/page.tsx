"use client";

import { motion } from "framer-motion";
import { Terminal, Database, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Developers() {
    return (
        <main className="relative min-h-screen bg-brand-bg text-brand-primary pt-40 pb-20 overflow-hidden">
            <div className="dot-grid opacity-30 absolute inset-0 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Hero */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-6 font-heading"
                    >
                        Built for <span className="text-brand-accent">Builders.</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-slate-600 font-medium mb-8"
                    >
                        Integrate our real-time automation engine into your stack using our idempotent REST APIs, Webhooks, and native SDKs.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-4"
                    >
                        <Link href="/sandbox">
                            <Button size="lg" className="rounded bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none font-bold px-8 shadow-sm">
                                Read API Docs
                            </Button>
                        </Link>
                        <Link href="/sandbox">
                            <Button size="lg" variant="outline" className="rounded bg-white font-bold px-8 shadow-sm hover:scale-105 transition-transform">
                                Get API Keys
                            </Button>
                        </Link>
                    </motion.div>
                </div>

                {/* Quickstart Bento */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-32">

                    <div className="feature-card p-10 bg-slate-900 border-none text-white relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-accent/10 rounded-full blur-3xl -mr-20 -mt-20 transition-transform group-hover:scale-110"></div>
                        <div className="relative z-10">
                            <div className="w-12 h-12 bg-white/10 rounded mb-6 flex items-center justify-center backdrop-blur-sm"><Terminal className="w-6 h-6 text-brand-accent" /></div>
                            <h3 className="text-2xl font-bold mb-4 font-heading">Node.js Quickstart</h3>
                            <p className="text-slate-400 mb-8">Fire your first event into the automation engine in less than 3 lines of code.</p>

                            <div className="bg-black/50 rounded p-6 font-mono text-sm border border-white/10 shadow-inner">
                                <span className="text-slate-400">1 |</span> <span className="text-brand-purple">import</span> {'{ sTechWise }'} <span className="text-brand-purple">from</span> <span className="text-green-400">'@stechwise/node'</span><br />
                                <span className="text-slate-400">2 |</span><br />
                                <span className="text-slate-400">3 |</span> <span className="text-brand-purple">const</span> client = <span className="text-brand-accent">new</span> sTechWise(process.env.STW_KEY);<br />
                                <span className="text-slate-400">4 |</span><br />
                                <span className="text-slate-400">5 |</span> <span className="text-blue-400">await</span> client.events.track({'{'}<br />
                                <span className="text-slate-400">6 |</span> &nbsp;&nbsp;name: <span className="text-green-400">'user.signup'</span>,<br />
                                <span className="text-slate-400">7 |</span> &nbsp;&nbsp;userId: <span className="text-green-400">'usr_123'</span><br />
                                <span className="text-slate-400">8 |</span> {'}'});
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-rows-2 gap-8">
                        <div className="feature-card p-8 flex items-center gap-6 group hover:border-brand-accent cursor-pointer">
                            <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center text-slate-800 group-hover:bg-brand-accent/10 group-hover:text-brand-accent transition-colors"><Zap className="w-8 h-8" /></div>
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-1">Webhooks</h3>
                                <p className="text-slate-600 text-sm">Secure, retriable webhook delivery for downstream systems.</p>
                            </div>
                        </div>
                        <div className="feature-card p-8 flex items-center gap-6 group hover:border-brand-purple cursor-pointer">
                            <div className="w-16 h-16 bg-slate-100 rounded flex items-center justify-center text-slate-800 group-hover:bg-brand-purple/10 group-hover:text-brand-purple transition-colors"><Shield className="w-8 h-8" /></div>
                            <div>
                                <h3 className="text-xl font-bold font-heading mb-1">Authentication</h3>
                                <p className="text-slate-600 text-sm">SAML/SCIM APIs for programmatically managing users.</p>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
