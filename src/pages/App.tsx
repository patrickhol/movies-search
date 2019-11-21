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
  const [errorInfo, setErrorInfo] = useState("");

  const fetchMovieList = async (name: string) => {
    try {
      const newList = await MoviesAPI.getMoviesByTitle(name);
      setErrorInfo("");
      setMovieList(newList);
    } catch (err) {
      console.error({ err });
      setErrorInfo(err.toString());
    }
  };

  return (
    <>
      <header className="app">
        <SearchInput
          onSetMovie={setMovie}
          onSetMovieList={setMovieList}
          movieList={movieList}
          onFetchMovieList={fetchMovieList}
        />
        <span className="app__error">{errorInfo}</span>
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
