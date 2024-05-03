import initTranslations from '../../i18n';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['home'];

const AboutMe = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return <div>{t('desc')}</div>;
};
export default AboutMe;
