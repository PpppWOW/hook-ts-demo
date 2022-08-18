import React, { useState, useEffect, useRef } from 'react'

const Counter = () => {
    const [count, setCount] = useState<number>(0)
    const constRef = useRef<number>(count)

    useEffect(() => {
        constRef.current = count
    })

    const handleCount = () => {
        setTimeout(() => {
            alert('current count: ' + constRef.current)
        }, 3000);
    }

    return (
        <div>
            <p>current count: { count }</p>
            <button onClick={() => setCount(count + 1)}>加</button>
            <button onClick={() => handleCount()}>弹框显示</button>
        </div>
    )
}

export default Counter
