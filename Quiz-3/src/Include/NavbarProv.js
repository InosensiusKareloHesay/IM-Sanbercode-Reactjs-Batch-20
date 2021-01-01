import React from "react"
import {UserProvider} from "../Context/UserContext"
import Navbar from "./Navbar"

const NavbarProv = () =>{
  return(
    <UserProvider>
      <Navbar />
    </UserProvider>
  )
}

export default NavbarProv;