import styled from 'styled-components';
import { Container } from 'react-bootstrap';

export const OverallContainer = styled(Container).attrs(props => ({
  className: 'd-flex flex-column justify-content-center',
  fluid: true,
}))`
  padding: 0;
`;

export const OverallFixedContainer = styled.div.attrs(props => ({
}))`
  margin: 0;
  padding: 0;
  position: absolute;
  width: 100%;
  height: 100%;
`;

