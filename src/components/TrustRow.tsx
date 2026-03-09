"use client";

export function TrustRow() {
    const logos = [
        "Deloitte", "Accenture", "JP Morgan", "Siemens", "Unilever",
        "Salesforce", "SAP", "Microsoft", "Oracle", "McKinsey",
        "Deloitte", "Accenture", "JP Morgan", "Siemens", "Unilever",
        "Salesforce", "SAP", "Microsoft", "Oracle", "McKinsey"
    ];

    return (
        <div className="border-y border-slate-200 bg-white py-12 overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <p className="text-center text-sm font-semibold text-slate-500 mb-8 uppercase tracking-wider">
                    Trusted by automation teams at leading enterprises
                </p>

                <div className="flex w-full overflow-hidden">
                    <div className="flex animate-[marquee_40s_linear_infinite] min-w-full justify-around items-center gap-16">
                        {logos.map((logo, idx) => (
                            <span key={idx} className="text-xl font-bold text-slate-300 whitespace-nowrap tracking-tight">
                                {logo}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
