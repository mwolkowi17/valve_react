
import './App.css';
//import {useState} from 'react'
import { Suspense, useState }  from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Kurek} from './Loader2';


function App() {


  const kurektype = '/zawor_kulowy_three_kula3_kurek.glb';
  const kurektypeblue = '/zawor_kulowy_three_kula3_kurek_blue.glb'
 
  const [colorkurek,setColorkurek] = useState(kurektype)
  const [showA,setShow]=useState(true);

  function changekurek(){
    if(showA===true){
      
      setShow(false);
    } else {
      setShow(true)
    }
  }
  console.log(colorkurek);
  return (
    <div>
    <Canvas>
      <Suspense fallback={null}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Scene onClick={(event)=>setColorkurek(kurektypeblue)} />
      <Kurek color={colorkurek} />
      {showA&&<Kurek color={kurektypeblue} />}
      </Suspense>
    </Canvas>
    <button id={'buttonkurek'} onClick={(event)=>changekurek()}>Color</button>
    </div>
    
  );
}

export default App;
