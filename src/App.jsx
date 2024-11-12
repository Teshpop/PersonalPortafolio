import { useState } from "react";
import { Stars, Frame } from "./Components";
import { Canvas } from "@react-three/fiber";
import { Footer, AboutMe, Projects, Contacts } from "./Pages";
import { CameraControls } from "@react-three/drei";
import { Controller, Documents, Phone } from "./Models";

function App() {
  const [show, setShow] = useState(null);

  const Button = () => {
    return (
      <button
        className="text-white bg-red-600 p-[1rem_4rem] rounded-[10px]"
        onClick={() => setShow(null)}
      >
        Close
      </button>
    );
  };

  return (
    <section className="bg-black h-screen w-screen overflow-auto">
      <Footer />

      {show == "aboutme" && (
        <AboutMe>
          <Button />
        </AboutMe>
      )}

      {show == "projects" && (
        <Projects>
          <Button />
        </Projects>
      )}

      {show == "contacts" && (
        <Contacts>
          <Button />
        </Contacts>
      )}
      <Canvas camera={{ fov: 65 }}>
        <Stars />

        <group onClick={() => setShow("aboutme")}>
          <Frame
            position={[-4, 0, -1]}
            rotation={[0, 0.5, 0]}
            color="#2B2D32"
            colorLigth="white"
            title="SOBRE MI"
          >
            <Documents />
          </Frame>
        </group>

        <group onClick={() => setShow("projects")}>
          <Frame
            position={[0, 0, -1]}
            rotation={[0, 0, 0]}
            color="#1D2D44"
            colorLigth="blue"
            title="PROYECTOS"
          >
            <Controller position={[0, 0, -0.5]} />
          </Frame>
        </group>

        <group onClick={() => setShow("contacts")}>
          <Frame
            position={[4, 0, -1]}
            rotation={[0, -0.5, 0]}
            color="#4F5B56"
            colorLigth="green"
            title="CONTACTOS"
          >
            <Phone />
          </Frame>
        </group>

        <CameraControls
          makeDefault
          minAzimuthAngle={-Math.PI / 2.5}
          maxAzimuthAngle={Math.PI / 2.5}
        />
      </Canvas>
    </section>
  );
}

export default App;
