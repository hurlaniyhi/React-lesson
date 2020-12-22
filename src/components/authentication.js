import React, {useState, useEffect} from 'react'
import { gsap } from "gsap"
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import '../styles/auth.css'
gsap.registerPlugin(ScrollTrigger);

var obj = {
    user: "good"
}


const Authentication = () => {

    const [info, setInfo] = useState({username: "", password: "", color: "#1D9CEA"})

    var savedUsername = "ejiofor"
    var savedPassword = "1234"

    useEffect(()=>{

        animateMe()
    }, [])

    function animateMe() {
    gsap.to("img", {
        scrollTrigger: "img", // start the animation when ".box" enters the viewport (once)
        scale: 2,
        start: "top top",
       // end: "bottom top",
        scrub: true,
        markers: true
      });
    }

    function handleChange(e){
        setInfo({...info, [e.target.name]: e.target.value})
    } 

    function send(){
       // gsap.to('img', {rotate: 360, duration: 2})
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
        <div>
        <div className="main" style={{borderColor: info.color}}>
            <p className="title">login</p>
            <input type="text" placeholder="Enter username" onChange={(e)=>handleChange(e)} name="username" 
              className="user"/>

            <input type="password" placeholder="Enter password" onChange={(e)=>handleChange(e)} name="password" 
              className="user"/>

            <button style={{backgroundColor: info.color}} onClick={send} className="but">Sign in</button>
        </div>
        
        {/* <img src-={require("../user2.jpg")} width="300px" height="200px"/> */}
        </div>
       
    )
}

export default Authentication