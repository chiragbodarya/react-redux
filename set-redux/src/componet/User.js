import React, { useEffect, useState } from 'react'
import "./Index.css"
import { useSelector } from 'react-redux'

const User = () => {
    const [input, setInput] = useState('')

    const userData = useSelector((state) => state.users)

    useEffect(() => {
        console.log("userData", userData)
    }, [])

    return (
        <div className=''>
            {userData?.user?.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default User
