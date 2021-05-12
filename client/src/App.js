import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Thank from './pages/Thank'

function App() {
  return (
    <Router className='App'>
      <Route exact path='/' component={Home} />
      <Route path='/thank' component={Thank} />
    </Router>
  )
}

export default App
