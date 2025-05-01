import Image from 'next/image';
import React from 'react';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { LocaleParams } from '@/app/lib/types';

import IdealCityAdmin from '../../../../public/projects/ideal-city/ideal-city-admin.png';
import IdealCityButtons from '../../../../public/projects/ideal-city/ideal-city-buttons.png';
import IdealCityExhibit from '../../../../public/projects/ideal-city/ideal-city-exhibit.png';
import IdealCityLogin from '../../../../public/projects/ideal-city/ideal-city-login.png';
import IdealCity from '../../../../public/projects-images-home/ideal-city.png';

const i18namespaces = ['project-ideal-city', 'global'];

const Page = async (props: LocaleParams) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Ideal City App Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={IdealCity}
        />
        <ProjectLogosBox
          show={['React', 'TypeScript', 'Electron', 'Vite', 'Mongo']}
        />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <Image
          alt="Ideal City Exhibition"
          className="contentImage"
          placeholder="blur"
          priority
          src={IdealCityExhibit}
        />
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <h2 className="projectHeader">{t('project-header-admin')}</h2>
        <p className="projectDesc">{t('project-admin-one')}</p>
        <Image
          alt="Ideal City App Image"
          className="contentImage"
          placeholder="blur"
          src={IdealCityButtons}
        />
        <p className="projectDesc">{t('project-admin-two')}</p>
        <p className="projectDesc bold">{t('project-admin-password')}</p>
        <Image
          alt="Ideal City App Image"
          className="contentImage"
          placeholder="blur"
          src={IdealCityLogin}
        />
        <p className="projectDesc">{t('project-admin-three')}</p>
        <Image
          alt="Ideal City App Image"
          className="contentImage"
          placeholder="blur"
          src={IdealCityAdmin}
        />
        <p className="projectDesc">{t('project-desc-four')}</p>
        <p className="projectDesc">{t('project-desc-five')}</p>
        <ProjectLinksBox
          linuxDlLink="https://adamplanet.cz/instalacni-soubory/ideal-city/VIDA - Ideal City-1.0.0.AppImage"
          linuxSize="107,1 MB"
          locale={locale}
          macDlLink="https://adamplanet.cz/instalacni-soubory/ideal-city/VIDA - Ideal City-1.0.0.dmg"
          macSize="101,9 MB"
          webLink="https://www.adamplanet.cz/ostatniweby/idealcity/"
          windowsDlLink="https://adamplanet.cz/instalacni-soubory/ideal-city/VIDA - Ideal City Setup 1.0.0.exe"
          windowsSize="81 MB"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/sea-level-rise"
        prevLink="/projects/traveling-salesman"
      />
    </div>
  );
};

export default Page;
