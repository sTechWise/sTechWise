"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
    Workflow, Brain, Database, BarChart3, ShieldCheck, Sparkles,
    Users, Bot, Layers
} from "lucide-react";

/* ─────────────── Canvas card data ─────────────── */
const CANVAS_CARDS = [
    {
        id: "workflow",
        label: "Workflow Builder",
        icon: Workflow,
        color: "border-violet-400/30 bg-violet-50",
        iconColor: "text-violet-600",
        content: (
            <div className="space-y-2 mt-3">
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /><span className="text-xs text-slate-600">Data Ingestion</span></div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-emerald-400" /><span className="text-xs text-slate-600">AI Classification</span></div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-400" /><span className="text-xs text-slate-600">Human Review</span></div>
                <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-slate-300 animate-pulse" /><span className="text-xs text-slate-500">Auto-Approve</span></div>
            </div>
        ),
        pos: { x: 5, y: 8 },
        animateTo: { x: -15, y: -5 },
    },
    {
        id: "ai-engine",
        label: "AI Engine",
        icon: Brain,
        color: "border-amber-400/30 bg-amber-50",
        iconColor: "text-amber-600",
        content: (
            <div className="mt-3 space-y-1.5">
                <div className="h-2 rounded-full bg-amber-200 w-4/5" />
                <div className="h-2 rounded-full bg-amber-200 w-3/5" />
                <div className="flex items-center gap-1 mt-2"><Sparkles className="w-3 h-3 text-amber-500" /><span className="text-[10px] text-amber-700 font-semibold">97.3% confidence</span></div>
            </div>
        ),
        pos: { x: 32, y: 2 },
        animateTo: { x: -10, y: 8 },
    },
    {
        id: "integrations",
        label: "Integration Hub",
        icon: Database,
        color: "border-emerald-400/30 bg-emerald-50",
        iconColor: "text-emerald-600",
        content: (
            <div className="mt-3 grid grid-cols-3 gap-1.5">
                {["SAP", "Slack", "Jira", "HubSpot", "AWS", "+295"].map(s => (
                    <span key={s} className={`text-[9px] font-bold text-center py-1 rounded ${s.startsWith('+') ? 'bg-emerald-200 text-emerald-700' : 'bg-white text-slate-500 border border-slate-200'}`}>{s}</span>
                ))}
            </div>
        ),
        pos: { x: 60, y: 10 },
        animateTo: { x: 5, y: -8 },
    },
    {
        id: "analytics",
        label: "Analytics",
        icon: BarChart3,
        color: "border-blue-400/30 bg-blue-50",
        iconColor: "text-blue-600",
        content: (
            <div className="mt-3 flex items-end gap-1 h-10">
                {[40, 55, 35, 70, 60, 85, 75, 90].map((h, i) => (
                    <div key={i} className="flex-1 rounded-t bg-blue-300" style={{ height: `${h}%` }} />
                ))}
            </div>
        ),
        pos: { x: 10, y: 55 },
        animateTo: { x: -8, y: 5 },
    },
    {
        id: "compliance",
        label: "Compliance",
        icon: ShieldCheck,
        color: "border-cyan-400/30 bg-cyan-50",
        iconColor: "text-cyan-600",
        content: (
            <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-emerald-500" /><span className="text-[10px] text-slate-600">SOC 2 Type II</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-emerald-500" /><span className="text-[10px] text-slate-600">GDPR Compliant</span></div>
                <div className="flex items-center gap-2"><ShieldCheck className="w-3 h-3 text-emerald-500" /><span className="text-[10px] text-slate-600">ISO 27001</span></div>
            </div>
        ),
        pos: { x: 42, y: 52 },
        animateTo: { x: 10, y: -5 },
    },
    {
        id: "agents",
        label: "AI Agents",
        icon: Bot,
        color: "border-rose-400/30 bg-rose-50",
        iconColor: "text-rose-600",
        content: (
            <div className="mt-3 space-y-1.5">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /><span className="text-[10px] text-slate-600">Ticket Resolver</span><span className="text-[9px] text-emerald-600 font-bold ml-auto">Active</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /><span className="text-[10px] text-slate-600">Data Analyst</span><span className="text-[9px] text-emerald-600 font-bold ml-auto">Active</span></div>
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-amber-400" /><span className="text-[10px] text-slate-600">Report Writer</span><span className="text-[9px] text-amber-600 font-bold ml-auto">Queued</span></div>
            </div>
        ),
        pos: { x: 72, y: 48 },
        animateTo: { x: -5, y: 10 },
    },
];

/* ─────────────── Collaboration cursors ─────────────── */
const CURSORS = [
    { name: "Sarah", color: "bg-violet-500", pos: { x: 25, y: 30 }, animateTo: { x: 35, y: 20 } },
    { name: "Alex", color: "bg-emerald-500", pos: { x: 55, y: 45 }, animateTo: { x: 65, y: 55 } },
    { name: "Priya", color: "bg-amber-500", pos: { x: 70, y: 18 }, animateTo: { x: 60, y: 28 } },
    { name: "Jordan", color: "bg-rose-500", pos: { x: 15, y: 65 }, animateTo: { x: 25, y: 55 } },
];

const AI_BADGES = [
    { label: "Automation Engine", icon: Layers, pos: { x: 48, y: 38 }, color: "bg-violet-100 text-violet-700 border-violet-200" },
    { label: "Smart Router", icon: Sparkles, pos: { x: 82, y: 30 }, color: "bg-amber-100 text-amber-700 border-amber-200" },
];

/* ─────────────── Component ─────────────── */
export default function CanvasShowcase() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="relative py-24 lg:py-32 px-6 lg:px-8 bg-[#fafafa] overflow-hidden">
            {/* Dot grid background */}
            <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle, #d1d5db 1px, transparent 1px)", backgroundSize: "24px 24px" }} />

            <div className="mx-auto max-w-7xl relative z-10">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <span className="inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-brand-accent mb-4 font-heading">HOW IT WORKS</span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary tracking-tight font-heading">
                        Your entire automation stack — one canvas
                    </h2>
                    <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto">
                        Workflows, AI engines, integrations, and compliance — orchestrated visually by your team in real time.
                    </p>
                </motion.div>

                {/* Canvas area */}
                <div className="relative w-full" style={{ height: "clamp(400px, 50vw, 620px)" }}>
                    {/* Floating cards */}
                    {CANVAS_CARDS.map((card, i) => (
                        <motion.div
                            key={card.id}
                            initial={{ opacity: 0, scale: 0.8, x: 0, y: 0 }}
                            animate={inView ? {
                                opacity: 1,
                                scale: 1,
                                x: [0, card.animateTo.x, 0],
                                y: [0, card.animateTo.y, 0],
                            } : {}}
                            transition={{
                                opacity: { duration: 0.6, delay: i * 0.12 },
                                scale: { duration: 0.6, delay: i * 0.12 },
                                x: { duration: 20 + i * 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 },
                                y: { duration: 18 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.12 },
                            }}
                            className={`absolute w-48 md:w-56 p-4 rounded-xl border-2 shadow-lg backdrop-blur-sm ${card.color} hover:shadow-xl hover:scale-105 transition-shadow cursor-default`}
                            style={{ left: `${card.pos.x}%`, top: `${card.pos.y}%` }}
                        >
                            <div className="flex items-center gap-2">
                                <card.icon className={`w-4 h-4 ${card.iconColor}`} />
                                <span className="text-xs font-bold text-slate-700">{card.label}</span>
                            </div>
                            {card.content}
                        </motion.div>
                    ))}

                    {/* Cursor avatars */}
                    {CURSORS.map((cursor, i) => (
                        <motion.div
                            key={cursor.name}
                            initial={{ opacity: 0, x: 0, y: 0 }}
                            animate={inView ? {
                                opacity: 1,
                                x: [0, cursor.animateTo.x, 0],
                                y: [0, cursor.animateTo.y, 0],
                            } : {}}
                            transition={{
                                opacity: { duration: 0.4, delay: 0.8 + i * 0.15 },
                                x: { duration: 12 + i * 2, repeat: Infinity, ease: "easeInOut" },
                                y: { duration: 10 + i * 3, repeat: Infinity, ease: "easeInOut" },
                            }}
                            className="absolute z-20 pointer-events-none"
                            style={{ left: `${cursor.pos.x}%`, top: `${cursor.pos.y}%` }}
                        >
                            {/* Cursor arrow */}
                            <svg width="12" height="16" viewBox="0 0 12 16" fill="none" className="drop-shadow-md">
                                <path d="M0 0L12 10L6 10L4 16L0 0Z" className={cursor.color.replace('bg-', 'fill-')} />
                            </svg>
                            {/* Name badge */}
                            <div className={`${cursor.color} text-white text-[9px] font-bold px-2 py-0.5 rounded-full mt-0.5 shadow-md whitespace-nowrap`}>
                                {cursor.name}
                            </div>
                        </motion.div>
                    ))}

                    {/* AI assistant badges */}
                    {AI_BADGES.map((badge, i) => (
                        <motion.div
                            key={badge.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 0.5, delay: 1.2 + i * 0.2 }}
                            className={`absolute z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[10px] font-bold shadow-md ${badge.color}`}
                            style={{ left: `${badge.pos.x}%`, top: `${badge.pos.y}%` }}
                        >
                            <badge.icon className="w-3 h-3" />
                            {badge.label}
                        </motion.div>
                    ))}

                    {/* Connecting lines (decorative) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                        <motion.line
                            x1="22%" y1="22%" x2="45%" y2="18%"
                            stroke="#c4b5fd" strokeWidth="1.5" strokeDasharray="6 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                            transition={{ duration: 1.5, delay: 0.5 }}
                        />
                        <motion.line
                            x1="50%" y1="20%" x2="72%" y2="25%"
                            stroke="#fbbf24" strokeWidth="1.5" strokeDasharray="6 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                            transition={{ duration: 1.5, delay: 0.7 }}
                        />
                        <motion.line
                            x1="25%" y1="68%" x2="50%" y2="62%"
                            stroke="#6ee7b7" strokeWidth="1.5" strokeDasharray="6 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                            transition={{ duration: 1.5, delay: 0.9 }}
                        />
                        <motion.line
                            x1="55%" y1="60%" x2="78%" y2="58%"
                            stroke="#fda4af" strokeWidth="1.5" strokeDasharray="6 4"
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={inView ? { pathLength: 1, opacity: 0.4 } : {}}
                            transition={{ duration: 1.5, delay: 1.1 }}
                        />
                    </svg>
                </div>
            </div>
        </section>
    );
}
