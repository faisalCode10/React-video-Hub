import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route />
        </Routes>
      </Router>
    </div>
  )
}

export default App
