import React, { useState, useEffect } from 'react'

function useFetch(url) {
    const[data, setData] = useState([]);
    const[error, setError] = useState(null);
    const title = "Custom hook to handle API error"

    useEffect(() => {
        fetch(url)
        .then(res => {
            if(!res.ok) throw new Error("Failed to fetch data")
            return res.json()
        })
        .then(json => setData(json))
        .catch(err => setError(err.message))
    },[url])

  return {data, error, title}
}

export default useFetch