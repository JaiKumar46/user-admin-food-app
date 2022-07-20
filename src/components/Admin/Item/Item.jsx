import React from 'react'
import Verticlenavbar from '../../../Pages/adminvertnav/Verticlenavbar'
import ItemData from '../../../Pages/ItemData/ItemData'


const Item = () => {
  return (
    <div className='md:h-screen md:w-screen bg-slate-100'>
        <Verticlenavbar/>
       <ItemData/>
    </div>
  )
}

export default Item