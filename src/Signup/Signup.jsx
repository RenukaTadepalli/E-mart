import React, { useEffect, useState } from 'react'
import { ImUser } from "react-icons/im";
import { TbBrandSamsungpass } from "react-icons/tb";
import { Link } from 'react-router-dom';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import "./Signup.css"
const Signup = () => {
    const[showPassword,setShowPassword]=useState(false)
useEffect(()=>{
    document.title="signup"
},[])

  return (
    <div>
      <div className='signup-page'>
    <div className="signup-container">
      <h3 className="signup-title">Signup</h3>
      
       <div className="signup-field">
        <h6 className="signup-label">Email</h6>
        <input  className="signup-input" placeholder='Type your email'/> 
      </div>

      <div className="signup-field">
        <h6 className="signup-label">Username</h6>
        <input type='text' className="signup-input" placeholder=' Type your username'/>
      </div>

      <div className="signup-field">
        <h6 className="signup-label">Password</h6>
        <div className='login-field-icon'>
        <input type={showPassword?"text":'password'} className="signup-input" placeholder='  Type your password'/>
                <div className='password-icon'>
                 {showPassword?  <IoEye size={20} onClick={()=>{setShowPassword(false)}}/>:<IoEyeOff size={20} onClick={()=>{setShowPassword(true)}}/> }  </div>
                </div>
      </div>


      <p className="signup-forgot-password">Forgot password?</p>

      <button className="signup-button">Signup</button>

      <Link to="/login" className="signup-signup-link">
        Already have an account? login here
      </Link>
    </div>
    </div>
    </div>
  )
}

export default Signup
