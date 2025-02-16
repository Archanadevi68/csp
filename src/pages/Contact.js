import React from 'react'
import '../styles/Contact.css'
import { useState } from 'react'
const Contact = () => {
 const [data,setData]=useState({name:"",email:"",phone:"",message:""})   
  const handleChange=(e)=>{
     const name= e.target.name;
     const value= e.target.value;
     setData({...data,[name]:value})
  }
  const handleSubmit=(e)=>{
     e.preventDefault()
     console.log(data)
}
 return (
    <contact method='post' onSubmit={handleSubmit}>
      <h1>
        Contact<span>Here</span>
      </h1>
      <input type="text" name="name" id="" onChange={handleChange} value={data.name} placeholder='enter name'/>
      <input type="email" name="email" id="" onChange={handleChange}  value={data.email} placeholder='Enter Email'/>
      <input type="phone" name="phone" id=""  onChange={handleChange} value={data.phone} placeholder='enter Phone number'/>
      <textarea name='message' id="" cols='30'  onChange={handleChange} value={data.message} rows='10' placeholder='type here....'/>
      <button type='submit'>send</button>
      <p>{data.name},{data.email},{data.phone},{data.message}</p>
      </contact>
  )
}

export default Contact
