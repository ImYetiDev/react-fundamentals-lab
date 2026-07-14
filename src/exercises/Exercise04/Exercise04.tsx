import { useState, useEffect } from "react";

type User = {
    id: number;
    name: string;
};

export default function Exercise4() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const controller = new AbortController();

        const fetchUsers = async () => {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/users",
                    {
                        signal: controller.signal,
                    }
                );

                if (!response.ok) {
                    throw new Error("Error al obtener los usuarios");
                }

                const data = await response.json();

                setUsers(data);
            } catch (err: any) {
                // Ignorar el error si la petición fue cancelada
                if (err.name !== "AbortError") {
                    setError(err.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();

        return () => controller.abort();
    }, []);

    if (loading) return <p>Cargando...</p>;
    if (error) return <p>{error}</p>;
    return (
        <main>
            <h1>Exercise 4</h1>

            <ul>
                {users.map(user => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </main>
    );
}