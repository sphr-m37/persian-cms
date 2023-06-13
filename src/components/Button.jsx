import React from 'react'

export const Button = ({ title, textcolor, bgcolor, click, type }) => {
  return (
    <button type={type} onClick={click} className={`text-${textcolor} 
      bg-${bgcolor} rounded-sm mr-1 p-1 px-2 text-sm`}>{title}</button>
  )
}
