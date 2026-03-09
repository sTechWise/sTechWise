"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useDemoModal } from "@/context/DemoModalContext";

export default function Footer() {
    const { openDemoModal } = useDemoModal();
    return (
        <footer className="relative bg-[#0b0f19] border-t border-slate-800 pt-24 pb-12 px-6 overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-brand-accent to-transparent opacity-20"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-6 gap-12 lg:gap-8 xl:gap-16 mb-20">

                    {/* Brand & CTA Column */}
                    <div className="col-span-1 lg:col-span-2 flex flex-col">
                        <Link href="/" className="flex items-center gap-3 mb-6 group">
                            <div className="relative w-10 h-10 transition-transform group-hover:scale-105">
                                <Image src="/logo.png" fill sizes="40px" alt="sTechWise Logo" className="object-contain brightness-0 invert" />
                            </div>
                            <span className="font-extrabold text-2xl text-white tracking-tight">sTechWise</span>
                        </Link>
                        <p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
                            The Automation Engine for the Modern Enterprise. Build secure, scalable workflows asynchronously without compromising speed.
                        </p>
                        <div className="flex space-x-4 mb-12">
                            <Link href="https://twitter.com/stechwise" target="_blank" rel="noopener noreferrer" aria-label="Follow sTechWise on Twitter" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Twitter className="w-6 h-6" />
                            </Link>
                            <Link href="https://linkedin.com/company/stechwise" target="_blank" rel="noopener noreferrer" aria-label="Connect with sTechWise on LinkedIn" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Linkedin className="w-6 h-6" />
                            </Link>
                            <Link href="https://github.com/stechwise" target="_blank" rel="noopener noreferrer" aria-label="sTechWise on GitHub" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Github className="w-6 h-6" />
                            </Link>
                            <Link href="https://youtube.com/@stechwise" target="_blank" rel="noopener noreferrer" aria-label="Watch sTechWise on YouTube" className="text-slate-400 hover:text-brand-accent transition-colors">
                                <Youtube className="w-6 h-6" />
                            </Link>
                        </div>

                        {/* Moved CTA Section */}
                        <div className="mt-auto">
                            <h4 className="font-bold text-white text-lg mb-6">See it in action</h4>
                            <p className="text-slate-400 text-sm mb-6 max-w-[250px]">Schedule a custom enterprise demonstration.</p>
                            <Button onClick={openDemoModal} className="w-[200px] bg-brand-accent text-brand-primary hover:bg-[#E5B51D] font-bold rounded py-6 transition-transform hover:scale-105 active:scale-95 shadow-lg shadow-brand-accent/10">
                                Request Demo
                            </Button>
                        </div>
                    </div>

                    {/* Platform Column */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Platform</h4>
                        <ul className="space-y-4 text-sm text-slate-400 flex flex-col font-medium">
                            <Link href="/platform" className="hover:text-brand-accent transition-colors">Product Overview</Link>
                            <Link href="/enterprise" className="hover:text-brand-accent transition-colors">Enterprise Security</Link>
                            <Link href="/pricing" className="hover:text-brand-accent transition-colors">Pricing</Link>
                        </ul>
                    </div>

                    {/* Services Column */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Services</h4>
                        <ul className="space-y-4 text-sm text-slate-400 flex flex-col font-medium">
                            <Link href="/services/ai-automation" className="hover:text-brand-accent transition-colors">AI Automation</Link>
                            <Link href="/services/workflow-automation" className="hover:text-brand-accent transition-colors">Workflow Automation</Link>
                            <Link href="/services/integration-data" className="hover:text-brand-accent transition-colors">Integration & Data</Link>
                            <Link href="/services/ai-agents" className="hover:text-brand-accent transition-colors">AI Agents</Link>
                            <Link href="/services/business-automation" className="hover:text-brand-accent transition-colors">Business Automation</Link>
                            <Link href="/services/consulting" className="hover:text-brand-accent transition-colors">Consulting</Link>
                        </ul>
                    </div>

                    {/* Solutions Column */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Solutions</h4>
                        <ul className="space-y-4 text-sm text-slate-400 flex flex-col font-medium">
                            <Link href="/solutions/finance" className="hover:text-brand-accent transition-colors">Finance</Link>
                            <Link href="/solutions/hr" className="hover:text-brand-accent transition-colors">HR</Link>
                            <Link href="/solutions/sales" className="hover:text-brand-accent transition-colors">Sales</Link>
                            <Link href="/solutions/customer-support" className="hover:text-brand-accent transition-colors">Customer Support</Link>
                            <Link href="/solutions/operations" className="hover:text-brand-accent transition-colors">Operations</Link>
                            <Link href="/solutions/healthcare" className="hover:text-brand-accent transition-colors">Healthcare</Link>
                            <Link href="/solutions/financial-services" className="hover:text-brand-accent transition-colors">Financial Services</Link>
                            <Link href="/solutions/retail" className="hover:text-brand-accent transition-colors">Retail & E-Commerce</Link>
                        </ul>
                    </div>

                    {/* Developers Column */}
                    <div>
                        <h4 className="font-bold text-slate-100 mb-6 uppercase tracking-wider text-xs">Developers</h4>
                        <ul className="space-y-4 text-sm text-slate-400 flex flex-col font-medium">
                            <Link href="/developers" className="hover:text-brand-accent transition-colors">Documentation</Link>
                            <Link href="/sandbox" className="hover:text-brand-accent transition-colors">Sandbox</Link>
                            <Link href="/resources" className="hover:text-brand-accent transition-colors">Resources</Link>
                            <Link href="/customers" className="hover:text-brand-accent transition-colors">Customer Stories</Link>
                        </ul>
                    </div>

                </div>

                <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-sm font-medium text-slate-500">
                    <p>© {new Date().getFullYear()} sTechWise Inc. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
                        <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
                        <Link href="/cookies" className="hover:text-slate-300 transition-colors">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
