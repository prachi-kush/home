import React from 'react'
import { Link } from 'react-router-dom';
import card from 'react-bootstrap';

export default function Contact() {
  return (
    <div className='bg-dark'>
<h1>Contact Us</h1>
<div className="container" >
<form style={{height:'200',width:'700'}}>
  <div className="form-group" >
    <label for="email">Your Name:</label>
    <input type="email" className="form-control" placeholder="Enter email" id="email"/>
  </div>
  <div className="form-group">
    <label for="pwd">Contact Number:</label>
    <input type="text" className="form-control" placeholder="Enter Contact no." id="no"/>
  </div>

  <div className='mt-5'>

        <label style={{color:'white'}}>Your Suggestion: </label>

        <input type="textarea" 
        style={{height:'500px',width:'700px'}}
aria-multiline='true'
          name="textValue"
    />

      </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form> 
</div>
    </div>
  )
}
