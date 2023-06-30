import React from 'react'

export const Button = ({ children, className, onClick, type = '' }) => {
  return (
    <button type={type} onClick={onClick} className={`${className} rounded-sm mr-1 p-1 px-2 text-sm`} >{children}</button>
  )
}
