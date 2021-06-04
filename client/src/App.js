import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'

import Home from './pages/Home'

function App() {
  return (
    <Router className='App'>
      <Route exact path='/' component={Home} />
    </Router>
  )
}

export default App
