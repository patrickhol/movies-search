import React, { useState } from "react";

interface Props {
  onFetchMovieList: (name: string) => void;
  movieList: any;
  onSetMovieList: Function;
  onSetMovie: Function;
}

const SearchInput: React.FC<Props> = ({
  onFetchMovieList,
  movieList,
  onSetMovieList,
  onSetMovie
}) => {
  const [searchValue, setSearchValue] = useState("");
  const handleOnClick = (item: any) => {
    onSetMovie(item);
    onSetMovieList("");
    setSearchValue("");
  };

  const handleOnChange = (e: any) => {
    setSearchValue(e.target.value);
    if (e.target.value.length > 0) {
      onFetchMovieList(e.target.value);
    } else {
      onSetMovieList("");
    }
  };

  return (
    <div className="search">
      <i className="search__icon fa fa-search icon"></i>
      <input
        value={searchValue}
        onChange={handleOnChange}
        className="search__input"
        type="text"
        placeholder="Search Movie Title"
        name="search"
      />
      {movieList &&
        movieList.map((item: any) => (
          <p
            className="search__p"
            key={item._id}
            onClick={item => {
              handleOnClick(item);
            }}
          >
            {item.title}
          </p>
        ))}
    </div>
  );
};

export default SearchInput;
