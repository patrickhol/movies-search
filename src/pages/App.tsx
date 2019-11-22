import React from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../components/molecules/SearchInput";
import MovieDetails from "../components/organisms/MovieDetails";
import MoviesAPI from "../api/MoviesAPI";
import { connect } from "react-redux";

import {
  setMovieList,
  setErrorInfo,
  setMovie
} from "../store/movie/movieActions";
import { MovieState } from "../store/movie/movieTypes";
import { AppState } from "../store";
interface AppProps {
  setMovieList: typeof setMovieList;
  setErrorInfo: typeof setErrorInfo;
  setMovie: typeof setMovie;
  movieState: MovieState;
}

const App = ({
  movieState,
  setMovieList,
  setErrorInfo,
  setMovie
}: AppProps) => {
  // const [movie, setMovie] = useState<MoviesInterface>();

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
          movieList={movieState.movieList}
          onFetchMovieList={fetchMovieList}
        />
        <span className="app__error">{movieState.errorInfo}</span>
        {movieState.movie ? (
          <div className="movie-details">
            <MovieDetails movie={movieState.movie} />
          </div>
        ) : (
          ""
        )}
      </header>
    </>
  );
};
const mapStateToProps = (state: AppState) => ({
  movieState: state.movieState
});

export default connect(mapStateToProps, {
  setMovieList,
  setErrorInfo,
  setMovie
})(App);
