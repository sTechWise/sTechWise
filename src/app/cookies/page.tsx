import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy | sTechWise", description: "sTechWise Cookie Policy — how we use cookies and similar technologies." };

export default function Cookies() {
    return (
        <main className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-brand-primary mb-8 font-heading">Cookie Policy</h1>
                <p className="text-slate-500 mb-6">Last updated: March 2026</p>
                <div className="prose prose-slate max-w-none">
                    <p>sTechWise uses cookies and similar tracking technologies to improve your experience, analyze usage, and assist in our marketing efforts.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">1. Essential Cookies</h2>
                    <p className="text-slate-600 mb-4">Required for the basic functionality of our platform. These cannot be disabled.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">2. Analytics Cookies</h2>
                    <p className="text-slate-600 mb-4">Help us understand how visitors interact with our website by collecting anonymous usage data.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">3. Managing Cookies</h2>
                    <p className="text-slate-600 mb-4">You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our services.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">4. Contact</h2>
                    <p className="text-slate-600">For questions about our cookie practices, contact us at <strong>privacy@stechwise.com</strong>.</p>
                </div>
            </div>
        </main>
    );
}
