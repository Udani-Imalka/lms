import styled from "styled-components";
import { Container } from "./CommonComponents";

const Label = styled.label`
    font-size; 075em;
    margin-bottom: 0.5em;
    dispaly: bloack;
`;

const StyledSelector = styled.select`
    padding: 0.5em;
    border: 2px solid $ {(props) => props.theme.primary.main};
    border-radium: 3px;
    margin-bottom:0.5em;
    width: 100%;
    box-sizing: border-box;
`;

export default function Selector({ lable, value, onChange, ...rest }) {
  return (
    <Container alighItems="flex-start">
      <Label>{lable}</Label>
      <StyledSelector value={value} onChange={onChange} {...rest}>
        <option value=" " name="userType">
          {" "}
          Select user type
        </option>
        <option value="School" name="userType">
          {" "}
          School
        </option>
        <option value="University" name="userType">
          {" "}
          University
        </option>
        <option value="Employed" name="userType">
          {" "}
          Employed
        </option>
      </StyledSelector>
    </Container>
  );
}
