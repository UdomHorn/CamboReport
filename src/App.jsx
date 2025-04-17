import React from 'react'
import Nav from './section/nav'
import Home from './section/Home'
import Footer from './section/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div className='bg-primary mt-[80px]'>

      <section><Nav/></section>
      <section><Home/></section>
      <section><Footer/></section>

    </div>
  )
}

export default App
