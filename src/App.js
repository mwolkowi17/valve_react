
import './App.css';
import { Canvas } from '@react-three/fiber'
import {Box} from './Box'
import {Scene} from './Loader'

function App() {
  return (
    <Canvas>
   
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
   
    <Scene />
  </Canvas>
  );
}

export default App;
