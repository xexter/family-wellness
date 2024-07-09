import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './MyComponents/header.jsx'
import Body from './MyComponents/body.jsx'
import Footer from './MyComponents/footer.jsx'

function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  )
}

export default App
