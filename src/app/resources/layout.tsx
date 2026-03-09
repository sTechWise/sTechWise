import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Resources Hub — Guides, Whitepapers & Case Studies | sTechWise",
    description: "Technical guides, whitepapers, webinars, and case studies to help you scale automation across your enterprise.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
