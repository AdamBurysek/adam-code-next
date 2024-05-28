/* eslint-disable react/no-unknown-property */

'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import React, { useRef } from 'react';
import { TextureLoader } from 'three';
import type { Mesh } from 'three';

import styles from './SkillsCube.module.css';

const Cube = () => {
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  const texture1 = useLoader(TextureLoader, '/cube-images/react-logo.svg');
  const texture2 = useLoader(TextureLoader, '/cube-images/node-logo.svg');
  const texture3 = useLoader(TextureLoader, '/cube-images/typescript-logo.svg');
  const texture4 = useLoader(TextureLoader, '/cube-images/next-logo.svg');
  const texture5 = useLoader(TextureLoader, '/cube-images/mongo-logo.svg');
  const texture6 = useLoader(TextureLoader, '/cube-images/python-logo.svg');

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.5, 2.5, 2.5]} />
      <meshStandardMaterial attach="material-0" map={texture1} />
      <meshStandardMaterial attach="material-1" map={texture2} />
      <meshStandardMaterial attach="material-2" map={texture3} />
      <meshStandardMaterial attach="material-3" map={texture4} />
      <meshStandardMaterial attach="material-4" map={texture5} />
      <meshStandardMaterial attach="material-5" map={texture6} />
    </mesh>
  );
};

const CubeComponent = () => (
  <div className={styles.container}>
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={2} />
      <directionalLight position={[2, 1, 1]} />
      <Cube />
    </Canvas>
  </div>
);

export default CubeComponent;
