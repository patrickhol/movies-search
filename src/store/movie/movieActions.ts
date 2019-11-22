import MoviesInterface from "../../interfaces/moviesInterface.interface";

import { SET_MOVIE_LIST, SET_MOVIE, SET_ERROR } from "../movie/movieTypes";

export const setMovieList = (list: MoviesInterface[]) => ({
  type: SET_MOVIE_LIST,
  payload: list
});

export const setMovie = (item: MoviesInterface) => ({
  type: SET_MOVIE,
  payload: item
});

export const setErrorInfo = (error: string) => ({
  type: SET_ERROR,
  payload: error
});
