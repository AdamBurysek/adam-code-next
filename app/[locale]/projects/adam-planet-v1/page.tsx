import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';

import AdamPlanetOldImage from '../../../../public/projects-images-home/adam-planet-v1.png';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['project-adam-planet-v1', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Adam"
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
        <div className="buttonBox">
          <a
            className="webLink"
            href="https://www.adamplanet.cz/ostatniweby/adamplanetold/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('global:visit-button')}
          </a>
        </div>
      </div>
      <ProjectNavbar locale={locale} prevLink="/projects/grocery-bud" />
    </div>
  );
};

export default Page;
