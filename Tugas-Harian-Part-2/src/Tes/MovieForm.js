import React, {useContext, useState} from "react"
import {MovieContext} from "./MovieContext"

const MovieForm = () =>{
  const [name, setName] = useState("")
  const [lengthOfTime, setLengthOfTime] = useState(0)
  const [movie, setMovie] = useContext(MovieContext)

  const handleSubmit = (event) =>{
    event.preventDefault()
    setMovie([...movie, {name, lengthOfTime}])
    setName("")
    setLengthOfTime("")
  }
  
  const handleChangeName = (event) =>{
    setName(event.target.value)
  }

  const handleChangeTime = (event) =>{
    setLengthOfTime(event.target.value)
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <strong>Title</strong>
        <input type="text" value={name} onChange={handleChangeName} /><br></br>
        <strong>Durasi</strong>
        <input type="number" value={lengthOfTime} onChange={handleChangeTime} /><br></br>
        <button>submit</button>
      </form>
    </>
  )

}

export default MovieForm