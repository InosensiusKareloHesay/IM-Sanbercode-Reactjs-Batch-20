import {UserContext} from '../Context/UserContext'
import React, {useState, useContext} from 'react'
import '../Assets/css/style.css';
import '../App.css';

const LoginForm = () => {

    const [user,setUser] = useContext(UserContext)
    const [input, setInput] = useState({username: "", password: ""})

    const handleSubmit = (event) =>{
        event.preventDefault()
        if (input.username === "admin" && input.password === "admin"){
                setUser({username: input.username})
                localStorage.setItem("user",JSON.stringify({username: "admin", password: "admin"}))
            
        } else{
            alert("Username dan password gagal")
        }
    }

    const handleChange = (event) => {
        let value = event.target.value

        if (event.target.name === "username"){
            setInput({...input,username:value});
        }else if(event.target.name === "password"){
            setInput({...input,password:value});
        }
    }

    return(
        <section>
            <div className="App" style={{marginTop: "5%"}}>
                <form onSubmit={handleSubmit}>
                    <label><strong>Username</strong></label>
                    <input style={{marginLeft: "50px"}} type="text" name="username" id="username" onChange={handleChange} required/><br /><br />
                    <label><strong>Password</strong></label>
                    <input style={{marginLeft: "50px"}} type="password" name="password" id="password" onChange={handleChange} required/><br /><br />
                    <button style={{backgroundColor: "green",color:"white"}}><strong>Submit</strong></button>
                </form>
            </div>
        </section>
    )
}

export default LoginForm;