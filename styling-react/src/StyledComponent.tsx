import React from 'react';
import styled, { css } from 'styled-components';

interface invertedType {
  inverted: boolean;
}

const sizes = {
  desktop: 1024,
  tablet: 768
};

const Box = styled.div`
  background: ${props => props.color || 'blue'};
  padding: 1rem;
  display: flex;
  width: 1024px;
  margin: 0 auto;
  transition: width .3s;
  @media (max-width: 1024px) {
    width: 768px;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.div<invertedType>`
  background: #fff;
  color: #000;
  border-radius:4px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    background: rgba(255,255,255,.9);
  }

  ${props =>
    props.inverted &&
    css`
      background: none;
      border: 2px solid white;
      color: white;
      &:hover {
        background: white;
        color: black;
      }
    `};
  & + button {
    margin-left: 1rem;
  }
`;

const StyledComponent = () => (
  <Box color="black">
    <Button inverted={false}>hello</Button>
    <Button inverted={true}>in border</Button>
  </Box>
);

export default StyledComponent;