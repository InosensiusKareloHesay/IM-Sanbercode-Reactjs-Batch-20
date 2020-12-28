import React from "react"
import {MovieProvider} from "./MovieContext"
import MovieList from "./MovieList"
import MovieForm from "./MovieForm"

const Movie = () =>{
  return(
    <MovieProvider>
      <MovieList/>
      <MovieForm/>
    </MovieProvider>
  )
}

export default Movie