import styled from "styled-components";

export const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const Select = styled.select`
    height: 35px;
    background: white;
    color: gray;
    padding: 0.5em;
    fint-size: 0.8em;
    border: 2px solid ${(props) => props.theme.secondary.light};
    border-radius: 0.5em;
    margin-left: 1em;
    option {
      color: black;
      background: white;
      display: flex;
      white-space: 20px;
      min-height: 20px;
      padding: 0px 2px 1px;
    }
`;
