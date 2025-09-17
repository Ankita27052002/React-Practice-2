import { useState, useEffect, useRef } from "react";

const PreviousCounter = () => {
    const [count, setCount] = useState(0);
    const prevCountRef = useRef(null);

    useEffect(() => {
        prevCountRef.current = count; // store previous value
    },[count]);

    return (
        <div>
            <h3>Current: {count}</h3>
            <h4>Previous: {prevCountRef.current}</h4>
            <button onClick={()=> setCount(count+1)}>Increment</button>
        </div>
    );
}

export default PreviousCounter;