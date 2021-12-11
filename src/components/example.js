import React, {useState, useEffect, useContext} from 'react'
import StateContext from "../stateManager/manager"
import {useHistory} from 'react-router-dom'


const Example = () => {
    const {state,logout} = useContext(StateContext)
    const [change,setInfo]=useState({username:state.loginDetails.username,password:state.loginDetails.password})
    const history=useHistory()
   async function logOut(){  
       await logout(change.username,change.password)  
       history.push("/auth")
   }

    return(
        <div>
            <h2>This is functional component</h2>
            <p>Your username is {state.loginDetails.username}</p>
            <p>Your password is {state.loginDetails.password}</p>
            <button onClick={logOut}>log out</button>
        </div>  
    )
}

export default Example