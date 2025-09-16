import {useState, useEffect} from "react"; 

const UserList = () => {

    const [users, setUsers] = useState([]); // store API data
    const [loading, setLoading] = useState(true); // loading state
    const [error, setError] = useState(null); // error state

    useEffect(() => {

        // fetch data when component mounts
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => {
                if(!res.ok){
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => {
                setError(err.message);
                setLoading(false);
            });
    }, []); // empty dependency array , that run only once on mount

    if(loading) return <h3>Loading...</h3>;
    if(error) return <h3 style={{color: "red"}}>Error : {error}</h3>

    return (
        <div>
            <h2>User list</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <b>{user.name}</b> - {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );

};

export default UserList;