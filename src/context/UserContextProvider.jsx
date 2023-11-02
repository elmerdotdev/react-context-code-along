import { useState } from 'react'
import UserContext from './UserContext'

const UserContextProvider = ({children}) => {
  const [user, setUser] = useState({ fullname: 'John', email: 'john@email.com' })
  const [message, setMessage] = useState('')

  return (
    <UserContext.Provider value={{user, setUser, message, setMessage}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContextProvider