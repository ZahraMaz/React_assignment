import React from 'react';
import { useState } from 'react'
import './Signup.css'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import { firebase_signup } from '../module/firebase';
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'


function Signup(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [name,setName]=useState('')
    const [birthdate,setBirthdate]=useState('')
    const history=useHistory();

    const emailChange=(e)=>{setEmail(e.target.value)}
    const passwordChange=(e)=>{setPassword(e.target.value)}
    const nameChange=(e)=>{setName(e.target.value)}
    const birthdateChange=(e)=>{setBirthdate(e.target.value)}

    const handleEmailChange = (newEmail) => {
      setEmail(newEmail);
    };
  
    const handlePasswordChange = (newPassword) => {
      setPassword(newPassword);
    };
  
    
    const createUser=(e)=>{
      e.preventDefault()
      firebase_signup(email, password, name, birthdate)
      history.push('/')
    }

    return(
        <div id="form-container"  className='container'>
        <div id="form-header-container">
          <h1 id="form-header">Sign Up</h1>
        </div>
        <form id="Login-form">
          <div className="input-field">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" required  onChange={nameChange}/><br />
          </div>
          <div className="input-field">
            <label htmlFor="birthdate">Date of Birth:</label>
            <input type="date" id="birthdate" required onChange={birthdateChange}/><br />
          </div>
          <EmailInput onEmailChange={handleEmailChange}/>
          <PasswordInput onPasswordChange={handlePasswordChange}/> 
          <div id="button_container">
            <button type="submit" id="signupbtn" onClick={createUser}>Sign up</button>
          </div>
          <div className="text-login">
            <p>
              Already a member?<Link to="./Login"><span>Sign In</span></Link>
            </p>
          </div>
        </form>
      </div> 
    )
}
export default Signup;