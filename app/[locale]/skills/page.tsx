import SkillsCube from '@/app/components/SkillsCube/SkillsCube';

import initTranslations from '../../i18n';

import styles from './page.module.css';

type LocaleParams = {
  params: {
    locale: string;
  };
};

const i18namespaces = ['my-skills'];

const MySkills = async ({ params: { locale } }: LocaleParams) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={`${styles.header} text-gradient center-align`}>
          {t('header')}
        </h1>
        <div className={styles.text}>
          <h2>{t('second-header')}</h2>
          <p>{t('text')}</p>
        </div>
        <div className={styles.imageBox}>
          <SkillsCube />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <h3>{t('ui-header')}</h3>
        <h4>Figma</h4>
        <p>{t('figma')}</p>
        <h4>Photoshop</h4>
        <p>{t('photoshop')}</p>
        <h4>Procreate</h4>
        <p>{t('procreate')}</p>
        <h3>Frontend</h3>
        <h4>HTML, CSS, JavaScript</h4>
        <p>{t('html')}</p>
        <h4>React</h4>
        <p>{t('react')}</p>
        <h4>Next.js</h4>
        <p>{t('next')}</p>
        <h4>React Native</h4>
        <p>{t('react-native')}</p>
        <h4>Electron.js</h4>
        <p>{t('electron')}</p>
        <h3>Backend</h3>
        <h4>Node.js</h4>
        <p>{t('node')}</p>
        <h4>Express</h4>
        <p>{t('express')}</p>
        <h4>Python</h4>
        <p>{t('python')}</p>
        <h3>{t('db-header')}</h3>
        <h4>MongoDB</h4>
        <p>{t('mongo')}</p>
        <h4>Drizzle + Postgres</h4>
        <p>{t('drizzle')}</p>
        <h3>{t('npm-header')}</h3>
        <p>{t('npm')}</p>
        <h3>{t('other-header')}</h3>
        <h4>GitHub</h4>
        <p>{t('git')}</p>
        <h4>Postman / Insomnia</h4>
        <p>{t('postman')}</p>
        <h4>Docker</h4>
        <p>{t('docker')}</p>
      </div>
    </div>
  );
};
export default MySkills;
