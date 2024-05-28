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
      <h1 className="text-gradient center-align">{t('header')}</h1>

      <div className={styles.topContainer}>
        <div className={styles.sideContainer}>
          <h2>Nesnažím se umět vše</h2>
          <p>
            V roce 2014 jsem začal s hudební produkcí. Zpočátku jsem dělal mnoho
            začátečnických chyb. Používal jsem například 15 různých pluginů na
            distorzi a naivně jsem věřil, že ten 16. plugin bude ten pravý.
            Pravda je, že stačí dobře ovládat jeden, abyste zvládli většinu
            práce. Stejný přístup uplatňuji i v programování. Specializuji se na
            frontend a knihovnu React, ale mám i základní znalosti backendu. To
            mi umožňuje chápat celkový koncept programování a vytvářet
            jednoduché aplikace kompletně. Jsem tedy schopný pracovat v týmu,
            ale i samostatně.
          </p>
        </div>
        <div className={styles.sideContainer}>
          <SkillsCube />
        </div>
      </div>
      <div className={styles.bottomContainer}>
        <h3>UI a Grafika</h3>
        <h4>Figma</h4>
        <p>Mám za sebou rozsáhlý kurz na Figmu, takže ji znám opravdu dobře.</p>
        <h4>Photoshop</h4>
        <p>
          Používal jsem v minulosti. Díky drahým placeným plánům dnes již
          nepoužívam.
        </p>
        <h4>Procreate</h4>
        <p>
          Levná a plně dostačující náhrada Photoshopu. Používám nejčastěji ke
          kreslení a úpravě obrázků.
        </p>
        <h3>Frontend</h3>
        <h4>HTML, CSS, JavaScript</h4>
        <p>Prostě základ, který je potřeba umět.</p>
        <h4>React</h4>
        <p>
          React jsem si vybral díky jeho rozsáhle komunitě, ekosystému a
          jednoduchosti.
        </p>
        <h4>Next.js</h4>
        <p>
          Webové aplikace dnes vytvářím zásadně pomocí Next.js. Jednoduchost a
          výkon Next.js mě jednoduše ohromily.
        </p>
        <h4>React-Native</h4>
        <p>
          Pokud člověk umí React, není už tak těžké zvládnout i React-Native.
        </p>
        <h4>Electron.js</h4>
        <p>
          Když je potřeba desktopovou aplikaci, rozšířím React o Electron.js.
        </p>
        <h3>Backend</h3>
        <h4>Node.js</h4>
        <p>
          Znám základy. Hlouběji zatím nebyl důvod jít. Snad se důvod v budoucnu
          najde.
        </p>
        <h4>Express</h4>
        <p>Jednoduchý framework pro Node.js, který dokáže usnadnit život.</p>
        <h4>Python</h4>
        <p>Na Pythonu jsem začínal. Rád ho používám.</p>
        <h3>Databáze</h3>
        <h4>MongoDB</h4>
        <p>
          MongoDB mám velmi rád, zejména díky možnosti vytvářet serverless
          backend.
        </p>
        <h4>Drizzle + Postgres</h4>
        <p>Skvělé řešení pro Next.js.</p>
        <h3>Npm knihovny</h3>
        <p>
          Mám zkušenosti s tolika npm knihovnami, že jejich výčet by byl příliš
          dlouhý. Díky těmto zkušenostem se dokážu rychle naučit pracovat s
          novou knihovnou, kterou ještě neznám.
        </p>
        <h3>Ostatní</h3>
        <h4>GitHub</h4>
        <p>Klíčový nástroj pro verzování, spolupráci a správu kódu.</p>
        <h4>Docker</h4>
        <p>
          Udělal jsem si kurz na docker, aby mě neznalost neomezovala v týmové
          spolupráci. V budoucnu budu snad docker používat více.
        </p>
      </div>
    </div>
  );
};
export default MySkills;
