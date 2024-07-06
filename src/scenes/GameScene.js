import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';

const GameScene = () => {
  return (
    <Canvas style={{ height: '100vh', width: '100vw' }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[2, 5, 2]} intensity={1} />
      <OrbitControls />
      <Stars />

      {/* Add a ground plane */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeBufferGeometry args={[100, 100]} />
        <meshStandardMaterial color="#666666" />
      </mesh>

      {/* Add a simple cube */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="orange" />
      </mesh>
    </Canvas>
  );
};

export default GameScene;
