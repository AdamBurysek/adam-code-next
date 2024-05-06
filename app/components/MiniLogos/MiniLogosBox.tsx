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

const MiniLogosBox = (props: Props) => (
  <div className={styles.container}>
    {(!props.show || props.show.includes('Html')) && <HtmlMini />}
    {(!props.show || props.show.includes('Css')) && <CssMini />}
    {(!props.show || props.show.includes('React')) && <ReactMini />}
    {(!props.show || props.show.includes('Next')) && <NextMini />}
    {(!props.show || props.show.includes('JavaScript')) && <JavaScriptMini />}
    {(!props.show || props.show.includes('TypeScript')) && <TypeScriptMini />}
    {(!props.show || props.show.includes('Electron')) && <ElectronMini />}
    {(!props.show || props.show.includes('Vite')) && <ViteMini />}
    {(!props.show || props.show.includes('Mongo')) && <MongoMini />}
    {(!props.show || props.show.includes('Cloudinary')) && <CloudinaryMini />}
    {(!props.show || props.show.includes('Python')) && <PythonMini />}
    {(!props.show || props.show.includes('ThreeJs')) && <ThreeJsMini />}
  </div>
);

export default MiniLogosBox;
