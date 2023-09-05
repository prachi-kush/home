import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import  {Form,Button,Col}  from 'react-bootstrap';
import axios from 'axios';

function FormCheckRegistration() {
    const[usersdata,setUsersData]=useState([])
    const [data,setData]=useState({});
     const [password,setPass]=useState('')
     const navigate=useNavigate();
    // const [errorIn1,setErrorIn1]=useState(false)
    // const [errorIn2,setErrorIn2]=useState(false)
    // const [errorIn3,setErrorIn3]=useState(false)
    // const [errorIn4,setErrorIn4]=useState(false)
    const [valid,setValid]=useState(false)
    const [err,setErr]=useState({})
    const [localData,setLocalData]=useState({})
console.log(data,typeof(data))
useEffect(()=>{
    // var x = JSON.parse(localStorage.getItem('data'));
    // console.log("x is ",x)
    // setLocalData(x);
    
},[data])
   console.log(localData,"localdata")
    const handleChange=(e)=>{
        const name = e.target.name;
        const value = e.target.value;
       if(e.target.name=='username')
       {
            if(e.target.value.length<4){
               // setErrorIn1(true)
        setErr(values => ({...values, [name]: true}))

            }else{
                setErr(values => ({...values, [name]: false}))

                //setErrorIn1(false)
            }
        }
        if(e.target.name=='useremail')
        {
            const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
            if (!emailRegex.test(e.target.value)){
       //setErrorIn2(true)
                setErr(values => ({...values, [name]: true}))
            }
        
            else{
                setErr(values => ({...values, [name]: false}))
                //setErrorIn2(false)
            }
        }
        if(e.target.name=='userpass')
        {
            setPass(e.target.value)
            if(e.target.value.length<6 || e.target.value.length>15){
                //setErrorIn3(true)
                setErr(values => ({...values, [name]: true}))
            }else{
                setErr(values => ({...values, [name]: false}))
                //setErrorIn3(false)
            }
        }
        if(e.target.name=='userconfirm')
        {
            if(e.target.value!= data.userpass ){
               // setErrorIn4(true)
               setErr(values => ({...values, [name]: true}))
            }else{
           //setErrorIn4(false)
           setErr(values => ({...values, [name]: false}))
            }
        }
       setData(values => ({...values, [name]: value}))
        console.log(data)
    }
    
    const handleReset=()=>{
        setData({
            username:'',
            useremail:'',
            userpass:'',
            userconfirm:''
        })
    }

    const checkInput=(e)=>{
        e.preventDefault()
        console.log("checkinput called")
        console.log(data.useremail,"useremail")
        // if(data.useremail===localData.useremail && data.useremail!=undefined){
        //     alert("user is already registered!!!!")
        // }else{
           if(Object.keys(data).length===0){
            setValid(true)
            e.preventDefault()
            alert("Please Enter Valid Inputs")
        }else{
            e.preventDefault()
            setUsersData([ {...data}])
            // let users=[];
            // users.push(data)
            console.log(usersdata,"usersdata")
            localStorage.setItem("data", JSON.stringify(usersdata))

            let x=localStorage.getItem('data')
            // localStorage.setItem('data', JSON.stringify(usersdata));
            alert("Data Submitted Successfully")
            //  window.location.reload('')
             navigate('/homec2')
            
            }
//}
    }
    const  setUserData=async(e)=>{
       const res=await axios.post('http://localhost:3001/users',data)
       console.log(res.data,"response")
    }


  
  return (
    <>
    <div>
        <h1 className='text-center m-5 bg-secondary w-500'>Registration Form</h1>
    </div>
    <div id='maindiv' style={{
    display: 'block',
    width: 'fit-content',
    padding: '60px',
    border: '1px solid black',
    height: 'fit-content',
    margin:'auto'
  }}>
    <Form onSubmit={checkInput}>
        <Form.Group className='mb-3'>
        <Form.Label>
            Name:
            </Form.Label>
            <Form.Control 
            type="text" 
            name='username'
            value={data.username} 
            onChange={handleChange} 
            placeholder='Enter name'
            style={{width:'400px'}}
            />
        </Form.Group >
        {err.username==true && <p className='text-danger'>Please Enter Valid Name</p>}
        <Form.Group className='mb-3'>
        <Form.Label>
            Email:
            </Form.Label>
            <Form.Control 
            type='email'
            name='useremail'
            value={data.useremail} 
            onChange={handleChange} 
            placeholder='Enter email'
            style={{width:'400px'}}
            />
        </Form.Group>
        {err.useremail==true && <p className='text-danger'>Please Enter Valid Email</p>}
        <Form.Group className='mb-3'>
        <Form.Label>
            Password:
            </Form.Label>
            <Form.Control 
            type="password" 
            name='userpass'
            value={data.userpass} 
            onChange={handleChange} 
            placeholder='Enter password'
            style={{width:'400px'}}
            />
        </Form.Group>
        {err.userpass==true && <p className='text-danger'>Password length should be more than 6 and less than 15</p>}
        <Form.Group className='mb-3'>
        <Form.Label >
            Confirm Password:
            </Form.Label>
            <Form.Control 
            type="password" 
            name='userconfirm'
            value={data.userconfirm} 
            onChange={handleChange} 
            placeholder='Confirm password'
            style={{width:'400px'}}
            />
        </Form.Group>
        {err.userconfirm==true && <p className='text-danger'>Confirm Password must be same as given password</p>}

        <Col >
        <Button className='m-3' type='submit'>Submit</Button>
        
        <Button  type='reset' className=' m-3 btn btn-danger' onClick={handleReset}>Reset</Button>
        </Col>
    </Form>
    </div>
    </>
  )
}

export default FormCheckRegistration;