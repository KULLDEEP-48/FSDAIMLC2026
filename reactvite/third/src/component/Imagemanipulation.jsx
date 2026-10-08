import React, {useState} from 'react'
import pic from '../image/jett.webp'
function Imagemanipulation(){

    const[picheight,setpicheight]=useState(200);
    const[picwidth,setpicwidth]=useState(200);
    const[picangle,setpicAngle] = useState(0);
    const[divmargin,setdivmargin] = useState(0);
    // const[picangle,setpicAngle] = useState(0);

    function setheight(){
        setpicheight(picheight+10);
    }
    function setwidth(){
        setpicwidth(picheight+10);
    }
    function setangle(){
        setpicAngle(picangle+90);
    }
    function setmarginleft(){
        setdivmargin(divmargin+30);
    }
    function setmarginright(){
        setdivmargin(divmargin-30);
    }
    
    return(
        <div>
                <h2 style={{ color:'red' , backgroundColor:'green'}}>Imagemanipulation</h2>

                <div style={{border:'2px solid black' , height:'400px' , width:'400px' , marginLeft:`${divmargin}px`,marginRight:`${divmargin}px`}}>
                <img src = {pic} height={picheight} width={picwidth} style={{transform:`rotate(${picangle}deg)` , marginTop:'100px'}}></img>
                </div>

                <div>
                    <button onClick={setheight} style={{marginRight:'30px'}}>enhanceheight</button>
                    <button onClick={setwidth} style={{marginRight:'30px'}}>enhancewidth</button>
                    <button onClick={setangle} style={{marginRight:'30px'}}>rotateImage</button>
                    <button onClick={setmarginleft} style={{marginRight:'30px'}}>addmarginleft</button>
                    <button onClick={setmarginright}>addmarginright</button>
                </div>

            </div>
    )
}

export default Imagemanipulation