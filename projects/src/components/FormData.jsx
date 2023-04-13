import React from 'react'
import { useState } from 'react'


export default function FormData() {
const [formData, setFormData] = useState({
    firstName: "", lastName: ""
})

function handleChange(event){
    setFormData(prevFormData => {
        return {
            ...prevFormData,
            [event.target.name]: event.target.value
        }
    })
}

  return (
    <>
    <h2>Form</h2>
    <form className="form">
        <input type="text" placeholder='First Name' onChange={handleChange} name='firstName' />
        <input type="text" placeholder='Last Name' onChange={handleChange} name='lastName' />
    </form>
    </>
   
  )
}
