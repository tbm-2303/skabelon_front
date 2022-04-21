import React from "react";
import { useState, useEffect } from "react";
import { jokeUrl } from "../settings";

const Jokes = () => {
  const [joke, setJoke] = useState([]);

  useEffect(() => {
    const getJoke = async () => {
      const joke = await fetchJoke();
      setJoke(joke);
    };
    getJoke();
  }, []);

  const fetchJoke = async () => {
    const res = await fetch(jokeUrl, {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    });

    const data = await res.json();
    return data;
  };

  return (
    <div className="border">
       <h2>joke: {joke.value}</h2>
    </div>
  );
};

export default Jokes;