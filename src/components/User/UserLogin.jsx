import React,{useState} from 'react'
import {useNavigate,Link} from "react-router-dom"
import user from '../../Backend/user.json'
 const UserLogin = () => {
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("");
    let [data,setData]=useState(user.user)
    console.log(data);

    let navigate=useNavigate()
   
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        try{
        let arr=data.filter((e)=>e.email===email && e.password===password)
        console.log(arr);
        if (arr.length>=1) {
            navigate("/userdashboard")
        }
        else{
            document.write("incorrct email/password")
        }
    }
    catch(error){
        console.log(error);
        // eslint-disable-next-line no-lone-blocks
        {<div> {error} </div>}
    }
}
  return (
    <div>
         
        <div className="w-full h-screen bg-user-pattern bg-no-repeat bg-cover md:-mx-4" style={{filter: 'blur(2px)'}} />
        <div  className="absolute  w-[25rem] bg-white" style={{transform: 'translate(-50%, -50%)', top: '50%', left: '50%'}}>
          <div className="flex justify-center -mt-10">
            <img className="border-2 w-20 h-20 rounded-full" src="https://cdn.pixabay.com/photo/2016/04/02/04/14/bell-peppers-1302126__340.jpg" />
          </div>
          <form className="px-12 py-10" onSubmit={handleSubmit}>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 far fa-user" />
                <input type={"email"} placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}  className="-mx-6 px-8  w-full border rounded px-3 py-1 text-gray-700" />
              </div>
            </div>
            <div className="w-full mb-2">
              <div className="flex items-center">
                <i className="ml-3 fill-current text-gray-400 text-xs z-10 fas fa-lock" />
                <input type={"password"} placeholder="password" value={password} onChange={e=>setPassword(e.target.value)} className="-mx-6 px-8 w-full border rounded px-3 py-1 text-gray-700" />
              </div>
            </div>
           
                <button type="text" className="bg-yellow-400 text-xs text-gray-700 rounded px-4 py-2">SIGN IN</button>
              </form>
            </div>
          </div>
   
     
  )
}

export default UserLogin