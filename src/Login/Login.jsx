import React, { useEffect, useState } from 'react'
import { ImUser } from "react-icons/im";
import { TbBrandSamsungpass } from "react-icons/tb";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { Link } from 'react-router-dom';
import './Login.css'; // Optional: link a CSS file if you're styling separately

const Login = () => {
    const[showPassword,setShowPassword]=useState(false);
    useEffect(()=>{
document.title="login"
    },[])
  return (
    <div className='login-page'>
    <div className="login-container">
      <h3 className="login-title">Login</h3>

      <div className="login-field">
        <h6 className="login-label">Username</h6>
        <input className="login-input" placeholder=' Type your username'/>
      </div>

      <div className="login-field">
        <h6 className="login-label">Password</h6>
        <div className='login-field-icon'>
        <input type={showPassword?'text':"password"} className="login-input" placeholder='Type your password'/>
        <div className='password-icon'>
         {showPassword?  <IoEye size={20} onClick={()=>{setShowPassword(false)}}/>:<IoEyeOff size={20} onClick={()=>{setShowPassword(true)}}/> }  </div>
        </div>
      </div>

      <p className="login-forgot-password">Forgot password?</p>

      <button className="login-button">Login</button>

      <Link to="/signup" className="login-signup-link">
        Don't have an account? Sign up
      </Link>
    </div>
    </div>
  )
}

export default Login
