import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center border-b-[0.5px] border-gray-100 align-center p-4'>
        <div className="logo-root flex gap">
          
        </div>
        <div className='logo flex flex-col gap-0'>
          <span className='text-[18px] font-[600]'>Your personal finance girl</span>
          <span className='text-[12px]'>Financial Literacy and Consultation</span>
        </div>
        <nav className='nav-links flex text-[#344054] gap-[32px] font-[600] text-[16px]' >
          <NavLink to=''>Home</NavLink>
          <NavLink to=''>Blog</NavLink>
          <NavLink to=''>About me </NavLink>
          <NavLink to=''>Contact </NavLink>
        </nav>
        <div className="signup-login flex gap-[5px] font-[600] justify-center align-center text-[16px]">
        <button className='text-[#344054] py-[10px] px-[18px] rounded-[8px]'>Login</button>
          <button className='bg-[#344054] text-white py-[10px] px-[18px] rounded-[8px]'>Sign up</button>
        </div>
    </div>
  )
}

export default Header