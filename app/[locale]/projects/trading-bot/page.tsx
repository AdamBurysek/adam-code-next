import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/i18n';
import type { LocaleParams } from '@/app/lib/types';

import TradingBot from '../../../../public/projects-images-home/trading-bot.jpg';

const i18namespaces = ['project-trading-bot', 'global'];

const Page = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Trading Bot Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={TradingBot}
        />
        <ProjectLogosBox show={['Python']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/grocery-bud"
        prevLink="/projects/modrice-go-kart"
      />
    </div>
  );
};

export default Page;
