import React, { useState, createContext } from "react";

export const BookContext = createContext();

export const BookProvider = props => {
  const [buku, setBuku] = useState([]);
  const [currentID, setCurrentID] =  useState(null)

  return (
    <BookContext.Provider value={[buku, setBuku, currentID, setCurrentID]}>
      {props.children}
    </BookContext.Provider>
  );
};