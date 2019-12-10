import React from 'react';
import {withRouter} from 'next/router';

const text = ({router}) => {
  return (<h1>this is text - {router.query.id}</h1>)
}

export default withRouter(text)