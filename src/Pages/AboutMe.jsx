import React from "react";
import Layout from "./Layout";

const AboutMe = ({ children }) => {
  return (
    <Layout>
      <div className="flex justify-center items-center flex-col w-full h-auto gap-[3rem]">
        <h1 className="text-white text-[2.5rem] uppercase">Sobre Mi</h1>
        <p class="text-[1.25rem] leading-relaxed max-w-[800px] text-center text-white">
          Soy un desarrollador apasionado por crear mecánicas innovadoras para
          videojuegos. Me encanta enfrentar los desafíos que surgen durante el
          desarrollo, ya que cada obstáculo es una oportunidad para encontrar
          soluciones creativas. Mi pasión por los videojuegos nació desde niño,
          influenciado por mi familia. A medida que jugaba, comencé a
          preguntarme cómo funcionaban los juegos internamente, lo que me llevó
          a explorar el desarrollo en Unity. Hoy, tengo la oportunidad de crear
          historias interactivas que permiten a las personas sumergirse y sentir
          lo que viven los protagonistas.
        </p>
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center items-center">{children}</div>
    </Layout>
  );
};

export default AboutMe;
