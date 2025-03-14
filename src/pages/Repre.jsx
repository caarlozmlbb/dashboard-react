import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Modelo from './Modelo'

export default function Repre() {
  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
      {/* <Perf position="top-left" /> */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Modelo />
        <OrbitControls />
      </Canvas>
    </div>
  )
}


// import { Canvas } from '@react-three/fiber';
// import { OrbitControls } from '@react-three/drei';
// import { Modelo, CameraController } from './Modelo';

// export default function Repre() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 5, 5]} intensity={1} />
//         <CameraController />
//         <Modelo />
//         <OrbitControls enableZoom enableRotate enablePan />
//       </Canvas>
//     </div>
//   );
// }
