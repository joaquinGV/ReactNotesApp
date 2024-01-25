import { useState } from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 14px;
  width: 450px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const SearchInput = (props) => {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    const { value } = e.target;
    setSearch(value);
    props.onSearch(value);
  }

  return (
    <StyledInput
      type="text"
      placeholder="SEARCH"
      value={search}
      onChange={handleChange}
    />
  );
};

export default SearchInput;
