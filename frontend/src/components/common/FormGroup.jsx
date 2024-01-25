import styled from "styled-components";

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 9px;
  width: 100%;

  > label {
    color: #363062;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-transform: uppercase;
    text-align: left;
  }

  > input,
  textarea {
    border-radius: 8px;
    background: #fff;
    height: 30px;
    font-height: normal;
    font-weight: 500;
    font-size: 1em;
    color: black;
    font-family: inherit;
  }

  > textarea {
    height: auto;
    border: 1px solid;
  }
`;

export default FormGroup;
