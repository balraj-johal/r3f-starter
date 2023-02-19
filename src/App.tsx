import { OrbitControls, Box } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Treetop from './Treetop'

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Treetop />
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>

        <ambientLight intensity={0.1} />
        <directionalLight
          color="white"
          position={[15, 15, 15]}
          castShadow
          shadow-mapSize-width={2048}
          shadow-mapSize-height={2048}
        />
      </Canvas>
    </div>
  )
}

export default App
