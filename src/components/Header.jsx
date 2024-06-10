import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='flex justify-between items-center border-b-[0.5px] border-gray-100 align-center py-4 px-4 lg:px-12'>
        <div className="logo-root flex items-center justify-center gap-2">
          <div className="square h-[28px] w-[28px] flex justify-center align-bottom rounded-lg bg-gradient-to-b from-[#344054] to-[#344054]/60">
          </div>
          <div className='logo flex flex-col'>
            <span className='text-[18px] font-[600]'>Your personal finance girl</span>
            <span className='text-[12px]'>Financial Literacy and Consultation</span>
          </div>
        </div>
        
        <nav className='nav-links hidden lg:flex text-[#344054] gap-[32px] font-[600] text-[16px]' >
          <NavLink to='#'>Home</NavLink>
          <NavLink to='#'>Blog</NavLink>
          <NavLink to='#'>About me </NavLink>
          <NavLink to='#'>Contact </NavLink>
        </nav>
        <div className="signup-login hidden lg:flex gap-[5px] font-[600] justify-center items-center text-[16px]">
        <button className='text-[#344054] py-[10px] px-[18px] rounded-[8px]'>Login</button>
          <button className='bg-[#344054] text-white py-[10px] px-[18px] rounded-[8px]'>Sign up</button>
        </div>
        <div className="mobile-nav lg:hidden flex flex-col gap-2">
          <div className='h-[1px] w-[30px] bg-black'></div>
          <div className='h-[0.5px] w-[23px] bg-black'></div>
          <div className='h-[0.5px] w-[15px] bg-black'></div>
        </div>
    </div>
  )
}

export default Header