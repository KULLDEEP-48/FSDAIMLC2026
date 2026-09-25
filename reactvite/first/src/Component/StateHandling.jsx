import React, { useState } from "react";

function StateHandling(){
  const [counter,setCounter]=useState(20);
  const [red,setRed]=useState(0);
  const [Green,setGreen]=useState(0);
  const [blue,setBlue]=useState(255);
  

  function increment(){
    setCounter(counter+10)
  }
  function changeBgColor(){
    setRed(Math.random()*255)
    setGreen(Math.random()*255)
    setBlue(Math.random()*255)
  }
    return( 
        <>
        <div style={{border:'2px solid white',heigth:'200px',width:'500px',backgroundColor:`rgb(${red},${Green},${blue})`}}>
            <h2 style={{color:'grey'}}>CounterApp</h2>
            <h2 style={{color:'pink'}}>Counter={counter}</h2>
            <button onClick={increment} style= {{marginRight:'10px'}}>IncreaseCounter</button>
            <button onClick={()=>setCounter(counter-5)} style={{marginRight:'10px'}}>DecreaseCounter</button>
            <button onClick={changeBgColor}>changeBgColor</button>
        </div>
        </>
    )
}

export default StateHandling