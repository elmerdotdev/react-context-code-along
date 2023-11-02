import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [formFullname, setFormFullname] = useState('')
  const [formEmail, setFormEmail] = useState('')
  const [formMessage, setFormMessage] = useState('')

  const {setUser, setMessage} = useContext(UserContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    setUser({
      fullname: formFullname,
      email: formEmail
    })
    setMessage(formMessage)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
        <Form.Label>Full name</Form.Label>
        <Form.Control type="text" placeholder="John Smith" value={formFullname} onChange={(event) => setFormFullname(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="name@example.com" value={formEmail} onChange={(event) => setFormEmail(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} value={formMessage} onChange={(event) => setFormMessage(event.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Button type="submit">Log in</Button>
      </Form.Group>
    </Form>
  )
}

export default Login