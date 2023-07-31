import { useState } from 'react';

const PasswordInput=({onPasswordChange})=>
{
    const [password,setPassword]=useState('')

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        onPasswordChange(newPassword);
      };
    

        return(
         <div className="input-field">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" required  onChange={handlePasswordChange }/><br />
          </div>)
}

export default PasswordInput;