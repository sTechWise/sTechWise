"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface DemoModalContextType {
    isDemoModalOpen: boolean;
    openDemoModal: () => void;
    closeDemoModal: () => void;
}

const DemoModalContext = createContext<DemoModalContextType | undefined>(undefined);

export function DemoModalProvider({ children }: { children: ReactNode }) {
    const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

    const openDemoModal = () => setIsDemoModalOpen(true);
    const closeDemoModal = () => setIsDemoModalOpen(false);

    return (
        <DemoModalContext.Provider value={{ isDemoModalOpen, openDemoModal, closeDemoModal }}>
            {children}
        </DemoModalContext.Provider>
    );
}

export function useDemoModal() {
    const context = useContext(DemoModalContext);
    if (context === undefined) {
        throw new Error("useDemoModal must be used within a DemoModalProvider");
    }
    return context;
}
