import styles from './TechnologyAnimation.module.css';
import {
  Electron,
  Express,
  Figma,
  GitHub,
  MongoDb,
  Node,
  Python,
  ReactLogo,
} from './TechnologyIcons';

const TechnologyAnimation = () => (
  <div className={styles.container}>
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        <section>
          <Figma />
          <MongoDb />
          <Express />
          <ReactLogo />
          <Node />
          <Electron />
          <GitHub />
          <Python />
        </section>
        <section>
          <Figma />
          <MongoDb />
          <Express />
          <ReactLogo />
          <Node />
          <Electron />
          <GitHub />
          <Python />
        </section>
        <section>
          <Figma />
          <MongoDb />
          <Express />
          <ReactLogo />
          <Node />
          <Electron />
          <GitHub />
          <Python />
        </section>
      </div>
    </div>
  </div>
);

export default TechnologyAnimation;
