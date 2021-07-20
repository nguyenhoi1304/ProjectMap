import React from 'react'
import '../styles/App.css'
import Home from './home'
import About from './about'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Layout from './layout'

function App() {
    return (
      <Router>
     
            <Layout/>
            <Route exact path="/" component={Home}/>
            <Route path='/about'  component={Home}/>
 
      </Router>
    )
  }

export default App;