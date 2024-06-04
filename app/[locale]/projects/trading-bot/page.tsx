import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';

import TradingBot from '../../../../public/projects-images-home/trading-bot.jpg';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['project-trading-bot', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className={styles.container}>
      <div className={styles.topBox}>
        <Image
          alt="Adam"
          className={styles.projectImage}
          placeholder="blur"
          priority
          src={TradingBot}
        />
        <ProjectLogosBox show={['Python']} />
      </div>
      <div className={styles.bottomBox}>
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className={styles.headerInfo}>{t('header-info')}</p>
        <p className={styles.projectDesc}>{t('project-desc')}</p>
        <p className={styles.projectDesc}>{t('project-desc-two')}</p>
        <p className={styles.projectDesc}>{t('project-desc-three')}</p>
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/adam-planet"
        prevLink="/projects/flight-path-planner"
      />
    </div>
  );
};

export default Page;
