import React, { useState } from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../components/atoms/SearchInput";
import MovieDetails from "../components/organisms/MovieDetails";
import MoviesAPI from "../api/MoviesAPI";
import MoviesInterface from "../interfaces/MoviesInterface.interface";

const App = () => {
  const [movieList, setMovieList] = useState();
  const [movie, setMovie] = useState<MoviesInterface>();

  const fetchMovieList = async (name: string) => {
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
          <MovieDetails movie={movie} />
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default App;
