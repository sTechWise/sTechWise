import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Enterprise Security & Compliance | sTechWise",
    description: "SOC 2 Type II certified, end-to-end encryption, GDPR & CCPA compliant. Built for the strictest enterprise security requirements.",
};

export default function EnterpriseLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
