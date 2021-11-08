
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";

export function Kurek(props) {
    const gltf = useLoader(GLTFLoader, props.color)
    return (
      <>
        <OrbitControls />
        <primitive object={gltf.scene} />
      </>
    )
  }