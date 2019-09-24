// import React, { memo } from 'react';
import React from 'react';

const OnePersonLeadership = props => (
  <div className="one-person">
    <img className="one-person__portrait shadowed" src={ props.photo } alt={`portrait of ${ props.person }`}/>
    <div className="one-person__biography">
      <b>{ props.name }</b>
      <p>{ props.subheading}</p>
      { props.bio }<br/><br/>
    </div>
  </div>
);

export default OnePersonLeadership;
// export default memo(OnePersonLeadership);
