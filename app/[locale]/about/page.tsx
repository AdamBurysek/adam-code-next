import Image from 'next/image';

import { MotionDiv, MotionSpan } from '@/app/components/Motion/Motion';
import type { LocaleParams } from '@/app/lib/types';

import AdamPicture from '../../../public/adam-picture.png';
import initTranslations from '../../lib/i18n';

import styles from './page.module.css';

const i18namespaces = ['about-me'];

const AboutMe = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={`${styles.header} text-gradient center-align`}>
          {t('header')}
        </h1>
        <MotionDiv
          animate={{
            opacity: 1,
            x: 0,
          }}
          className={styles.about}
          initial={{
            opacity: 0,
            x: -10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <p>{t('paragraph-one')}</p>
          <p>{t('paragraph-two')}</p>
          <p>{t('paragraph-three')}</p>
          <p>{t('paragraph-four')}</p>
        </MotionDiv>
        <MotionSpan
          animate={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <Image
            alt="Adam Picture"
            className={styles.adamImage}
            placeholder="blur"
            priority
            src={AdamPicture}
          />
        </MotionSpan>
      </div>
      <MotionDiv
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={styles.bottomContainer}
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{ duration: 0.5, delay: 0.1, easeOut: 0.5 }}
      >
        <p>{t('find-me-header')}</p>
        <p>{t('find-me-one')}</p>
        <p>{t('find-me-two')}</p>
        <p>{t('find-me-three')}</p>
        <p>{t('find-me-four')}</p>
        <p>{t('find-me-five')}</p>
        <p>{t('find-me-six')}</p>
        <p>{t('find-me-seven')}</p>
      </MotionDiv>
    </div>
  );
};
export default AboutMe;
