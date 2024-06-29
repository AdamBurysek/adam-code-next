import Image from 'next/image';
import Link from 'next/link';

import AdamCodeV2 from '../../public/projects-images-home/adam-code-v2.png';
import AdamPlanetOldImage from '../../public/projects-images-home/adam-planet-v1.png';
import AdamPlanetImage from '../../public/projects-images-home/adam-planet.png';
import FlightPathPlanner from '../../public/projects-images-home/flight-path-planner.png';
import GroceryBud from '../../public/projects-images-home/grocery-bud.png';
import IdealCity from '../../public/projects-images-home/ideal-city.png';
import MetalQuiz from '../../public/projects-images-home/metal-quiz.png';
import Modrice from '../../public/projects-images-home/modrice.png';
import SeaLevelRise from '../../public/projects-images-home/sea-level-rise.png';
import TradingBot from '../../public/projects-images-home/trading-bot.jpg';
import TravelingSalesman from '../../public/projects-images-home/traveling-salesman.png';
import MiniLogosBox from '../components/MiniLogos/MiniLogosBox';
import { MotionDiv, MotionSpan } from '../components/Motion/Motion';
import TechnologyAnimation from '../components/TechnologyAnimation/TechnologyAnimation';
import initTranslations from '../i18n';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['home'];

const projects = [
  {
    href: '/projects/adam-planet',
    title: 'project-adam-planet',
    date: '2024',
    imageSrc: AdamPlanetImage,
    logos: ['Next', 'TypeScript', 'ThreeJs'],
  },
  {
    href: '/projects/traveling-salesman',
    title: 'project-traveling-salesman',
    date: '2023',
    imageSrc: TravelingSalesman,
    logos: ['React', 'TypeScript', 'Electron', 'Vite'],
  },
  {
    href: '/projects/ideal-city',
    title: 'project-ideal-city',
    date: '2023',
    imageSrc: IdealCity,
    logos: ['React', 'TypeScript', 'Electron', 'Vite', 'Mongo'],
  },
  {
    href: '/projects/sea-level-rise',
    title: 'project-sea-level-rise',
    date: '2023',
    imageSrc: SeaLevelRise,
    logos: ['React', 'TypeScript', 'Electron', 'Vite'],
  },
  {
    href: '/projects/flight-path-planner',
    title: 'project-flight-path-planner',
    date: '2024',
    imageSrc: FlightPathPlanner,
    logos: ['React', 'TypeScript', 'Electron', 'Vite'],
  },
  {
    href: '/projects/old-adam-code',
    title: 'project-old-adam-code',
    date: '2023',
    imageSrc: AdamCodeV2,
    logos: ['React', 'TypeScript', 'Mongo', 'Cloudinary', 'Vite'],
  },
  {
    href: '/projects/metal-quiz',
    title: 'project-metal-quiz',
    date: '2023',
    imageSrc: MetalQuiz,
    logos: ['React', 'JavaScript'],
  },
  {
    href: '/projects/modrice-go-kart',
    title: 'project-modrice',
    date: '2023',
    imageSrc: Modrice,
    logos: ['Html', 'Css', 'JavaScript'],
  },
  {
    href: '/projects/trading-bot',
    title: 'project-trading-bot',
    date: '2024',
    imageSrc: TradingBot,
    logos: ['Python'],
  },
  {
    href: '/projects/grocery-bud',
    title: 'project-grocery',
    date: '2022',
    imageSrc: GroceryBud,
    logos: ['Html', 'Css', 'JavaScript'],
  },
  {
    href: '/projects/adam-planet-v1',
    title: 'project-adam-planet-old',
    date: '2022',
    imageSrc: AdamPlanetOldImage,
    logos: ['Html', 'Css', 'JavaScript'],
  },
];

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
        <MotionSpan
          animate={{
            opacity: 1,
            y: 0,
          }}
          initial={{
            opacity: 0,
            y: 10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <p className={styles.heroParagraph}>{t('desc')}</p>
        </MotionSpan>
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
          {projects.map((project, index) => (
            <MotionDiv
              key={project.title}
              animate={{
                opacity: 1,
              }}
              initial={{
                opacity: 0,
              }}
              transition={{ duration: 0.5, delay: index * 0.05, easeOut: 0.5 }}
            >
              <Link href={project.href}>
                <div className={styles.projectHeader}>
                  <h3>{t(project.title)}</h3>
                  <p className={styles.projectDate}>{project.date}</p>
                </div>
                <Image
                  alt={t(project.title)}
                  className={styles.projectImage}
                  loading={index === 0 ? undefined : 'eager'}
                  placeholder="blur"
                  priority={index === 0}
                  quality={50}
                  src={project.imageSrc}
                />
              </Link>
              <MiniLogosBox show={project.logos} />
            </MotionDiv>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
