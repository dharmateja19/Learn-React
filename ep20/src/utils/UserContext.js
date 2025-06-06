import { createContext } from 'react'

const UserContext = createContext({
    name : "Dharma",
    email : "dharma@123.com"
})

export default UserContext;