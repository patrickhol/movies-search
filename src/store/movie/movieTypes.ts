import moviesInterface from '../../interfaces/MoviesInterface.interface';

export const SET_MOVIE_LIST = 'SET_MOVIE_LIST';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_ERROR = 'SET_ERROR';

export interface MovieState {
  movie?: moviesInterface;
  movieList: moviesInterface[];
  errorInfo: string;
}
interface AddMovie {
  type: typeof SET_MOVIE;
  payload: moviesInterface;
}
interface AddMovieList {
  type: typeof SET_MOVIE_LIST;
  payload: moviesInterface[];
}

interface AddError {
  type: typeof SET_ERROR;
  payload: string;
}

export type MovieActionTypes = AddMovie | AddMovieList | AddError;
