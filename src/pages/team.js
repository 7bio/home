import React from "react"
import Layout from "../components/layout"
import OnePersonLeadership from '../components/team';
import GracePortrait from '../../static/images/grace.jpg';
import LinPortrait from '../../static/images/lin.jpg';
import RuqiantPortrait from '../../static/images/ruqiang.jpg';

const personData = {
  "mizuno": {
    "photo": GracePortrait,
    "bio": `Grace O. Mizuno, PhD

    CEO, co-founder
    
    11 years of experience in sensor design, animal disease modeling, in vitro + in vivo testing and molecular biology (UC Davis,
    UC San Francisco, UC San Diego, The Scripps Research Institute)
    
    ARCS Scholar, Keller Pathway Fellow, Loren D. Carlson dissertation prize, Max Kleiber gradate research award, 3-Minute
    Pitch winner
    
    Expert in using human-iPSCs for functional disease modeling`
  },
  "tian": {
    "photo": LinPortrait,
    "bio": `Lin Tian, PhD
    Co-founder
  
    Principal Investigator at UC Davis (2012 – present)
    20 years of experience in sensor design, protein engineering, neuroscience, biochemistry and molecular biology (UC Davis, HHMI Janelia Farm, Northwestern Univ., Univ. of Science and Technology of China)
    NIH Director’s Innovator Award, Rita Allen Young Scholar, Hartwell Foundation Individual Biomedical Research Award, Human Frontier Science Program Young Investigator Award, HHMI Research Fellowship
    Engineered the most utilized Ca2+ biosensor (GCaMP3) which established the basis of Obama’s BRAIN Initiative
  Inventor on 3 patents`
  },
  "liang": {
    "photo": RuqiantPortrait,
    "bio": `Ruqiang Liang, Ph.D.
    Chief Technology Officer
    
    24 years experience in computational biology, software engineering, molecular biology, assay development and sensor design (UC Davis, Washington University, University of Louisville, University of Kentucky, Shanghai Institutes for Biological Sciences, University of Chinese Academy of Sciences, Sichuan University)
    Chinese Academy of Sciences first rank scholarship, Sichuan University scholarship
  Expert in computational (in silico) guided design and modeling (Rosetta, Chimera)`
  },
};

export default () => (
  <Layout >
    <div className="page-layout-team">
      <h2 name='leadership'>Leadership</h2>
      <OnePersonLeadership person="Mizuno" bio={personData.mizuno.bio} photo={personData.mizuno.photo}/>
      <OnePersonLeadership person="Tian" bio={personData.tian.bio} photo={personData.tian.photo}/>
      <OnePersonLeadership person="Liang" bio={personData.liang.bio} photo={personData.liang.photo}/>

      <h2 name="advisors">Advisors</h2>
        <div className="one-person__advisor">
          <b>Lin Tian, PhD, Associate Professor</b><br/>
          Scientific Advisor, Protein engineering + sensor design<br/><br/>

          <b>Mark Von Zastrow, MD, PhD, Professor</b><br/>
          Scientific Advisor, GPCR + pharmacology<br/><br/>

          <b>Bernardo Sabatini, MD, PhD, Professor</b><br/>
          Scientific Advisor, In vivo imaging<br/><br/>

          <b>Kit Lam, MD, PhD, Professor</b><br/>
          Scientific Advisor, Chemistry<br/><br/>

          <b>Ilan Zipkin, PhD</b><br/>
          Business Advisor<br/><br/>
        </div>
    </div>

  </Layout>
)