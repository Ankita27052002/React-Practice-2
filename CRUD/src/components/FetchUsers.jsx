import { useState, useEffect } from "react";

const FetchUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // states for CRUD operation
    const [newUser, setNewUser] = useState({name: "", email: "", city: ""});
    const [editingId, setEditingId] = useState(null);
    const [editData, setEditData] = useState({name: "", email: "", city: ""});


    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!res.ok) throw new Error("Network response was not ok");
                const data = await res.json();
                setUsers(data);
            } catch (err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
        
    },[]);

    //------ CREATE --------

    const handleAddUser = () => {
         // validation check (if the input fields are not empty)
         if(!newUser.name || !newUser.email || !newUser.city ){
            alert("Please fill all the fields");
            return;
         }

         // create new user
         const createdUser = {
            id: Date.now(), //mock data
            name: newUser.name,
            email: newUser.email,
            address: {city: newUser.city},
         };

         // update the state of user
         setUsers([createdUser, ...users]);

         // resetting the input fields
         setNewUser({name: "", email: "", city: ""});

    };

    //----------------------------------

    //----------DELETE---------

    const handleDelete = (id) => {
        if(window.confirm("Are you sure you want to delete this user ?")){
            setUsers(users.filter((user) => user.id !== id));
        }
    };

    //-----------UPDATE-----------

    // 3 functions to handle inline editing of users
    // click "Edit" to make a row editable
    // Modify the data inside input fields
    // Click "Save" or "Cancel"

    // Start editing - (it helps to switch the row into edit mode)
    const handleEdit = (user) => {
        setEditingId(user.id);
        setEditData({
            name: user.name,
            email: user.email,
            city: user.address.city,
        });
    };

    // Save the data
    const handleSave = (id) => {
        const updatedUsers = users.map((user) => 
            user.id === id
             ? {
                ...user, 
                name: editData.name, 
                email: editData.email, 
                address: { city: editData.city}
            } 
             : user
            
        );

        setUsers(updatedUsers);
        setEditingId(null);
    };

    // Cancel editing
    const handleCancel = () =>{
        setEditingId(null);
    }

    //-----------UI-------------

    if(loading) return <p>Loading...</p>
    if(error) return <p style={{color:"red"}}>Error: {error}</p>

    return (
        <>
            <div>
                <h2>User Management (CRUD)</h2>

                {/* Add New User Form */}

                <div style={{display: "flex"}}>
                    <input 
                        type="text"
                        placeholder="Name"
                        value={newUser.name}
                        onChange={(e) => setNewUser({...newUser, name: e.target.value})}
                        style={{flex: 1}}
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        value={newUser.email}
                        onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                        style={{ flex: 1 }}
                    />

                    <input 
                        type="text" 
                        placeholder="City"
                        value={newUser.city}
                        onChange={(e) => setNewUser({...newUser, city: e.target.value})}
                        style={{flex: 1}}
                    />

                    <button onClick={handleAddUser}>Add User</button>

                </div>
                {/*  ------------------------------------------------------- */}

                
                
                {/*Step 2: Display the users in TABLE */}

                <table>

                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>City</th>
                        </tr>
                    </thead>

                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>

                                {/* Editable fields */}
                                <td> {/*for name */}
                                    {editingId === user.id ? (
                                       <input
                                        value={editData.name}
                                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                                       /> 
                                    ) : (user.name)}
                                </td>

                                <td> {/*for email*/}
                                    {editingId === user.id ? (
                                        <input
                                            value={editData.email}
                                            onChange={(e) => setEditData({...editData, email: e.target.value})}
                                        />
                                    ) : (user.email)}
                                </td>

                                <td> {/*for city*/}
                                    {editingId === user.id ? (
                                        <input
                                            value={editData.city}
                                            onChange={(e) => setEditData({...editData, city: e.target.value})}
                                        />
                                    ) : (user.address.city)}
                                </td>

                                <td> {/* save or cancel */}
                                    {editingId === user.id ? (
                                        <>
                                            <button onClick={() => handleSave(user.id)}>Save</button>
                                            <button onClick={handleCancel}>Cancel</button>
                                        </>
                                    ) : (
                                        <>
                                            <button onClick={() => handleEdit(user)}>Edit</button>
                                            <button onClick={() => handleDelete(user.id)}>Delete</button>
                                        </>
                                    )} 
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FetchUsers;