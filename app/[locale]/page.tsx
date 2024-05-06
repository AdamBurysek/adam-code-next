import Link from 'next/link';

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
      <h2>{t('projects-header')}</h2>
      <MiniLogosBox show={['Python', 'Html', 'Mongo']} />
    </>
  );
};

export default Home;
