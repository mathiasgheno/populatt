import React from 'react';
import { Suspense, lazy } from 'react';

export const Lazy = (props) => {
  if(!props.callback) {
    return null;
  }

  const Module = lazy(props.callback);

  return (
    <Suspense fallback={<div>Loading Router...</div>}>
      <Module />
    </Suspense>
  )
}
