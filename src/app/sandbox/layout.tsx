import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Start Sandbox — Free Trial | sTechWise",
    description: "Deploy your first event pipeline in 60 seconds. No credit card required. Full Enterprise access for 14 days.",
};

export default function SandboxLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
