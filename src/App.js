import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Upload from './Components/Upload'
import Videos from './Components/Videos'
const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/videos' element={<Videos />}/>
          <Route path='/Upload' element={<Upload />}/>
        </Routes>
      </Router>
        <Footer />
    </div>
  )
}

export default App
      