import { useGLTF, useTexture } from '@react-three/drei'
import { GroupProps, useFrame } from '@react-three/fiber'
import { GLTF } from 'three-stdlib'
import { Mesh, MeshStandardMaterial, Color, RepeatWrapping,  FrontSide, LinearMipmapLinearFilter, LinearFilter } from 'three'
import { useRef, useState } from 'react'



type GLTFResult = GLTF & {
  nodes: {
    pultWarning_low__0: Mesh
    pultBase_low__0: Mesh
    pultButton_low__0: Mesh
    pultLcd_low__0: Mesh
    pultMat_low__0: Mesh
    pultRollButton_low__0: Mesh
    pultSteklo_low__0: Mesh
    pultStekloHold_low__0: Mesh
    pultTruba_low__0: Mesh
    pultTrubaHold_low__0: Mesh
    pultTumblerPanel_low__0: Mesh
    pultTumblerPanel_low001__0: Mesh
    pultButton_low001__0: Mesh
    pultButton_low002__0: Mesh
    pultWarning_low001__0: Mesh
    pultWarning_low002__0: Mesh
    pultWarning_low003__0: Mesh
    pultTrubaHold_low001__0: Mesh
  }
  materials: {
    'Scene_-_Root': MeshStandardMaterial
  }
}

export function Model(props: GroupProps) {
  const { nodes, materials } = useGLTF('./models/control_panel/scene.gltf') as GLTFResult
  const buttonRefs = useRef<Mesh[]>([])
  const buttonMaterials = useRef<MeshStandardMaterial[]>([])

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const textures = useTexture([
    './img/image1.jpg',
    './img/image2.jpg',
    './img/image3.jpg'
  ])
  textures.forEach(texture => {
    texture.repeat.set(4, 4)
    texture.offset.set(0.5, 0.5)
    texture.center.set(0.5, 0.5)
    texture.rotation = 0
    texture.flipY = true
    texture.colorSpace = 'srgb'
    texture.wrapS = RepeatWrapping
    texture.wrapT = RepeatWrapping
    texture.generateMipmaps = true
    texture.minFilter = LinearMipmapLinearFilter
    texture.magFilter = LinearFilter
    texture.needsUpdate = true
  })

  Object.values(materials).forEach(material => {
    material.metalness = 0.4
    material.roughness = 0.6
    material.envMapIntensity = 1
    material.side = FrontSide
    material.needsUpdate = true
  })

  const lcdMaterial = new MeshStandardMaterial({
    map: textures[currentImageIndex],
    emissive: new Color(0xffffff),
    emissiveMap: textures[currentImageIndex],
    emissiveIntensity: 0.8,
    metalness: 0.1,
    roughness: 0.2,
    color: 0xffffff,
    envMapIntensity: 1,
    side: FrontSide,
    transparent: true,
    opacity: 1
  })

  const onAndOff = () => {
    if (lcdMaterial.map) {
      lcdMaterial.map = null
      lcdMaterial.emissiveMap = null
      lcdMaterial.color.set(0x000000)
      lcdMaterial.emissive.set(0x000000)
      lcdMaterial.needsUpdate = true
    } else {
      lcdMaterial.map = textures[currentImageIndex]
      lcdMaterial.emissiveMap = textures[currentImageIndex]
      lcdMaterial.color.set(0xffffff)
      lcdMaterial.emissive.set(0x000000)
      lcdMaterial.needsUpdate = true
    }
  }

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + textures.length) % textures.length)
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % textures.length)
  }


  useFrame((state) => {
    buttonMaterials.current.forEach((material, index) => {
      if (material) {
        const hue = (state.clock.elapsedTime * 0.2 + index * 0.3) % 1
        const color = new Color()
        color.setHSL(hue, 1, 0.5)
        material.emissive = color 
        material.emissiveIntensity = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.5 
      }
    })
  })

  const handleButtonRef = (el: Mesh | null, index: number) => {
    if (el) {
      buttonRefs.current[index] = el
      const newMaterial = materials['Scene_-_Root'].clone()
      newMaterial.emissiveIntensity = 2
      buttonMaterials.current[index] = newMaterial
      el.material = newMaterial
    }
  }

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.016}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group position={[18.191, 91.872, -931.495]} rotation={[-1.813, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultWarning_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[50.635, -54.835, -91.373]}
              onClick={handlePrevImage}
            />
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultBase_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
          <group position={[-36.899, 96.704, -911.959]} rotation={[-1.813, 0, 0]}>
            <mesh
              ref={(el) => handleButtonRef(el, 0)}
              castShadow
              receiveShadow
              geometry={nodes.pultButton_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[100.326, -33.454, -96.662]}
            />
          </group>
          <group position={[-2.832, 98.145, -906.135]} rotation={[-1.813, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultLcd_low__0.geometry}
              material={lcdMaterial}
              position={[60.665, -27.758, -98.057]}
            />
          </group>
          <group position={[-41.942, 92.415, -929.302]} rotation={[-1.813, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultMat_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[105.2, -50.466, -93.155]}
            />
          </group>
          <group position={[-41.998, 94.383, -921.341]} rotation={[-1.813, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultRollButton_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[105.2, -42.626, -94.38]}
            />
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultSteklo_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultStekloHold_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultTruba_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultTrubaHold_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
          <group position={[-41.872, 101.748, -891.566]} rotation={[-1.814, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultTumblerPanel_low__0.geometry}
              material={materials['Scene_-_Root']}
              position={[102.785, -13.493, -101.855]}
            />
          </group>
          <group position={[-41.786, 98.885, -903.14]} rotation={[-1.814, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultTumblerPanel_low001__0.geometry}
              material={materials['Scene_-_Root']}
              position={[102.785, -13.493, -101.855]}
            />
          </group>
          <group position={[-41.952, 96.702, -911.959]} rotation={[-1.813, 0, 0]}>
            <mesh
              ref={(el) => handleButtonRef(el, 1)}
              castShadow
              receiveShadow
              geometry={nodes.pultButton_low001__0.geometry}
              material={materials['Scene_-_Root']}
              position={[100.326, -33.454, -96.662]}
            />
          </group>
          <group position={[-47.005, 96.7, -911.958]} rotation={[-1.813, 0, 0]}>
            <mesh
              ref={(el) => handleButtonRef(el, 2)}
              castShadow
              receiveShadow
              geometry={nodes.pultButton_low002__0.geometry}
              material={materials['Scene_-_Root']}
              position={[100.326, -33.454, -96.662]}
            />
          </group>
          <group position={[4.191, 91.872, -931.495]} rotation={[-1.813, 0, 0]}>
         <mesh
              castShadow
              receiveShadow
              ref={(el) => handleButtonRef(el, 2)}
              geometry={nodes.pultWarning_low001__0.geometry}
              material={materials['Scene_-_Root']}
              position={[50.635, -54.835, -91.373]}
            />   
          </group>
          <group position={[-9.809, 91.872, -931.495]} rotation={[-1.813, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultWarning_low002__0.geometry}
              material={materials['Scene_-_Root']}
              position={[50.635, -54.835, -91.373]}
              onClick={handleNextImage}
            />
          </group>
          <group position={[-23.809, 91.872, -931.495]} rotation={[-1.813, 0, 0]}>
          <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultWarning_low003__0.geometry}
              material={materials['Scene_-_Root']}
              position={[50.635, -54.835, -91.373]}
              onClick={onAndOff}
            />  
          </group>
          <group position={[-10.888, 0, -909.49]} rotation={[-Math.PI / 2, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.pultTrubaHold_low001__0.geometry}
              material={materials['Scene_-_Root']}
              position={[-23.272, -30.422, 0]}
            />
          </group>
        </group>
      </group>
    </group>
  )
}
    
useGLTF.preload('./models/control_panel/scene.gltf')