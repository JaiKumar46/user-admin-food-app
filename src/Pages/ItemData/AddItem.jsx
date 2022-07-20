import React,{useState} from 'react'
import {addUser} from "../../Service/utils1"
import {useNavigate} from "react-router-dom"

const initialValue = {
  name: "",
  img : "",
  price: "",

  

}

const AddItem = () => {
  const [user, setUser] = useState(initialValue);
    const {name, img,price} = user;

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
       navigate("/items");
    }
  return (
    <div className='md:flex items-center bg-bg-slate-100 bg-no-repeat bg-cover bg-opacity-25 justify-center h-[40rem] w-screen flex-col'>
    <h1 className='text-[2.5rem] relative bottom-20 '>Add Items</h1>
    <form action="" className='h-[25rem] w-[45rem] relative bottom-5 bg-opacity-[0.2]
    shadow-lg shadow-black  flex flex-col items-center justify-center 
    rounded-md leading-10 p-5'  onSubmit={(e)=>e.preventDefault()}>
        <div className='flex  justify-evenly  relative '>
            <label htmlFor="" className='font-bold relative right-5'>Name:</label>
            <input type="text"
            className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            name="name" placeholder="Enter name" value={name}  
            onChange={(e) => onValueChange(e)} required />
        </div>
        <div className='flex  justify-evenly  relative  '>
            <label htmlFor="" className='font-bold relative right-5'>Image</label>
            <input type='text' name="img" placeholder="url" value={img}  
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]' 
            onChange={(e) => onValueChange(e)} required />
        </div>
        <div className='flex  justify-evenly  relative  '>
            <label htmlFor="" className='font-bold relative right-5'>Price:</label>
            <input type="text" name="price" placeholder="Enter price" value={price}
             className='rounded placeholder:p-5 placeholder:text-white border-b-2 border-black bg-transparent w-[20rem]'   
            onChange={(e) => onValueChange(e)} required />
        </div>
        
        
        <div className='h-[20rem] w-full flex justify-center items-center text-white'>
            <button  onClick={() => addUserDetails() }  
            className='h-[2.5rem] w-[10rem] bg-slate-700
             hover:scale-90 relative right-[5rem] rounded-md' >Create User</button>
            <button
             className='h-[2.5rem] w-[10rem] bg-slate-700 hover:scale-90 relative left-[2rem] rounded-md'
            onClick={()=> navigate("/items")}>
                Cancel
                </button>
        </div>
    </form>
</div>
  )
}

export default AddItem