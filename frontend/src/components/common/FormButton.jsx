import styled from "styled-components";

const FormButton = styled(({ cancel, ...props }) => <a {...props} />)`
  color: white;
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.25s;
  background-color: ${(props) => (props.cancel ? "#F99417" : "#1a1a1a")};
  border: 1px solid ${(props) => (props.cancel ? "#F99417" : "#1a1a1a")};

  &:hover {
    border: 1px solid ${(props) => (props.cancel ? "#1a1a1a" : "#F99417")};
    color: ${(props) => (props.cancel ? "#1a1a1a" : "#F99417")};
  }
`;

export default FormButton;
