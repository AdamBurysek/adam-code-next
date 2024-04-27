import Navbar from './components/Navbar/Navbar';
import styles from './page.module.css';

const Home = () => (
  <>
    <Navbar />
    <main className={styles.main}>
      <h1>
        Hello, I&apos;m Adam
        <br />
        <span className="gradient">a Full Stack Developer</span>
      </h1>
    </main>
  </>
);

export default Home;
