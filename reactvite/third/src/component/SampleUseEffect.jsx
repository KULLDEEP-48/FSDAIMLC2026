import React , {useEffect,useState} from 'react'
export default function SampleUseEffect(){
    
    const[counter,setcounter]=useState(0)
    useEffect(()=>{
        console.log("Counter=" + counter)
    })

    function setcount(){
        setcounter(counter+5);
    }
    return(
        <div>
            <h2 style={{color:'pink'}}>SampleUseEffect</h2>
            <h2>countervalue={counter}</h2>
            <button onClick={setcount}>Increase</button>
            </div>
    )
}