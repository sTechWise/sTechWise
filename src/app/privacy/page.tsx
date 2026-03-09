import type { Metadata } from "next";
export const metadata: Metadata = { title: "Privacy Policy | sTechWise", description: "sTechWise Privacy Policy — how we collect, use, and protect your data." };

export default function Privacy() {
    return (
        <main className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-brand-primary mb-8 font-heading">Privacy Policy</h1>
                <p className="text-slate-500 mb-6">Last updated: March 2026</p>
                <div className="prose prose-slate max-w-none">
                    <p>sTechWise Inc. (&quot;sTechWise&quot;, &quot;we&quot;, &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and share information when you use our platform and services.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">1. Information We Collect</h2>
                    <p className="text-slate-600 mb-4">We collect information you provide directly (name, email, company) and data generated through your use of our platform (usage logs, workflow data, analytics).</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">2. How We Use Information</h2>
                    <p className="text-slate-600 mb-4">We use collected information to provide, maintain, and improve our services, communicate with you, and ensure security and compliance.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">3. Data Security</h2>
                    <p className="text-slate-600 mb-4">We employ industry-standard encryption (TLS 1.3, AES-256), SOC 2 Type II compliance, and regular security audits to protect your data.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">4. Your Rights</h2>
                    <p className="text-slate-600 mb-4">You have the right to access, correct, delete, or export your data. Enterprise customers can configure data residency preferences (US, EU, APAC).</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">5. Contact</h2>
                    <p className="text-slate-600">For privacy inquiries, contact our Data Protection Officer at <strong>privacy@stechwise.com</strong>.</p>
                </div>
            </div>
        </main>
    );
}
