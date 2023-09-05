import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Homec2 = () => {
    const [data,setData]=useState({})
    const navigate=useNavigate();
    useEffect(()=>{
        setData( JSON.parse(localStorage.getItem('data')));
        console.log("x is ",data.useremail)
    },[1])
    const updateData=()=>{
        navigate('/update')
    }
  return (
    <div>
      <h1 className='text-center'>Home page</h1>
      <div>
        <div className='bg-primary text-center justify-content-center self-align-center m-5' style={{width:'400px'}}>
            <h6>User Name : {data.username}</h6>
            <h6>User Email : {data.useremail}</h6>
            <h5>user Registered Successfully!!</h5>
            <div className='d-flex flex-row justify-content-between m-3'>
            <button>Add</button>
            <button onClick={updateData}>Update</button>
            <button>Remove</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Homec2
