import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

const ShoppingLayout = () => {
  return (
    <div className='flex flex-col bg-white overflow-hidden'>
        <Navbar/>
        <main className='flex flex-col w-full'>
            <Outlet/>
        </main>
    </div>
  )
}

export default ShoppingLayout