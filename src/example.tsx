import React, {useState} from "react";

interface Initial {
    initial: number
}

const Counter: React.FC<Initial> = ({initial= 0}) => {
    const [count, setCount] = useState<number>(initial);
    return (
        <div>
            <p>Count:{count}</p>
            <button onClick={() => setCount(count + 1)}>增加</button>
            <button onClick={() => setCount(count - 1)}>减</button>
        </div>
    )
}

export default Counter
