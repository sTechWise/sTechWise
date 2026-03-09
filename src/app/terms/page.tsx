import type { Metadata } from "next";
export const metadata: Metadata = { title: "Terms of Service | sTechWise", description: "sTechWise Terms of Service — the terms governing your use of the sTechWise platform and services." };

export default function Terms() {
    return (
        <main className="min-h-screen bg-white pt-40 pb-20 px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-brand-primary mb-8 font-heading">Terms of Service</h1>
                <p className="text-slate-500 mb-6">Last updated: March 2026</p>
                <div className="prose prose-slate max-w-none">
                    <p>These Terms of Service (&quot;Terms&quot;) govern your access to and use of sTechWise&apos;s platform, services, and website. By using our services, you agree to be bound by these Terms.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">1. Use of Services</h2>
                    <p className="text-slate-600 mb-4">You may use sTechWise services in compliance with these Terms and all applicable laws. You are responsible for maintaining the confidentiality of your account credentials.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">2. Data Processing</h2>
                    <p className="text-slate-600 mb-4">We process data as described in our Privacy Policy. Enterprise customers may enter into a separate Data Processing Agreement (DPA) upon request.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">3. Intellectual Property</h2>
                    <p className="text-slate-600 mb-4">All content, features, and functionality of the sTechWise platform are owned by sTechWise Inc. and are protected by international copyright, trademark, and other intellectual property laws.</p>
                    <h2 className="text-xl font-bold text-brand-primary mt-8 mb-4">4. Contact</h2>
                    <p className="text-slate-600">For questions about these Terms, contact us at <strong>legal@stechwise.com</strong>.</p>
                </div>
            </div>
        </main>
    );
}
