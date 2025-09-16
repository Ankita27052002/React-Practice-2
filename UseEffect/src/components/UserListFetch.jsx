import { useState, useEffect } from "react";

const UserListFetch = () => {

    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=> {

        const controller = new AbortController(); // For cleanup
        const signal = controller.signal;

        // fetching the user data
        const fetchUser = async ()=> {
            try{
                const res = await fetch("https://jsonplaceholder.typicode.com/users", {signal,});
                if(!res.ok){
                    throw new Error("Failed to fetch users");
                }

                const data = await res.json();
                setUsers(data);

            }
            catch(err){
                if(err.name !== "AbortError"){
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUser();

        // cleanup =  cancel request if component unmounts
        return () => controller.abort();
    }, []);


    if(loading) return <h3>Loading...</h3>;
    if(error) return <h3 style={{color: "red"}}>Error: {error}</h3>

    return (
        <div>
            <h2>User List Fetching by async await</h2>
            <ul style={{color: "blueviolet"}}>
                {users.map((user) => (
                    <li key={user.id}>
                        <b>{user.name}</b> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserListFetch;