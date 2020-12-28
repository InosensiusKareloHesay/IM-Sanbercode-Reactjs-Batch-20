import React, { useState, createContext } from "react";

export const MovieContext = createContext();

export const MovieProvider = props => {
  const [movie, setMovie] = useState([
    { name: "Harry Potter", lengthOfTime: 120},
    { name: "Sherlock Holmes", lengthOfTime: 125},
    { name: "Avengers", lengthOfTime: 130},
    { name: "Spiderman", lengthOfTime: 124},
  ]);

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};