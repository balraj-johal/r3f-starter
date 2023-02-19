import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
