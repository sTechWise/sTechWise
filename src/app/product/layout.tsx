import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Product Overview | sTechWise",
    description: "Explore the sTechWise automation platform — visual workflow builder, real-time telemetry, branching logic, and enterprise-grade integrations.",
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
