import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { api_url } from '../api/Url';
import {useNavigate} from "react-router-dom"
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteOutlineTwoToneIcon from '@mui/icons-material/DeleteOutlineTwoTone';
import "./Users.css"

const Users = () => {


    const navigate=useNavigate();
    const [data,setData]=useState([]);

    const handleUpdate= async ({id,name,email,phone,address})=>{

        localStorage.setItem('id',id)
        localStorage.setItem('name',name)
        localStorage.setItem('email',email)
        localStorage.setItem('phone',phone)
        localStorage.setItem('address',address)
        navigate("/update")
    }

    const handleDelete=async(id)=>{
        await axios.delete(api_url + id)
        callApi();
    }

    const callApi=async ()=>{
        const response=await axios.get(api_url);
        setData(response.data)
        console.log(response.data)
    }


    useEffect(()=>{
        callApi();
    },[])
    



  return (
    <div className='users'>

      
        
<table >
    <thead>
  <tr>
    {/* <th>S.No</th> */}
    <th>Name</th>
    <th>Email</th>
    <th>Phone No</th>
    <th>Address</th>
    <th>Update</th>
    <th>Delete</th>
  </tr>
  </thead>

  <tbody>

{data.map((data,id)=> (
      <tr key={id}>
        {/* <td>{id}</td> */}
        {/* <td>{data.id}</td> */}
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
      <td>{data.address}</td>
      <td><button onClick={()=>handleUpdate(data)}>Edit</button></td>
      <td><button onClick={()=>handleDelete(data.id)}><DeleteOutlineTwoToneIcon /></button></td>
    </tr>

))}

  </tbody>
</table>
        
    </div>
  )
}

export default Users