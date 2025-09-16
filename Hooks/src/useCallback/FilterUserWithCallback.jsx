// Optimize a list filtering function

import { useCallback, useState, useMemo} from "react"

const FilterUserWithCallback = () => {
    const [search, setSearch] = useState("");

    const users = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];

    // Memoiz the filter function
    const filterUsers = useCallback(
        (list) => list.filter((user)=> 
            user.toLowerCase().includes(search.toLowerCase())),
        [search]
    );

    // Apply the memoized function
    const filteredUsersWithCallback = useMemo(()=>filterUsers(users),[filterUsers, users]);

    return (
        <div>
            <input 
                type="text"
                placeholder="search for user..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            <ul>
                {
                    filteredUsersWithCallback.map((user,i)=> (
                        <li key={i}>{user}</li>
                    ))
                }
            </ul>
        </div>
    );
}


export default FilterUserWithCallback;