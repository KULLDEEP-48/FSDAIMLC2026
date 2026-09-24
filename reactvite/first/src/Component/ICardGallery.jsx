// import { useState } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import pic from '../images/images.JPG'

import ICard from './ICard'

function ICardGallery() {
  
  const student=[
    {
    roll:'0111',
    name:'kuldeep',
    branch:'CSE-AIML',
    pic:pic
  },
  {
    roll:'0112',
    name:'gaur',
    branch:'CSE-AIML',
    pic:pic
  },
  {
    roll:'0113',
    name:'agarwal',
    branch:'CSE-AIML',
    pic:pic
  },
  {
    roll:'0114',
    name:'vashisht',
    branch:'CSE-AIML',
    pic:pic
  },
  {
    roll:'0115',
    name:'lavii',
    branch:'CSE-AIML'
  }
]
  return (
    <div style={{display:"flex" , flexWrap:"wrap"}}>
    {/* <ICard pic ={pic} roll = "0111" name = "kuldeep" branch ="AIML"></ICard>
    <ICard roll = "0111" name = "kuldeep" branch ="AIML"></ICard>
    <ICard pic ={pic}></ICard>
    <ICard></ICard> */}
  {/* <ICard data={student[3]}></ICard> */}
 { 
 student.map((ele)=>(
    <ICard data={ele}></ICard>
  ))
  }
    </div>
  )
}

export default ICardGallery