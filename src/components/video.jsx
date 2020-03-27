import React from 'react';
import PropTypes from 'prop-types';
import './video.css';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video-wrapper">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
      className="iframe-style"
    />
  </div>
);

export default Video;

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
};

Video.defaultProps = {};
