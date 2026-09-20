import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { PageProps } from '@/app/lib/types';

import Modrice from '../../../../public/projects-images-home/modrice.png';

const i18namespaces = ['project-modrice-go-kart', 'global'];

const Page = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Modrice Web Image"
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
        <ProjectLinksBox
          locale={locale}
          webLink="https://adamplanet.cz/ostatniweby/modrice/"
        />
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
