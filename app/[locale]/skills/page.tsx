import Image from 'next/image';

import { MotionDiv, MotionSpan } from '@/app/components/Motion/Motion';
import type { PageProps } from '@/app/lib/types';

import LaptopImage from '../../../public/laptopImage.webp';
import initTranslations from '../../lib/i18n';

import styles from './page.module.css';

const i18namespaces = ['my-skills'];

const MySkills = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

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
          className={styles.text}
          initial={{
            opacity: 0,
            x: -10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <h2>{t('second-header')}</h2>
          <p>{t('text')}</p>
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
            alt="Image"
            className={styles.topImage}
            placeholder="blur"
            src={LaptopImage}
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
        <h3>{t('ui-header')}</h3>
        <h4>Figma</h4>
        <p>{t('figma')}</p>
        <h4>Photoshop</h4>
        <p>{t('photoshop')}</p>
        <h4>Procreate</h4>
        <p>{t('procreate')}</p>
        <h3>Frontend</h3>
        <h4>HTML, CSS, JavaScript</h4>
        <p>{t('html')}</p>
        <h4>Tailwind CSS</h4>
        <p>{t('tailwind')}</p>
        <h4>React</h4>
        <p>{t('react')}</p>
        <h4>Next.js</h4>
        <p>{t('next')}</p>
        <h4>React Native</h4>
        <p>{t('react-native')}</p>
        <h4>Swift</h4>
        <p>{t('swift')}</p>
        <h4>Electron.js</h4>
        <p>{t('electron')}</p>
        <h3>Backend</h3>
        <h4>Node.js</h4>
        <p>{t('node')}</p>
        <h4>Express</h4>
        <p>{t('express')}</p>
        <h4>Python</h4>
        <p>{t('python')}</p>
        <h3>{t('db-header')}</h3>
        <h4>MongoDB</h4>
        <p>{t('mongo')}</p>
        <h4>Drizzle + Postgres</h4>
        <p>{t('drizzle')}</p>
        <h3>{t('npm-header')}</h3>
        <p>
          <b>{t('npm')}</b>
        </p>
        <h4>Axios</h4>
        <p>{t('axios')}</p>
        <h4>React Query</h4>
        <p>{t('react-query')}</p>
        <h4>Framer Motion</h4>
        <p>{t('framer-motion')}</p>
        <h4>Swiper</h4>
        <p>{t('swiper')}</p>
        <h4>Three</h4>
        <p>{t('three')}</p>
        <h3>{t('other-header')}</h3>
        <h4>GitHub</h4>
        <p>{t('git')}</p>
        <h4>Postman / Insomnia</h4>
        <p>{t('postman')}</p>
        <h4>Docker</h4>
        <p>{t('docker')}</p>
        <h4>Vitest + Testing Library</h4>
        <p>{t('vitest')}</p>
      </MotionDiv>
    </div>
  );
};
export default MySkills;
