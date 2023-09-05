import React, { useState } from 'react'
import { useForm } from "react-hook-form";

import { useNavigate,Link } from 'react-router-dom';
export default function Loginfood() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [user, setUser] = useState({});
// const [error1,setError1]=useState(false)


  function myChange1(e) {
    console.log(e.target.value)

    setUser({ ...user, [e.target.name]: e.target.value })
    
  }



  function myChange2(e) {
    console.log(e.target.value)

    setUser({ ...user.Lastname, [e.target.name]: e.target.value })
    
  }



  function myChange3(e) {
    console.log(e.target.value)

    setUser({ ...user.email, [e.target.name]: e.target.value })
    
  }




  function myChange4(e) {
    console.log(e.target.value)

    setUser({ ...user.number, [e.target.name]: e.target.value })
   
  }

  function myChange5(e) {
    console.log(e.target.value)

    setUser({ ...user.password, [e.target.name]: e.target.value })
    
  }



  const onSubmit = (data, e) => {
    console.log("data", data);
   const find= axios.post('http://localhost:3001/Food',data).then(()=>{
      console.log("ready")
      axios.put(`http://localhost:3001/loginStatus`, {islogin:true,login:data.password,loginEmail:data.email})
      alert('login success')
      navigate('/')
      // window.location.assign('/')
    })
    console.log("error hai",find)
    
  }


  return (

    <>
   
    <section>
      <article  style={{margin:'150px',height:'550px'}}>
    <div className='container bg-light ' style={{margin:'5%',marginLeft:'400px',width:'500px',}}>
      <h2 className='text-center bg-secondary'>SIGN_IN_PAGE</h2>

      <form onSubmit={handleSubmit(onSubmit)} style={{ height: '500px', boxShadow: '5px 0 30px rgba(1,41,112,0.08)', padding: '10px' }}>


        <div className="form-group">
          <label htmlFor="FirstName">FirstName:</label>
          <input type="text" className="form-control" id="FirstName" name="FirstName" value={user.FirstName} onChange={myChange1} {...register("FirstName", { required: true, maxLength: 10 })} placeholder="Enter FirstName" />
          {errors.FirstName && <p className='text-danger'>Enter valid Input !</p>}
        </div>

        <div className="form-group">
          <label htmlFor="Lastname">LastName:</label>
          <input type="text" className="form-control" id="Lastname" name="Lastname" value={user.Lastname} onChange={myChange2}{...register("Lastname", { required: true, maxLength: 10 })} placeholder="Enter email" />
          {errors.
            Lastname && <p className='text-danger'>Enter valid Input !</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" className="form-control" id="email" name="email" value={user.email} onChange={myChange3}{...register("email", {
            required: true,
            pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          })} placeholder="Enter email" />
          {errors.
            email && <p className='text-danger'>Enter valid Input !</p>}

        </div>


        <div className="form-group">
          <label htmlFor="number">Number:</label>
          <input type="number" className="form-control" id="number" name="number" onChange={myChange4} value={user.number}{...register("number", { required: true, minLength: 10, maxLength: 10 })} placeholder="Enter number" />
          {errors.
            number && <p className='text-danger'>Enter valid Input !</p>}
        </div>


        <div className="form-group">
      <label htmlFor="password">Password:</label>
      <input type="password" className="form-control" id="password"  onChange={myChange5} {...register("password")} placeholder="Enter password" name="password"/>
        {errors.
      password && <p className='text-danger'>Enter valid Input !</p>} </div> 


        <div className="form-group form-check">
          <label className="form-check-label">
            <input className="form-check-input" type="checkbox" name="remember" /> Remember me
          </label>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>

      </form>

    </div>

    <div>
        <h5 style={{marginLeft:'450px'}}>Continue with sign up......................<a type='button' className='btn btn-primary' href='/login'>SIGN_UP</a></h5>
      </div>
    </article>
    </section>
   
    </>
  )
}