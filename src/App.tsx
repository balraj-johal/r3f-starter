import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Treetop from './Treetop'

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls />
        <Treetop />
      </Canvas>
    </div>
  )
}

export default App
