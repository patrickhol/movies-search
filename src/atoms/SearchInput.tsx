import React from "react";

interface Props {}

const SearchInput: React.FC<Props> = () => {
  return (
    <div className="search">
      <i className="search__icon fa fa-search icon"></i>
      <input
        className="search__input"
        type="text"
        placeholder="Search Movie Title"
        name="search"
      />
    </div>
  );
};

export default SearchInput;
