// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Modelo from './Modelo'

// export default function Repre() {
//   return (
//     <div style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}>
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
//       {/* <Perf position="top-left" /> */}
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 5, 2]} intensity={1} />
//         <Modelo />
//         <OrbitControls />
//       </Canvas>
//     </div>
//   )
// }

//FUNCIONALLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
// import { useState } from 'react'
// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import Modelo from './Modelo'
// import TarjetasModelo from './TarjetasModelo'

// const modelosDisponibles = [
//   { id: 1, nombre: 'Modelo 1', archivo: 'modelo1.glb' },
//   { id: 2, nombre: 'Modelo 2', archivo: 'modelo2.glb' },
//   { id: 3, nombre: 'Modelo 3', archivo: 'modelo3.glb' },
// ]

// export default function Repre() {
//   const [modeloActual, setModeloActual] = useState(modelosDisponibles[0].archivo)

//   const cambiarModelo = (nuevoModelo) => {
//     setModeloActual(nuevoModelo)
//   }

//   return (
//     <div style={{ position: 'relative', width: '90vw', height: '80vh' }}>
//       {/* Canvas ocupa toda la pantalla */}
//       <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
//         <ambientLight intensity={0.5} />
//         <directionalLight position={[2, 5, 2]} intensity={1} />
//         <Modelo modelo={modeloActual} />
//         <OrbitControls />
//       </Canvas>

//       {/* Tarjetas flotando sobre el modelo */}
//       <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
//         <TarjetasModelo
//           modelos={modelosDisponibles}
//           onSeleccionarModelo={cambiarModelo}
//         />
//       </div>
//     </div>
//   )
// }


import { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import Modelo from './Modelo'
import TarjetasModelo from './TarjetasModelo'

const modelosDisponibles = [
  { id: 1, nombre: 'Modelo 1', archivo: 'modelo1.glb' },
  { id: 2, nombre: 'Modelo 2', archivo: 'modelo2.glb' },
  { id: 3, nombre: 'Modelo 3', archivo: 'modelo3.glb' },
  // Agrega más modelos si es necesario...
]

export default function Repre() {
  const [modeloActual, setModeloActual] = useState(modelosDisponibles[0].archivo)
  const [startIndex, setStartIndex] = useState(0) // Controlador de índice de inicio de las cartas

  const cambiarModelo = (nuevoModelo) => {
    setModeloActual(nuevoModelo)
  }

  const siguiente = () => {
    if (startIndex + 3 < modelosDisponibles.length) {
      setStartIndex(startIndex + 3) // Mostrar las siguientes 3 cartas
    }
  }

  const anterior = () => {
    if (startIndex - 3 >= 0) {
      setStartIndex(startIndex - 3) // Mostrar las cartas anteriores
    }
  }

  return (
    <div style={{ position: 'relative', width: '90vw', height: '90vh' }}>
      {/* Canvas ocupa toda la pantalla */}
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }} style={{ width: '100%', height: '100%' }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Modelo modelo={modeloActual} />
        <OrbitControls />
      </Canvas>

      {/* Tarjetas flotando sobre el modelo */}
      <div style={{ position: 'absolute', bottom: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
        <TarjetasModelo
          modelos={modelosDisponibles.slice(startIndex, startIndex + 3)} // Muestra solo 3 cartas
          onSeleccionarModelo={cambiarModelo}
        />
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <button onClick={anterior} style={{ marginRight: '10px' }}>Anterior</button>
          <button onClick={siguiente}>Siguiente</button>
        </div>
      </div>
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
