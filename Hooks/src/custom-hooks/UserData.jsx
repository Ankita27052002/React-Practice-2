import useFetch from "./useFetch"

const UserData = ()=>{
    const {data: users, loading}= useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <h3>Loading...</h3>

    return (
        <ul>
            {users.map((user)=> (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}


export default UserData;