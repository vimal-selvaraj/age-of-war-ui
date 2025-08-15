
import React from 'react'
import './input.css'
const CustomInput = ({ handleChange, name,value }) => {
  return (
    <input
      className="custom__input"
      type="number"
      min="1"
      placeholder="No of soldiers"
      onChange={handleChange}
      name={name.replace(/\s+/g, '')}
      value={value}
    />
  )
}

export default CustomInput
