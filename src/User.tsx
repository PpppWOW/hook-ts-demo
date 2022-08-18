import React, { useState, useEffect } from 'react'

let switchCount: number = 0

const User = () => {
    const [name, setName] = useState<string>('string')
    useEffect(() => {
        switchCount += 1
    }, [name])

    return (
        <div>
            <p>Current Name: { name }</p>
            <p>switchCount: { switchCount }</p>
            <button onClick={() => setName('Jack')}>Jack</button>
            <button onClick={() => setName('Marry')}>Marry</button>
        </div>
    )
}

export default User