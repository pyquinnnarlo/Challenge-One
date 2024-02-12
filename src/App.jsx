import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

import Header from './components/Header';
import Data from './components/Data';
import './App.css';
import Sidebar from './components/Sidebar';
import SpaceSound from './assets/spacesound-7547.mp3';

function RotatingEarth({ playAudio }) {
  const earthRef = useRef();
  const audioRef = useRef();

  // Rotate the Earth to simulate day/night cycle
  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();
    earthRef.current.rotation.y = elapsedTime * 0.2; // Adjust the rotation speed as needed
  });

  useEffect(() => {
    if (playAudio) {
      const audio = new Audio(SpaceSound);
      audio.loop = true;
      audioRef.current = audio;
      audio.play();

      return () => {
        // Cleanup: stop the audio when the component unmounts
        audio.pause();
      };
    }
  }, [playAudio]);

  return (
    <>
      {/* Earth */}
      <mesh ref={earthRef}>
        <sphereBufferGeometry attach="geometry" args={[2.5, 22, 82]} />
        <meshStandardMaterial
          attach="material"
          color="yellow"
          emissive="orange" // Emissive color for a glowing effect
          emissiveIntensity={0.5} // Adjust the intensity of the emissive glow
          metalness={1}
        />
      </mesh>
    </>
  );
}

function CustomScene() {
  const [playAudio, setPlayAudio] = useState(true);

  const handleStartAudio = () => {
    setPlayAudio(true);
  };
  

  return (
    <>
      <Sidebar />
      <Header />
      <div
        style={{
          width: '100%',
          height: '44vh',
          overflow: 'auto',
          position: 'relative',
          zIndex: 0,
          backgroundColor: 'black',
        }}
      >
        <Canvas
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <ambientLight intensity={0.5} onPointerOver={handleStartAudio} />
          <spotLight position={[10, 15, 10]} angle={0.3} />
          <RotatingEarth playAudio={playAudio} />
        </Canvas>
      </div>
      <Data />
    </>
  );
}

export default CustomScene;
