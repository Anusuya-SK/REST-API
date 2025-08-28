import React from "react";
import FetchAPI from "./components/FetchAPI";
import HandleAPIError from "./components/HandleAPIError";

function App() {
  return (
    <div className="App">
      <FetchAPI />
      <HandleAPIError />
    </div>
  );
}

export default App;
