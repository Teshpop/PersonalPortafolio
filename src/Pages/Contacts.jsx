import React from "react";
import Layout from "./Layout";

const Contacts = ({ children }) => {
  return (
    <Layout>
      <h1 className="text-[2.5rem] text-white">CONTACTOS</h1>
      {children}
    </Layout>
  );
};

export default Contacts;
