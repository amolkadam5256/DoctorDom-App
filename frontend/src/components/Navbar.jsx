// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
const Navbar = () => {

  const navigate = useNavigate();

  const [showManu, setShowManu] = useState(false);

  const [token, setToken] = useState(true);


  return (
    <div className='flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400'>
      <img onClick={() => navigate('/')} className='cursor-pointer w-44' src={assets.logo} alt="Logo" />


      <ul className='items-center hidden gap-5 font-medium md:flex'>
        <NavLink to='/'>
          <li className='py-1 '>Home</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/doctors'>
          <li className='py-1 '>All Doctors</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/about'>
          <li className='py-1 '>About</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

        <NavLink to='/contact'>
          <li className='py-1 '>Contact</li>
          <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
        </NavLink>

      </ul>

      <div className='items-center gap-4 flex'>
        {
          token
            ? <div className='relative flex items-center gap-2 cursor-pointer group'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="Profile_Pic" />
              <img className='w-2.5' src={assets.dropdown_icon} alt="Profile_Pic" />
              <div className='absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block'>
                <div className='flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100'>
                  <p onClick={() => navigate('my-profile')} className='cursor-pointer hover:text-black'>My Profile</p>
                  <p onClick={() => navigate('my-appointments')} className='cursor-pointer hover:text-black'>My Appointments</p>
                  <p onClick={() => setToken()} className='cursor-pointer hover:text-black'>LogOut</p>
                </div>
              </div>
            </div>
            : <button onClick={() => navigate('/login')} className='px-8 py-3 font-light text-white rounded-full bg-primary hideen md:block'>Create account</button>
        }
        <img onClick={() => setShowManu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />
        {/* {=----mobile manu -----} */}

        <div className={`${showManu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
          <div className='flex items-center justify-between px-5 py-6'>
            <img className='w-36' src={assets.logo} alt="" />
            <img className='w-7' onClick={() => setShowManu(false)} src={assets.cross_icon} alt="" />
          </div>

          <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
            <NavLink onClick={() => setShowManu(false)} to='./'><p className='px-4 py-2 rounded inline-block '>HOME</p></NavLink>
            <NavLink onClick={() => setShowManu(false)} to='./doctors'><p className='px-4 py-2 rounded inline-block '>ALL DOCTORS</p></NavLink>
            <NavLink onClick={() => setShowManu(false)} to='./about'><p className='px-4 py-2 rounded inline-block '>ABOUT</p></NavLink>
            <NavLink onClick={() => setShowManu(false)} to='./contact'><p className='px-4 py-2 rounded inline-block '>CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar
