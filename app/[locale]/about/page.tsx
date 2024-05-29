import Image from 'next/image';

import AdamPicture from '../../../public/adam-picture.png';
import initTranslations from '../../i18n';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['about-me'];

const AboutMe = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={`${styles.header} text-gradient center-align`}>
          {t('header')}
        </h1>
        <div className={styles.about}>
          <p>{t('paragraph-one')}</p>
          <p>{t('paragraph-two')}</p>
          <p>{t('paragraph-three')}</p>
          <p>{t('paragraph-four')}</p>
        </div>
        <div className={styles.imageBox}>
          <Image
            alt="Adam Picture"
            className={styles.adamImage}
            src={AdamPicture}
          />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <p>{t('find-me-header')}</p>
        <p>{t('find-me-one')}</p>
        <p>{t('find-me-two')}</p>
        <p>{t('find-me-three')}</p>
        <p>{t('find-me-four')}</p>
        <p>{t('find-me-five')}</p>
        <p>{t('find-me-six')}</p>
        <p>{t('find-me-seven')}</p>
      </div>
    </div>
  );
};
export default AboutMe;
