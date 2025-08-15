import React from 'react'
import CustomInput from '../utils/CustomInput'
import './Card.css'
const Card = ({ icon, name, description, onSoldierChange, value }) => {
    const handleChange = (e) => {
        const value = e.target.value;
        onSoldierChange(name, value);
    };
    return (
        <>
            <div className='card'>
                <div className='card-header'>
                    <div>{icon}</div>
                    <div>
                        <h4>{name}</h4>
                        <p className='description'>{description}</p>
                    </div>
                </div>
                <div className='card-body'>
                    <CustomInput handleChange={handleChange} name={name} value={value}  />
                </div>
            </div>

        </>
    )
}

export default Card
