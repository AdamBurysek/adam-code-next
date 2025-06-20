import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { dir } from 'i18next';
import type { Metadata } from 'next';
import './globals.css';

import { i18nConfig, type Locale } from '@/i18nConfig';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import TranslationsProvider from '../components/TranslationsProvider';
import initTranslations from '../lib/i18n';

export const metadata: Metadata = {
  title: 'Adam Code',
  description: 'Software Developer',
};

export function generateStaticParams() {
  return i18nConfig.locales.map((locale) => ({ locale }));
}

const i18namespaces = ['home', 'navbar'];

const RootLayout = async (
  props: Readonly<{
    children: React.ReactNode;
    params: { locale: Locale };
  }>,
) => {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  // eslint-disable-next-line unused-imports/no-unused-vars, @typescript-eslint/no-unused-vars
  const { t, resources } = await initTranslations(locale, i18namespaces);
  return (
    <html dir={dir(locale)} lang={locale}>
      <body>
        <SpeedInsights />
        <Analytics />
        <TranslationsProvider
          locale={locale}
          namespaces={i18namespaces}
          resources={resources}
        >
          <Navbar />
          <main className="main">{children}</main>
          <Footer />
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
