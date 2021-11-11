
import './App.css';
//import {useState} from 'react'
import { Suspense, useState }  from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Kurek} from './Loader2';
import {Kurek2} from './Loader3';



function App() {


  const kurektype = '/zawor_kulowy_three_kula3_kurek.glb';
  const kurektypeblue = '/zawor_kulowy_three_kula3_kurek_blue.glb'
 
  const [colorkurek,setColorkurek] = useState(kurektype)
  const [showA,setShow]=useState(true);
  const [showB,setShowB]=useState(false)

  function changekurek(){
    if(showA===true){
      setShowB(true)
      setShow(false);
    } else {
     setShowB(false)
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

      <Scene  />
      {/*<Kurek color={colorkurek} />*/}
      {showB&&<Kurek2 color={colorkurek} />}
      {showA&&<Kurek  />}
      
      </Suspense>
    </Canvas>
    <button id={'buttonkurek'} onClick={(event)=>changekurek()}>Color</button>
    </div>
    
  );
}

export default App;
