/* eslint-disable react/no-unknown-property */

'use client';

import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import type { Mesh } from 'three';
import { CanvasTexture } from 'three';

import styles from './SkillsCube.module.css';

const Cube = () => {
  const mesh = useRef<Mesh>(null);
  const [textures, setTextures] = useState<CanvasTexture[]>([]);

  useEffect(() => {
    let isMounted = true;

    const loadTextures = async () => {
      const svgs = [
        '/cube-images/react-logo.svg',
        '/cube-images/node-logo.svg',
        '/cube-images/typescript-logo.svg',
        '/cube-images/next-logo.svg',
        '/cube-images/mongo-logo.svg',
        '/cube-images/python-logo.svg',
      ];

      const newTextures = await Promise.all(
        svgs.map(async (svgUrl) => {
          const img = new Image();
          img.src = svgUrl;
          await img.decode();

          const canvas = document.createElement('canvas');
          canvas.width = img.width + 200;
          canvas.height = img.height + 200;
          const ctx = canvas.getContext('2d');

          ctx!.fillStyle = 'white';
          ctx!.fillRect(0, 0, canvas.width, canvas.height);

          ctx!.drawImage(img, 100, 100);

          return new CanvasTexture(canvas);
        }),
      );

      if (isMounted) {
        setTextures(newTextures);
      }
    };

    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    loadTextures();

    return () => {
      isMounted = false;
    };
  }, []);

  useFrame((state, delta) => {
    if (mesh.current) {
      mesh.current.rotation.x += delta * 0.25;
      mesh.current.rotation.y += delta * 0.25;
      mesh.current.rotation.z += delta * 0.25;
    }
  });

  if (textures.length === 0) {
    return null; // or a loading spinner
  }

  return (
    <mesh ref={mesh}>
      <boxGeometry args={[2.7, 2.7, 2.7]} />
      {textures.map((texture, index) => (
        <meshStandardMaterial
          // eslint-disable-next-line react/no-array-index-key
          key={index}
          attach={`material-${index}`}
          map={texture}
        />
      ))}
    </mesh>
  );
};

const SkillsCube = () => (
  <div className={styles.container}>
    <Canvas>
      <OrbitControls enablePan={false} enableZoom={false} />
      <ambientLight intensity={0.5} />
      <directionalLight intensity={2} position={[1, 1, 1]} />
      <Cube />
    </Canvas>
  </div>
);

export default SkillsCube;
