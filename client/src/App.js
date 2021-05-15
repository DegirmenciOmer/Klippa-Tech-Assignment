import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home'
import Thank from './pages/Thank'
import MenuBar from './components/MenuBar'

function App() {
  return (
    <Router className='App'>
      <Container>
        <MenuBar />
        <Route exact path='/' component={Home} />
        <Route path='/thank' component={Thank} />
      </Container>
    </Router>
  )
}

export default App
