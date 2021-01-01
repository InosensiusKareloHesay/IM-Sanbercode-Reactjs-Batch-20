import '../Assets/css/style.css';
import logo from '../Assets/img/logo.png'
import {Link} from 'react-router-dom';
import React, {useContext} from 'react'
import { UserContext } from '../Context/UserContext';

const Navbar = () => {
    const [user, setUser] = useContext(UserContext)
    const handleLogout = () => {
        setUser(null)
        localStorage.removeItem("user")
    }

    return(
        <>
        <header>
        <img id="logo" src={logo} width="200px"/>
            <nav>
                <ul>
                <li><Link to="/">Home</Link></li>   
                <li><Link to="/about">About</Link></li>
                {user && <li><Link to="/book">Book</Link></li>}
                {user === null && <li><Link to="/login">Login</Link></li>}
                {user && <li><a style={{cursor: "pointer"}} onClick={handleLogout}>Logout</a></li>}
                </ul>
            </nav>
        </header>
        </>
    )
}

export default Navbar