import React from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../atoms/SearchInput";
import MovieDetails from "../organisms/MovieDetails";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
      </header>
      <body>
        <MovieDetails />
      </body>
    </div>
  );
};

export default App;
