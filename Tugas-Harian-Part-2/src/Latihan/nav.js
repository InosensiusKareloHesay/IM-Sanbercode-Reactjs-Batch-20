import React, {useContext} from "react"
import {Link} from "react-router-dom";
import './navbar.css'
import {NavbarContext} from "../Latihan/navbarContext"

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
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/satu">Tugas 9</Link>
        </li>
        
        <li id = "buttonChange" style={{float:"right",backgroundColor: "darkslategrey"}}>
            <Link onClick={gantiTema}>Change Theme</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav