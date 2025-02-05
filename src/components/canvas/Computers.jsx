import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"; // helpers

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./cloud_station/scene.gltf");

   

  return (
    <mesh>
      <hemisphereLight intensity={0.50} groundColor='pink' />
      
      
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={1}
        position={[0,-5, 0]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
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
      dpr={[2, 2]}
      camera={{
        position: [0, 10, 20], // Move the camera far back for a distant view
        fov: 85, // Narrower field of view for a less zoomed-in look
      }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false} // Allow zoom for user control
          maxPolarAngle={Math.PI }
          minPolarAngle={Math.PI / 3} // Prevent extreme angles
        />
        <Computers isMobile={isMobile}  />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;