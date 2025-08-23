import React, { useEffect, useState } from "react";

function FetchAPI() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(json => {
            setData(json);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })
    },1000);
    return () => clearTimeout(timer);
    // () => clearTimeout(timer);
    // This is an arrow function that calls clearTimeout(timer) and just returning it
  },[]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {data.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default FetchAPI;
