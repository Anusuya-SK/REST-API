// 🔹 1. Common types of API errors
// When you make an API call using fetch or axios, errors can come from:
// Network errors – Internet issues, server down.
// Client errors (4xx) – Invalid request (e.g., 400, 401, 403, 404).
// Server errors (5xx) – Backend failure (e.g., 500, 503).
import React, { useEffect, useState } from 'react'

function HandleAPIError() {
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            if(!res.ok) {
                // If response is not 200–299. throw new Error will go to .catch() and setError there
                throw new Error(`Error: ${res.status} ${res.statusText}`);
            }
            return res.json()
        })
        .then((json) => setData(json))
        .catch((err) => setError(err.message))
    })

    if(error) return <p style={{color: "red"}}>{error}</p>;

  return (
    <div>
        <hr />
        <h2>Basic error handling</h2>
        {data.slice(0, 5).map((item) => {
            return <li key={item.id}>{item.title}</li>
        })}
    </div>
  )
}

export default HandleAPIError