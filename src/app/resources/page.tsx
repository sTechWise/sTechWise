"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, FileText, PlayCircle, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Resources() {
    return (
        <main className="relative min-h-screen bg-white text-brand-primary pt-40 pb-20 px-6 lg:px-8 overflow-hidden">
            <div className="dot-grid opacity-30 absolute inset-0 pointer-events-none"></div>
            <div className="bg-gradient-to-b from-transparent to-white absolute top-0 left-0 w-full h-[60vh] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <div className="mb-16 md:flex justify-between items-end border-b border-slate-200 pb-10">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 text-brand-primary">
                            Resources Hub
                        </h1>
                        <p className="text-xl text-slate-600 font-medium">
                            Insight, strategy, and technical documentation to help you scale automation across your entire enterprise.
                        </p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="mt-8 md:mt-0 flex gap-4">
                        <Button variant="outline" className="bg-white text-brand-primary hover:bg-slate-50 border-slate-200 rounded font-bold shadow-sm">Browse Blog</Button>
                        <Button className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none rounded font-bold shadow-md">Read Documentation</Button>
                    </motion.div>
                </div>

                {/* Featured Case Study */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white border border-slate-200 shadow-sm rounded p-8 md:p-16 mb-20 relative overflow-hidden group hover:shadow-md transition-shadow"
                >
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-accent/5 blur-[100px] rounded-full translate-x-1/3 -translate-y-1/3 group-hover:bg-brand-accent/10 transition-colors duration-700"></div>
                    <div className="relative z-10 max-w-2xl">
                        <div className="inline-block px-4 py-1.5 bg-brand-accent/10 border border-brand-accent/20 rounded-full text-xs font-black tracking-wider uppercase mb-8 text-brand-accent">
                            Featured Case Study
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-brand-primary">How GlobalReach saved 10,000+ engineering hours.</h2>
                        <p className="text-slate-600 font-medium text-lg mb-10 max-w-lg leading-relaxed">
                            Discover the architecture patterns that allowed a global Fintech leader to migrate from legacy batch jobs to real-time event streaming in under 3 weeks.
                        </p>
                        <Button className="bg-brand-accent hover:bg-[#E5B51D] text-brand-primary border-none rounded font-bold px-8 h-14 group shadow-md shadow-brand-accent/20">
                            Read the full story <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </div>
                </motion.div>

                {/* Resource Categories Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
                >
                    {[
                        { icon: BookOpen, title: "Technical Guides", desc: "Deep dives into integration patterns and API design." },
                        { icon: FileText, title: "Whitepapers", desc: "Strategic research on automation ROI and security." },
                        { icon: PlayCircle, title: "Webinars", desc: "On-demand video sessions with our engineering team." }
                    ].map((item, i) => (
                        <Card key={i} className="feature-card group cursor-pointer h-full border-slate-200 hover:border-brand-accent">
                            <CardContent className="p-8">
                                <div className="w-12 h-12 bg-slate-100 rounded flex items-center justify-center mb-6 text-slate-500 group-hover:text-brand-accent group-hover:bg-brand-accent/10 transition-colors">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-brand-primary mb-3 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-slate-600 font-medium leading-relaxed">{item.desc}</p>
                            </CardContent>
                        </Card>
                    ))}

                    <Card className="feature-card bg-slate-900 border-transparent hover:border-transparent hover:shadow-2xl group cursor-pointer h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/20 to-transparent opacity-50"></div>
                        <CardContent className="p-8 relative z-10">
                            <div className="w-12 h-12 bg-brand-accent rounded flex items-center justify-center mb-6 text-white shadow-lg shadow-brand-accent/30 group-hover:scale-110 transition-transform">
                                <Calculator className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 tracking-tight">ROI Calculator</h3>
                            <p className="text-sm text-slate-300 font-medium mb-8 leading-relaxed">Calculate your potential engineering savings instantly.</p>
                            <div className="text-sm font-bold text-brand-accent uppercase tracking-wider flex items-center group-hover:text-white transition-colors">
                                Calculate Now <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                        </CardContent>
                    </Card>
                </motion.div>

            </div>
        </main>
    );
}
