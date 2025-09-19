import { useRef } from "react";

const UncontrolledComponent = ()=> {
    const nameRef = useRef();

    const handleSubmit = (e)=> {
        e.preventDefault();
        alert(`Name submitted: ${nameRef.current.value}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name:</label>
            <input type="text" ref={nameRef} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UncontrolledComponent;