import React from 'react'
// icons
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'
export const AddNewItem = ({ title, children, openForm, setOpenForm }) => {
    return (
        <div className=' bg-gray-300 dark:bg-gray-600 dark:text-white  rounded-md p-2'>
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
