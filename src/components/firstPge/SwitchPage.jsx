import React from 'react'
import {Link} from "react-router-dom"
const SwitchPage = () => {
  return (
    <div className='md:h-screen md:w-screen md:overflow-y-hidden
     md:flex items-center justify-center  bg-hero-pattern  bg-no-repeat bg-cover  '>
        <div className='md:min-h-[20rem] bg-transparent  hover:scale-95
        md:flex bg-opacity-[0.5] md:min-w-[45rem] rounded-md shadow-lg shadow-black m-5'>
            <h1 className='text-green-500 text-[4rem] md:relative top-4 left-60'>Food App</h1>
            <div className="md:flex justify-evenly  items-center md:relative top-4   ">
            <button className="btn btn-primary text-xl  
            font-bold h-10 w-44 rounded-md md:relative right-14 text-white
            shadow-lg shadow-black  border-none hover:scale-95  bg-slate-700">
              <Link to="/adminLogin">
              Admin</Link>
              </button>
            <button  className="btn btn-primary text-xl font-bold h-10 
            w-44 rounded-md  bg-slate-700  shadow-lg text-white shadow-black  border-none hover:scale-95  " >
             <Link to='/userlogin'>User</Link> 
              </button>
      
      </div>  </div>
    </div>
  )
}

export default SwitchPage