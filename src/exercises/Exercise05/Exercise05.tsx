import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
};

export default function Exercise5() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    //pagination states
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            try {
                setLoading(true)
                const response = await fetch("https://jsonplaceholder.typicode.com/users")

                if (!response.ok) {
                    throw new Error('Error obteniendo usuarios')
                }

                const data = await response.json()

                setUsers(data)
            } catch (error: any) {
                setError(error.message)
            }
            finally{
                setLoading(false)
            }
        }

        fetchUsers()

        return () => controller.abort()
    }, [])

    const pageSize = 3;

    let start = (currentPage - 1) * pageSize;
    let end = start + pageSize;
    let paginatedUsers = users.slice(start, end);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    return (
        <main>
            <h1>Exercise 5</h1>
            <ul>
                {paginatedUsers.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
            <div>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage}</span>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={end >= users.length}>
                    Next
                </button>
            </div>
        </main>
    )
}