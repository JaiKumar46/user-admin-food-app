import React from 'react'
import SwitchPage from './components/firstPge/SwitchPage'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import NotFound from './Pages/NotFound/NotFound'
import AdminLogin from './components/Admin/AdminLogin'
import AdminDashboard from './components/Admin/AdminDashboard'
import EditUser from './Pages/adminDashdata/EditUser'
import AddUser from './Pages/adminDashdata/AddUser'
import UserLogin from './components/User/UserLogin'
import UserDashBoard from './components/User/UserDashBoard'
import Item from './components/Admin/Item/Item'
import AddItem from './Pages/ItemData/AddItem'

const App = () => {
  return (
    <div className='md:h-screen md:w-screen'>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={ <SwitchPage/>}/>
        <Route path="*" element={ <NotFound/>}/>
        <Route path='/adminLogin' element={<AdminLogin/>}/>
        <Route path='/admindash' element={<AdminDashboard/>}/>
        <Route path='/useredit' element={<EditUser/>}/>
        <Route path='/adduser' element={<AddUser/>}/>
        <Route path='/userlogin' element={<UserLogin/>}/>
        <Route path='/userdashboard' element={<UserDashBoard/>}/>
        <Route path='/items' element={<Item/>}/>
        <Route path='/additem' element={<AddItem/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App