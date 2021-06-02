import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home'

function App() {
  return (
    <Router style={{ backgroundImage: 'url(/bground.jpg)' }} className='App'>
      <Container>
        <Route exact path='/' component={Home} />
      </Container>
    </Router>
  )
}

export default App
