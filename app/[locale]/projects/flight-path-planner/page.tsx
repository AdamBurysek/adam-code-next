import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';
import type { LocaleParams } from '@/app/lib/types';

import FlightPathPlanner from '../../../../public/projects-images-home/flight-path-planner.png';

const i18namespaces = ['project-flight-path-planner', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Flight Path Planeer App Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={FlightPathPlanner}
        />
        <ProjectLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <div className="buttonBox">
          <a
            className="webLink"
            href="https://adamplanet.cz/ostatniweby/flight-path-planner/"
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
        prevLink="/projects/sea-level-rise"
      />
    </div>
  );
};

export default Page;
