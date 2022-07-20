import React,{useState,useEffect} from 'react'
import {deleteUser,getallUsers} from "../../Service/utils1"
import {Link} from "react-router-dom"
import Search from './Search';

const ItemData = () => {
    const [user, setUser] = useState([]);
    const [userInput,setUserInput] = useState("");
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }
    
    const getInput=(input)=>{
      setUserInput(input);
      console.log(input)
    }
    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }
  return (
    <div className='md:relative left-[20rem]'>
    <h1 className='md-title text-[2.5rem] md:relative left-[26rem]' >Items</h1>
    <Search onSearch={getInput} fetchagain={getUsers} items={user}/>
    {/* <button className='relative top-4 left-[66rem] h-[2.5rem] w-[10rem] bg-blue-500 hover:scale-90 rounded-md 
     shadow-black font-bold shadow-lg'>
      <Link to='/additem'>Create User</Link></button> */}
      <button className='relative bottom-3 left-[50rem] h-[2.5rem] w-[10rem] 
      shadow-lg text-white bg-slate-700 shadow-black font-bold  hover:scale-90 rounded-md'><Link to="/additem">Create Item</Link></button>
    <table className='border rounded-md shadow-lg relative top-8 shadow-black z-50 h-auto w-[60rem]'>
      <thead className='border h-[3rem] bg-white shadow-lg text-center'>
        <tr className='text-center'>
          <th>Id</th>
          
       
          <th>Avatar</th>
           <th>Name</th>
          <th > <span className='relative right-16'>Price</span> </th>
          
          <th>Actions</th>
          </tr>
      </thead>
      <tbody className='border text-center '>
        {user.filter(data=>{
          if(userInput=="") return true
          return data.name.toLowerCase().includes(userInput.toLowerCase())
        }
       ).map(data=>
         
            <tr key={data.id} className='border m-8 h-[5rem]'>
                <td>{data.id}</td>
                  <td>
                    <img src={data.img} 
                    className='h-16 w-16 rounded-xl'
                    alt={data.name} />
                  </td>
                <td>{data.name}</td>
              <td className='relative right-16'>{data.price}</td>
                
                <td className="md:flex justify-between relative top-5 left-7">
                  
                  <button  onClick={() => deleteData(data.id)} 
                  className='h-[2rem] w-[5rem] relative right-6 rounded-lg text-center text-white bg-slate-700 '>Delete</button>
                </td>






            </tr>
          
          )}
      </tbody>
    </table>
    </div>
  )
}

export default ItemData