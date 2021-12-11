import React, {useReducer} from 'react'
const StateContext = React.createContext()

const stateReducer = (state, action) => {

    switch (action.type){
        case "handleLogin": return {...state, loginDetails: action.payload}
        case "handleLogout": return {...state,loginDetails:action.payload}
    }
}

export const StateProvider = (props) => {

    const [state, dispatch] = useReducer(stateReducer, {loginDetails: {username: "", password: "",bringUser:"",bringPassword:""}, 
    loginMessage: "Welcome"})

    async function login(username, password,){
        //alert(`username: ${username}, password: ${password}`)

        await dispatch({type: "handleLogin", payload: {username, password,bringUser:"your username is:",bringPassword:"your password is:"}})
    }
    async function logout(username,password){
        await dispatch({type: "handleLogout", payload: {username, password,bringUser:"you logged out with a username of ",
        bringPassword:"you logged with a password of "}})
    }

    const boundActions = {
        login,
        logout
    }

    return (
        <StateContext.Provider value={{state: state, ...boundActions}}>
            {props.children}
        </StateContext.Provider>
    )
}

export default StateContext