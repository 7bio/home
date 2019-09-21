import React from "react";
import Header from "../components/header"
import Layout from "../components/layout"


export default () => (
  <Layout style={{ color: `teal` }}>
    <div className="page-layout">
      <h1 className="page-layout__header">ABOUT</h1>
      <p className="page-layout__text">Such wow. Very React.</p>
    </div>
  </Layout >
)