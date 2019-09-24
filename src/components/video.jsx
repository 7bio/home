import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoSrcURL, videoTitle, ...props }) => (
  <div className="video-wrapper">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

export default Video;

Video.propTypes = {
  videoSrcURL: PropTypes.string.isRequired,
  videoTitle: PropTypes.string.isRequired,
  props: PropTypes.shape,
};

Video.defaultProps = {
  props: {},
};
