
import './App.css';
//import {useState} from 'react'
import { Suspense }  from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Kurek} from './Loader2';


function App() {

 // const [kurektype, setkurektype]=useState('/zawor_kulowy_three_kula3_kurek.glb')
  const kurektype = '/zawor_kulowy_three_kula3_kurek.glb'

  return (
    <Canvas>
      <Suspense fallback={null}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Scene />
      <Kurek color={kurektype} />
      </Suspense>
    </Canvas>
  );
}

export default App;
