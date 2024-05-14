/* eslint-disable react/destructuring-assignment */
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

const ProjectLogosBox = (props: Props) => (
  <div className={styles.container}>
    {(!props.show || props.show.includes('Html')) && (
      <div className={styles.logoContainer}>
        <HtmlMini />
        <p>HTML</p>
      </div>
    )}
    {(!props.show || props.show.includes('Css')) && (
      <div className={styles.logoContainer}>
        <CssMini />
        <p>CSS</p>
      </div>
    )}
    {(!props.show || props.show.includes('React')) && (
      <div className={styles.logoContainer}>
        <ReactMini />
        <p>React</p>
      </div>
    )}
    {(!props.show || props.show.includes('Next')) && (
      <div className={styles.logoContainer}>
        <NextMini />
        <p>Next.js</p>
      </div>
    )}
    {(!props.show || props.show.includes('JavaScript')) && (
      <div className={styles.logoContainer}>
        <JavaScriptMini />
        <p>JavaScript</p>
      </div>
    )}
    {(!props.show || props.show.includes('TypeScript')) && (
      <div className={styles.logoContainer}>
        <TypeScriptMini />
        <p>TypeScript</p>
      </div>
    )}
    {(!props.show || props.show.includes('Electron')) && (
      <div className={styles.logoContainer}>
        <ElectronMini />
        <p>Electron</p>
      </div>
    )}
    {(!props.show || props.show.includes('Vite')) && (
      <div className={styles.logoContainer}>
        <ViteMini />
        <p>Vite</p>
      </div>
    )}
    {(!props.show || props.show.includes('Mongo')) && (
      <div className={styles.logoContainer}>
        <MongoMini />
        <p>MongoDB</p>
      </div>
    )}
    {(!props.show || props.show.includes('Cloudinary')) && (
      <div className={styles.logoContainer}>
        <CloudinaryMini />
        <p>Cloudinary</p>
      </div>
    )}
    {(!props.show || props.show.includes('Python')) && (
      <div className={styles.logoContainer}>
        <PythonMini />
        <p>Python</p>
      </div>
    )}
    {(!props.show || props.show.includes('ThreeJs')) && (
      <div className={styles.logoContainer}>
        <ThreeJsMini />
        <p>Three.js</p>
      </div>
    )}
  </div>
);

export default ProjectLogosBox;
