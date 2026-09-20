import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { PageProps } from '@/app/lib/types';

import MetalQuiz from '../../../../public/projects-images-home/metal-quiz.png';

const i18namespaces = ['project-metal-quiz', 'global'];

const Page = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Metal Quiz App Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={MetalQuiz}
        />
        <ProjectLogosBox show={['React', 'JavaScript']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://www.adamplanet.cz/ostatniweby/metalquiz/"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/modrice-go-kart"
        prevLink="/projects/old-adam-code"
      />
    </div>
  );
};

export default Page;
