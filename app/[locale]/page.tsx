import Image from 'next/image';
import Link from 'next/link';

import AdamCodeV2 from '../../public/projects-images-home/adam-code-v2.png';
import AdamPlanetOldImage from '../../public/projects-images-home/adam-planet-v1.png';
import AdamPlanetImage from '../../public/projects-images-home/adam-planet.png';
import GroceryBud from '../../public/projects-images-home/grocery-bud.png';
import IdealCity from '../../public/projects-images-home/ideal-city.png';
import MetalQuiz from '../../public/projects-images-home/metal-quiz.png';
import Modrice from '../../public/projects-images-home/modrice.png';
import SeaLevelRise from '../../public/projects-images-home/sea-level-rise.png';
import TravelingSalesman from '../../public/projects-images-home/traveling-salesman.png';
import MiniLogosBox from '../components/MiniLogos/MiniLogosBox';
import { MotionDiv, MotionParagraph } from '../components/Motion/Motion';
import TechnologyAnimation from '../components/TechnologyAnimation/TechnologyAnimation';
import initTranslations from '../i18n';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['home'];

const Home = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);

  const grid = {
    visible: { opacity: 1, transition: { duration: 0.2 } },
    init: { opacity: 0 },
  };

  return (
    <>
      <div className={styles.dummyHeroDiv} id="home" />
      <div className={styles.container}>
        <MotionDiv
          animate="visible"
          className={styles.gridBackground}
          initial="init"
          variants={grid}
        />
        <h1>
          {t('header-start')}
          <span className={styles.smallText}> aka Adam Code</span>
          <br />
          <span className="text-gradient text-with-padding">
            {t('header-end')}
          </span>
        </h1>
        <MotionParagraph
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={styles.heroParagraph}
          initial={{
            opacity: 0,
            y: 10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          {t('desc')}
        </MotionParagraph>
        <MotionDiv
          animate={{
            opacity: 1,
            y: 0,
          }}
          className={styles.btnContainer}
          initial={{
            opacity: 0,
            y: 15,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <Link href="/about">
            <button className="btn button-gradient" type="button">
              {t('projects-button')}
            </button>
          </Link>
          <Link href="/skills">
            <button className="btn btn-basic" type="button">
              {t('skills-button')}
            </button>
          </Link>
        </MotionDiv>
      </div>
      <MotionDiv
        animate={{
          opacity: 1,
        }}
        className={styles.technologyHeader}
        initial={{
          opacity: 0,
        }}
        transition={{ duration: 0.5, easeOut: 0.5 }}
      >
        {t('technology-header')}
      </MotionDiv>
      <TechnologyAnimation />
      <section id="myprojects">
        <h2>{t('projects-header')}</h2>
        <div className={styles.projectsContainer} id="myprojects">
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-adam-planet')}</h3>
                <p className={styles.projectDate}>2024</p>
              </div>
              <Image
                alt={t('project-adam-planet')}
                className={styles.projectImage}
                // loading="eager"
                placeholder="blur"
                priority
                src={AdamPlanetImage}
              />
            </Link>
            <MiniLogosBox show={['Next', 'TypeScript', 'ThreeJs']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-adam-code')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-adam-code')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={AdamCodeV2}
              />
            </Link>
            <MiniLogosBox
              show={['React', 'TypeScript', 'Mongo', 'Cloudinary', 'Vite']}
            />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-sea-level-rise')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-sea-level-rise')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={SeaLevelRise}
              />
            </Link>
            <MiniLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-ideal-city')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-ideal-city')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={IdealCity}
              />
            </Link>
            <MiniLogosBox
              show={['React', 'TypeScript', 'Electron', 'Vite', 'Mongo']}
            />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-traveling-salesman')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-traveling-salesman')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={TravelingSalesman}
              />
            </Link>
            <MiniLogosBox show={['React', 'TypeScript', 'Electron', 'Vite']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>{t('project-metal-quiz')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-metal-quiz')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={MetalQuiz}
              />
            </Link>
            <MiniLogosBox show={['React', 'JavaScript']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/projects/modrice-go-kart">
              <div className={styles.projectHeader}>
                <h3>{t('project-modrice')}</h3>
                <p className={styles.projectDate}>2023</p>
              </div>
              <Image
                alt={t('project-modrice')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={Modrice}
              />
            </Link>
            <MiniLogosBox show={['Html', 'Css', 'JavaScript']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/projects/grocery-bud">
              <div className={styles.projectHeader}>
                <h3>{t('project-grocery')}</h3>
                <p className={styles.projectDate}>2022</p>
              </div>
              <Image
                alt={t('project-grocery')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={GroceryBud}
              />
            </Link>
            <MiniLogosBox show={['Html', 'Css', 'JavaScript']} />
          </div>
          {/* PROJECT END */}
          {/* PROJECT START */}
          <div>
            <Link href="/projects/adam-planet-v1">
              <div className={styles.projectHeader}>
                <h3>{t('project-adam-planet-old')}</h3>
                <p className={styles.projectDate}>2022</p>
              </div>
              <Image
                alt={t('project-adam-planet-old')}
                className={styles.projectImage}
                loading="eager"
                placeholder="blur"
                src={AdamPlanetOldImage}
              />
            </Link>
            <MiniLogosBox show={['Html', 'Css', 'JavaScript']} />
          </div>
          {/* PROJECT END */}
        </div>
      </section>
    </>
  );
};

export default Home;
