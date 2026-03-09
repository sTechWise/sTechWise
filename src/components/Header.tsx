"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
    ChevronDown, Brain, Workflow, Database, Bot, Building2, Lightbulb,
    Shield, BookOpen, FileText, ShieldCheck, Zap,
    DollarSign, Users, TrendingUp, Headphones, Factory,
    Menu, X, Stethoscope, Landmark, ShoppingCart, LogIn
} from "lucide-react";
import { useDemoModal } from "@/context/DemoModalContext";

const SERVICE_NAV = [
    { icon: Brain, label: "AI Automation", href: "/services/ai-automation", desc: "ML orchestration & predictive automation" },
    { icon: Workflow, label: "Workflow Automation", href: "/services/workflow-automation", desc: "Visual builder, RPA & process mining" },
    { icon: Database, label: "Integration & Data", href: "/services/integration-data", desc: "API connectors & data pipelines" },
    { icon: Bot, label: "AI Agents", href: "/services/ai-agents", desc: "Autonomous agents & AI teammates" },
    { icon: Building2, label: "Business Automation", href: "/services/business-automation", desc: "End-to-end process automation" },
    { icon: Lightbulb, label: "Automation Consulting", href: "/services/consulting", desc: "Strategy, implementation & training" },
];

const SOLUTIONS_NAV = [
    { icon: DollarSign, label: "Finance Automation", href: "/solutions/finance" },
    { icon: Users, label: "HR Automation", href: "/solutions/hr" },
    { icon: TrendingUp, label: "Sales Automation", href: "/solutions/sales" },
    { icon: Headphones, label: "Customer Support", href: "/solutions/customer-support" },
    { icon: Factory, label: "Operations", href: "/solutions/operations" },
];

const INDUSTRY_NAV = [
    { icon: Stethoscope, label: "Healthcare", href: "/solutions/healthcare" },
    { icon: Landmark, label: "Financial Services", href: "/solutions/financial-services" },
    { icon: ShoppingCart, label: "Retail & E-Commerce", href: "/solutions/retail" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();
    const { openDemoModal } = useDemoModal();
    const isHomepage = pathname === "/";
    const isDarkTextNeeded = scrolled;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => { setMobileOpen(false); }, [pathname]);

    const navLinkClass = `px-3 py-2 rounded transition-all duration-500 ease-in-out relative z-50 text-sm font-semibold ${isDarkTextNeeded ? "hover:text-brand-primary hover:bg-slate-50" : "hover:text-white hover:bg-white/10"}`;

    return (
        <>
            <motion.header
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${scrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-slate-200 py-3 text-brand-primary" : `bg-transparent shadow-none border-transparent py-5 ${isHomepage ? "text-white" : "text-brand-primary"}`}`}
                onMouseLeave={() => setActiveMenu(null)}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 relative group z-50">
                        <div className="relative w-10 h-10 transition-transform duration-500 group-hover:scale-105">
                            <Image src="/logo.png" fill sizes="40px" alt="sTechWise Logo" className={`object-contain transition-all duration-500 ease-in-out ${!isDarkTextNeeded ? "brightness-0 invert" : ""}`} priority />
                        </div>
                        <span className={`font-extrabold text-2xl tracking-tight font-heading transition-colors duration-500 ease-in-out ${isDarkTextNeeded ? "text-brand-primary" : "text-white"}`}>sTechWise</span>
                    </Link>

                    {/* Desktop Nav */}
                    <nav className={`hidden lg:flex items-center gap-1 text-sm font-semibold transition-colors duration-500 ease-in-out ${isDarkTextNeeded ? "text-slate-600" : "text-white/90"}`}>

                        {/* ── Platform Mega Menu ── */}
                        <div
                            className={`relative px-3 py-2 cursor-pointer transition-colors rounded flex items-center gap-1 ${isDarkTextNeeded ? "hover:text-brand-primary hover:bg-slate-50" : "hover:text-white hover:bg-white/10"}`}
                            onMouseEnter={() => setActiveMenu("platform")}
                        >
                            Platform <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "platform" ? "rotate-180" : ""}`} />
                            <AnimatePresence>
                                {activeMenu === "platform" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-[30%] mt-4 w-[900px] bg-white border border-slate-200 rounded shadow-xl overflow-hidden cursor-default pointer-events-auto flex flex-col"
                                    >
                                        <div className="grid grid-cols-4 gap-8 p-10">
                                            {/* Platform */}
                                            <div>
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-5 uppercase font-heading">Platform</h4>
                                                <ul className="space-y-4">
                                                    <li><Link href="/platform" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">Product Overview</Link></li>
                                                    <li><Link href="/platform" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">All Features</Link></li>
                                                    <li><Link href="/platform" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">Integrations</Link></li>
                                                </ul>
                                            </div>
                                            {/* Capabilities */}
                                            <div>
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-5 uppercase font-heading">Capabilities</h4>
                                                <ul className="space-y-4">
                                                    <li><Link href="/services/workflow-automation" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">Workflow Engine</Link></li>
                                                    <li><Link href="/services/integration-data" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">Data Pipelines</Link></li>
                                                    <li><Link href="/enterprise" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">Admin & Security</Link></li>
                                                </ul>
                                            </div>
                                            {/* AI Suite */}
                                            <div>
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-5 uppercase font-heading">AI Suite</h4>
                                                <ul className="space-y-4">
                                                    <li><Link href="/services/ai-automation" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">sTechWise AI</Link></li>
                                                    <li><Link href="/services/ai-agents" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">AI Agents</Link></li>
                                                    <li><Link href="/services/ai-automation" className="text-brand-primary font-medium hover:text-brand-accent transition-colors block">AI Studio</Link></li>
                                                </ul>
                                            </div>
                                            {/* Plans */}
                                            <div className="pl-8 border-l border-slate-100">
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-5 uppercase font-heading">Plans</h4>
                                                <ul className="space-y-4">
                                                    <li><Link href="/pricing" className="text-brand-primary font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group"><FileText className="w-4 h-4 text-slate-400 group-hover:text-brand-accent transition-colors" /> Starter</Link></li>
                                                    <li><Link href="/pricing" className="text-brand-primary font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group"><BookOpen className="w-4 h-4 text-slate-400 group-hover:text-brand-accent transition-colors" /> Business</Link></li>
                                                    <li><Link href="/pricing" className="text-brand-primary font-medium hover:text-brand-accent transition-colors flex items-center gap-2 group"><ShieldCheck className="w-4 h-4 text-slate-400 group-hover:text-brand-accent transition-colors" /> Enterprise</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="bg-[#f9f8f6] px-10 py-5 flex items-center gap-8 border-t border-slate-200 text-sm font-medium">
                                            <button onClick={openDemoModal} className="text-slate-600 hover:text-brand-primary transition-colors">Contact Sales</button>
                                            <span className="w-px h-4 bg-slate-300" />
                                            <button onClick={openDemoModal} className="text-slate-600 hover:text-brand-primary transition-colors">View Demo</button>
                                            <span className="w-px h-4 bg-slate-300" />
                                            <Link href="/developers" className="text-slate-600 hover:text-brand-primary transition-colors">API Docs</Link>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ── Services Dropdown ── */}
                        <div
                            className={`relative px-3 py-2 cursor-pointer transition-colors rounded flex items-center gap-1 ${isDarkTextNeeded ? "hover:text-brand-primary hover:bg-slate-50" : "hover:text-white hover:bg-white/10"}`}
                            onMouseEnter={() => setActiveMenu("services")}
                        >
                            Services <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "services" ? "rotate-180" : ""}`} />
                            <AnimatePresence>
                                {activeMenu === "services" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[480px] bg-white border border-slate-200 rounded shadow-xl overflow-hidden cursor-default pointer-events-auto"
                                    >
                                        <div className="p-6 space-y-1">
                                            {SERVICE_NAV.map(s => (
                                                <Link key={s.href} href={s.href} className="flex items-start gap-4 p-3 rounded hover:bg-slate-50 transition-colors group">
                                                    <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center shrink-0 group-hover:bg-brand-accent/10 transition-colors">
                                                        <s.icon className="w-5 h-5 text-slate-600 group-hover:text-brand-accent transition-colors" />
                                                    </div>
                                                    <div>
                                                        <p className="text-sm font-bold text-brand-primary group-hover:text-brand-accent transition-colors">{s.label}</p>
                                                        <p className="text-xs text-slate-500 mt-0.5">{s.desc}</p>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* ── Solutions Dropdown ── */}
                        <div
                            className={`relative px-3 py-2 cursor-pointer transition-colors rounded flex items-center gap-1 ${isDarkTextNeeded ? "hover:text-brand-primary hover:bg-slate-50" : "hover:text-white hover:bg-white/10"}`}
                            onMouseEnter={() => setActiveMenu("solutions")}
                        >
                            Solutions <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === "solutions" ? "rotate-180" : ""}`} />
                            <AnimatePresence>
                                {activeMenu === "solutions" && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[520px] bg-white border border-slate-200 rounded shadow-xl overflow-hidden cursor-default pointer-events-auto"
                                    >
                                        <div className="grid grid-cols-2 p-4 gap-0">
                                            {/* By Department */}
                                            <div className="pr-4 border-r border-slate-100">
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-3 uppercase font-heading px-3">By Department</h4>
                                                <div className="space-y-0.5">
                                                    {SOLUTIONS_NAV.map(s => (
                                                        <Link key={s.href} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-brand-primary hover:bg-slate-50 hover:text-brand-accent transition-colors">
                                                            <s.icon className="w-4 h-4 text-slate-400" />
                                                            {s.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                            {/* By Industry */}
                                            <div className="pl-4">
                                                <h4 className="text-[11px] font-bold tracking-wider text-slate-400 mb-3 uppercase font-heading px-3">By Industry</h4>
                                                <div className="space-y-0.5">
                                                    {INDUSTRY_NAV.map(s => (
                                                        <Link key={s.href} href={s.href} className="flex items-center gap-3 px-3 py-2.5 rounded text-sm font-medium text-brand-primary hover:bg-slate-50 hover:text-brand-accent transition-colors">
                                                            <s.icon className="w-4 h-4 text-slate-400" />
                                                            {s.label}
                                                        </Link>
                                                    ))}
                                                </div>
                                                <Link href="/solutions" className="flex items-center gap-2 px-3 py-2.5 mt-4 text-sm font-bold text-brand-accent hover:underline">
                                                    View all solutions →
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <Link href="/developers" className={navLinkClass}>Developers</Link>
                        <Link href="/resources" className={navLinkClass}>Resources</Link>
                        <Link href="/pricing" className={navLinkClass}>Pricing</Link>
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden lg:flex items-center gap-4 relative z-50">
                        <button onClick={openDemoModal} className={`text-sm font-medium transition-colors flex items-center gap-1.5 ${isDarkTextNeeded ? "text-slate-600 hover:text-brand-primary" : "text-slate-300 hover:text-white"}`}>
                            Contact Sales
                        </button>
                        <Button onClick={openDemoModal} size="sm" className="bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded font-bold px-6 shadow-sm shadow-brand-accent/20 transition-transform hover:scale-105 active:scale-95">
                            Request Demo
                        </Button>
                    </div>

                    {/* Mobile hamburger */}
                    <button className="lg:hidden relative z-50 p-2" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? "Close menu" : "Open menu"} aria-expanded={mobileOpen}>
                        {mobileOpen ? <X className="w-6 h-6" /> : <Menu className={`w-6 h-6 ${isDarkTextNeeded ? "text-brand-primary" : "text-white"}`} />}
                    </button>

                </div>
            </motion.header>

            {/* ── Mobile Menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-white overflow-y-auto pt-24 pb-32 px-6"
                    >
                        <nav className="space-y-6">
                            <div>
                                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">Platform</p>
                                <div className="space-y-2">
                                    <Link href="/platform" className="block text-brand-primary font-medium py-2">Product Overview</Link>
                                    <Link href="/enterprise" className="block text-brand-primary font-medium py-2">Security & Compliance</Link>
                                </div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">Services</p>
                                <div className="space-y-2">
                                    {SERVICE_NAV.map(s => (
                                        <Link key={s.href} href={s.href} className="block text-brand-primary font-medium py-2">{s.label}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">Solutions</p>
                                <div className="space-y-2">
                                    {SOLUTIONS_NAV.map(s => (
                                        <Link key={s.href} href={s.href} className="block text-brand-primary font-medium py-2">{s.label}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-slate-100 pt-6">
                                <p className="text-[11px] font-bold tracking-wider text-slate-400 uppercase mb-3">Industries</p>
                                <div className="space-y-2">
                                    {INDUSTRY_NAV.map(s => (
                                        <Link key={s.href} href={s.href} className="block text-brand-primary font-medium py-2">{s.label}</Link>
                                    ))}
                                </div>
                            </div>
                            <div className="border-t border-slate-100 pt-6 space-y-2">
                                <Link href="/developers" className="block text-brand-primary font-medium py-2">Developers</Link>
                                <Link href="/resources" className="block text-brand-primary font-medium py-2">Resources</Link>
                                <Link href="/pricing" className="block text-brand-primary font-medium py-2">Pricing</Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* ── Mobile Bottom CTA Bar ── */}
            <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 px-4 py-3 flex gap-3">
                <Button onClick={openDemoModal} className="flex-1 bg-brand-accent text-brand-primary hover:bg-[#E5B51D] rounded h-11 font-bold border-none text-sm">
                    Request Demo
                </Button>
                <Link href="/sandbox" className="flex-1">
                    <Button variant="outline" className="w-full rounded h-11 font-bold border-slate-300 text-sm">
                        Start Sandbox
                    </Button>
                </Link>
            </div>
        </>
    );
}
