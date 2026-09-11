// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import pic from '../images/images.JPG'
// import '../App.css'
import ICard from './ICard'

function ICardGallery() {
  
  return (
    <div>
    <ICard pic ={pic} roll = "0111" name = "kuldeep" branch ="AIML"></ICard>
    <ICard roll = "0111" name = "kuldeep" branch ="AIML"></ICard>

    </div>
  )
}

export default ICardGallery