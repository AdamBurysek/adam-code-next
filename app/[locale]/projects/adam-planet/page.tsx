import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';

import AdamPlanet from '../../../../public/projects-images-home/adam-planet.png';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['project-adam-planet', 'global'];

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
          src={AdamPlanet}
        />
        <ProjectLogosBox show={['Next', 'TypeScript', 'ThreeJs']} />
      </div>
      <div className={styles.bottomBox}>
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className={styles.headerInfo}>{t('header-info')}</p>
        <p className={styles.projectDesc}>{t('project-desc')}</p>
        <p className={styles.projectDesc}>{t('project-desc-two')}</p>
        <div className={styles.buttonBox}>
          <a
            className={styles.webLink}
            href="https://music.adamplanet.cz/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('global:visit-button')}
          </a>
        </div>
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/old-adam-code"
        prevLink="/projects/trading-bot"
      />
    </div>
  );
};

export default Page;
