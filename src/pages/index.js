import React from "react"
import Layout from "../components/layout"
import HomeBackgroundImage from '../../static/images/GPCR2-1024x606.jpg'

export default () => (
  <Layout>
    <div className="homepage-layout__content">
      <img src={ HomeBackgroundImage } id="homepage-layout__background-image" alt="homepage background" />
      <p className="homepage-layout__text">
        Seven biosciences is a drug discovery platform company which leverages
        transformative technology to identify and develop<span style={ { color: '#16AA4B' } }> novel therapeutics </span>
        targeting G-protein coupled receptors (GPCRs)
      </p>
    </div>
  </Layout >
)