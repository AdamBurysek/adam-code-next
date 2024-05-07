import Image from 'next/image';
import Link from 'next/link';

import AdamPlanetImage from '../../public/projects-images-home/adam-planet.png';
import MiniLogosBox from '../components/MiniLogos/MiniLogosBox';
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
  return (
    <>
      <div className={styles.dummyHeroDiv} id="home" />
      <div className={styles.container}>
        <div className={styles.gridBackground} />
        <h1>
          {t('header-start')}
          <span className={styles.smallText}> aka Adam Code</span>
          <br />
          <span className="text-gradient">{t('header-end')}</span>
        </h1>
        <p className={styles.heroParagraph}>{t('desc')}</p>
        <div className={styles.btnContainer}>
          <Link href="/about">
            <button className="btn button-gradient" type="button">
              {t('projects-button')}
            </button>
          </Link>
          <Link href="/contact">
            <button className="btn btn-basic" type="button">
              {t('contact-button')}
            </button>
          </Link>
        </div>
      </div>
      <div className={styles.technologyHeader}>{t('technology-header')}</div>
      <TechnologyAnimation />
      <section id="myprojects">
        <h2>{t('projects-header')}</h2>
        <div className={styles.projectsContainer} id="myprojects">
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>Adam Planet</h3>
                <p className={styles.projectDate}>2024</p>
              </div>
              <Image
                alt="Adam Planet Webpage"
                className={styles.projectImage}
                placeholder="blur"
                src={AdamPlanetImage}
              />
            </Link>
            <MiniLogosBox show={['Next', 'TypeScript', 'ThreeJs']} />
          </div>
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>Adam Planet</h3>
                <p>2024</p>
              </div>
              <Image
                alt="Adam Planet Webpage"
                className={styles.projectImage}
                src={AdamPlanetImage}
              />
            </Link>
            <MiniLogosBox show={['Next', 'TypeScript', 'ThreeJs']} />
          </div>
          <div>
            <Link href="/adamplanet">
              <div className={styles.projectHeader}>
                <h3>Adam Planet</h3>
                <p>2024</p>
              </div>
              <Image
                alt="Adam Planet Webpage"
                className={styles.projectImage}
                src={AdamPlanetImage}
              />
            </Link>
            <MiniLogosBox show={['Next', 'TypeScript', 'ThreeJs']} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
