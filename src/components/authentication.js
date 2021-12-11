import React, {useState, useContext} from 'react'
import {useHistory} from 'react-router-dom'
import '../styles/auth.css'
import StateContext from "../stateManager/manager"

const Authentication = () => {

    const {state, login} = useContext(StateContext)
    const history = useHistory()

    const [info, setInfo] = useState({username: "", password: "", color: "#1D9CEA"})

    function handleInputField(e){
        setInfo({...info, [e.target.name]: e.target.value})
    }

    async function handleSubmit(){
        await login(info.username, info.password)
        history.push("/example")
    }

    return (
        <div>
            <div className="main" style={{borderColor: info.color}}>
                <p className="title">login</p>
                <input type="text" placeholder="Enter username" name="username" onChange={handleInputField}
                className="user"/>

                <input type="password" placeholder="Enter password" name="password" onChange={handleInputField}
                className="user"/>
                <p>{state.loginDetails.bringUser}{state.loginDetails.username} </p>
                <p>{state.loginDetails.bringPassword}{state.loginDetails.password} </p>
                <button style={{backgroundColor: info.color}} onClick={handleSubmit}  className="but">Sign in</button>
            </div>
        </div>
       
    )
}

export default Authentication