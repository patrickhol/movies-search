import React from "react";

interface Props {
  onFetchMovieList: (name: string) => void;
  movieList: any;
  onSetMovieList: Function;
}

const SearchInput: React.FC<Props> = ({
  onFetchMovieList,
  movieList,
  onSetMovieList
}) => {
  return (
    <div className="search">
      <i className="search__icon fa fa-search icon"></i>
      <input
        onChange={e => {
          e.preventDefault();
          if (e.currentTarget.value.length > 0) {
            onFetchMovieList(e.currentTarget.value);
          } else {
            onSetMovieList("");
          }
        }}
        className="search__input"
        type="text"
        placeholder="Search Movie Title"
        name="search"
      />
      {movieList &&
        movieList.map((item: any) => (
          <p
            onClick={() => {
              console.log("render id:", item._id);
            }}
            key={item._id}
          >
            {item.title}
          </p>
        ))}
    </div>
  );
};

export default SearchInput;
