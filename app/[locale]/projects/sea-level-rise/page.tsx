import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';
import type { LocaleParams } from '@/app/lib/types';

import SeaLevelRiseModel from '../../../../public/projects/sea-level-rise/sea-level-rise-model.png';
import SeaLevelRise from '../../../../public/projects-images-home/sea-level-rise.png';

const i18namespaces = ['project-sea-level-rise', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Sea Level Rise App Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={SeaLevelRise}
        />
        <ProjectLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <Image
          alt="Sea Level Rise Model Image"
          className="contentImage"
          placeholder="blur"
          priority
          src={SeaLevelRiseModel}
        />
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <div className="buttonBox">
          <a
            className="webLink"
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
