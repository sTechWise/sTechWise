"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "./ui/card";
import { ArrowRight, Code2, ShieldCheck, Zap } from "lucide-react";

export function ArchitectureBento() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
    };

    return (
        <section className="py-24 bg-white px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-brand-primary tracking-tight">
                        Enterprise Architecture, Simplified.
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl">
                        A unified platform that handles the complexity of global marketing campaigns and high-throughput developer APIs without compromising on security.
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                    {/* Large Card (2/3 width on desktop) */}
                    <motion.div variants={itemVariants} className="md:col-span-2">
                        <Card className="h-full bg-slate-50 border-slate-200 overflow-hidden group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded bg-blue-100 flex items-center justify-center text-brand-accent mb-4">
                                    <Zap size={24} />
                                </div>
                                <CardTitle className="text-2xl">High-Throughput Orchestration</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-slate-600 mb-6">
                                            Process millions of events synchronously. Designed for marketing automation that cannot fail, ensuring your campaigns execute flawlessly.
                                        </p>
                                        <div className="flex items-center text-brand-accent font-medium group-hover:underline cursor-pointer">
                                            Explore the orchestration engine <ArrowRight size={16} className="ml-1" />
                                        </div>
                                    </div>
                                    {/* Visual Evidence Placeholder */}
                                    <div className="bg-white p-4 rounded border shadow-sm font-mono text-xs text-slate-500 flex flex-col justify-center">
                                        <div className="flex justify-between border-b pb-2 mb-2">
                                            <span>Latency</span>
                                            <span className="text-green-600 font-bold">{"< 50ms"}</span>
                                        </div>
                                        <div className="flex justify-between border-b pb-2 mb-2">
                                            <span>Uptime SLA</span>
                                            <span className="font-bold">99.99%</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span>Events/sec</span>
                                            <span className="font-bold">100k+</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Small Card (1/3 width) */}
                    <motion.div variants={itemVariants}>
                        <Card className="h-full bg-brand-primary text-white border-transparent">
                            <CardHeader>
                                <div className="w-12 h-12 rounded bg-white/10 flex items-center justify-center text-white mb-4">
                                    <ShieldCheck size={24} />
                                </div>
                                <CardTitle className="text-2xl text-white">Bank-Grade Security</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-slate-300 mb-6">
                                    SOC2 Type II certified with end-to-end encryption. Built to satisfy the most rigorous enterprise procurement requirements.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-300 font-medium">
                                    <li className="flex items-center"><ShieldCheck size={14} className="mr-2 text-brand-accent" /> Data Residency Controls</li>
                                    <li className="flex items-center"><ShieldCheck size={14} className="mr-2 text-brand-accent" /> Custom Data Retention</li>
                                    <li className="flex items-center"><ShieldCheck size={14} className="mr-2 text-brand-accent" /> Advanced RBAC</li>
                                </ul>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Another Full Width Card for Devs */}
                    <motion.div variants={itemVariants} className="md:col-span-3">
                        <Card className="bg-white border-slate-200">
                            <CardHeader>
                                <div className="w-12 h-12 rounded bg-slate-100 flex items-center justify-center text-slate-700 mb-4">
                                    <Code2 size={24} />
                                </div>
                                <CardTitle className="text-2xl">Built for Developers, loved by Marketing.</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col md:flex-row gap-8 items-center">
                                <div className="md:w-1/2">
                                    <p className="text-slate-600 mb-6">
                                        Launch in minutes with our comprehensive SDKs for JavaScript and Python. Connect your existing marketing stack with 300+ native integrations.
                                    </p>
                                    <div className="flex items-center text-brand-primary font-medium hover:underline cursor-pointer">
                                        Read the Developer Docs <ArrowRight size={16} className="ml-1" />
                                    </div>
                                </div>
                                {/* Code Snippet Placeholder */}
                                <div className="md:w-1/2 w-full bg-[#0d1117] rounded p-4 overflow-x-auto text-sm text-gray-300 font-mono shadow-inner border border-slate-800">
                                    <span className="text-pink-400">import</span> {"{ sTechWise }"} <span className="text-pink-400">from</span> <span className="text-green-300">"@stechwise/node"</span>;<br /><br />
                                    <span className="text-pink-400">const</span> client = <span className="text-pink-400">new</span> sTechWise(process.env.STECHWISE_KEY);<br /><br />
                                    <span className="text-gray-500">// Trigger an enterprise workflow instantly</span><br />
                                    <span className="text-pink-400">await</span> client.workflows.<span className="text-blue-300">trigger</span>({"{ \n"}
                                    {"  "}id: <span className="text-green-300">"enterprise-onboarding"</span>,<br />
                                    {"  "}audience: <span className="text-green-300">"technical-buyers"</span><br />
                                    {"}"});
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                </motion.div>
            </div>
        </section>
    );
}
