import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Solutions by Team — Marketing, Engineering & Security | sTechWise",
    description: "Discover how marketing, engineering, and security teams use sTechWise to automate complex workflows and scale operations.",
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
