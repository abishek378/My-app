import React,{useState} from 'react';
import axios from "axios"
import { api_url } from '../api/Url';
import {useNavigate} from "react-router-dom"
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

import "./Home.css"

const Home = () => {
    const navigate=useNavigate();

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [phone,setPhone]=useState("")
const [address,setAddress]=useState("")


const handleSubmit=async (e)=>{
    e.preventDefault(); 
    await axios.post(api_url,{
        name,
        email,
        phone,
        address
    })
    navigate('/users')
    
    // console.log(name)
    // console.log(email)
    // console.log(phone)
    // console.log(address)
}



  return (
    <div className='home'>
       <h1 className='icon'> <PersonAddAltIcon  style={{ fontSize: 200 }} /> <br/> <small style={{"color":"rgba(55, 55, 55, 0.577)"}}>Add User</small>  </h1>

<form className='home_form' method="post">
    <input placeholder='Name' value={name}   name="name"  onChange={(e)=>setName(e.target.value)}/>
    <br/>
    <br/>

    <input placeholder='Email' value={email} name="email"  onChange={(e)=>setEmail(e.target.value)}/>
    <br/>
    <br/>

    <input placeholder='Mobile No' value={phone} name="contact"   onChange={(e)=>setPhone(e.target.value)}/>
    <br/>
    <br/>

    <textarea  placeholder='Address' value={address} name="address" onChange={(e)=>setAddress(e.target.value)}/>
    <br/>
    <br/>
    

    <button onClick={handleSubmit}>Submit</button>
    
</form>


    </div>
  )
}

export default Home