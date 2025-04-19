import React from 'react'
import Nav from './section/Nav'
import Home from './section/Home'
import Footer from './section/Footer'
import Video from './section/component/video'
import { BrowserRouter as Router, Routes, Route , NavLink} from 'react-router-dom'
function App() {
  return (
    <div className=' bg-primary pt-[80px]'>

      <Nav />
      
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/video" element={<Video />} />
          </Routes>

      <Footer />

    </div>
  )
}

export default App
