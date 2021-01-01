import React from "react"
import {UserProvider} from "../Context/UserContext"
import Routes from "./Routes"

const NavbarProv = () =>{
  return(
    <UserProvider>
      <Routes />
    </UserProvider>
  )
}

export default NavbarProv;