import React from "react";

import "./App.scss";
import "../styles/main.scss";
import SearchInput from "../atoms/SearchInput";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SearchInput />
      </header>
    </div>
  );
};

export default App;
