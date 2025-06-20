import { MotionDiv } from '../Motion/Motion';

import styles from './TechnologyAnimation.module.css';
import {
  Electron,
  Express,
  Figma,
  GitHub,
  MongoDb,
  NextLogo,
  Node,
  Python,
  ReactLogo,
  SwiftLogo,
} from './TechnologyIcons';

const id = [1, 2, 3];

const TechnologyAnimation = () => (
  <MotionDiv
    animate={{
      opacity: 1,
      scale: 1,
    }}
    className={styles.container}
    initial={{
      opacity: 0,
      scale: 0.8,
    }}
    transition={{ duration: 0.5, easeOut: 0.5 }}
  >
    <div className={styles.inner}>
      <div className={styles.wrapper}>
        {id.map((item) => (
          <section key={item}>
            <Figma />
            <MongoDb />
            <ReactLogo />
            <Node />
            <SwiftLogo />
            <Electron />
            <GitHub />
            <Python />
            <NextLogo />
            <Express />
          </section>
        ))}
      </div>
    </div>
  </MotionDiv>
);

export default TechnologyAnimation;
