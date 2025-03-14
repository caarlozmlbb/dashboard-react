import { useGLTF } from '@react-three/drei'

export default function Modelo() {
  const { scene } = useGLTF('skeleton.glb') // Carga el modelo
  return <primitive object={scene} />
}


