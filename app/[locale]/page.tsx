/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable unused-imports/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

import initTranslations from '../i18n';

import styles from './page.module.css';

const i18namespaces = ['home'];

const Home = async ({ params: { locale } }: any) => {
  const { t, resources } = await initTranslations(locale, i18namespaces);
  return (
    <>
      {/* <Navbar /> */}
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.gridBackground} />
          <h1>
            {t('header-start')}
            <span className={styles.smallText}> aka Adam Code</span>
            <br />
            <span className="gradient">{t('header-end')}</span>
          </h1>
          <p className={styles.heroParagraph}>{t('desc')}</p>
        </div>
      </main>
    </>
  );
};

export default Home;
