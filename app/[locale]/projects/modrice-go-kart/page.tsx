import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';
import type { LocaleParams } from '@/app/lib/types';

import Modrice from '../../../../public/projects-images-home/modrice.png';

const i18namespaces = ['project-modrice-go-kart', 'global'];

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
          src={Modrice}
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
            href="https://adamplanet.cz/ostatniweby/modrice/"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t('global:visit-button')}
          </a>
        </div>
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/trading-bot"
        prevLink="/projects/metal-quiz"
      />
    </div>
  );
};

export default Page;
