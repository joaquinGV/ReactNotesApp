import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";

const StyledButton = styled.button`
  border-radius: 7px;
  background: #363062;
  color: #f5f5f5;
  text-transform: uppercase;
  font-size: 14px;
`;
const HeaderActionButton = () => {
  const { showCreateNoteModal } = useContext(ModalContext);
  return <StyledButton onClick={showCreateNoteModal}>New Notes</StyledButton>;
};

export default HeaderActionButton;
