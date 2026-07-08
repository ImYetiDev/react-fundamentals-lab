import { useState } from 'react'

type Item = {
    id: number,
    text: string,
    completed: boolean
}

export default function Exercise2() {
    const [list, setList] = useState<Item[]>([])
    const [newItemText, setNewItemText] = useState('')

    function addItem(text: string) {
        const newItem: Item = {
            id: Date.now(),
            text,
            completed: false
        };

        setList(prev => [...prev, newItem]);
    }

    function deleteItem(id: number) {
        setList(list.filter(item => item.id !== id));
    }

    function toggleCompleted(id: number) {
        setList(
            list.map(item =>
                item.id === id
                    ? { ...item, completed: !item.completed }
                    : item
            )
        );
    }




    return (
        <main>
            <h1>Exercise 2</h1>

            <section>
                <form action="">
                    <input
                        type="text"
                        placeholder="New item..."
                        value={newItemText}
                        onChange={(e) => setNewItemText(e.target.value)}
                        />
                    <button
                        type="submit"
                        onClick={(e) => {
                            e.preventDefault();
                            if (newItemText.trim() !== '') {
                                addItem(newItemText.trim());
                                setNewItemText('');
                            }
                        }}
                        >Add Item</button>
                </form>
            </section>

            <article>
                <ul>
                    {list.map(
                        item => (
                            <li key={item.id}>
                                <span>{item.text}</span>
                                <span>{item.completed ? ' (Completed)' : '(Not Completed)'}</span>
                                <button onClick={() => toggleCompleted(item.id)}>
                                    {item.completed ? 'Mark Incomplete' : 'Mark Complete'}
                                </button>
                                <button onClick={() => deleteItem(item.id)}>Delete</button>
                            </li>
                        )
                    )}
                </ul>
            </article>
        </main>
    );
}