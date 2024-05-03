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
        <button className="btn button-gradient" type="button">
          My Projects
        </button>
        <button className="btn btn-basic" type="button">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Home;
