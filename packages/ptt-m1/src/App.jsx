import styled from 'styled-components';

const H1 = styled.h1`
  color: blue;
`;

import React from 'react';

export const App = () => {
  return (
    <div>
      <H1>I'm Module 1 in Blue</H1>
    </div>
  )
}

export default App;
