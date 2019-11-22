import { createStore, combineReducers } from "redux";

import { movieReducer } from "./movie/movieReducer";

const rootReducer = combineReducers({
  movieState: movieReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const store = createStore(rootReducer);

  return store;
}
