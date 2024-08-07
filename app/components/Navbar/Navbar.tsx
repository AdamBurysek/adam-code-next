'use client';

import { useRouter, usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { i18nConfig } from '@/i18nConfig';

import { AdamCodeLogo } from '../Icons';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import HamburgerButton from './Hamburger';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const { t, i18n } = useTranslation();

  const router = useRouter();
  const currentPathname = usePathname();
  const currentLocale = i18n.language;

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  const onLanguageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newLocale: string = (e.currentTarget as HTMLButtonElement).value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();

    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
      // eslint-disable-next-line operator-linebreak
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push(`/${newLocale}${currentPathname}`, { scroll: false });
    } else {
      router.push(
        currentPathname.replace(`/${currentLocale}`, `/${newLocale}`),
        { scroll: false },
      );
    }

    router.refresh();
  };

  const handleNavButtonClick = (target: string) => {
    router.push(`/${currentLocale}/${target}`);
    setMenuOpened(false);
  };

  return (
    <header className={`${styles.navbar} ${menuOpened ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarSide}>
          <button
            aria-label="Home Button"
            onClick={() => handleNavButtonClick('/#home')}
            type="button"
          >
            <span className={styles.logo}>
              <AdamCodeLogo />
            </span>
          </button>

          <nav>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.target}>
                  <button
                    onClick={() => handleNavButtonClick(link.target)}
                    type="button"
                  >
                    {t(`navbar:${link.name}`)}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.navbarSide}>
          {/* There are two different language switchers. */}
          {/* Dropdown for desktop and buttons for mobile. */}

          {/* Language switch Destktop */}
          <div className={styles.languageSwitcherDesktop}>
            <p>{currentLocale === 'en' ? 'EN' : 'CZ'}</p>
            <button
              onClick={(e) => onLanguageChange(e)}
              type="button"
              value="cs"
            >
              CZ
            </button>
            <button
              onClick={(e) => onLanguageChange(e)}
              type="button"
              value="en"
            >
              EN
            </button>
          </div>
          {/* Language switch Mobile */}
          <div className={styles.languageSwitcherMobile}>
            <button
              className={currentLocale === 'cs' ? styles.active : ''}
              onClick={(e) => onLanguageChange(e)}
              type="button"
              value="cs"
            >
              CZ
            </button>
            <button
              className={currentLocale === 'en' ? styles.active : ''}
              onClick={(e) => onLanguageChange(e)}
              type="button"
              value="en"
            >
              EN
            </button>
          </div>
          <ThemeSwitcher />
        </div>
        <HamburgerButton
          handleHamburgerClick={handleHamburgerClick}
          menuOpened={menuOpened}
        />
      </div>
    </header>
  );
};

export default Navbar;
