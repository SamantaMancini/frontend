import React from 'react'

const Pagination = ({contextTheme, linkGames, linkBest}) => {
  return (
    <div className='pt-[10rem]'>
        <ul className='flex gap-[30rem]'>
            <li className={`${contextTheme === "dark" ? "text-white" : ""} sm:text-3xl text-2xl font-bold`}>{linkGames}</li>
            <li className={`${contextTheme === "dark" ? "text-white" : ""} sm:text-3xl text-2xl font-bold`}>{linkBest}</li>
        </ul>
    </div>
  )
}

export default Pagination