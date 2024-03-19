import React, { useState } from 'react'
import "./Index.css"

const Index = () => {
    const [input, setInput] = useState('')

    const addTodo = () => {
        
    }
    return (
        <div className='input'>
            <input type="text" value={input} onChange={e => setInput()} />
            <button onClick={addTodo}>ADD</button>
        </div>
    )
}

export default Index
