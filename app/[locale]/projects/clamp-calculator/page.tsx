import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import ClampCalculator from '../../../../public/projects-images-home/clamp-calculator.png';

const i18namespaces = ['project-clamp-calculator', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Clamp Calculator Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={ClampCalculator}
        />
        <ProjectLogosBox show={['React', 'TypeScript', 'Vite']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <p className="projectDesc">{t('project-desc-four')}</p>
        <ProjectLinksBox locale={locale} webLink="https://adamplanet.cz/cc" />
      </div>
      <ProjectNavbar locale={locale} nextLink="/projects/adam-planet" />
    </div>
  );
};

export default Page;
