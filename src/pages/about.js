import React from 'react';
// import Header from '../components/header';
import Layout from '../components/layout';
import Video from '../components/video';


export default () => (
  <Layout style={{ color: `teal` }}>
    <div className="page-layout">
      <h1 className="page-layout__header">Our Science and Technology</h1>
      <Video
        videoSrcURL="http://youtube.com/embed/ll2bNRyKMNA?theme=dark&color=white&autoplay=1&loop=1"
        videoTitle="Demonstration"
        // videoSrcURL="http://youtube.com/embed/listType=user_uploads&list=UCoYHe8nNs3qsbMTiw9pikJg"
        />
    </div>
  </Layout >
)
