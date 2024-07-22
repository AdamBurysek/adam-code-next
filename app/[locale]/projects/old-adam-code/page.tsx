import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import OldAdamCode from '../../../../public/projects-images-home/adam-code-v2.png';

const i18namespaces = ['project-old-adam-code', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Adam Code Web Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={OldAdamCode}
        />
        <ProjectLogosBox
          show={['React', 'TypeScript', 'Mongo', 'Cloudinary', 'Vite']}
        />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://adamplanet.cz/ostatniweby/adamcodeold/"
        />
        <p className="projectDesc">{t('project-desc-three')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://adamplanet.cz/adamcode/"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/metal-quiz"
        prevLink="/projects/flight-path-planner"
      />
    </div>
  );
};

export default Page;
