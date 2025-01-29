import React, {useState} from 'react';

import './App.css'



function App() {
    //let count = 0
    let [count, setCount] = useState(0);
    const Increment = () =>{
    
        setCount(count + 1);
    
        
    //console.log(count)
    }

    const Decrement = () =>{
        
            setCount (count - 1);
        
        //console.log(count)
    }

    const Reset = () =>{
        setCount(0);
        //console.log("Reset at " + count)
    }
    return (
        <div>
            <h3>Increase or Decrease Counter!!</h3>
            <h1>Counter:{count}</h1>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <button onClick={Reset}>Reset</button>
        </div>
    )
}

export default App
