import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { PageProps } from '@/app/lib/types';

import FlightPathPlanner from '../../../../public/projects-images-home/flight-path-planner.png';

const i18namespaces = ['project-flight-path-planner', 'global'];

const Page = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

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
        <ProjectLinksBox
          linuxDlLink="https://adamplanet.cz/instalacni-soubory/flight-path-planner/FlightPath Planner-1.0.0.AppImage"
          linuxSize="108,2 MB"
          locale={locale}
          macDlLink="https://adamplanet.cz/instalacni-soubory/flight-path-planner/FlightPath Planner-1.0.0.dmg"
          macSize="102,9 MB"
          webLink="https://adamplanet.cz/ostatniweby/flight-path-planner/"
          windowsDlLink="https://adamplanet.cz/instalacni-soubory/flight-path-planner/FlightPath%20Planner%20Setup%201.0.0.exe"
          windowsSize="81,5 MB"
        />
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
