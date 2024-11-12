import React from "react";
import Layout from "./Layout";

const Contacts = ({ children }) => {
  return (
    <Layout>
      {children}
      <h1>Contacts</h1>
    </Layout>
  );
};

export default Contacts;
