import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { AiOutlineSearch } from 'react-icons/ai'

export const Navbar = () => {

  const [open, setOpen] = useState(true)

  return (
    <div className="p-3 bg-gray-400 flex items-center flex-col sm:flex-row  ">

      <div className=' flex flex-col sm:flex-row items-center ' >
        <img src="./src/assets/react.svg" alt="avatar" className='ml-2 w-10 h-10 rounded-full' />

        <div className="my-2 flex items-center min-w-fit whitespace-nowrap ">
          <span> نام و نام خانوادگی </span>
          {open ?
            <MdKeyboardArrowUp className='mr-1 text-xl cursor-pointer'
              onClick={() => setOpen(prev => !prev)} />
            :
            <MdKeyboardArrowDown className='mr-1 text-xl cursor-pointer'
              onClick={() => setOpen(prev => !prev)} />
          }

        </div>
      </div>

      <div className='flex justify-between items-center sm:mr-auto'>
        <div className='mx-auto sm:mx-0 sm:mr-auto flex items-center bg-white  rounded-md'>
          <AiOutlineSearch className='text-xl' />

          <input type="search" placeholder='جستجو' className='h-8 placeholder:text-sm rounded-md focus:outline-none pb-1' />
        </div>

      </div>
    </div>
  )
}
