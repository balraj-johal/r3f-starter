import { Plane } from '@react-three/drei'

export default function Ground() {
  return (
    <Plane
      args={[30, 30, 2]} 
      rotation={[- Math.PI / 2, 0, 0]} 
      position={[0, -5, 0]} 
      receiveShadow
    >
      <meshStandardMaterial color="#fbb4b3" />
    </Plane>
  )
}