import React, {useContext} from "react"
import {Link} from "react-router-dom";
import '../Tugas-15/navbar.css'
import {NavbarContext} from "../Tugas-15/navbarContext"

const Nav = () => {
    const [namaClass, setNamaClass] = useContext(NavbarContext)

    const gantiTema = () => {
        let x = document.getElementById('navbar')
        let y = document.getElementById('buttonChange')
        if (namaClass === 'navbarTugas'){
            setNamaClass('navbarTugasDark')
            return y.style.backgroundColor = "lightskyblue"
        } else {
            setNamaClass('navbarTugas')
            return y.style.backgroundColor = "darkslategrey"
        }
    }

  return (
    <div>
      <ul id = "navbar" className={namaClass}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/tugas9">Tugas 9</Link>
        </li>
        <li>
          <Link to="/tugas10">Tugas 10</Link>
        </li>
        <li>
          <Link to="/tugas11">Tugas 11</Link>
        </li>
        <li>
          <Link to="/tugas12">Tugas 12</Link>
        </li>
        <li>
          <Link to="/tugas13">Tugas 13</Link>
        </li>
        <li>
          <Link to="/tugas14">Tugas 14</Link>
        </li>
        <li id = "buttonChange" style={{float:"right",backgroundColor: "darkslategrey"}}>
            <Link onClick={gantiTema}>Change Theme</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav