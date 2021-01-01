import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = props => {
    const currentUser = JSON.parse(localStorage.getItem("user"))
    const iniateUser = currentUser ? currentUser : null
    const [user,setUser] = useState(iniateUser)
    
  return (
    <UserContext.Provider value ={[user, setUser]}>
      {props.children}
    </UserContext.Provider>
  );
};