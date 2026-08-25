import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const paths: Array<{ path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }> = [
    { path: '/', priority: 1, changeFrequency: 'monthly' },
    { path: '/eventos', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/eventos/extreme-house', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/eventos/pasajes-del-terror', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/eventos/escape-rooms', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/eventos/cenas-de-misterio', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/eventos/real-games', priority: 0.8, changeFrequency: 'monthly' },
    { path: '/quienes-somos', priority: 0.6, changeFrequency: 'yearly' },
    { path: '/contacto', priority: 0.9, changeFrequency: 'yearly' },
  ];

  return paths.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
