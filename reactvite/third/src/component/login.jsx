import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function Login({logdata}) {

        const[email,setEmail]=useState();
        const[password,setPassword]=useState();
    

    function verification(e){
        e.preventDefault();

        if(logdata.email==email){
            alert("Email is verified");
        }
        else{
            alert("Email is not verified");

        }
        console.log(logdata);
    }
  return (
    <div>
        <h2>Login Form</h2>
        <form>
  <div className="form-group">
    <label htmlFor="exampleInputEmail1">Email address</label>
    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Password</label>
    <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)} id="exampleInputPassword1" placeholder="Password"></input>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary" onClick={verification}>Login</button>
</form>

    </div>
  )
}

export default Login