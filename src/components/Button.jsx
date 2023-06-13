import React from 'react'

export const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`${className} rounded-sm mr-1 p-1 px-2 text-sm bg-white`}>{children}</button>
  )
}
