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
import styles from './MiniLogosBox.module.css';

type Props = {
  show?: string[] | string;
};

const MiniLogosBox = ({ show }: Props) => (
  <div className={styles.container}>
    {(!show || show.includes('Html')) && <HtmlMini />}
    {(!show || show.includes('Css')) && <CssMini />}
    {(!show || show.includes('React')) && <ReactMini />}
    {(!show || show.includes('Next')) && <NextMini />}
    {(!show || show.includes('JavaScript')) && <JavaScriptMini />}
    {(!show || show.includes('TypeScript')) && <TypeScriptMini />}
    {(!show || show.includes('Electron')) && <ElectronMini />}
    {(!show || show.includes('Vite')) && <ViteMini />}
    {(!show || show.includes('Mongo')) && <MongoMini />}
    {(!show || show.includes('Cloudinary')) && <CloudinaryMini />}
    {(!show || show.includes('Python')) && <PythonMini />}
    {(!show || show.includes('ThreeJs')) && <ThreeJsMini />}
  </div>
);

export default MiniLogosBox;
