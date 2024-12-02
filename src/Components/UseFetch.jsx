import React, { useEffect, useState } from "react"

//This is a React Hook used for performing side effects in functional components. 
//It’s typically used for fetching data, subscribing to events, or any other side effects that don’t involve rendering.
const UseFetch = (url) => {
    const[data, setData] = useState();

    useEffect(()=> {
        fetch(url)//This initiates an HTTP request to the specified url.
        .then(response => response.json()) //This converts the response from the server to JSON format.
        //This sets the retrieved data to the state variable data. setData is a function that updates the state in React functional components.
        .then(data => setData(data))
    },[])

    return [data]
}

export default UseFetch
