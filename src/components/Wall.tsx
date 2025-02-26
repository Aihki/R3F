import { Vector3Tuple } from 'three'
import { MeshProps } from '@react-three/fiber'

interface WallProps extends Partial<MeshProps> {
  position?: Vector3Tuple
  size?: [number, number, number]
}

function Wall({ position = [0, 0, 0], size = [4, 3, 0.3], ...props }: WallProps) {
  return (
    <mesh position={position} receiveShadow castShadow {...props}>
      <boxGeometry args={size} />
      <meshStandardMaterial color="#808080" roughness={0.8} metalness={0.2} />
    </mesh>
  )
}

export default Wall
