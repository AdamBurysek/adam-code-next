import Image from 'next/image';

import ProjectLogosBox from '@/app/components/MiniTechnologyLogos/ProjectLogosBox';
import ProjectNavbar from '@/app/components/ProjectNavbar/ProjectNavbar';
import initTranslations from '@/app/lib/i18n';
import type { PageProps } from '@/app/lib/types';

import PersonalAI from '../../../../public/projects-images-home/PersonalAI.png';

const i18namespaces = ['project-personal-ai', 'global'];

const Page = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className="container">
      <div className="topBox">
        <Image
          alt="Personal AI Image"
          className="projectImage"
          placeholder="blur"
          priority
          src={PersonalAI}
        />
        <ProjectLogosBox
          show={['React', 'Tailwind', 'TypeScript', 'Electron', 'Vite']}
        />
      </div>
      <div className="bottomBox">
        <h1 className="text-gradient">{t('project-header')}</h1>
        <p className="headerInfo">{t('header-info')}</p>
        <p className="projectDesc">{t('project-desc')}</p>
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{ width: '100%', height: 'auto' }}
        >
          <source
            src="/projects/personal-ai/PersonalAIVideo.mp4"
            type="video/mp4"
          />
          Váš prohlížeč nepodporuje přehrávání tohoto videa.
        </video>
        <p className="projectDesc">{t('project-desc-two')}</p>
        <p className="projectDesc">{t('project-desc-three')}</p>
        <p className="projectDesc">{t('project-desc-four')}</p>
      </div>
      <ProjectNavbar locale={locale} nextLink="/projects/clamp-calculator" />
    </div>
  );
};

export default Page;
