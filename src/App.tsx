import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import './App.css'
import Lighting from './components/Lighting'
import Treetop from './components/Treetop'
import * as dat from 'dat.gui'
import Ground from './components/Ground'
import Grass from './components/Grass/'

function App() {
  return (
    <div className="App">
      <Canvas>
        <color attach='background' args={['#fde9e5']} />
        <OrbitControls />
        <Treetop />
        <Grass count={100} />
        <Ground />
        <Lighting />
      </Canvas>
    </div>
  )
}

export default App
