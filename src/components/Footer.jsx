import React from 'react'

const Footer = ({ contextTheme }) => {
  return (
    <footer className='relative text-center p-2 w-full'>
    <p>&nbsp;</p>
    <p className={contextTheme === "dark" ? "text-white" : "text-gray-800"}>Copyright &copy; {new Date().getFullYear()} Samanta Mancini</p>
    </footer>
  )
}

export default Footer