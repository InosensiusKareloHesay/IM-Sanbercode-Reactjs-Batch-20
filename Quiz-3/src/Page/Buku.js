import React from "react"
import {BookProvider} from "../Context/BookContext"
import BookList from "./BukuList"
import BookForm from "./BukuForm"

const Buku = () =>{
  return(
    <BookProvider>
      <BookList />
      <BookForm />
    </BookProvider>
  )
}

export default Buku