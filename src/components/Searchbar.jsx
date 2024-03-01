import React from 'react'

const Searchbar = () => {
    return (
      <div className='flex relative'>
        <input 
          type="search" 
          className='text-black rounded-full px-3 py-4 text-sm font-medium lg:w-[50rem] focus:ring-yellow-500 ring-1 shadow-sm shadow-white sm:w-[30rem] w-[20rem]' 
          placeholder='Search a videogame'
        />
        <button 
          className='text-white rounded-r-full px-3 py-2 text-sm font-medium bg-blue-500 absolute right-0 top-0 bottom-0 flex items-center justify-end' 
        >
          Search
        </button>
      </div>
    )
  }
  
  export default Searchbar