import React from "react"
import {UserProvider} from "../Context/UserContext"
import LoginForm from "./LoginForm"

const Login = () =>{
  return(
    <UserProvider>
      <LoginForm />
    </UserProvider>
  )
}

export default Login;