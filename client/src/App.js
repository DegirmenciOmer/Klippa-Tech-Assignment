import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home'
import Success from './pages/Success'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <Router style={{ backgroundImage: 'url(/bground.jpg)' }} className='App'>
      <Container>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route path='/success' component={Success} />
      </Container>
    </Router>
  )
}

export default App
