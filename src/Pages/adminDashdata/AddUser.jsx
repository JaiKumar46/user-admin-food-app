import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'
import {addUser} from "../../Service/utils"


const initialValue = {
    name: "",
    username : "",
    email: "",
    phone: "",
    password:"",
    
    branch: "",
}

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const {name, username, email, phone,password,branch} = user;

    const navigate = useNavigate();

    const onValueChange = (e) =>
    {
      //  console.log(e);
      // console.log(e.target.value);
        setUser({...user, [e.target.name]: e.target.value});
       console.log(user);
    }

    const addUserDetails = async () =>{
       await addUser(user);
       navigate("/admindash");
    }
  return (
    <div className='md:flex items-center bg-slate-100 bg-no-repeat bg-cover bg-opacity-25 justify-center h-[40rem] w-screen flex-col'>
    <h1 className='text-[2.5rem] relative top-[5rem]'>Add User</h1>
    <form action="" className='h-[45rem] w-[45rem] relative top-[7rem] bg-opacity-[0.2]
        shadow-lg shadow-black leading-[4rem] flex flex-col items-center justify-center 
        rounded-md  p-6' onSubmit={(e)=>e.preventDefault()}>
        <div className='flex  justify-evenly  relative  '>
            <label htmlFor="" className='font-bold relative right-5'>Name:</label>
            <input type="text"
            className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            name="name" placeholder="Enter name" value={name}  
            onChange={(e) => onValueChange(e)} required />
        </div>
        <div className='flex  justify-evenly  relative '>
            <label htmlFor="" className='font-bold relative right-5'>UserName:</label>
            <input type="text" name="username" placeholder="Enter name" value={username}  
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            onChange={(e) => onValueChange(e)} required />
        </div>
        <div className='flex  justify-evenly  relative '>
            <label htmlFor="" className='font-bold relative right-5'>Email:</label>
            <input type="email" name="email" placeholder="Enter email" value={email}
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]'   
            onChange={(e) => onValueChange(e)} required />
        </div>
        <div className='flex  justify-evenly  relative  '>
            <label htmlFor="" className='font-bold relative right-5'>Password:</label>
            <input type="password" name="password" value={password} placeholder="Enter password"
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
              onChange={(e) => onValueChange(e)} required/>
        </div>
        <div className='flex  justify-evenly  relative '>
            <label htmlFor="" className='font-bold relative right-5'>Ph:</label>
            <input type="tel" name="phone" placeholder="Enter phone" value={phone}
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            onChange={(e) => onValueChange(e)} required/>
        </div>
        <div className='flex  justify-evenly  relative  '>
            <label htmlFor="" className='font-bold relative right-5'>branch:</label>
            <input type="text" name="branch" placeholder="Enter branch" 
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            value={branch}  onChange={(e) => onValueChange(e)} required/>
        </div>
        <div className='h-[20rem] w-full flex justify-center text-white items-center'>
            <button  onClick={() => addUserDetails() }  
            className='h-[2.5rem] w-[10rem] bg-slate-700
             hover:scale-90 relative right-[5rem] rounded-md' >
                
                <p className='relative bottom-3'>Create User</p>
                </button>
            <button
             className='h-[2.5rem] w-[10rem] bg-slate-700 hover:scale-90 relative left-[2rem] rounded-md'
            onClick={()=> navigate("/admindash")}>
              <p className='relative bottom-3'>Cancel
</p>                  </button>
        </div>
    </form>
</div>
  )
}

export default AddUser