import Image from 'next/image';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectLinksBox from '@/app/components/ProjectLinksBox/ProjectLinksBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { PageProps } from '@/app/lib/types';

import ClampCalculator from '../../../../public/projects-images-home/clamp-calculator.png';

const i18namespaces = ['project-clamp-calculator', 'global'];

const Page = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

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
        <ProjectLogosBox show={['React', 'Tailwind', 'TypeScript', 'Vite']} />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <p className="projectDesc">{t('project-desc-four')}</p>
        <ProjectLinksBox
          locale={locale}
          webLink="https://clamp-calculator.netlify.app/"
        />
      </div>
      <ProjectNavbar
        locale={locale}
        nextLink="/projects/adam-planet"
        prevLink="/projects/personal-ai"
      />
    </div>
  );
};

export default Page;
