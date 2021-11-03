import { Suspense } from 'react'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

export function Scene() {
    const gltf = useLoader(GLTFLoader, '/zawor_kulowy_three2.glb')
    return (
      <Suspense fallback={null}>
          <OrbitControls />
        <primitive object={gltf.scene} />
      </Suspense>
    )
  }