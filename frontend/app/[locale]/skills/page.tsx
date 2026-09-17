import Image from 'next/image';

import { MotionDiv, MotionSpan } from '@/app/components/Motion/Motion';
import type { PageProps } from '@/app/lib/types';

import LaptopImage from '../../../public/laptopImage.webp';
import initTranslations from '../../lib/i18n';

import styles from './page.module.css';

const i18namespaces = ['my-skills'];

const MySkills = async (props: PageProps) => {
  const params = await props.params;

  const { locale } = params;

  const { t } = await initTranslations(locale, i18namespaces);

  const sections = [
    {
      title: t('ui-header'),
      items: [
        { title: 'Figma', desc: t('figma') },
        { title: 'Photoshop', desc: t('photoshop') },
        { title: 'Procreate', desc: t('procreate') },
      ],
    },
    {
      title: 'Frontend',
      items: [
        { title: 'HTML, CSS, JavaScript', desc: t('html') },
        { title: 'Tailwind CSS', desc: t('tailwind') },
        { title: 'React', desc: t('react') },
        { title: 'Next.js', desc: t('next') },
        { title: 'React Native', desc: t('react-native') },
        { title: 'Swift', desc: t('swift') },
        { title: 'Electron.js', desc: t('electron') },
      ],
    },
    {
      title: 'Backend',
      items: [
        { title: 'Node.js', desc: t('node') },
        { title: 'Express', desc: t('express') },
        { title: 'Python', desc: t('python') },
      ],
    },
    {
      title: t('db-header'),
      items: [
        { title: 'MongoDB', desc: t('mongo') },
        { title: 'SQL', desc: t('sql') },
        { title: 'Drizzle + Postgres', desc: t('drizzle') },
      ],
    },
    {
      title: t('npm-header'),
      description: t('npm'),
      items: [
        { title: 'Axios', desc: t('axios') },
        { title: 'React Query', desc: t('react-query') },
        { title: 'Framer Motion', desc: t('framer-motion') },
        { title: 'Swiper', desc: t('swiper') },
        { title: 'Three', desc: t('three') },
      ],
    },
    {
      title: t('other-header'),
      items: [
        { title: 'Git', desc: t('git') },
        { title: 'Postman / Insomnia', desc: t('postman') },
        { title: 'Docker', desc: t('docker') },
        { title: 'Vitest + Testing Library', desc: t('vitest') },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.topContainer}>
        <h1 className={`${styles.header} text-gradient center-align`}>
          {t('header')}
        </h1>
        <MotionDiv
          animate={{
            opacity: 1,
            x: 0,
          }}
          className={styles.text}
          initial={{
            opacity: 0,
            x: -10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <h2>{t('second-header')}</h2>
          <p>{t('text')}</p>
        </MotionDiv>
        <MotionSpan
          animate={{
            opacity: 1,
            x: 0,
          }}
          initial={{
            opacity: 0,
            x: 10,
          }}
          transition={{ duration: 0.5, easeOut: 0.5 }}
        >
          <Image
            alt="Image"
            className={styles.topImage}
            placeholder="blur"
            src={LaptopImage}
          />
        </MotionSpan>
      </div>
      <MotionDiv
        animate={{
          opacity: 1,
          y: 0,
        }}
        className={styles.bottomContainer}
        initial={{
          opacity: 0,
          y: 10,
        }}
        transition={{ duration: 0.5, delay: 0.1, easeOut: 0.5 }}
      >
        {sections.map((section) => (
          <div key={section.title}>
            <h3>{section.title}</h3>
            {section.description && (
              <p>
                <b>{section.description}</b>
              </p>
            )}
            {section.items.map((item) => (
              <div key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        ))}
      </MotionDiv>
    </div>
  );
};
export default MySkills;
