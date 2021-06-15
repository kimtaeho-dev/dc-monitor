import styled from 'styled-components';

interface Container {
  height?: number;
}

export const Container = styled.div<Container>` 
  height: ${(props) => props.height}px;
  max-height: ${(props) => props.height}px;
`;
