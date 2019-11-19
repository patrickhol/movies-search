import React, { useState } from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../components/molecules/SearchInput";
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
        {movie ? (
          <div className="movie-details">
            <MovieDetails movie={movie} />
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};

export default App;
