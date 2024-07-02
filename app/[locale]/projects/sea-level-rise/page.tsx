import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';

import SeaLevelRise from '../../../../public/projects-images-home/sea-level-rise.png';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['project-sea-level-rise', 'global'];

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
          src={SeaLevelRise}
        />
        <ProjectLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
      </div>
      <div className={styles.bottomBox}>
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className={styles.headerInfo}>{t('header-info')}</p>
        <p className={styles.projectDesc}>{t('project-desc')}</p>
        <p className={styles.projectDesc}>{t('project-desc-two')}</p>
        <p className={styles.projectDesc}>{t('project-desc-three')}</p>
        <div className={styles.buttonBox}>
          <a
            className={styles.webLink}
            href="https://www.adamplanet.cz/ostatniweby/sealevelrise/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('global:visit-button')}
          </a>
        </div>
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/flight-path-planner"
        prevLink="/projects/ideal-city"
      />
    </div>
  );
};

export default Page;
