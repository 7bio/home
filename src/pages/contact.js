import React from "react"
import Layout from "../components/layout"

export default () => (
  <Layout>
    <div className="page-layout__contact">
      <h1 className="contact-page__header">Contact Us</h1>
      <p className="contact-page__text">Please email us!</p>
      <p>
        <a href="mailto:info@sevenbiosciences.com" className="contact-page__text">info@sevenbiosciences.com</a>
      </p>
    </div>
  </Layout>
)