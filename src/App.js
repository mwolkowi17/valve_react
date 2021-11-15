
import './App.css';
//import {useState} from 'react'
import { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Scene } from './Loader';
import { Kurek } from './Loader2';
import { Kurek2 } from './Loader3';
import { Display } from './Display';



function App() {

  const [showA, setShow] = useState(true);
  const [showB, setShowB] = useState(false);
  const [startPlay, setStartPlay] = useState(false);
  const [isDisplay, setIsDisplay] = useState(false)

  function changekurek() {
    if (showA === true) {
      setShowB(true)
      setShow(false);
    } else {
      setShowB(false)
      setShow(true)
    }
  }

  function changePlay() {
    if (startPlay === false) {
      setStartPlay(true)
    } else {
      setStartPlay(false)
    }
  }

  function showDetailsFunc() {
    setIsDisplay(true)
  }

  return (
    <div>
      <Canvas camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 0, 4] }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 20, 10]} />
          <pointLight position={[-5, -15, 30]} />

          <Scene showDetails={showDetailsFunc}/>

          {showB && <Kurek2 ifPlay={startPlay} />}
          {showA && <Kurek ifPlay={startPlay} />}

        </Suspense>
      </Canvas>
      <button id={'buttonkurek'} onClick={(event) => changekurek()}>Color</button>
      <button id={'start'} onClick={(event) => changePlay()}>Open/Stop</button>
      <Display isVisible={isDisplay ? 'visible' : 'hidden'} />
    </div>

  );
}

export default App;
