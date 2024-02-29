import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
export default function NavbarComponent({handleSwitch, checked}) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <>
<nav className="bg-gray-800">
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
      <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false" onClick={toggle}>
          <span className="absolute -inset-0.5"></span>
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Pepega Force" />
          <Link to="/" className='text-white rounded-md px-3 py-2 text-sm font-medium'>Pepega Force</Link>
        </div>
        
        <div className="hidden sm:ml-6 sm:block">
          <div className="flex space-x-4">
            <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Home</Link>
            <Link to="/statistics" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Statitics</Link>
            <Link to="/community" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Community</Link>
          </div>
        </div>
       <div className='flex justify-center items-center sm:mx-auto'>
        <input
        type="checkbox"
        className="checkbox opacity-0 absolute sr-only checkbox"
        id="checkbox"
        // onChange prop to fire our internal function for changing the light mode value
        onChange={handleSwitch}
        // checking checked prop
        checked={checked}
      />
      <label htmlFor="checkbox" className="w-[50px] h-[25px] bg-slate-900 flex rounded-[50px] items-center justify-between p-1 relative transform scale-1 cursor-pointer label">
        <BsMoonStarsFill className="text-yellow-400" />
        <BsFillSunFill className="text-yellow-400" />
        <div className="w-[22px] h-[22px] bg-white rounded-[50%] absolute top-[2px] left-[2px] transition transform-duration-1000 ease-linear ball"></div>
      </label>
      </div>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
        <div className="relative ml-3">
          <div>
            <button type="button" className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 pointer-events-none sm:pointer-events-auto" id="user-menu-button" aria-expanded="false" aria-haspopup="true" onClick={toggle}>
              <span className="absolute -inset-1.5"></span>
              <span className="sr-only">Open user menu</span>
              <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            </button>
          </div>
          {isOpen && (
          <div className="hidden sm:ml-6 sm:block absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none open" role="menu" aria-orientation="vertical" aria-labelledby="user-menu-button" tabIndex="-1" id="desktop-menu">
            <Link to="/signout" className="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabIndex="-1" id="user-menu-item-2">Sign out</Link>
          </div>
          )}
        </div>
      </div>
    </div>
  </div>


  
  {isOpen && (
    <div id="mobile-menu" className="sm:hidden open">
    <div className="space-y-1 px-2 pb-3 pt-2">
      <Link to="/" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Home</Link>
      <Link to="/statistics" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Statitics</Link>
      <Link to="/community" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Community</Link>
      <Link to="/signout" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Sign out</Link>
    </div>
  </div>
  )}
</nav>
</>
  )
}
