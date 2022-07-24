import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import './App.css'

function App() {
  return (
    <Router basename={'/react-portfolio'}>
      <div className="App">
        <Layout />
      </div>
    </Router>
  )
}

export default App
