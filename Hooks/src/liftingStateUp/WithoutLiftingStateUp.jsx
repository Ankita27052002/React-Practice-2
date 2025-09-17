import { useState } from "react";

const FirstName = () => {
    const [firstName, setFirstName] = useState("");

    return (
        <>
            <label htmlFor="">First Name</label>
            <input 
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
            />
        </>
    );
};

const LastName = () => {
    const [lastName, setLastName] = useState("");

    return (
        <>
            <label htmlFor="">Last Name</label>
            <input 
                type="text" 
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
            />
        </>
    );
};

const Greeting = ({firstName, lastName}) => {
    return (
        <h2>
            welcome, {firstName} {lastName}
        </h2>
    );
};

// Without Lifting State Up
const WithoutLiftingStateUp = () => {
    return (
        <>
            <FirstName/>
            <LastName/>
            <Greeting firstName={firstName} lastName={lastName}/>
        </>
    );
};


export default WithoutLiftingStateUp;