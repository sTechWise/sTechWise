"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Workflow, Cpu, Network, ArrowRight, MousePointer2, Settings, BarChart } from "lucide-react";
import { Button } from "@/components/ui/button";

const verticalTabs = [
    {
        id: "builder",
        title: "Visual Flow Builder",
        description: "Drag-and-drop elements to create complex logical workflows. No coding required for marketing paths.",
        icon: MousePointer2
    },
    {
        id: "logic",
        title: "Advanced Branching",
        description: "If/Then logic, A/B/n testing, and time-delay triggers built directly into the UI.",
        icon: Workflow
    },
    {
        id: "settings",
        title: "Granular Controls",
        description: "Set retry limits, configure exponential backoffs, and manage dead-letter queues instantly.",
        icon: Settings
    },
    {
        id: "analytics",
        title: "Real-time Telemetry",
        description: "Watch payloads travel through your orchestration pipes in real-time. Debug instantly.",
        icon: BarChart
    }
];

export default function ProductOverview() {
    const [activeTab, setActiveTab] = useState(verticalTabs[0].id);

    return (
        <main className="relative min-h-screen bg-brand-bg text-brand-primary overflow-hidden pt-40 pb-20 px-6 lg:px-8">
            {/* Background Dot Grid */}
            <div className="absolute top-0 left-0 w-full h-[60vh] dot-grid opacity-30 pointer-events-none"></div>
            <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-transparent to-white z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-20">

                {/* Header */}
                <div className="text-center mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-brand-accent text-sm font-bold tracking-wide uppercase mb-6"
                    >
                        Core Capabilities
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-black tracking-tighter mb-8 leading-[1.1] font-heading"
                    >
                        The <span className="text-brand-accent">Automation Engine</span><br />for Enterprise.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium"
                    >
                        A unified platform combining visual workflow orchestration for marketing with a high-throughput API layer for engineering. Built without compromises.
                    </motion.p>
                </div>

                {/* Vertical Tabs Section */}
                <div className="mb-32 mt-20">
                    <h2 className="text-3xl md:text-5xl font-black mb-16 text-center tracking-tight font-heading">Deep-dive into the engine.</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

                        {/* Tab List */}
                        <div className="col-span-1 lg:col-span-4 space-y-2">
                            {verticalTabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full text-left p-6 rounded transition-all duration-300 border-l-4 ${activeTab === tab.id
                                        ? "bg-slate-50 border-brand-accent shadow-sm"
                                        : "bg-transparent border-transparent hover:bg-slate-50/50"
                                        }`}
                                >
                                    <div className="flex items-center gap-4 mb-2">
                                        <tab.icon className={`w-6 h-6 ${activeTab === tab.id ? "text-brand-accent" : "text-slate-400"}`} />
                                        <h3 className={`text-xl font-bold ${activeTab === tab.id ? "text-brand-primary" : "text-slate-500"}`}>{tab.title}</h3>
                                    </div>
                                    <p className={`text-sm ${activeTab === tab.id ? "text-slate-600" : "text-slate-400"}`}>{tab.description}</p>
                                </button>
                            ))}
                        </div>

                        {/* Tab Visual Anchor */}
                        <div className="col-span-1 lg:col-span-8">
                            <div className="aspect-[4/3] bg-slate-100 rounded-[32px] border border-slate-200 shadow-xl overflow-hidden relative">
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={activeTab}
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="absolute inset-0 flex items-center justify-center p-12"
                                    >
                                        {/* Placeholder dynamic visualization based on tab */}
                                        <div className="w-full h-full bg-white rounded shadow-sm border border-slate-200 flex flex-col relative overflow-hidden">
                                            <div className="h-12 border-b border-slate-100 flex items-center px-6 gap-3 bg-slate-50">
                                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
                                                <div className="ml-auto text-xs font-bold text-slate-400 uppercase tracking-widest">{activeTab} Interface</div>
                                            </div>
                                            <div className="flex-1 p-8 flex items-center justify-center bg-brand-bg relative">
                                                {activeTab === 'builder' && <div className="w-48 h-48 rounded-full border-4 border-dashed border-brand-accent/30 flex items-center justify-center"><MousePointer2 className="w-16 h-16 text-brand-accent opacity-50" /></div>}
                                                {activeTab === 'logic' && <div className="flex gap-4"><div className="w-16 h-16 bg-slate-200 rounded"></div><div className="w-16 h-16 bg-brand-accent/20 border-2 border-brand-accent rounded"></div><div className="w-16 h-16 bg-slate-200 rounded"></div></div>}
                                                {activeTab === 'settings' && <div className="space-y-4 w-full max-w-sm"><div className="h-4 w-full bg-slate-100 rounded"></div><div className="h-4 w-3/4 bg-slate-100 rounded"></div><div className="h-8 w-1/2 bg-slate-200 rounded-full mt-8"></div></div>}
                                                {activeTab === 'analytics' && <div className="flex items-end gap-2 h-32"><div className="w-8 h-12 bg-slate-200 rounded-t"></div><div className="w-8 h-24 bg-slate-200 rounded-t"></div><div className="w-8 h-32 bg-brand-accent rounded-t"></div><div className="w-8 h-16 bg-slate-200 rounded-t"></div></div>}
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Global Integrations */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="relative rounded-[32px] overflow-hidden p-16 text-center border border-slate-200 bg-slate-50"
                >
                    <div className="relative z-10 flex flex-col items-center">
                        <div className="w-20 h-20 rounded bg-white border border-slate-200 flex items-center justify-center mb-8 shadow-sm">
                            <Network size={40} className="text-brand-accent" />
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight font-heading">Connect to everything.</h2>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 font-medium">
                            sTechWise comes with 300+ native connectors. From Salesforce to Datadog—your stack works seamlessly natively.
                        </p>

                        <div className="flex flex-wrap justify-center gap-4 text-sm font-bold text-slate-700 mb-12">
                            <span className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors cursor-default">CRM & Sales</span>
                            <span className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors cursor-default">Data Warehouses</span>
                            <span className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors cursor-default">Analytics Engines</span>
                            <span className="bg-white border border-slate-200 shadow-sm px-6 py-3 rounded-full hover:border-brand-accent hover:text-brand-accent transition-colors cursor-default">Custom Webhooks</span>
                        </div>

                        <Button size="lg" className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] border-none rounded font-bold px-8 h-14 text-lg shadow-lg shadow-brand-accent/20 transition-transform hover:scale-105 active:scale-95">
                            View Integration Directory
                        </Button>
                    </div>
                </motion.div>

            </div>
        </main>
    );
}
