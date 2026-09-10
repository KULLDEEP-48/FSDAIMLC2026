import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Icard from './component/ICard'

function App() {
  
  return (
    <div style={{ border: '7px solid white',height:'450px'}}>
    <Icard></Icard>
    </div>
  )
}

export default App