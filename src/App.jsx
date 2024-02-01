import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { AddUser } from './components/AddUser'
import { EditUser } from './components/EditUser'
export const APIURL = "https://mongoose-m7pv.onrender.com/student/"
export const App = () => {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Dashboard></Dashboard>}></Route>
      <Route path="/addstudent" element={<AddUser></AddUser>}></Route>
      <Route path='/editstudent/:id' element={<EditUser></EditUser>}></Route>
    </Routes>
  </BrowserRouter>
  </>
}
