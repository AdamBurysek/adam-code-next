import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import AdamPlanetOldImage from '../../../../public/projects-images-home/adam-planet-v1.png';

const i18namespaces = ['project-adam-planet-v1', 'global'];

const Page = async (props: LocaleParams) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Adam Planet Web Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={AdamPlanetOldImage}
        />
        <ProjectLogosBox show={['Html', 'Css', 'JavaScript']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://www.adamplanet.cz/ostatniweby/adamplanetold/"
        />
      </div>
      <ProjectNavbar locale={locale} prevLink="/projects/grocery-bud" />
    </div>
  );
};

export default Page;
