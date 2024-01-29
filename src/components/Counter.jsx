import { useState } from 'react'

export function Counter () {
    const [counter, setCounter] = useState(0);

    return (
        <div className="text-xl">
            <button onClick={() => setCounter(counter = counter + 1)} className="bg-green-300 w-10 py-1 rounded-3xl">+</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter = counter - 1)} className="bg-red-300 w-10 py-1 rounded-3xl">-</button>
        </div>
    )
}