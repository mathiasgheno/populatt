import React from 'react';
import M1 from '@ptt/m1';
// import M2 from '@ptt/m2';
import { NormalizeCSS } from './NormalizeCSS.jsx';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;

const M2Lazy = () => {
  const M2 = React.lazy(() => import('@ptt/m2'));

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <M2 />
    </React.Suspense>
  )
}

export function App() {
  const [load, setLoad] = React.useState(false);

  return (
    <Container>
      <NormalizeCSS />
      <header>Header 😍</header>
      <M1 />
      <button onClick={() => setLoad(!load)}>Load Module 2 Lazy way</button>
      {load && <M2Lazy />}
    </Container>
  )
}
