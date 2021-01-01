import '../App.css';

const Login = () => {
    // const [user,setUser] = useContext(UserContext)
    // const [input, setInput] = useState({username: "", password: ""})

    // const handleSubmit = (event) =>{
    //     event.preventDefault()
    //     if (input.username === "admin" && input.password === "admin"){
    //         setUser({username: input.username})
    //         localStorage.setItem("user",JSON.stringify({username: "admin", password: "admin"}))
    //     } else{
    //         alert("Username dan password gagal")
    //     }
    // }

    return(
        <div className="App" style={{marginTop: "5%"}}>
            <form onSubmit="">
                <label><strong>ID</strong></label>
                <input type="text" name="nama" id="nama" required/><br /><br />
                <label><strong>Password</strong></label>
                <input type="text" name="pass" id="pass" required/><br /><br />
            </form>
        </div>
    )
}

export default Login;