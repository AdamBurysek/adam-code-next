import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';

import GroceryBudImage from '../../../../public/projects/grocery-bud/grocery-bud.gif';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['project-grocery-bud', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Adam"
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
        <div className="buttonBox">
          <a
            className="webLink"
            href="https://adamplanet.cz/ostatniweby/grocery/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('global:visit-button')}
          </a>
        </div>
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
