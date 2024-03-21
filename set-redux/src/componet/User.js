import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const userData = useSelector((state) => state.users)

    useEffect(() => {
        console.log("userData", userData)
    }, [])

    return (
        <div>
            {userData?.user?.map((item, index) => (
                <div key={index}>{item.name}</div>
            ))}
        </div>
    )
}

export default User
