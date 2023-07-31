import React, { useState } from 'react';

const NameInput = ({ onNameChange }) => {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    onNameChange(newName);
  };


return (
    <div className="input-field">
    <label htmlFor="name">Name:</label>
    <input type="text" id="name" required  onChange={handleNameChange}/><br />
  </div>

)

}

export default NameInput;
