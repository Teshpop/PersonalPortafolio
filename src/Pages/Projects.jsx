import React from "react";
import Layout from "./Layout";
import { cardValues } from "../const";
import { Cards } from "../Components";

const Projects = ({ children }) => {
  return (
    <Layout>
      <h1 className="text-[2.5rem] uppercase text-white">Proyectos</h1>
      <div className="h-[70vh] w-[85%] overflow-y-auto grid grid-cols-2 gap-6 p-4 rounded-lg">
        {cardValues.map(({ title, desc, img, tool, link }, index) => (
          <Cards
            key={index}
            title={title}
            desc={desc}
            img={img}
            tool={tool}
            link={link}
          />
        ))}
      </div>
      <div className="w-full flex justify-center items-center mt-6">
        {children}
      </div>
    </Layout>
  );
};

export default Projects;
