import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="page-layout">
      <h1 className="page-layout__header">CONTACT</h1>
      <p className="page-layout__text">I'd love to talk! Email me at the address below.</p>
      <p>
        <a href="mailto:me@example.com">me@example.com</a>
      </p>
    </div>
  </Layout>
)