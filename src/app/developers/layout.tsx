import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Developer Hub — APIs, SDKs & Quickstart | sTechWise",
    description: "Integrate the sTechWise automation engine using REST APIs, Webhooks, and native Node.js/Python SDKs. Ship your first event pipeline in minutes.",
};

export default function DevelopersLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
