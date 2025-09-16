import { useState } from "react";
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = ()=> {
        setCount(count+1);
    };

    const decrement = () =>{
        if(count>0){
            setCount(count-1);
        }
    };

    const reset = () => {
        setCount(0);
    };

    // increment by 5 function
    const incrementByFive = () => {
        setCount(count+5);
    }

    return (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement} disabled={count === 0}>
                Decrement
            </button>
            <button onClick={reset}>Reset</button>

            {/* Increment by 5 */}
            <button onClick={incrementByFive}>Increment by 5</button>

        </>
    );
};

export default Counter;
