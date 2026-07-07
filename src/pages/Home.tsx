import './Home.css'

export function Cards(label: string) {
    return (
        <article>
            <p>{label}</p>
        </article>
    )
}

export default function Home() {
    return (
        <main>
            <header>
                <h1>React Fundamentals Lab</h1>
                <h2>A collection of progressively challenging React exercises
                    focused on modern React development and interview preparation.</h2>
            </header>

            <section>
                {Cards("30 exercises available")}
                {Cards("React 19")}
                {Cards("TypeScript")}
                {Cards("Vite")}
            </section>

            <section>
                <p>Topics</p>
                {Cards("React Basics")}
                {Cards("React Hooks")}
                {Cards("State Management")}
                {Cards("Performance")}
                {Cards("Async React")}
                {Cards("Performance")}
                {Cards("Interview Challenges")}
            </section>

            <ul>
                <li>Exercise 1</li>
                <li>Exercise 2</li>
                <li>Exercise 3</li>
            </ul>
        </main>
    );
}