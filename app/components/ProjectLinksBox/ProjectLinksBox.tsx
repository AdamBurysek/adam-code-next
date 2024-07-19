import initTranslations from '@/app/lib/i18n';
import React from 'react';
import { LinuxLogo, MacLogo, WindowsLogo } from './SystemIcons';

type Props = {
  locale: string;
  webLink?: string;
};

const i18namespaces = ['global'];

const ProjectLinksBox = async ({ locale, webLink }: Props) => {
  const { t } = await initTranslations(locale, i18namespaces);

  return (
    <div className="buttonBox">
      {webLink ? (
        <a
          className="webLink"
          href={webLink}
          rel="noopener noreferrer"
          target="_blank"
        >
          {t('visit-button')}
        </a>
      ) : null}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
          margin: 20,
        }}
      >
        <WindowsLogo />
        <MacLogo />
        <LinuxLogo />
      </div>
    </div>
  );
};

export default ProjectLinksBox;
