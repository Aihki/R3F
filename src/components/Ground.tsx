import { ThreeElements } from '@react-three/fiber';
import useTextures from '../hooks/TextureHooks';
import { memo } from 'react';

const Ground = memo(({ position, ...props }: ThreeElements['mesh']) => {
  const { metalTexture } = useTextures();
  return (
    <mesh position={position} rotation={[-Math.PI / 2, 0, 0]} {...props} receiveShadow>
      <planeGeometry args={[1, 1, 50, 50]} />
      <meshStandardMaterial
        {...metalTexture}
        roughness={0.2}
      />
    </mesh>
  );
});

export default Ground;