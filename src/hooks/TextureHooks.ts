import { useTexture } from '@react-three/drei';

const useTextures = () => {

  const metalTexture = useTexture({
    map: './metal/Metal053C_1K-JPG_Color.jpg',
    // displacementMap: './metal/Metal053C_1K-JPG_Displacement.jpg',
    normalMap: './metal/Metal053C_1K-JPG_NormalDX.jpg',
    roughnessMap: './metal/Metal053C_1K-JPG_Roughness.jpg',
    metalnessMap: './metal/Metal053C_1K-JPG_Metalness.jpg',
  });

  return { metalTexture };
};

export default useTextures;