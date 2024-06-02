/* eslint-disable react/destructuring-assignment */
import { MotionDiv } from '../Motion/Motion';

import {
  CloudinaryMini,
  CssMini,
  ElectronMini,
  HtmlMini,
  JavaScriptMini,
  MongoMini,
  NextMini,
  PythonMini,
  ReactMini,
  ThreeJsMini,
  TypeScriptMini,
  ViteMini,
} from './MiniLogos';
import styles from './ProjectLogosBox.module.css';

type Props = {
  show?: string[] | string;
};

const logoComponents = [
  { name: 'Html', component: HtmlMini, label: 'HTML' },
  { name: 'Css', component: CssMini, label: 'CSS' },
  { name: 'React', component: ReactMini, label: 'React' },
  { name: 'Next', component: NextMini, label: 'Next.js' },
  { name: 'JavaScript', component: JavaScriptMini, label: 'JavaScript' },
  { name: 'TypeScript', component: TypeScriptMini, label: 'TypeScript' },
  { name: 'Electron', component: ElectronMini, label: 'Electron' },
  { name: 'Vite', component: ViteMini, label: 'Vite' },
  { name: 'Mongo', component: MongoMini, label: 'MongoDB' },
  { name: 'Cloudinary', component: CloudinaryMini, label: 'Cloudinary' },
  { name: 'Python', component: PythonMini, label: 'Python' },
  { name: 'ThreeJs', component: ThreeJsMini, label: 'Three.js' },
];

const ProjectLogosBox = (props: Props) => {
  let displayIndex = 1;

  return (
    <div className={styles.container}>
      {logoComponents.map(({ name, component: Component, label }) => {
        if (!props.show || props.show.includes(name)) {
          return (
            <MotionDiv
              // eslint-disable-next-line no-plusplus
              key={displayIndex++}
              animate={{
                opacity: 1,
              }}
              className={styles.logoContainer}
              initial={{
                opacity: 0,
              }}
              transition={{
                duration: 0.5,
                delay: displayIndex * 0.2,
                easeOut: 0.5,
              }}
            >
              <Component />
              <p>{label}</p>
            </MotionDiv>
          );
        }
        return null;
      })}
    </div>
  );
};

export default ProjectLogosBox;
