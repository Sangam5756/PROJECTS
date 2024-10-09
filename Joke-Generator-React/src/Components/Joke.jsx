import React from "react";
import { useState } from "react";
import Button from "../Button";
import "./Joke.css";
function Joke() {
  let [Joke, setJoke] = useState("");

  const fetchApi = () => {
    fetch('https://v2.jokeapi.dev/joke/Programming?type=single')
      .then((res) =>res.json())
      .then((data) => {
        if(data.joke){
        setJoke(data.joke);
    }else{
        setJoke("No Joked Found")
    }
      });
  };

  return (
    <div>
      <div className="joke">
        <p>{Joke}</p>
        <Button action={fetchApi} />
      </div>
    </div>
  );
}

export default Joke;
