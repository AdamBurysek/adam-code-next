/* eslint-disable @typescript-eslint/no-floating-promises */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-explicit-any */

'use client';

import { createInstance } from 'i18next';
import { I18nextProvider } from 'react-i18next';

import initTranslations from '@/app/i18n';

const TranslationsProvider = ({
  children,
  locale,
  namespaces,
  resources,
}: any) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationsProvider;
