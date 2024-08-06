import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import TravelinSalesmanMap from '../../../../public/projects/traveling-salesman/salesman-czech-map.png';
import TravelinSalesman from '../../../../public/projects-images-home/traveling-salesman.png';

const i18namespaces = ['project-traveling-salesman', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Traveling Salesman App Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={TravelinSalesman}
        />
        <ProjectLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <Image
          alt="Traveling Salesman Map Image"
          className="contentImage"
          placeholder="blur"
          priority
          src={TravelinSalesmanMap}
        />
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <ProjectLinksBox
          linuxDlLink="https://adamplanet.cz/instalacni-soubory/traveling-salesman/VIDA - Traveling Salesman-1.0.0.AppImage"
          linuxSize="106,1 MB"
          locale={locale}
          macDlLink="https://adamplanet.cz/instalacni-soubory/traveling-salesman/VIDA - Traveling Salesman-1.0.0.dmg"
          macSize="101,5 MB"
          webLink="https://www.adamplanet.cz/ostatniweby/travelingsalesman/"
          windowsDlLink="https://adamplanet.cz/instalacni-soubory/traveling-salesman/VIDA - Traveling Salesman Setup 1.0.0.exe"
          windowsSize="80 MB"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/ideal-city"
        prevLink="/projects/adam-planet"
      />
    </div>
  );
};

export default Page;
