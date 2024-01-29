import { useState } from 'react'

export function Counter () {
    let [counter, setCounter] = useState(0);

    return (
        <div className="text-xl">
            <button onClick={() => setCounter(counter = counter + 1)} className="bg-green-500 w-10 font-extrabold p-2 mx-2 rounded-3xl">+</button>
            <span>{counter}</span>
            <button onClick={() => setCounter(counter = counter - 1)} className="bg-red-500 w-10 font-extrabold p-2 mx-2 rounded-3xl">-</button>
        </div>
    )
}

export default Counter