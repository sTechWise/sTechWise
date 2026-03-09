import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://www.stechwise.com';

    return [
        // Core pages
        { url: baseUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
        { url: `${baseUrl}/platform`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
        { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/enterprise`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/developers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
        { url: `${baseUrl}/resources`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.7 },
        { url: `${baseUrl}/sandbox`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },

        // Service pages
        { url: `${baseUrl}/services/ai-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/workflow-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/integration-data`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/ai-agents`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/business-automation`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/services/consulting`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },

        // Solution pages
        { url: `${baseUrl}/solutions/finance`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/hr`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/sales`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/customer-support`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/operations`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

        // Industry solution pages
        { url: `${baseUrl}/solutions/healthcare`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/financial-services`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
        { url: `${baseUrl}/solutions/retail`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },

        // Customer stories
        { url: `${baseUrl}/customers`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    ];
}
