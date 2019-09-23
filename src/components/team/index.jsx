// import React, { memo } from 'react';
import React from 'react';

const OnePersonLeadership = props => (
  <div className="one-person">
    <img className="one-person__portrait shadowed" src={props.photo} alt={`portrait of ${props.person}`} />

    <div className="one-person__biography">
      <text><b>{props.info.name}</b></text>
      <text>{props.info.position}</text>
      <text>{props.info.bio}</text>
    </div>
  </div>
);

export default OnePersonLeadership;
// export default memo(OnePersonLeadership);
