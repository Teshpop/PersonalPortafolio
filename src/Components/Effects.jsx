import React from "react";
import {
  EffectComposer,
  Pixelation,
  Scanline,
  ToneMapping,
  Vignette,
} from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <Scanline />
      <ToneMapping />
      <Pixelation granularity={2} />
      <Vignette eskil={false} offset={0.5} darkness={0.9} />
    </EffectComposer>
  );
};

export default Effects;
