import React from 'react'
import Title from '../components/Title'
import Pagination from '../components/Pagination'
const Statitics = ({contextTheme}) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <Title title={"Statistics"} contextTheme={contextTheme}/>
      <div className='flex'>
        <Pagination contextTheme={contextTheme} linkGames={"Published Games"} linkBest={"Best Games"}/>
      </div>
    </div>
  )
}

export default Statitics