import styled from "styled-components";

export const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
`;

export const ContainerInline = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
`;

export const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 1em;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.primary.main};
  color: ${(props) => props.theme.primary.textColor};
  font-size: 1em;
  padding: 0.25em 1em;
  border: 0;
  border-radius: 0.5em;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.theme.primary.dark};
  }
`;
