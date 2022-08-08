import "./App.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useHelper } from "@react-three/drei";
import { Model } from "./Lamborghini";

function App() {
  return (
    <>
      <Canvas>
        <Model scale={0.5} />
        <Environment files="derelict_highway_midday_1k.hdr" />
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default App;
