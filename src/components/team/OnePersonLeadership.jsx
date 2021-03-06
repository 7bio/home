import React, { memo } from 'react';
import PropTypes from 'prop-types';
import './onePersonLeadership.css';

const OnePersonLeadership = ({ photo, person, name, subheading, bio }) => (
  <div className="one-person">
    <img
      className="one-person__portrait shadowed"
      src={photo}
      alt={`portrait of ${person}`}
      style={{ width: '150px', height: '187px' }}
    />
    <div className="one-person__biography">
      <b>{name}</b>
      <p>{subheading}</p>
      {bio}
      <br />
      <br />
    </div>
  </div>
);

export default memo(OnePersonLeadership);

OnePersonLeadership.propTypes = {
  photo: PropTypes.string.isRequired,
  person: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  subheading: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
};
