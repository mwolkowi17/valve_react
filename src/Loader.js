
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

export function Scene() {
    const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three_kula1.glb')
    return (
      <>
        <OrbitControls />
        <primitive object={gltf.scene} />
      </>
    )
  }