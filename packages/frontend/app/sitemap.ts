import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const root = 'https://code.adamplanet.cz';

  const pages: string[] = [
    '/',
    '/about',
    '/skills',
    '/projects/adam-planet',
    '/projects/adam-planet-v1',
    '/projects/clamp-calculator',
    '/projects/flight-path-planner',
    '/projects/grocery-bud',
    '/projects/ideal-city',
    '/projects/metal-quiz',
    '/projects/modrice-go-kart',
    '/projects/old-adam-code',
    '/projects/sea-level-rise',
    '/projects/trading-bot',
    '/projects/traveling-salesman',
  ];

  return pages.map((page) => ({
    url: root + page,
    lastModified: new Date(),
    alternates: {
      languages: {
        en: root + page,
        cs: `${root}/cs/${page}`,
      },
    },
  }));
}
