import React from 'react'

const Footer = ({ contextTheme }) => {
  return (
    <div className='text-center bottom-0 flex justify-center items-center p-2 w-full fixed '>
    <p className={contextTheme === "dark" ? "text-white" : "text-gray-800"}>Copyright &copy; {new Date().getFullYear()} Samanta Mancini</p>
    </div>
  )
}

export default Footer