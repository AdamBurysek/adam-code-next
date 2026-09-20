export const i18nConfig = {
  locales: ['en', 'cs'],
  defaultLocale: 'en',
  prefixDefault: false,
} as const;

export type Locale = (typeof i18nConfig)['locales'][number];
