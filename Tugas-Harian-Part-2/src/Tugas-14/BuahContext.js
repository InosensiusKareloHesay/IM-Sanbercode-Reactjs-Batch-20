import React, { useState, createContext } from "react";

export const BuahContext = createContext();

export const BuahProvider = props => {
  const [dataHargaBuah, setDataHargaBuah] = useState([]);
  const [currentID, setCurrentID] =  useState(null)

  return (
    <BuahContext.Provider value={[dataHargaBuah, setDataHargaBuah, currentID, setCurrentID]}>
      {props.children}
    </BuahContext.Provider>
  );
};