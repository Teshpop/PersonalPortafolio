import React, { useRef, useState } from "react";
import {
  MeshPortalMaterial,
  RoundedBox,
  SpotLight,
  Text,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Frame = ({
  width = 2,
  height = 3.5,
  position,
  rotation,
  color,
  colorLigth,
  title,
  children,
}) => {
  const [hovered, setHovered] = useState(false);

  const target = useRef();
  const ligth = useRef();

  useFrame(() => {
    ligth.current.target = target.current;
    ligth.current.target.updateMatrixWorld();
  });

  console.log(hovered);

  return (
    <group position={position} rotation={rotation}>
      <SpotLight
        position={[0, 3.5, 0]}
        distance={hovered ? 10 : 0}
        angle={0.5}
        ref={ligth}
        color={colorLigth}
      />
      <Text
        font="/space-grotesk.woff"
        color="white"
        fontSize={0.25}
        letterSpacing={0.05}
        lineHeight={0.8}
        position={[0, 1.3, 0.0001]}
      >
        {title}
      </Text>
      <mesh
        ref={target}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
      >
        <RoundedBox args={[width, height, 0]} radius={0.1}>
          <MeshPortalMaterial>
            <color attach="background" args={[color]} />
            {children}
          </MeshPortalMaterial>
        </RoundedBox>
      </mesh>
    </group>
  );
};

export default Frame;
