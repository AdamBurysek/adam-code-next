import AdamCodeLogo from './components/AdamCodeLogo/AdamCodeLogo';
import ThemeSwitcher from './components/ThemeSwitcher/ThemeSwitcher';
import styles from './page.module.css';

const Home = () => (
  <main className={styles.main}>
    <AdamCodeLogo />
    <h1>
      Hello, I&apos;m Adam
      <br />
      <span className="gradient">a Full Stack Developer</span>
    </h1>
    <ThemeSwitcher />
  </main>
);

export default Home;
