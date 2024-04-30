/* eslint-disable operator-linebreak */
/* eslint-disable unicorn/no-document-cookie */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { i18nConfig } from '@/i18nConfig';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import AdamCodeLogo from './AdamCodeLogo';
import HamburgerButton from './Hamburger';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const router = useRouter();
  const currentPathname = usePathname();
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleChange = (e: any) => {
    const newLocale = e.target.value;

    // set cookie for next-i18n-router
    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    // redirect to the new locale path
    if (
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

  return (
    <header className={`${styles.navbar} ${menuOpened ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarSide}>
          <button aria-label="Home Button" type="button">
            <span className={styles.logo}>
              <AdamCodeLogo />
            </span>
          </button>
          <nav>
            <ul className={styles.links}>
              {navLinks.map((link) => (
                <li key={link.target}>
                  <Link href="/about-me">
                    <button data-target={link.target} type="button">
                      {link.name}
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.navbarSide}>
          <div className={styles.languageSwitcherDesktop}>
            <p>{currentLocale === 'en' ? 'EN' : 'CZ'}</p>
            <button onClick={handleChange} type="button" value="cs">
              CZ
            </button>
            <button onClick={handleChange} type="button" value="en">
              EN
            </button>
          </div>
          <div className={styles.languageSwitcherMobile}>
            <button
              className={currentLocale === 'cs' ? styles.active : ''}
              onClick={handleChange}
              type="button"
              value="cs"
            >
              CZ
            </button>
            <button
              className={currentLocale === 'en' ? styles.active : ''}
              onClick={handleChange}
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
