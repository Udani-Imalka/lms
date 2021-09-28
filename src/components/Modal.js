import styled from "styled-components";

export const Modal = styled.div`
  z-index: auto;
  display: ${({ show }) => (show ? "block" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0.5);
`;

export const DialogBox = styled.div`
  position: fixed;
  background: antiquewhite;
  width: 33%;
  height: auto;
  top: "50%";
  left: "50%";
  transform: "50%";
  border-radius: 10px;
  padding: 075rem;
  color: rgba(0, 0, 139, 0.7);
`;
