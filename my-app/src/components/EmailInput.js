import { useState } from 'react';


const EmailInput=({onEmailChange}) =>{
    const [email,setEmail]=useState('')

    const handleEmailChange = (e) => {
      const newEmail = e.target.value;
    setEmail(newEmail);
    onEmailChange(newEmail);
  };
    // const emailChange=(e)=>{
    //     setEmail(e.target.value)
    // }
    return(
         <div className="input-field">
           <label htmlFor="email">Email:</label>
           {/* <input type="email" id="email" required  onChange={emailChange}/><br /> */}
           <input type="email" id="email" onChange={handleEmailChange} required/><br />
         </div>
    
    )
    
}
export default EmailInput;
