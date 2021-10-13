import styled from "styled-components";

export const Header = styled.header`
  height: 5vh;
`;

export const Main = styled.main`
    min-height: 95vh;
    padding: ${(props) => props.theme.spacing(2)};
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 1em;
  border-top: 1px solid #ccc;
`;
