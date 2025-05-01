import type { FC } from 'react';

import { MotionDiv } from '../Motion/Motion';

import styles from './ProjectLogosBox.module.css';
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
  TailwindCssMini,
} from './TechnologyLogos';

interface Props {
  show?: string[] | string;
}

type LogoComponents = {
  name: string;
  component: FC<React.SVGProps<SVGSVGElement>>;
  label: string;
};

const logoComponents: LogoComponents[] = [
  { name: 'Html', component: HtmlMini, label: 'HTML' },
  { name: 'Css', component: CssMini, label: 'CSS' },
  { name: 'React', component: ReactMini, label: 'React' },
  { name: 'Next', component: NextMini, label: 'Next.js' },
  { name: 'Tailwind', component: TailwindCssMini, label: 'Tailwind CSS' },
  { name: 'JavaScript', component: JavaScriptMini, label: 'JavaScript' },
  { name: 'TypeScript', component: TypeScriptMini, label: 'TypeScript' },
  { name: 'Electron', component: ElectronMini, label: 'Electron' },
  { name: 'Vite', component: ViteMini, label: 'Vite' },
  { name: 'Mongo', component: MongoMini, label: 'MongoDB' },
  { name: 'Cloudinary', component: CloudinaryMini, label: 'Cloudinary' },
  { name: 'Python', component: PythonMini, label: 'Python' },
  { name: 'ThreeJs', component: ThreeJsMini, label: 'Three.js' },
];

const ProjectLogosBox = ({ show }: Props) => {
  let displayIndex = 1;

  return (
    <div className={styles.container}>
      {logoComponents.map(({ name, component: Component, label }) => {
        if (!show || show.includes(name)) {
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
