import React, { useState } from "react";
import sprite from "../../images/sprite.svg";
import {
  ButtonClear,
  ButtonSearch,
  Input,
  InputWrap,
} from "./SearchField.styled";

const SearchField = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  const handleSearch = () => {
    onSearch(value);
  };

  const handleClear = () => {
    setValue("");
    onSearch("");
  };

  return (
    <InputWrap>
      <Input
        type="text"
        value={value}
        placeholder="Search"
        onChange={handleInputChange}
      />
      <ButtonSearch type="submit" onClick={handleSearch}>
        <svg width="18" height="18" fill="none" stroke="#262626">
          <use href={`${sprite}#icon-search`} />
        </svg>
      </ButtonSearch>

      {value && (
        <ButtonClear type="button" onClick={handleClear}>
          <svg width="18" height="18" fill="none" stroke="#262626">
            <use href={`${sprite}#icon-cross`} />
          </svg>
        </ButtonClear>
      )}
    </InputWrap>
  );
};

export default SearchField;
