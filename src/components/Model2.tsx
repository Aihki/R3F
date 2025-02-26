import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { GLTF } from 'three-stdlib'
import { Group, Mesh, MeshStandardMaterial, Vector3Tuple } from 'three'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    Circle__0: Mesh
    Circle001__0: Mesh
    Circle002__0: Mesh
    Circle003__0: Mesh
    Polygon__0: Mesh
    Cube__0: Mesh
    Circle004__0: Mesh
    Circle005__0: Mesh
    Cylinder__0: Mesh
    Circle006__0: Mesh
    Cube001__0: Mesh
    Circle008__0: Mesh
    Circle007__0: Mesh
    Circle009__0: Mesh
  }
  materials: {
    'Scene_-_Root': MeshStandardMaterial
  }
}

interface ModelProps extends Partial<GroupProps> {
  position?: Vector3Tuple
  scale?: Vector3Tuple
  castShadow?: boolean
  receiveShadow?: boolean
  rotation?: Vector3Tuple
}

export function Model2({ ...props }: ModelProps) {
  const { nodes, materials } = useGLTF('./models/antique_telescope.glb') as GLTFResult
  const rotatingPartsRef = useRef<Group>(null)
  useFrame((state) => {
    if (!rotatingPartsRef.current) return

    rotatingPartsRef.current.rotation.z = state.clock.elapsedTime
  })


  return (
    <group {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]}>
        <group rotation={[-Math.PI, 0, 0]} scale={0.01}>
          <group ref={rotatingPartsRef}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle__0.geometry}
              material={materials['Scene_-_Root']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle001__0.geometry}
              material={materials['Scene_-_Root']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle002__0.geometry}
              material={materials['Scene_-_Root']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle003__0.geometry}
              material={materials['Scene_-_Root']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle007__0.geometry}
              material={materials['Scene_-_Root']}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.Circle009__0.geometry}
              material={materials['Scene_-_Root']}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Polygon__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle004__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle005__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cylinder__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle006__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Cube001__0.geometry}
            material={materials['Scene_-_Root']}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Circle008__0.geometry}
            material={materials['Scene_-_Root']}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./models/antique_telescope.glb')

