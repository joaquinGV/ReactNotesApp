import { useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../context/ModalContext";

const CardNotesWrapper = styled.div`
  background: #4d4c7d;
  color: #f5f5f5;
  padding: 10px;
  display: flex;
  flex-direction: column;
  border-radius: 7px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  min-width: 260px;
  font-size: 14px;
`;

const CardNoteBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;

  > h2,
  p {
    margin: 5px;
  }

  > h2 {
    font-size: 16px;
  }

  > p {
    font-size: 15px;
  }
`;

const ActionButton = styled(({ isRemove, ...props }) => <a {...props} />)`
  text-transform: uppercase;
  color: ${(props) => (props.isRemove ? "#F99417" : "#f5f5f5")};
  font-size: 14px;

  &:hover {
    color: none;
    text-decoration: none;
    text-decoration: underline;
  }
`;

const CardNoteFooter = styled.div`
  display: flex;
  gap: 10px;
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const CardNotes = (props) => {
  const { searchActive } = useContext(ModalContext);

  return (
    <CardNotesWrapper>
      <CardNoteBody>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </CardNoteBody>
      <CardNoteFooter>
        <ActionButton
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.onArchived();
          }}
        >
          {searchActive ? "Unarchive" : "Archive"}
        </ActionButton>
        <Spacer />
        <ActionButton
          href=""
          onClick={(e) => {
            e.preventDefault();
            props.onEdit();
          }}
        >
          Edit
        </ActionButton>
        <ActionButton
          href=""
          isRemove
          onClick={(e) => {
            e.preventDefault();
            props.onRemove();
          }}
        >
          Remove
        </ActionButton>
      </CardNoteFooter>
    </CardNotesWrapper>
  );
};

export default CardNotes;
