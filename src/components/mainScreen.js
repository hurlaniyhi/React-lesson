import React, {useState, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import {ErrorBoundary} from 'react-error-boundary'
import '../styles/mainScreen.css'

function ErrorFallBack({error, resetErrorBoundary}) {
    return(
        <div>
            <p style={{textAlign: 'center', color: "red"}}>Something went wrong</p>
            <pre>{error.message}</pre>
            <button onClick={resetErrorBoundary}>Try again</button>
        </div>
    )
}


function App(){

    const history = useHistory()
    let nameChange = React.useRef("Quddus")

    const [number, setNumber] = useState(0)
    
    function increase(){
        number.toUpperCase()
        nameChange.current = "Habeeb"
        setNumber(number + 1)
    }

    function decrease(){
        setNumber(number - 1)
    }
    
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() =>{
            }}>
            <div>
                <div className="container">
                    <div className="counter">
                        <p className="number">{number}</p>
                    </div>
                    <div className="buttons">
                        <button className="clicks one" onClick={increase}>Increase</button>
                        <button className="clicks two" onClick={decrease}>Decrease</button>
                    </div>
                </div>
                <p ref={nameChange}>{nameChange.current}</p>
                <p>{nameChange.current}</p>
            </div>
        </ErrorBoundary>
    )
}

export default App

  