import { services } from "@/data/services";
import { conditions } from "@/data/conditions";
import { articles } from "@/data/articles";
import { siteConfig } from "@/data/siteConfig";

export default async function sitemap() {
  const baseUrl = siteConfig.url;
  const now = new Date().toISOString();

  // Static core routes
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0
    },
    {
      url: `${baseUrl}/services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/conditions`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/specialists`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8
    },
    {
      url: `${baseUrl}/book-appointment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7
    },
    {
      url: `${baseUrl}/terms-and-conditions`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.3
    }
  ];

  // Dynamic Service routes
  const serviceRoutes = services.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  // Dynamic Condition routes
  const conditionRoutes = conditions.map((c) => ({
    url: `${baseUrl}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  // Dynamic Blog routes
  const blogRoutes = articles.map((a) => ({
    url: `${baseUrl}/blogs/${a.slug}`,
    lastModified: a.updatedDate ? new Date(a.updatedDate).toISOString() : now,
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...conditionRoutes,
    ...blogRoutes
  ];
}
