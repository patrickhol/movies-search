import React, { useState } from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../components/atoms/SearchInput";
import MovieDetails from "../components/organisms/MovieDetails";
import MoviesAPI from "../api/MoviesAPI";

const App: React.FC = () => {
  const [movieList, setMovieList] = useState();
  const [movie, setMovie] = useState();

  const fetchMovieList = async (name: string) => {
    console.log(name);
    const newList = await MoviesAPI.getMoviesByTitle(name);
    setMovieList(newList);
  };

  return (
    <>
      <header className="App-header">
        <SearchInput
          onSetMovie={setMovie}
          onSetMovieList={setMovieList}
          movieList={movieList}
          onFetchMovieList={fetchMovieList}
        />
      </header>
      {movie ? (
        <div>
          <MovieDetails />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
