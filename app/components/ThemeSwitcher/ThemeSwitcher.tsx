'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

import styles from './ThemeSwitcher.module.css';

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    document.body.dataset.theme = theme;
  }, [theme]);

  return (
    <div className={styles.themeSwitcher} data-theme={theme}>
      <button
        className={styles.button}
        onClick={() => setTheme('light')}
        type="button"
      >
        1
      </button>
      <button
        className={styles.button}
        onClick={() => setTheme('system')}
        type="button"
      >
        2
      </button>
      <button
        className={styles.button}
        onClick={() => setTheme('dark')}
        type="button"
      >
        3
      </button>
      <motion.div
        className={styles.slider}
        layout
        transition={{ duration: 1, type: 'spring' }}
      />
    </div>
  );
};

export default ThemeSwitcher;
