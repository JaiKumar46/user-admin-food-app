import React,{useState,useEffect} from 'react'
import {deleteUser,getallUsers} from "../../Service/utils"
import {Link} from "react-router-dom"

const AdminData = () => {
  const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers();
    }, [])

    const getUsers = async () =>{
        const response = await getallUsers();
        console.log(response);
        setUser(response.data);
    }

    const deleteData = async (id) => {
        await deleteUser(id);
        getUsers();
    }
  return (
    <div className='md:relative left-[20rem] '>
      <h1 className='md-title text-[2.5rem] md:relative left-[26rem]' >User</h1>
      <table className='border rounded-md shadow-lg shadow-black z-50 h-auto w-[60rem]'>
        <thead className='border h-[3rem] bg-white shadow-lg text-center'>
          <tr className='text-center'>
            <th>Id</th>
            
            <th>Name</th>
            <th>Email</th>
          
            <th>Branch</th>
            <th>Ph</th>
            <th className='w-[15rem]'>Actions</th>
            </tr>
        </thead>
        <tbody className='border text-center '>
          {user.map(data=>
           
              <tr key={data.id} className='border m-8 h-[5rem]'>
                  <td>{data.id}</td>
                  
                  <td>{data.name}</td>
                  <td>{data.email}</td>
                  <td>{data.branch}</td>
                  <td>{data.phone}</td>
                  <td className="md:flex justify-between relative top-5">
                    <button className='h-[2rem] w-[5rem] text-white rounded-lg text-center bg-slate-700 '>
                      <Link to='/useredit'>
                      Edit</Link>
                      </button>
                    <button  onClick={() => deleteData(data.id)} 
                    className='h-[2rem] w-[5rem] text-white relative right-6 rounded-lg text-center bg-slate-700'>Delete</button>
                  </td>






              </tr>
            
            )}
        </tbody>
      </table>
      </div>
  )
}

export default AdminData