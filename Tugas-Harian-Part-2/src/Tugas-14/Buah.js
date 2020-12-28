import React from "react"
import {BuahProvider} from "./BuahContext"
import BuahList from "./BuahList"
import BuahForm from "./BuahForm"

const Buah = () =>{
  return(
    <BuahProvider>
      <BuahList/>
      <BuahForm/>
    </BuahProvider>
  )
}

export default Buah