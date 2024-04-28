'use client';

import { useState } from 'react';

import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

import AdamCodeLogo from './AdamCodeLogo';
import HamburgerButton from './Hamburger';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
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
                  <button data-target={link.target} type="button">
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.navbarSide}>
          <div className={styles.languageSwitcherDesktop}>
            <p>EN</p>
            <button type="button">CZ</button>
            <button type="button">EN</button>
          </div>
          <div className={styles.languageSwitcherMobile}>
            <button type="button">CZ</button>
            <button type="button">EN</button>
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
