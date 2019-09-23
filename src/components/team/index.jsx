// import React, { memo } from 'react';
import React from 'react';

const OnePersonLeadership = props => (
  <div className="one-person">
    <img className="one-person__portrait shadowed" src={ props.photo } alt={`portrait of ${ props.person }`}/>
    <p className="one-person__biography">{ props.bio }</p>
  </div>
);

export default OnePersonLeadership;
// export default memo(OnePersonLeadership);
