import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Welcome from './components/Welcome'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

const App = () => {
  return (
    <UserContextProvider>
      <Container>
        <Row>
          <Col>
            <Welcome />
          </Col>
        </Row>
        <Row>
          <Col>
            <Login />
          </Col>
        </Row>
      </Container>
    </UserContextProvider>
  )
}

export default App