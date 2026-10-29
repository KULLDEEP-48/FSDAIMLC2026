import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function registration({regData}) {

    const[name,setName]=useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

    function captureData(e){
        e.preventDefault();
        alert(name+email+password);
        const data={name,email,password};
        regData(data);
        console.log(data);
    }

    return (
        <div>
            <h2>Registration Form</h2>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Name</label>
                    <input type="text" onChange={(e)=>setName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter name"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={captureData}>Register</button>
            </form>

        </div>
    )
}

export default registration