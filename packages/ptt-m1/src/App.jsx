import styled from 'styled-components';

const H1 = styled.h1`
  color: blue;
`;

import React from 'react';

export const Module1 = () => {
  return (
    <div>
      <H1>I'm Module 2 in Blue</H1>
    </div>
  )
}

export default Module1;
