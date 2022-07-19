import React from 'react';
import { NormalizeCSS } from './NormalizeCSS.jsx';
import styled from 'styled-components';

import { Lazy } from './hooks/Lazy/Lazy.jsx';

import { Config as M1Config } from '@ptt/m1/ptt.config.js';
import { Config as M2Config } from '@ptt/m2/ptt.config.js';
import { useHashedRouter } from './hooks/useHashedRouter/useHashedRouter.js';

const routes = [M1Config, M2Config];

const Container = styled.div`
  max-width: 60%;
  margin: 0 auto;
`;


export function App() {
  const { route, query, matchWith, params } = useHashedRouter();

  return (
    <Container>
      <NormalizeCSS />
      <header>Header 😍</header>
      <nav>
        <ul>
          {
            routes.map(({ name, route }) => (
              <li>
                <a href={`#${route}`}>{name}</a>
              </li>
            ))
          }
        </ul>
      </nav>
      {matchWith('#/home') && <Lazy callback={() => import('@ptt/m1')} />}
      {matchWith('#/ptt-m1') && <Lazy callback={() => import('@ptt/m1')} />}
      {matchWith('#/ptt-m2') && <Lazy callback={() => import('@ptt/m2')} />}
    </Container>
  )
}
