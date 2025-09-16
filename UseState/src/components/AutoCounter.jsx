import { useState, useEffect } from "react";

const AutoCounter = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false); // control auto counter

    useEffect(() => {
        let interval;
        if(isRunning){
            interval = setInterval(()=> {
                setCount(prev => prev+1); //  always latest value
            }, 1000); // setInterval runs every 1000ms (1 second)

        }
        
       
         // Cleanup: stop interval when isRunning=false or component unmounts
        return ()=> clearInterval(interval);

    }, [isRunning]); // runs whenever isRunning changes


    return (
        <>
            <h2>Auto Counter: {count}</h2>

            {/* <button onClick={()=> setIsRunning(true)}>Start</button> */}
            {/* <button onClick={()=> setIsRunning(false)}>Stop</button> */}

            {/* Pause/Resume functionality */}
            <button onClick={()=> setIsRunning(prev => !prev)}>
                {isRunning ? "Pause" : "Resume"}
            </button>
            <button onClick={()=> setCount(0)}>Reset</button>
        </>
    );
};

export default AutoCounter;