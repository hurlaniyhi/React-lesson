import React, {useState} from 'react'
import '../styles/auth.css'

var obj = {
    user: "good"
}


const Authentication = () => {

    const [info, setInfo] = useState({username: "", password: "", color: "#1D9CEA"})

    var savedUsername = "ejiofor"
    var savedPassword = "1234"

    function handleChange(e){
        setInfo({...info, [e.target.name]: e.target.value})
    } 

    function send(){
        if(savedPassword == info.password && savedUsername == info.username){
            alert("Successfully logged in")
            setInfo({...info, color: "green"})
        }
        else {
            alert("Incorrect username or password")
            setInfo({...info, color: "red"})
        }
    }
    return (
        <div className="main" style={{borderColor: info.color}}>
            <p className="title">LogIn</p>
            <input type="text" placeholder="Enter username" onChange={(e)=>handleChange(e)} name="username" 
              className="user"/>

            <input type="password" placeholder="Enter password" onChange={(e)=>handleChange(e)} name="password" 
              className="user"/>

            <button style={{backgroundColor: info.color}} onClick={send} className="but">Sign in</button>
        </div>
    )
}

export default Authentication