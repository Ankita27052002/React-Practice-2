import { useState } from "react";

const ControlledComponent = ()=> {
    const [name, setName] = useState("");

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`Your name is ${name}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input 
                type="text"
                placeholder="Enter your name..."
                value={name}
                onChange={(e) => setName(e.target.value)}

            />

            <button type="submit">Submit</button>
        </form>
    );
};

export default ControlledComponent;