"use client";

import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";
import { ShoppingCart } from "lucide-react";

export default function RetailSolution() {
    return (
        <SolutionPageTemplate
            icon={ShoppingCart}
            badge="Retail & E-Commerce Automation"
            headline="Automate retail operations from storefront to supply chain"
            subheadline="Optimize inventory, accelerate fulfillment, and deliver personalized customer experiences at scale."
            accentColor="text-orange-500"
            accentBg="bg-orange-500/10"
            problems={[
                "Inventory management across channels is manual and inaccurate",
                "Order fulfillment and returns processing creates bottlenecks",
                "Pricing optimization requires constant manual analysis",
                "Customer personalization at scale is complex and resource-intensive",
            ]}
            workflows={[
                { step: "Inventory & Fulfillment", desc: "Real-time inventory sync across all channels, automated reorder triggers, and intelligent order routing for fastest delivery." },
                { step: "Dynamic Pricing", desc: "AI-driven pricing optimization based on demand, competition, inventory levels, and customer segments — updated in real time." },
                { step: "Customer Personalization", desc: "Automated customer segmentation, personalized product recommendations, and triggered marketing campaigns based on behavior." },
                { step: "Supply Chain Automation", desc: "Automated vendor management, purchase order generation, demand forecasting, and logistics coordination." },
            ]}
            outcomes={[
                { metric: "35%", label: "Reduction in stockouts" },
                { metric: "3x", label: "Faster order fulfillment" },
                { metric: "22%", label: "Increase in average order value" },
                { metric: "55%", label: "Reduction in returns processing time" },
            ]}
            testimonial={{
                quote: "Our supply chain automation paid for itself within the first quarter. sTechWise gave us visibility and speed we didn't think was possible.",
                author: "Maria Santos",
                role: "COO",
                company: "RetailEdge Group",
            }}
        />
    );
}
