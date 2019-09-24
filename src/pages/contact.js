import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="page-layout">
      <h1 className="contact-page__header">Contact</h1>
      <p className="page-layout__text">
        <a
          href="mailto:info@sevenbiosciences.com"
          className="page-layout__text"
        >
          info@sevenbiosciences.com
        </a>
      </p>
    </div>
  </Layout>
)
