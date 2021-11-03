
import './App.css';
import { Suspense }  from 'react';
import { Canvas } from '@react-three/fiber'
import { Scene } from './Loader'

function App() {
  return (
    <Canvas>
      <Suspense fallback={null}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Scene />
      </Suspense>
    </Canvas>
  );
}

export default App;
