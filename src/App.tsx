import { Canvas } from '@react-three/fiber';
import { useMemo } from 'react';
import './App.css'
import Ground from './components/Ground';
import { Model } from './components/Model';
import { Model2 } from './components/Model2';
import { FlyControls, PointerLockControls, Sky, Stats } from '@react-three/drei';
import Crosshair from './components/Crosshair';



function App() {

  const gridSize = 5;

  const grounds = useMemo(() => {
    const items = [];
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        items.push(
          <Ground
            key={`${i}-${j}`}
            position={[i - gridSize / 2, 0, j - gridSize / 2]}
            frustumCulled={true}
          />,
        );
      }
    }
    return items;
  }, []);

  return (
    <section className="three-canvas">
      <Canvas shadows>
        <PointerLockControls />
        <FlyControls rollSpeed={0} movementSpeed={5} dragToLook />
        <Stats />
        <Sky sunPosition={[-50, 40, 50]} />
        <ambientLight intensity={0.2} />
        <directionalLight 
          position={[-50, 40, 50]} 
          castShadow 
          intensity={1.5}
          shadow-mapSize={[2048, 2048]}
          shadow-camera-left={-20}
          shadow-camera-right={20}
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-camera-near={0.1}
          shadow-camera-far={100}
        />
        <Model 
          position={[0, 0, 5]} 
          scale={[0.5, 0.5, 0.5]} 
          castShadow 
          receiveShadow 
        />
        <Model2
          position={[1.57, 0, 0]}
          scale={[0.5, 0.5, 0.5]} 
          castShadow
          receiveShadow
        />
        {grounds}
      </Canvas>
      <Crosshair />
    </section>
  )
}

export default App
