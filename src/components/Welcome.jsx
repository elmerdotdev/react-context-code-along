import { useContext } from "react"
import UserContext from "../context/UserContext"

import Message from "./Message"

const Welcome = () => {
  const {user} = useContext(UserContext)

  return (
    <>
      <h1>Welcome {user.fullname} {user.email}!</h1>
      <Message />
    </>
  )
}

export default Welcome