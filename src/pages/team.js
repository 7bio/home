import React from "react"
import Layout from "../components/layout"
import GracePotrait from '../../static/images/grace.jpg';
import LinPortrait from '../../static/images/lin.jpg';
import RuqiantPortrait from '../../static/images/ruqiang.jpg'

export default () => (
  <Layout >
    <div className="page-layout-team">
      <div className="one-person">
        <img className="one-person__portrait" src={GracePotrait}></img>
        <p className="one-person__biography">Grace O. Mizuno, PhD

CEO, co-founder

11 years of experience in sensor design, animal disease modeling, in vitro + in vivo testing and molecular biology (UC Davis,
UC San Francisco, UC San Diego, The Scripps Research Institute)

ARCS Scholar, Keller Pathway Fellow, Loren D. Carlson dissertation prize, Max Kleiber gradate research award, 3-Minute
Pitch winner

Expert in using human-iPSCs for functional disease modeling</p>
      </div>
      <div className="one-person">
        <img className="one-person__portrait" src={LinPortrait}></img>
        <p className="one-person__biography">

          Lin Tian, PhD
  Co-founder

  Principal Investigator at UC Davis (2012 – present)
  20 years of experience in sensor design, protein engineering, neuroscience, biochemistry and molecular biology (UC Davis, HHMI Janelia Farm, Northwestern Univ., Univ. of Science and Technology of China)
  NIH Director’s Innovator Award, Rita Allen Young Scholar, Hartwell Foundation Individual Biomedical Research Award, Human Frontier Science Program Young Investigator Award, HHMI Research Fellowship
  Engineered the most utilized Ca2+ biosensor (GCaMP3) which established the basis of Obama’s BRAIN Initiative
Inventor on 3 patents</p>
      </div>
      <div className="one-person">
        <img className="one-person__portrait" src={RuqiantPortrait}></img>
        <p className="one-person__biography">

          Ruqiang Liang, Ph.D.
  Chief Technology Officer
  
  24 years experience in computational biology, software engineering, molecular biology, assay development and sensor design (UC Davis, Washington University, University of Louisville, University of Kentucky, Shanghai Institutes for Biological Sciences, University of Chinese Academy of Sciences, Sichuan University)
  Chinese Academy of Sciences first rank scholarship, Sichuan University scholarship
Expert in computational (in silico) guided design and modeling (Rosetta, Chimera)</p>
      </div>
    </div>
  </Layout>
)