import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { Mesh, MeshStandardMaterial, Vector3Tuple } from 'three'
import { GroupProps } from '@react-three/fiber'

type GLTFResult = GLTF & {
  nodes: {
    CCTV1CCTV_Camera_CCTV1CCTV_Material_0: Mesh
    CCTV1Hinge_CCTV1CCTV_Material_0: Mesh
    Access_PanelAccess_Panel_Access_PanelAccess_Panel_material_0: Mesh
  }
  materials: {
    CCTV1CCTV_Material: MeshStandardMaterial
    Access_PanelAccess_Panel_material: MeshStandardMaterial
  }
}

interface ModelProps extends Partial<GroupProps> {
  position?: Vector3Tuple
  scale?: Vector3Tuple
  castShadow?: boolean
  receiveShadow?: boolean
}

export function Model2({ ...props }: ModelProps) {
  const { nodes, materials } = useGLTF('/cctv_and_keypad_access_panel.glb') as GLTFResult

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={7.211}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[0, 0.037, 0.07]} scale={0.01}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CCTV1CCTV_Camera_CCTV1CCTV_Material_0.geometry}
              material={materials.CCTV1CCTV_Material}
            />
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.CCTV1Hinge_CCTV1CCTV_Material_0.geometry}
              material={materials.CCTV1CCTV_Material}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Access_PanelAccess_Panel_Access_PanelAccess_Panel_material_0.geometry}
            material={materials.Access_PanelAccess_Panel_material}
            position={[-0.052, 0.037, 0]}
            scale={0.01}
          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/cctv_and_keypad_access_panel.glb')