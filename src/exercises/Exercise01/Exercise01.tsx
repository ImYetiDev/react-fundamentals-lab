import { useState } from 'react'

export default function Exercise1() {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Exercise 1</h1>
            <p>Count: {count}</p>
            <p>Is even: {count % 2 === 0 ? 'Yes' : 'No'}</p>
            <section>
                <button onClick={() => setCount(count + 1)}>Increment</button>
                <button onClick={() => setCount(count - 1)}>Decrement</button>
                <button onClick={() => setCount(0)}>Reset</button>
            </section>

        </>
    )
}