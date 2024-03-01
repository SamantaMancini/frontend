import React from 'react'
import Button from './Button'
const Card = ({title, description, img, date, text}) => {
  return (
    <div className="max-w-xs max-h-auto rounded overflow-hidden shadow-lg bg-white sm:max-w-sm">
  <img className="w-full" src={img} alt="Image game"/>
  <div className="px-6 py-4">
    <div className="font-bold sm:text-xl mb-2 text-lg">{title}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
    <p className="text-gray-700 text-base">
      {date}
    </p>
    <div className='flex justify-start mt-2'>
    <Button text={text}/>
    </div>
  </div>
  
</div>
  )
}

export default Card