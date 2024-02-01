import { useState } from "react"
import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { APIURL } from "../App"
export const EditUser = () => {
    let [name,setName] = useState()
    let [email,setEmail] = useState()
    let [password,setPassword] = useState()
    let navigate = useNavigate()
    let {id} = useParams()
 
    let getData = async ()=>{
        try {
           
            let res = await axios.get(APIURL+"getallstudents/"+id)
            let value = res.data.value
            setName(value.name)
            setEmail(value.email)
            setPassword(value.password)
        } catch (error) {
            console.log(error)
        }
    }
    let handleSubmit = async () => {
     try {
     event.preventDefault()
        let value = {}
        value.name = name
        value.email = email
        value.password = password
        let res  = await axios.put(APIURL+"editstudent/"+id,value)
        if(res.status===200){
          navigate("/")
        }
     } catch (error) {
        console.log(error)
     }
      
    }


    useEffect(()=>{
        getData()
    },[])
  return <div className='container col-lg-3 col-sm-12 mt-5'>
  <form  onSubmit={()=>{handleSubmit()}}>
  <div className="mb-3">
      <label htmlFor="name" className="form-label">Name</label>
      <input type="text" className="form-control" value = {name} id="Name" onChange={()=>{setName(event.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="Email" className="form-label">Email address</label>
      <input type="email" className="form-control" value={email} id="Email" onChange={()=>{setEmail(event.target.value)}}/>
    </div>
    <div className="mb-3">
      <label htmlFor="Password" className="form-label">Password</label>
      <input type="password" className="form-control" value={password} id="Password" onChange={()=>{setPassword(event.target.value)}}/>
    </div>
    <button type="submit" className="btn btn-primary" onClick={()=>{handleSubmit()}}>Submit</button>
  </form>
    </div>
}
