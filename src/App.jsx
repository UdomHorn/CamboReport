import React from 'react'
import Nav from './section/Nav'
import Home from './section/Home'
import Footer from './section/Footer'
// import Video from './section/component/video'
import { Video, Tablet, Knowledge, Movie, Science, Software, Telephone, Vehicle, Electronic } from './section/component/index'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className=' bg-primary mt-[80px]'>

      <Nav />

      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Video />} />
        <Route path="/tablets" element={<Tablet />} />
        <Route path="/movies" element={<Movie />} />
        <Route path="/telephones" element={<Telephone />} />
        <Route path="/general" element={<Knowledge />} />
        <Route path="/vehicles" element={<Vehicle />} />
        <Route path="/sciences" element={<Science />} />
        <Route path="/softwaregames" element={<Software />} />
        <Route path="/electronic" element={<Electronic />} />
      </Routes>

      <Footer />

    </div>
  )
}

export default App
