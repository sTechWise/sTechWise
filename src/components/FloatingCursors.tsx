"use client";

import { motion } from "framer-motion";
import { MousePointer2 } from "lucide-react";

const cursors = [
    { name: "Sarah (Marketing)", color: "#10B981", x: "15%", y: "20%", delay: 0 },
    { name: "Alex (Engineering)", color: "#FFD02F", x: "80%", y: "30%", delay: 2 },
    { name: "Jamie (Security)", color: "#8B5CF6", x: "70%", y: "70%", delay: 4 },
    { name: "System (Automation)", color: "#EF4444", x: "20%", y: "65%", delay: 1 },
];

export function FloatingCursors() {
    return (
        <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            {cursors.map((cursor, i) => (
                <motion.div
                    key={i}
                    className="absolute"
                    initial={{ top: cursor.y, left: cursor.x, opacity: 0 }}
                    animate={{
                        top: [cursor.y, `calc(${cursor.y} + 10%)`, `calc(${cursor.y} - 5%)`, cursor.y],
                        left: [cursor.x, `calc(${cursor.x} - 5%)`, `calc(${cursor.x} + 10%)`, cursor.x],
                        opacity: [0, 1, 1, 0],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        delay: cursor.delay,
                        ease: "easeInOut",
                    }}
                >
                    <div className="relative">
                        <MousePointer2
                            className="w-8 h-8 drop-shadow-md"
                            style={{ fill: cursor.color, stroke: "white", strokeWidth: 1.5 }}
                        />
                        <div
                            className="absolute top-8 left-4 px-3 py-1 rounded-full text-xs font-bold text-white whitespace-nowrap shadow-lg"
                            style={{ backgroundColor: cursor.color }}
                        >
                            {cursor.name}
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
