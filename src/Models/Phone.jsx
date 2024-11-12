/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 .\phone.glb -o ../src/Models/Phone.jsx 
Author: FreeMeshBase (https://sketchfab.com/FreeMeshBase)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/fmb-retro-phone-01-5ec4429f643440429a1baa940d90e5bb
Title: FMB_Retro Phone_01
*/

import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { MeshBasicMaterial } from "three"; // Importar MeshBasicMaterial

export function Model(props) {
  const { nodes } = useGLTF("/phone.glb");

  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    ref.current.position.set(0, Math.sin(t * 0.5) / 4, 0);
    ref.current.rotation.set(
      Math.sin(t * 0.5) / 4,
      Math.sin(t * 0.5) / 7,
      Math.sin(t * 0.5) / 4
    );
  });

  // Crear materiales con diferentes tonos de blanco y gris
  const material1 = new MeshBasicMaterial({ color: "#e0e0e0" }); // Gris claro
  const material2 = new MeshBasicMaterial({ color: "#b0b0b0" }); // Gris medio claro
  const material3 = new MeshBasicMaterial({ color: "#a0a0a0" }); // Gris medio
  const material4 = new MeshBasicMaterial({ color: "#808080" }); // Gris oscuro
  const material5 = new MeshBasicMaterial({ color: "#606060" }); // Gris más oscuro

  return (
    <group {...props} dispose={null}>
      <group scale={0.04} ref={ref}>
        <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -15, 0]}>
          <mesh
            geometry={nodes.FMB_Retro_Phone_01_BW_01_0.geometry}
            material={material1} // Gris claro
          />
          <mesh
            geometry={nodes.FMB_Retro_Phone_01_BW_05_0.geometry}
            material={material2} // Gris medio claro
          />
          <mesh
            geometry={nodes.FMB_Retro_Phone_01_BW_03_0.geometry}
            material={material3} // Gris medio
          />
          <mesh
            geometry={nodes.FMB_Retro_Phone_01_BW_02_0.geometry}
            material={material4} // Gris oscuro
          />
          <mesh
            geometry={nodes.FMB_Retro_Phone_01_BW_04_0.geometry}
            material={material5} // Gris más oscuro
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/phone.glb");
