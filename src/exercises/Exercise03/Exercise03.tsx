import { useState } from "react"

type User = {
    id: number,
    name: string,
}

const mockUsers: User[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' },
]

export default function Exercise3() {
    const [search, setSearch] = useState('')
    const users = mockUsers;

    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()))

    return (
        <main>
            <h1>Exercise 3</h1>
            <section>
                <input
                    type="text"
                    placeholder="Search users..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                {filteredUsers.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    filteredUsers.map(user => (
                        <div key={user.id}>
                            <span>{user.name}</span>
                        </div>
                    ))
                )}
                <span>{filteredUsers.length} users found.</span>
            </section>
        </main>
    )
}