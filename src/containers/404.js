import styled from "styled-components";

const FluidContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 7.5em;
  margin-button: 0;
`;

const Subtitle = styled.h6`
  font-size: 2.5em;
  margin-top: 0;
`;

const NotFound = () => {
  <FluidContainer>
    <Title>404!</Title>
    <br />
    <Subtitle>The page you are looking for doesn't exist.</Subtitle>
  </FluidContainer>
};

export default NotFound;
