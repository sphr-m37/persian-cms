import React from 'react'

export const Button = ({ title, textcolor, bgcolor, clickEvent, type }) => {
  return (
    <button type={type} onClick={clickEvent} className={`text-${textcolor} 
      bg-${bgcolor} rounded-sm mr-1 p-1 px-2 text-sm`}>{title}</button>
  )
}
