import React from 'react';

import useViewport from './hooks/useViewport';
import { Container } from './styles/common';

function App() {
  const { height } = useViewport();

  return (
    <Container
      height={height}
    >
      !
    </Container>
  );
}

export default App;
