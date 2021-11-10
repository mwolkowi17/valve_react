
import * as THREE from 'three'
import { useLoader,useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { OrbitControls } from "@react-three/drei";
import { useEffect, useRef} from 'react';


export function Kurek(props) {

    const mixer = useRef();
    const gltf = useLoader(GLTFLoader, props.color)

    useEffect(()=>{if (gltf) {
      mixer.current = new THREE.AnimationMixer(gltf.scene)
        const action = mixer.current.clipAction(gltf.animations[0])
      console.log(gltf.animations)
      //mixer.current.setTime(0);
      //mixer.current.timeScale=1;
       action.play()
    }
  }, [gltf])

  //useFrame(({ clock }) => mixer.current && mixer.current.update(clock.getDelta()))
  useFrame((state, delta) => {
    mixer.current?.update(delta)
})
    return (
      <>
        <OrbitControls />
        <primitive object={gltf.scene} />
      </>
    )
  }