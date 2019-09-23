import React, { memo } from 'react';

const OnePersonLeadership = props => (
  <div className="one-person">
    <img className="one-person__portrait shadowed" src={ props.photo }/>
    <p className="one-person__biography">{ props.bio }</p>
  </div>
);

export default memo(OnePersonLeadership);
