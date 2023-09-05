import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
export default function Login() {
  const [user,setUser]=useState([{
  }]);

  useEffect(()=>{
    axios.get('http://localhost:4000/posts').then(res=>
    console.log(res.data))
},[])
function HandleChange(e){
e.preventDefault();
axios.post('http://localhost:4000/posts',user)
}



  return (
    <div   >
      <h1>Login Page</h1>
      <div className="container mt-5" style={{width:'500px',backgroundColor:'GrayText'}}>
  
  <form onSubmit={HandleChange} className="was-validated">
    <div className="form-group">
      <label htmlFor="uname">Username:</label>
      <input type="text" className="form-control" id="uname" placeholder="Enter username" name="uname" required style={{width:'400px',}}/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group">
      <label htmlFor="pwd">Password:</label>
      <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" required style={{width:'400px',}}/>
      <div className="valid-feedback">Valid.</div>
      <div className="invalid-feedback">Please fill out this field.</div>
    </div>
    <div className="form-group form-check">
      <label className="form-check-label">
        <input className="form-check-input" type="checkbox" name="remember" required /> I agree.
        <div className="valid-feedback">Valid.</div>
        <div className="invalid-feedback">Check this checkbox to continue.</div>
      </label>
    </div>
    <a><button type="submit" className="btn btn-primary">Submit</button>
    </a></form>
</div>
      <Link to="/Contact">Contact us</Link>
    </div>
  )
}
