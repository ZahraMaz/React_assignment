import React, { useState } from 'react';

const BirthdateInput = ({ onBirthdateChange }) => {
  const [birthdate, setBirthdate] = useState('');

  const handleBirthdateChange = (e) => {
    const newBirthdate = e.target.value;
    setBirthdate(newBirthdate);
    onBirthdateChange(newBirthdate);
  };
  return(
     <div className="input-field">
        <label htmlFor="birthdate">Date of Birth:</label>
        <input type="date" id="birthdate" required onChange={handleBirthdateChange}/><br />
     </div>

)
  }

  export default BirthdateInput;