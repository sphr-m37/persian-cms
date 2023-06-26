import React, { useState } from 'react'
// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`
//  //
export const AddNewItem = ({ title, children, openForm, setOpenForm }) => {
    return (
        <div className=' bg-gray-400  rounded-md p-2'>
            <section className='flex items-center cursor-pointer' onClick={() => setOpenForm(prev => !prev)} >
                <h2>
                    {title}
                </h2>
                {openForm ? <MdKeyboardArrowUp className='mr-1 text-xl cursor-pointer'
                    />
                    :
                    <MdKeyboardArrowDown className='mr-1 text-xl cursor-pointer'
                        />}
            </section>
            <div
                className={`flex flex-wrap ${!openForm && 'hidden'}`}>
                {children}
            </div>
        </div>

    )
}
