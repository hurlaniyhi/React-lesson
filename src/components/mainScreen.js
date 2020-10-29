import React, {useState} from 'react'
import '../styles/mainScreen.css'



function App(){

    const [number, setNumber] = useState(0)

    function increase(){
       setNumber(number + 1)
    }

    function decrease(){
        setNumber(number - 1)
    }
    
    return (
       <div className="container">
           <div className="counter">
               <p className="number">{number}</p>
           </div>
           <div className="buttons">
               <button className="clicks one" onClick={increase}>Increase</button>
               <button className="clicks two" onClick={decrease}>Decrease</button>
           </div>
        </div>
    )
}

export default App

  