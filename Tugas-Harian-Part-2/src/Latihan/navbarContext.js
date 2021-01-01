import React, { useState, createContext } from "react";

export const NavbarContext = createContext();

export const NavbarProvider = props => {
  const [namaClass, setNamaClass] = useState('navbarTugas');
  
  return (
    <NavbarContext.Provider value={[namaClass, setNamaClass]}>
      {props.children}
    </NavbarContext.Provider>
  );
};