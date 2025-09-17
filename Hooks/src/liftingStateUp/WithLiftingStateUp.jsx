import { useState } from "react";

const FirstName = ({firstName, setFirstName}) => {
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

const LasttName = ({lastName, setLastName}) => {
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
        <h3>
            wow! {firstName} {lastName}
        </h3>
    );
};

const WithLiftingStateUp = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    return (
        <>
            <FirstName firstName={firstName} setFirstName={setFirstName}/>
            <LasttName lastName={lastName} setLastName={setLastName}/>
            <Greeting firstName={firstName} lastName={lastName}/>
        </>
    );

};


export default WithLiftingStateUp;