import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
};

export default function Exercise5() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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


    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    return (
        <main>
            <h1>Exercise 5</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </main>
    )
}