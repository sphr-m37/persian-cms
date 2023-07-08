import React, { useEffect, useState } from 'react'
// icon
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { CiLight, CiDark } from 'react-icons/ci'
import { AiOutlineSearch } from 'react-icons/ai'
import { useTheme } from '../hooks/useTheme'
export const Navbar = () => {
  const [theme, toggleTheme] = useTheme()

  if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
  
  const [open, setOpen] = useState(true)
  return (
    <div className="p-3 bg-gray-200 dark:bg-gray-400 flex items-center flex-col sm:flex-row">
      <div className='cursor-pointer dark:text-white text-2xl sm:order-1 mr-auto sm:mr-2' onClick={toggleTheme} >
        {theme === 'light' ? <CiDark /> : <CiLight />}
      </div>
      <div className=' flex flex-col sm:flex-row items-center ' >
        <img src="../assets/react.svg" alt="avatar" className='ml-2 w-10 h-10 rounded-full' />
        <div className="my-2 flex items-center min-w-fit whitespace-nowrap dark:text-white ">
          <span> نام و نام خانوادگی </span>
          {/* when template handled by backend and authentication fixed use this code to show profile options  */}
          {open ?
            <MdKeyboardArrowUp className='mr-1 text-xl cursor-pointer'
              onClick={() => setOpen(prev => !prev)} /> : <MdKeyboardArrowDown className='mr-1 text-xl cursor-pointer'
                onClick={() => setOpen(prev => !prev)} />}
        </div>
      </div>
      <div className='flex justify-between items-center sm:mr-auto'>
        <div className='mx-auto sm:mx-0 sm:mr-auto flex items-center bg-gray-300 dark:bg-white rounded-md'>
          <AiOutlineSearch className='text-xl' />
          <input type="search" placeholder='جستجو' className='bg-gray-300 dark:bg-white h-8 placeholder:text-sm rounded-md focus:outline-none pb-1' />
        </div>

      </div>

    </div>
  )
}
