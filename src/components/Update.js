import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { api_url } from '../api/Url'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

const Update = () => {

    const navigate = useNavigate();
    const [id, setId] = useState('')
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")

    const handleUpdate = async (e) => {
        e.preventDefault(); 
        console.log("UPDATING...")
        await axios.put(api_url + id, {
            name,
            email,
            phone,
            address
        })
        navigate('/users')
    }


    useEffect(() => {
        setId(localStorage.getItem('id'))
        setName(localStorage.getItem('name'))
        setEmail(localStorage.getItem('email'))
        setPhone(localStorage.getItem('phone'))
        setAddress(localStorage.getItem('address'))

    }, [])


    return (
        <div className='home'>
           <h1 className='icon'> <ManageAccountsIcon  style={{ fontSize: 200 }}/> <br/> <small style={{"color":"rgba(55, 55, 55, 0.577)"}}>Update</small></h1>

            <form className='home_form' method="PUT">
                <input placeholder='Name' value={name} name="name" onChange={(e) => setName(e.target.value)} />
                <br />
                <br />

                <input placeholder='Email' value={email} name="email" onChange={(e) => setEmail(e.target.value)} />
                <br />
                <br />

                <input placeholder='Mobile No' value={phone} type="number" name="contact" onChange={(e) => setPhone(e.target.value)} />
                <br />
                <br />

                <textarea placeholder='Address' value={address} name="address" onChange={(e) => setAddress(e.target.value)} />
                <br />
                <br />

                <button onClick={handleUpdate}>Update</button>

            </form>


        </div>
    )
}

export default Update