import React from "react";
//import 'bootstrap/dist/css/bootstrap.min.css';
import { FlexRow } from "./CommonComponents";
import img1 from "../assets/book1.jpg";
import img2 from "../assets/book2.jpg";
import img3 from "../assets/book3.jpg";
import img4 from "../assets/book5.jpg";
import styled from "styled-components";

const CardImg = styled.img`
  width: 230px;
  height: 300px;
`;

const CardTitle = styled.h3`
  text-align: left;
  font-weight: bold;
`;
const CardText = styled.p`
  text-align: left;
`;

const CardButton = styled.button`
  background-color: blue;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

const CardBody = styled.p`
  text-align: justify;
`;

const CardStyle = styled.div`
  width: 15rem;
  margin-left: 20px;
  justify-content: center;
  align-items: flex-start;
  padding: 1em 1em 1em 1em;
  border: 1px solid ${(props) => props.theme.secondary.light};
`;

export default function BasicCard() {
  return (
    <FlexRow>
      <CardStyle>
        <CardImg variant="top" src={img1} />
        <CardBody>
          <CardTitle>Harry Potter and the Deathly Hallows</CardTitle>
          <CardText>The seventh and final book begins with Voldemort.</CardText>
          <CardButton>More Deails</CardButton>
        </CardBody>
      </CardStyle>
      <CardStyle>
        <CardImg variant="top" src={img2} />
        <CardBody>
          <CardTitle>Harry Potter and the Philosopher's Stone</CardTitle>
          <CardText>
            The first novel in the Harry Potter series and Rowling's debut novel
          </CardText>
          <CardButton>More Deails</CardButton>
        </CardBody>
      </CardStyle>
      <CardStyle>
        <CardImg variant="top" src={img3} />
        <CardBody>
          <CardTitle>Harry Potter and the Chember of secrets</CardTitle>
          <CardText>
            {" "}
            It is the second book in the series of HarryPotter
          </CardText>
          <CardButton>More Deails</CardButton>
        </CardBody>
      </CardStyle>
      <CardStyle>
        <CardImg variant="top" src={img4} />
        <CardBody>
          <CardTitle>Harry Potter and the Order of the Phoemix</CardTitle>
          <CardText>It is the fifth book in the Harry Potter series</CardText>
          <CardButton>More Deails</CardButton>
        </CardBody>
      </CardStyle>
    </FlexRow>
  );
}
