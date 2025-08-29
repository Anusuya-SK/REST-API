import React from "react";
import FetchAPI from "./components/FetchAPI";
import HandleAPIError from "./components/HandleAPIError";
import useFetch from "./components/useFetch";

function App() {
  const {data, error, title} = useFetch("https://jsonplaceholder.typicode.com/posts")

  if(error) return <p style={{color: "red"}}>{error}</p>;
  
  return (
    <div className="App">
      <FetchAPI />
      <HandleAPIError />
      <div>
        <hr />
        <h2>{title}</h2>
        {data.slice(0, 5).map((item) => {
          return <li key={item.id}>{item.title}</li>
        })}
      </div>
    </div>
  );
}

export default App;
