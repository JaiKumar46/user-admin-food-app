import React from 'react'
import {Link} from "react-router-dom"
import {FaUsers,FaOpencart} from "react-icons/fa"
import {BsBoxArrowLeft} from "react-icons/bs"


const Verticlenavbar = () => {
 
  return (
    <div className='md:h-[50rem]  md:w-[15rem]
     bg-slate-100 fixed shadow-black  border-none shadow-lg '>
            <img src="https://pbs.twimg.com/profile_images/463420997182308352/aB_dGZ1u_400x400.png" 
            className='h-[7rem] w-[10rem] relative top-6 left-8 '
            alt="logo" />
        <div className='text-center mt-16  '>
            <ul className='leading-[5rem]'>
                <li className='hover:text-green-900 cursor-pointer 
                text-[2rem]' >
                <Link to='/admindash'>     <FaUsers className='absolute top-[12.5rem] left-5'/>
                   User</Link></li>
                <li className='hover:text-green-900 cursor-pointer text-[2rem]'>
                   <Link to='/items'> <FaOpencart className='absolute top-[17.5rem] left-5'/>
                   Items</Link>
                    
                    </li>
                   
            </ul>
        </div>
        <div className='md:relative
         top-60 cursor-pointer w-full h-[5rem]   '>
            <button className='text-[2rem] hover:text-green-900 text-center  bottom-4'><Link to='/'>
                <BsBoxArrowLeft  className='absolute top-[0.5rem] left-5'/>
                <span ><p className='relative left-20'>Logout</p></span></Link></button>
        </div>


    </div>
  )
}

export default Verticlenavbar