import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Float, Environment } from "@react-three/drei";
import { Suspense } from "react";

function DumbbellModel() {
  const { scene } = useGLTF("/iron_dumbel.glb");
  
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <primitive 
        object={scene} 
        scale={2} 
        position={[0, -1, 0]}
        rotation={[0, Math.PI / 4, 0]}
      />
    </Float>
  );
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#32b8c6" />
      <spotLight position={[0, 10, 0]} angle={0.3} penumbra={1} intensity={1} />
    </>
  );
}

// Loading fallback
function Loader() {
  return (
    <mesh>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#32b8c6" wireframe />
    </mesh>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
      }}
    >
      <Lights />
      <Suspense fallback={<Loader />}>
        <DumbbellModel />
        <Environment preset="sunset" />
      </Suspense>
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        minDistance={4}
        maxDistance={12}
        minPolarAngle={Math.PI / 4}
        maxPolarAngle={Math.PI / 1.5}
      />
    </Canvas>
  );
}

// Preload the model for better performance
useGLTF.preload("/iron_dumbel.glb");
