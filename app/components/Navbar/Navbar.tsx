'use client';

import { useState } from 'react';

import HamburgerButton from './Hamburger';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';
import AdamCodeLogo from './AdamCodeLogo';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

const Navbar = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleHamburgerClick = () => {
    setMenuOpened(!menuOpened);
  };

  return (
    <header className={`${styles.navbar} ${menuOpened ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <div className={styles.navbarSide}>
          <button type="button">
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
          <div className={styles.languageSwitcher}>
            <button>CZ</button>
            <button>EN</button>
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
