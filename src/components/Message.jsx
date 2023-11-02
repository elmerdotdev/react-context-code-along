import { useContext } from 'react'
import UserContext from '../context/UserContext'

const Message = () => {
  const {message} = useContext(UserContext)

  return (
    <p>{message}</p>
  )
}

export default Message