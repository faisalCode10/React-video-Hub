import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header'
import Home from './Components/Home'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
