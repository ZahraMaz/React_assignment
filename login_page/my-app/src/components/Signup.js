import React from 'react';
import { useState } from 'react'
import './Signup.css'
import {Link} from "react-router-dom"
import { useHistory } from 'react-router-dom';
import { firebase_signup } from '../module/firebase';
import EmailInput from './EmailInput'
import PasswordInput from './PasswordInput'
import NameInput from './NameInput';
import BirthdateInput from './BirthdateInput';


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

    const handleNameChange = (newName) => {
      setName(newName);
    };
  
    const handleBirthdateChange = (newBirthdate) => {
      setBirthdate(newBirthdate);
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
          <NameInput onNameChange={handleNameChange} />
          <BirthdateInput onBirthdateChange={handleBirthdateChange} />
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