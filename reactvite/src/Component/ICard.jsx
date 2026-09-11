// import React from 'react'
// import pic from '../images/images.JPG'
function Icard(props) {

  return (
    <div  style={{ border: '10px solid red',height:'480px',width:'250px',margin:'auto' }}>
    <h2 style={{backgroundColor:'aqua',color:'black'}}>ABES Enginnering College</h2>
    {/* <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Name : Kuldeep Singh </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Roll : 2400321530111 </h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Branch : CSE-AIML</h3>
    <h3 style={{ color: 'red',backgroundColor:'aqua' }}>Section : C </h3> */}
    {/* <img src = {props.pic} hieght={200} width={200}></img> */}
    <h3>RollNo:{props.roll}</h3>
    <h3>Name:{props.name}</h3>
    <h3>Branch:{props.branch}</h3>
    <img src={props.pic} height={'200px'} width={'250px'} style={{borderRadius:'50%'}}></img></div>
  
  )
}
export default Icard