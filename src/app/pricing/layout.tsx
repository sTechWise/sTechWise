import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Pricing — Simple Plans for Complex Scale | sTechWise",
    description: "Choose from Starter, Business, or Enterprise plans. Transparent pricing for every stage of growth with no hidden fees.",
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
