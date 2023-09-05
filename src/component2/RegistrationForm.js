import React, { useEffect, useState } from 'react'

const RegistrationForm = () => {
    const [data,setData]=useState({
        name:'',
        num:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const [name,setName]=useState('');
    const [num,setNumber]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setconfirmPassword]=useState('');
    const [focus,setfocus]=useState(true);
    const [focus2,setfocus2]=useState(true);
    const [focus3,setfocus3]=useState(true);
    const [focus4,setfocus4]=useState(true);
    const [focus5,setfocus5]=useState(true);
const emailcheck='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/';
    
      //Errors
      //const [errors, setErrors] = useState({});

        //A method to handle form inputs
   
const handleChange=()=>{
    
}

    useEffect(()=>{
        console.log(name,num,email,password,confirmPassword,"data inter")
    })
function checkName(name){
    setName(name)
if(name==''){
    alert("name should not be empty")
}

}

function checkName(e){
    if(e=='' || e<3){
        alert("name should be valid")
    }
    
    }
    function checkNumber(e){
        if(e==''){
            alert("mobile number should not be empty")
        }
        
        }
        function checkEmail(e){
            if(e==''){
                alert("email should not be empty")
            }
            if(e!=='/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/'){
                alert("email should be valid")
            }
            
            }
            function checkPassword(e){
                if(e=='' || e<8){
                    alert("password should not be empty or less than 8 digits")
                }
                // if(e<8 || e >15){
                //     alert("password should not be less than 8 or greater than 15")
                // }
                
                }
                function checkConfirmPassword(e){
                    if(password!==confirmPassword){
                        alert("password and confirm password must be same")
                    }
                    
                    }

                    function chechformData(e){
                        if(name!==''&& num !==''&& email!==''&& password!==''&& confirmPassword!==''){
                            console.log("name",name,"Mobile Number",num,"Email",email,"password",password,"Confirm Password",confirmPassword)
                       e.preventDefault();
    
                            alert("data submited successfully.")
    
                            window.location.reload();
                           
                        } else{
                            alert("please fill all the fields")
                        }
                     }


function seterrr(){
    setfocus(false)
    
}


function seterrr2(){
    setfocus2(false)
    
}

function seterrr3(){
    setfocus3(false)
    
}

function seterrr4(){
    setfocus4(false)
    
}

function seterrr5(){
    setfocus5(false)
    
}
  return (
    <div >
        <h3 className='text-center text-primary'>Registration Form</h3>
      <form className='mt-5 bg-warning container '
      
      onSubmit={chechformData}>
          <label className='text-right ml-2'>Name</label><br></br>
          <input type="text" name="name" placeholder='Enter Name'
        //   onChange={(e)=>checkName(e.target.value)}
          value={name}
          onFocus={seterrr}
            onChange={(e)=>setName(e.target.value)}
               // (e)=>setName(e.target.value)}
           // onBlur={(e)=>checkName(e.target.value)}
            
          /><br></br>
          {focus==true||name=='' && <p className='text-danger'>name should not be empty</p>}

          <label className='text-right ml-2' >Mobile Number</label><br></br>
          <input type="number" name="number" placeholder='Enter Number'
         value={num} class="form-control"
          //  onBlur={(e)=>checkNumber(e.target.value)}
        onChange={(e)=>setNumber(e.target.value)}
         onFocus={seterrr2}
          /><br></br>
          {focus2==true||num.length<10 && <p className='text-danger'>number should not be less than 10</p>}

          <label className='text-right ml-2'>Email</label><br></br>
          <input type="email" name="email" placeholder='Enter Email'
         value={email} class="form-control" 
       //  onClick={(e)=>checkEmail(e.target.value)}

          onChange={(e)=>setEmail(e.target.value)}     
          onFocus={seterrr3}     /><br></br>

      {focus3==true||email==''  && <p className='text-danger'>email should be valid</p>}

          <label className='text-right ml-2'>Password</label><br></br>
          <input type="password" name="password" placeholder='Enter Password'
        value={password} class="form-control"
       // onClick={(e)=>checkPassword(e.target.value)}

       onChange={(e)=>setPassword(e.target.value)}   
       onFocus={seterrr4}       /><br></br>

       {focus4==true||password.length<8 && <p className='text-danger'>password should not be less than 8</p>}
          <label className='text-right ml-2'>Confirm Password</label><br></br>
          <input type="password" name="confirmpassword" 
          placeholder='Enter Confirm Password'
          value={confirmPassword}
        onChange={(e)=>setconfirmPassword(e.target.value)} 
        onFocus={seterrr5} class="form-control"
        // onClick={(e)=>checkConfirmPassword(e.target.value)}
         /><br></br>
          {focus5==true||confirmPassword==='' <10 &&<p className='text-danger'>please enter confirm password </p>
          
       }
        {  (name!==''&& num !==''&& email!==''&& password!==''&& confirmPassword!=='')?
 <button type="submit">Submit</button> :
 <button type="submit" disabled>Submit</button>}
      </form>
    </div>
  )
}

export default RegistrationForm
