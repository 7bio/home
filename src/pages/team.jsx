import React from 'react';
import Layout from '../components/Layout';
import OnePersonLeadership from '../components/team/OnePersonLeadership';
import GracePortrait from '../../static/images/team_members/grace.jpg';
import LinPortrait from '../../static/images/team_members/lin.jpg';

const personData = {
  mizuno: {
    photo: GracePortrait,
    name: 'Grace O. Mizuno, Ph.D.',
    subheading: 'Co-Founder & CEO',
    bio:
      '11 years of experience in sensor design, in vitro and in vivo functional disease modeling, biochemistry and molecular biology. ARCS Scholar, Loren D. Carlson dissertation award recipient, Max Kleiber gradate research award recipient, 3-Minute Pitch winner.',
  },
  tian: {
    photo: LinPortrait,
    name: 'Lin Tian, Ph.D.',
    subheading: 'Co-Founder',
    bio:
      'Associate Professor at UC Davis (2012 – present). Engineered the most utilized Ca2+ biosensor (GCaMP3) which established the basis of Obama’s BRAIN Initiative with 20 years of experience in sensor design, protein engineering, neuroscience, biochemistry and molecular biology. Recipient of NIH Director’s Innovator Award, Rita Allen Young Scholar, Hartwell Foundation Individual Biomedical Research Award, Human Frontier Science Program Young Investigator Award, HHMI Research Fellowship.',
  },
  // liang: {
  //   photo: RuqiantPortrait,
  //   name: 'Ruqiang Liang, Ph.D.',
  //   subheading: 'Chief Technology Officer',
  //   bio: `24 years experience in computational biology, software engineering, molecular biology, assay development and sensor design (UC Davis, Washington University, University of Louisville, University of Kentucky, Shanghai Institutes for Biological Sciences, University of Chinese Academy of Sciences, Sichuan University)
  //     Chinese Academy of Sciences first rank scholarship, Sichuan University scholarship
  //     Expert in computational (in silico) guided design and modeling (Rosetta, Chimera)`,
  // },
};

export default () => (
  <Layout>
    <div className="page-layout">
      <h1 name="leadership" className="page-layout-team__header">
        Leadership
      </h1>
      <OnePersonLeadership
        name={personData.mizuno.name}
        subheading={personData.mizuno.subheading}
        bio={personData.mizuno.bio}
        photo={personData.mizuno.photo}
      />
      <OnePersonLeadership
        name={personData.tian.name}
        subheading={personData.tian.subheading}
        bio={personData.tian.bio}
        photo={personData.tian.photo}
      />
      {/* <OnePersonLeadership person="Ruqian Liang" bio={ personData.liang.bio } photo={ personData.liang.photo }/> */}
      <h1 name="advisors" className="page-layout-team__header">
        Advisors
      </h1>
      <b>Lin Tian, PhD, Associate Professor</b>
      <br />
      Scientific Advisor, Protein engineering + sensor design
      <br />
      <br />
      <b>Mark Von Zastrow, MD, PhD, Professor</b>
      <br />
      Scientific Advisor, GPCR + pharmacology
      <br />
      <br />
      <b>Kit Lam, MD, PhD, Professor</b>
      <br />
      Scientific Advisor, Chemistry
      <br />
      <br />
      <b>Ilan Zipkin, PhD</b>
      <br />
      Business Advisor
      <br />
      <br />
    </div>
  </Layout>
);
