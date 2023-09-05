import React, { useState } from 'react'
import { useReducer } from 'react';
import RegistrationForm from './RegistrationForm';
import FormCheckRegistration from './FormCheckRegistration'


 const initialData={
    name:'',
    number:'',
    email:'',
    paswd:'',
    Cpswd:'',
    
 }



   
 

 function validation(state){
    console.log("aaaaaaa")
   if( state.pswd===state.Cpswd && state.name.length>5 && state.number.length ==10 && state.pswd.length>=6 && state.Cpswd.length>=6){
    state.isError=true
   }
   
 }

function FormValidation() {

    const[state,dispatch]=useReducer(reducer,initialData)
     const [data,setData]=useState([{}])
    const[all,setAll]=useState(true)
const [isError,setIsError]=useState(false)
const [errorIn,setErrorIn]=useState(false)
const [errorIn11,setErrorIn11]=useState(false)
const [errorIn12,setErrorIn12]=useState(false)
const [errorIn3,setErrorIn3]=useState(false)
const [errorIn4,setErrorIn4]=useState(false)
const [cpass,setCPass]=useState("")
const [pass,setPass]=useState("")



function reducer(state,action){
    // console.log("chala re bava")
    console.log(action.name,"action",state,action.value)
 return {...state,[action.name]:action.value}
       }





function handleChange(e){
    if(e.target.name=="name"){
        if(e.target.value.length<4){
            setIsError(true)
       }else{
        setIsError(false)
       }
    }
       if(e.target.name=="number"){
        if(e.target.value.length>10 || e.target.value.length<10){
        setErrorIn(true)
       }else{
        setErrorIn(false)
       }
       }
    if(e.target.name=="email"){
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        if (!emailRegex.test(e.target.value)) {
            
            setErrorIn3(true);
        } else {
            setErrorIn3(false);
        }
    }
       if(e.target.name=="paswd" && e.target.value.length<6){
        
        setErrorIn11(true)
       }else{
        setErrorIn11(false)
        
       }
       console.log("sepass",pass)
       if(e.target.name=="Cpswd" && e.target.value.length<6){
        console.log(e.target.value)
        setErrorIn12(true)
        // setCPass(e.target.value)
       
       }else{
        setErrorIn12(false)
       
       }
       if(e.target.name=="paswd")
       {
        if(e.target.name=="paswd"){
            setPass(e.target.value)
        }
        
       }
       if(e.target.name=="Cpswd"){
        if(e.target.value==pass){
            setErrorIn4(false)
            console.log("readyy to upload")
        }
        
       else{
        setErrorIn4(true)
       }
       }
    console.log("eeee",e.target.value)
const action={
    name:e.target.name,
    value:e.target.value
}

   console.log(action.value,"cpass")
 
//   if(){
//     console.log("passssssword match")
//     setErrorIn4(false)
//     setAll(false)
//   }else{
//     setErrorIn4(true)
//     setAll(true)
//   }
   
dispatch(action)
}
console.log(state,'state')
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
// function handleBlur(){
//     console.log("state",state)


//     if(state.name.length<5){
//         setErrorIn(true)
//     }else{
//         setErrorIn(false)
//     }

//     if(state.number.length<10 || state.number.length>10 ){
//         setErrorIn11(true)
//     }else{
//         setErrorIn11(false)
//     }

//     if (!emailRegex.test(state.email)) {
        
//                setErrorIn3(true);
//             } else {
//                  setErrorIn3(false);
//            }

//            if(state.paswd.length<6 || state.paswd.length>6){
//             setErrorIn12(true)
//            }else{
//             setErrorIn12(false)
//            }

//            if(state.Cpswd.length<6 || state.Cpswd.length>6){
//             setErrorIn4(true)
//            }else{
//             setErrorIn4(false)
//            }
//            if(state.Cpswd !==state.paswd){
//             setCPass(true)
//            }else{
//             setCPass(false)
//            }
// }


 function handleSubmit(e){
    e.preventDefault();
    setData([{...state}])
    console.log("ready to go")
 }
console.log(data,"data")
  return (
   <div className='bg-secondary'>
    <RegistrationForm/>
    {/* <FormCheckREgistration/> */}
   <div className='container mt-5 '>
    <h1 className='bg-success text-center text-info p-5'>FORM VALIDATION </h1>
   </div>
   <form className='container  w-500 '>

    <div class="form-group ">
      <label htmlFor='name' style={{fontSize:'40px'}}>Name </label>
        <input  class="form-control  " id='name' type="text" name="name"  placeholder="Enter name"  
        onChange={handleChange} /> 
        <p>
            {isError?<span style={{color:'red'}}>"enter valid input"</span>:""}
        </p>
    </div>

    <div class="form-group">
      <label htmlFor="number" style={{fontSize:'40px'}}>Number </label>
        <input  class="form-control" id='number' type="text" name="number" placeholder="Enter number"  onChange={handleChange}/>
        <p>
            {errorIn?<span style={{color:'red'}}>"enter valid input"</span>:""}
        </p> 
    </div>

    
    <div class="form-group">
      <label htmlFor="email" style={{fontSize:'40px'}}>Email:</label>
      <input type="email" class="form-control" id="email" placeholder="Enter email" name="email"  onChange={handleChange}/>
      <p>
      { errorIn3?<span className='text-danger' style={{fontSize:"20px"}}>"enter valid email"</span>:""}</p>
      </div>


    <div class="form-group">
      <label htmlFor="pwd" style={{fontSize:'40px'}}>Password:</label>
      <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="paswd"  
       onChange={handleChange}/>
      <p>
            {errorIn11?<span style={{color:'red'}}>"Password must contain 6 letters"</span>:""}
        </p>
    </div>


    <div class="form-group">
      <label htmlFor="Cpwd" style={{fontSize:'40px'}}> Confirm Password:</label>
      <input type="password" class="form-control" id="Cpwd" placeholder="Enter Confirm password" name="Cpswd" onChange={handleChange}/>
      <p>
            {errorIn12?<span style={{color:'red'}}>"Password must contain 6 letters</span>:""} -
            {errorIn4?<span style={{color:'red'}}>Password Not matched"</span>:""}
        </p>
    </div>

    {/* {all  ?  */}
     {/* <button type="submit" className="btn btn-danger" style={{fontSize:'40px'}} onClick={handleSubmit} disabled>Submit</button>  */}
     {/* : */}
    <button type="submit" className="btn btn-primary" style={{fontSize:'40px'}} onClick={handleSubmit}>Submit</button> 
    {/* } */}
    
  </form>
   </div>
  )
}

export default FormValidation