import React from 'react'
import AdminData from '../../Pages/adminDashdata/AdminData'
import Verticlenavbar from '../../Pages/adminvertnav/Verticlenavbar'
import {Link} from "react-router-dom"

const AdminDashboard = () => {
  return (
    <div className='bg-slate-100 h-screen w-screen'>
     <Verticlenavbar/>
     <button className='relative text-white top-4 left-[66rem] h-[2.5rem] w-[10rem] bg-slate-700 hover:scale-90 rounded-md 
     shadow-black font-bold shadow-lg'>
      <Link to='/adduser'>Create User</Link>
     </button>
     
     <AdminData/>
    </div>
  )
}

export default AdminDashboard