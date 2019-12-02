import { MovieActionTypes, SET_MOVIE, SET_MOVIE_LIST, SET_ERROR, MovieState } from './movieTypes';

const initialState: MovieState = {
  movieList: [],
  errorInfo: '',
};

export function movieReducer(state = initialState, action: MovieActionTypes): MovieState {
  switch (action.type) {
    case SET_MOVIE:
      return {
        ...state,
        movie: action.payload,
      };
    case SET_MOVIE_LIST:
      return { ...state, movieList: [...action.payload] };
    case SET_ERROR:
      return {
        ...state,
        errorInfo: action.payload,
      };
    default:
      return state;
  }
}
