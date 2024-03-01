import React from 'react'

const Title = ({contextTheme, title}) => {
  return (
    <div>
        <h2 className={`${contextTheme === "dark" ? "text-white" : ""} sm:text-3xl text-2xl font-bold`}>{title}</h2>
    </div>
  )
}

export default Title