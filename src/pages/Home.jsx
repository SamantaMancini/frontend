import React from 'react'
import Searchbar from '../components/Searchbar'
import Card from '../components/Card'
import Title from '../components/Title'
const Home = ({contextTheme}) => {
  return (
    <div className='flex flex-col justify-center items-center pt-10'>
      <Title title={"Welcome to Pepega Force"} contextTheme={contextTheme}/>
      <div className='mt-10'>
      <Searchbar />
      </div>
      <div className='mt-10'>
      <Title title={"Videogames"}/>
      </div>
      <div className='flex justify-center items-center mt-10'>
        <Card title={"The Legend of Zelda: Breath of the Wild"} description={"A 2017 action-adventure game developed and published by Nintendo."} text={"Open"}/>
      </div>
    </div>
  )
}

export default Home

