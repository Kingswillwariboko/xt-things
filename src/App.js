import React, {useState} from "react"

import { VRButton, Interactive, ARButton, XR, Controllers, Hands } from '@react-three/xr'
import { Canvas } from '@react-three/fiber'

function App() {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      <ARButton />
      <Canvas>
        <XR>
          <Controllers />
          <Hands />
          <Interactive onSelect={() => console.log('clicked!')} onHover={() => setIsHovered(true)} onBlur={() => setIsHovered(false)}></Interactive>
          <mesh>
            <boxGeometry />
            <meshBasicMaterial color="blue" />
          </mesh>
          <Interactive />
        </XR>
      </Canvas>
    </>
  )
}


export default App;