import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers

import CanvasLoader from "../Loader";

const Retro = ({ isMobile }) => {
    const retro = useGLTF("./planet/scene.gltf");
  
     
    return (
      <mesh>
        <hemisphereLight intensity={0.50} groundColor='pink' />
        
        
        <pointLight intensity={1} />
        <primitive object={retro.scene} position={[0,0, 0]} scale={4} />

      </mesh>
    );
  };
  
  const RetroCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
      const mediaQuery = window.matchMedia("(max-width: 800px)");
      setIsMobile(mediaQuery.matches);
    
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      };
    
      mediaQuery.addEventListener("change", handleMediaQueryChange);
    
      return () => {
        mediaQuery.removeEventListener("change", handleMediaQueryChange);
      };
    }, []);
  
    return (
      <Canvas
        frameloop="demand"
        shadows
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 10], // Centering the camera on the model
          fov: 50, // Narrower field of view for a less zoomed-in look
        }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxDistance={20} minDistance={5} />

          <Retro isMobile={isMobile}  />
        </Suspense>
  
        <Preload all />
      </Canvas>
    );
  }

  export default RetroCanvas;