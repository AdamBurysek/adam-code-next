import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import GroceryBudImage from '../../../../public/projects/grocery-bud/grocery-bud.gif';

const i18namespaces = ['project-grocery-bud', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Grocery Bud App Image"
          className="projectImage"
          priority
          src={GroceryBudImage}
        />
        <ProjectLogosBox show={['Html', 'Css', 'JavaScript']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://adamplanet.cz/ostatniweby/grocery/"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/adam-planet-v1"
        prevLink="/projects/trading-bot"
      />
    </div>
  );
};

export default Page;
