/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';

import initTranslations from '@/app/lib/i18n';

import styles from './ProjectLinksBox.module.css';
import { LinuxLogo, MacLogo, WindowsLogo } from './SystemIcons';

type Props = {
  locale: string;
  webLink?: string;
  windowsDlLink?: string;
  windowsSize?: string;
  macDlLink?: string;
  macSize?: string;
  linuxDlLink?: string;
  linuxSize?: string;
};

const i18namespaces = ['global'];

const ProjectLinksBox = async ({
  locale,
  webLink,
  windowsDlLink,
  windowsSize,
  macDlLink,
  macSize,
  linuxDlLink,
  linuxSize,
}: Props) => {
  const { t } = await initTranslations(locale, i18namespaces);

  return (
    <div className={styles.container}>
      {webLink && (
        <a
          className={styles.webLink}
          href={webLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('visit-button')}
        </a>
      )}
      {windowsDlLink || macDlLink || linuxDlLink ? (
        <div className={styles.downloadContainer}>
          {windowsDlLink && (
            <a href={windowsDlLink}>
              <WindowsLogo />
              <p>
                Windows Download
                {windowsSize && <span>({windowsSize})</span>}
              </p>
            </a>
          )}
          {macDlLink && (
            <a href={macDlLink}>
              <MacLogo />
              <p>
                Mac Download
                {macSize && <span>({macSize})</span>}
              </p>
            </a>
          )}
          {linuxDlLink && (
            <a href={linuxDlLink}>
              <LinuxLogo />
              <p>
                Linux Download
                {linuxSize && <span>({linuxSize})</span>}
              </p>
            </a>
          )}
        </div>
      ) : null}
    </div>
  );
};

export default ProjectLinksBox;
