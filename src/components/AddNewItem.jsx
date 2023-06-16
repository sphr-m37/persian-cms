import React, { useState } from 'react'
// components
import { Button } from '../index'
// icon
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
import { useInput } from '../hooks/useInput'
import axios from 'axios'
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`
//  //

export const AddNewItem = ({ text, children }) => {

    const [openForm, setOpenForm] = useState(false)

   
    return (
        <div className=' bg-gray-400  rounded-md p-2'>
            <section className='flex items-center'>
                <h2>
                    {text}
                </h2>
                {openForm ? <MdKeyboardArrowUp className='mr-1 text-xl cursor-pointer'
                    onClick={() => setOpenForm(prev => !prev)} />
                    :
                    <MdKeyboardArrowDown className='mr-1 text-xl cursor-pointer'
                        onClick={() => setOpenForm(prev => !prev)} />}

            </section>
            <div
                className={`flex flex-wrap ${!openForm && 'hidden'}`}>
                {children}
            </div>
        </div>

    )
}
