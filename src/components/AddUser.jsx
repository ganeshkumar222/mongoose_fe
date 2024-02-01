import React, { useState } from 'react'
import axios from 'axios'
import { APIURL } from '../App'
import { useNavigate } from 'react-router-dom'
export const AddUser = () => {
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()

    let navigate = useNavigate()

    let handleSubmit = async () => {
        try {
            console.log("form")
            event.preventDefault()
            let value = {}
            value.name = name
            value.email = email
            value.password = password
        
            let res = await axios.post(APIURL+"createstudent",value)
            if(res.status===200){
                navigate("/")
            }
        } catch (error) {
            console.log(error)
        }
    }

  return <div className='container col-lg-3 col-sm-12 mt-5'>
<form  >
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name" onChange={()=>{setName(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" onChange={()=>{setEmail(event.target.value)}}/>
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password" onChange={()=>{setPassword(event.target.value)}}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={()=>{handleSubmit()}}>Submit</button>
</form>
  </div>
}
