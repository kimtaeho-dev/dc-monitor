import React from 'react';

import useViewport from './hooks/useViewport';
import Router from './Router';
import { Container } from './styles/common';

const App: React.FC = () => {
  const { height } = useViewport();

  return (
    <Container height={height}>

      <Router />

    </Container>
  );
};

export default App;
