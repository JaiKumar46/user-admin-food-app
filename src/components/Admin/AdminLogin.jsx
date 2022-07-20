import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"
import {Link} from "react-router-dom"
// import "./admin.css"
const AdminLogin = () => {
    let navigate=useNavigate()
    const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
        {
          username: "admin",
          password: "admin123"
        },
        {
          username: "admin",
          password: "admin245"
        }
      ];
    
      const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
    
      const handleSubmit = (event) => {
        //Prevent page reload
        event.preventDefault();

    
        var { uname, pass } = document.forms[0];
    
        // Find user login info
        const userData = database.find((user) => user.username === uname.value);
    
        // Compare user info
        if (userData) {
          if (userData.password !== pass.value) {
            // Invalid password
            setErrorMessages({ name: "pass", message: errors.pass });
          } else {
            setIsSubmitted(true);
          }
        } else {
          // Username not found
          setErrorMessages({ name: "uname", message: errors.uname });
        }
        // navigate("/src/Components/Admin/Login/AdminLogin.jsx")
        if(isSubmitted)
        navigate("/admindash")
      };
    
      // Generate JSX code for error message
      const renderErrorMessage = (name) =>
        name === errorMessages.name && (
          <div className="error">{errorMessages.message}</div>
        );
        const renderForm = (
            <div className="md:h-[500px] md:w-[1200px] rounded-lg bg-white md:relative 
            md:rounded-md shadow-xl "   >
                <div className="md:w-full md-h-full flex ">
                <div className="left-side md:w-1/2 md:h-[31.3rem] 
                bg-black rounded-tl-xl rounded-bl-xl  ">
                        <img  className="img-responsive 
                        md:h-full md:w-full rounded-md object-cover" 
                        src="https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberries-2023404__340.jpg" />
                    </div>

                    <div className="right-side md:w-1/2 bg-[#efecf2] md:h-[31.3rem]  rounded-tl-xl p-5 rounded-bl-xl">
                        

                        <div className="hello mt-10 text-center text-[#2a2739]">
                            <h2 className='text-3xl font-bold'>Hello Again!</h2>
                            <h4 className="mt-4 font-bold">Welcome back you have been missed! </h4>
                        </div>
              <form onSubmit={handleSubmit} className="flex flex-col align-middle justify-center leading-[3rem] relative left-[10rem] top-[5rem] ">
                <div className="input-container">
                  <label className='font-bold relative right-[8rem]  '>Username: </label>
                  <input type="text" name="uname" 
                  required placeholder='Enter Admin Name'  
                  className='relative mt-2 md:h-11 md:w-[25rem] p-5
                  outline-none p-[0 10px] text-[13px] right-[7.5rem] 
                  rounded-xl border border-solid border-white' />
                  {renderErrorMessage("uname")}
                </div>
                <div className="input-container mt-6">
                  <label className='font-bold relative right-[7.6rem] ' >Password: </label>
                  <input type="password" name="pass" required placeholder='Enter your password' 
                  className='relative mt-2 md:h-11 md:w-[25rem]  p-5
                  outline-none pr-8 text-[13px] p-[0 10px] right-[7.2rem] 
                  rounded-xl border border-solid border-white    '/>
                  {renderErrorMessage("pass")}
                </div>
                <div className="button-container relative mt-9 right-[1rem] ">
                  <input type="submit" 
                className="h-11 w-1/2 bg-[#fe6b68] font-bold rounded-lg shadow-lg shadow-black hover:scale-90"  />
                </div>
              </form>
            </div>
            </div>
            </div>
          );
          
    
      
    
  return (
    <div className="md:h-screen w-screen relative bottom-12             ">
      <button className='text-white z-[9999]  h-[3rem] w-[7rem] bg-green-600 rounded-md relative
       top-[9rem] left-[10rem] hover:scale-90'>
        <Link to="/" className='text-center text-[1.5rem] ahover font-bold decoration-transparent'> Back</Link>
       </button>
    <div className="login-form flex justify-center items-center bg-[#E2CF81] md:min-h-screen">
     
      {isSubmitted ? navigate("/admindash") : renderForm}
    </div>
  </div>
  )
}

export default AdminLogin