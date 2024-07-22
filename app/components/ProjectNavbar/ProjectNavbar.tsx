import Link from 'next/link';
import React from 'react';

import initTranslations from '@/app/lib/i18n';

import { ArrowInCircle } from '../Icons';

import styles from './ProjectNavbar.module.css';

const i18namespaces = ['global'];

interface ProjectNavbarProps {
  locale: string;
  nextLink?: string;
  prevLink?: string;
}

const ProjectNavbar = async ({
  locale,
  nextLink,
  prevLink,
}: ProjectNavbarProps) => {
  const { t } = await initTranslations(locale, i18namespaces);
  return (
    <div className={styles.projectNavContainer}>
      <div>
        {prevLink ? (
          <Link className={styles.prevProject} href={prevLink}>
            <ArrowInCircle />
            <p>{t('project-prev-button')}</p>
          </Link>
        ) : null}
      </div>
      <div>
        {nextLink ? (
          <Link className={styles.nextProject} href={nextLink}>
            <p>{t('project-next-button')}</p>
            <ArrowInCircle />
          </Link>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectNavbar;
