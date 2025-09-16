
// Optimize list filtering with useMemo

 /**
   * useMemo:
   * - Filters the users only when `search` or `users` changes.
   * - Without useMemo, filtering would run on every render.
   * - This is important if the user list is huge (performance optimization).
   */

import { useState, useMemo } from "react"

const FilterUser = () => {
    const [search, setSearch] = useState("");

    const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]; // static user list

    const filteredUsers = useMemo(() => {
        console.log("Filtering...");
        return users.filter((user) => user.toLowerCase().includes(search.toLowerCase()));

    }, [search,users]);

    return (
        <div>
            <input 
                type="text"
                placeholder="Search user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
             />

             <ul>
                {filteredUsers.map((user,i)=> (
                    <li key={i}>{user}</li>
                ))}
             </ul>

        </div>
    );


}


export default FilterUser;