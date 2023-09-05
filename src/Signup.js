import React from 'react'

function Signup() {
  return (
    <div>
      <h1>Signup Here</h1>
      <form>
        <div className='input-block'>
            <label htmlFor='name' className='input-label'>Name </label>
            <input type="name" autoComplete='off' name="name" id="name" placeholder='Name'/>
        </div>
        <div className='input-block'>
            <label htmlFor='email' className='input-label'>Email </label>
            <input type="email" autoComplete='off' name="email" id="email" placeholder='Email'/>
        </div>
        <div className='input-block'>
            <label htmlFor='password' className='input-label'>Password </label>
            <input type="password" autoComplete='off' name="password" id="password" placeholder='Password'/>
        </div>
        <div className='input-block'>
            <label htmlFor='confirmpassword' className='input-label'>Confirm password </label><br></br>
            <input type="name" autoComplete='off' name="confirmpassword" id="confirmpassword" placeholder='confirmpassword'/>
        </div>
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Signup
