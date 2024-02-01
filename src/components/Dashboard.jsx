import React from 'react'
import axios from 'axios'
import { APIURL } from '../App'
import { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Dashboard = () => {
    let [data,setData] = useState([])
    let navigate = useNavigate()
    
    let handleDelete = async (id) =>{
        try {
            console.log(id)
           let res = await axios.delete(APIURL+"deletestudent/"+id)  
           if(res.status===200){
            getdata()
           }
        } catch (error) {
           console.log(error) 
        }
    }

    let getdata = async () => {
        try {
           let res = await axios.get(APIURL+"getallstudents")
            // console.log(res.data.data) 
            if(res.status===200){
                setData(res.data.data)
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getdata()
    },[])
  return <>
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar w/ text</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#" onClick={()=>{
            navigate("addstudent")
          }}>Add a student</a>
        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
    </div>
  </div>
</nav>
  <div className='container mt-5 col-lg-6 col-sm-12'>
  <table className='table table-dark table-bordered '>
    <thead>
        <tr className='table-dark'>
            <td className='table-dark'>#</td>
            <td>Name</td>
            <td>Email</td>
            <td>action</td>
        </tr>
    </thead>
    <tbody>
        {data.map((e,i)=>{
            return <tr key={e._id}>
                <td>{i+1}</td>
                <td>{e.name}</td>
                <td>{e.email}</td>
                <td className='text-center'><button className='btn btn-primary m-1' onClick={()=>{navigate("editstudent/"+e._id)}}>edit</button>
                <button className='btn btn-danger m-1'onClick={()=>{
                    handleDelete(e._id)
                }}>delete</button></td>
            </tr>
        })}
    </tbody>
  </table>
  </div>
  
  </>
}
