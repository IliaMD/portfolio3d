import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader, Boxes, Ground } from "./components";
import { Button } from "@mui/material";
import "./App.css";
import {
  EffectComposer,
  Bloom,
  ChromaticAberration,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { useMediaQuery } from "@mui/material";

function LoadScreen() {
  const isMobile = useMediaQuery("(min-width:600px)");

  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />

      <PerspectiveCamera
        makeDefault
        fov={50}
        position={isMobile ? [0, 5, 5] : [0, 8, 8]}
      />

      <color args={[0, 0, 0]} attach="background" />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
          </>
        )}
      </CubeCamera>

      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={1.5}
        angle={0.6}
        penumbra={0.5}
        position={[5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={2}
        angle={0.6}
        penumbra={0.5}
        position={[-5, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <Ground />

      <Boxes />

      <EffectComposer>
        <Bloom
          blendFunction={BlendFunction.ADD}
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          blendFunction={BlendFunction.NORMAL} // blend mode
          offset={[0.0005, 0.0012]} // color offset
        />
      </EffectComposer>
    </>
  );
}

function App() {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isMoved, setIsMoved] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLoadingPercent((prevPercent) => {
        if (prevPercent >= 98) {
          clearInterval(intervalId);
        }
        return prevPercent + 1;
      });
    }, 40);
  }, []);

  const handleMove = () => {
    setIsMoved(true);
  };

  return (
    <>
      {!isMoved ? (
        <Suspense fallback={null}>
          <Canvas shadows>
            <LoadScreen />
          </Canvas>

          {loadingPercent !== 100 ? (
            <Loader loadingPercent={loadingPercent} />
          ) : (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                position: "absolute",
                top: "85%",
                left: "50%",
                // backgroundColor: "#431a4e",
                transform: "translate(-50%, -50%)",
              }}
              onClick={handleMove}
            >
              Move further
            </Button>
          )}
        </Suspense>
      ) : (
        <div>Page</div>
      )}
    </>
  );
}

export default App;
