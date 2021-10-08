import styled from "styled-components";
import { Container } from "./CommonComponents";

const Label = styled.label`
    font-size; 075em;
    margin-bottom: 0.5em;
    dispaly: bloack;
`;

const StyledInput = styled.input`
    padding: 0.5em;
    border: 2px solid $ {(props) => props.theme.primary.main};
    border-radium: 3px;
    margin-bottom:0.5em;
    width: 100%;
    box-sizing: border-box;
`;

export default function Input({ lable, value, onChange, ...rest}) {
    return(
        <Container alighItems="flex-start">
            <Label>{lable}</Label>
            <StyledInput value={value} onChange={onChange} {...rest}/>
        </Container>
    )
}