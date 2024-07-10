import { useState } from 'react'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import data from './assets/data'
import './App.css'

function App() {
  const places = data.map(x => <MainContent key={x.id} {...x} />)

  return (
    <>
      <Navbar />
      {places}
    </>
  )
}

export default App
