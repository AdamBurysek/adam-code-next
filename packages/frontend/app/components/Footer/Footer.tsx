import React from 'react';

import { AdamCodeLogo, GithubLogo, LinkedinLogo, MailLogo } from '../Icons';

import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.container}>
      <div>
        <AdamCodeLogo />
        <p>© 2024 Adam Code</p>
      </div>
      <div className={styles.logoBox}>
        <a aria-label="mail" href="mailto:adam.burysek@seznam.cz" type="button">
          <MailLogo />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/in/adam-burysek/"
          rel="noreferrer"
          target="_blank"
          type="button"
        >
          <LinkedinLogo />
        </a>
        <a
          aria-label="github"
          href="https://github.com/AdamBurysek/"
          rel="noreferrer"
          target="_blank"
          type="button"
        >
          <GithubLogo />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
