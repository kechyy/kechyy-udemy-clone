import React, { useState } from 'react';
import Loading from './loading';

function Cover(props) {

  const [loading, setLoading] = useState();
  const [sucess, setSuccess] = useState(props.success || false);

 return (
  <div className="cover abs" id={props.id ? props.id : "__cover__"}>
    <div className="abs abc">
      <Loading />
    </div>
  </div>
 )
}

export default Cover
