import React, { useEffect, useState } from 'react'
// react router dom
import { NavLink, useLocation } from 'react-router-dom'
// icon
import { HiOutlineMenuAlt1 } from 'react-icons/hi'
import { GrFormClose } from 'react-icons/gr'
// tailwind css classes
const listItemStyle = `px-2 my-1
cursor-pointer
hover:bg-gray-800
`
// //
export const SideBar = () => {
    const [open, setOpen] = useState(false)
    const handleSidebar = () => setOpen(prev => !prev)
    window.addEventListener('resize', () => setOpen(false))
    const location = useLocation()
    useEffect(() => {
        if (window.innerWidth < 640) setOpen(false)
    }, [location.pathname])
    return (
        <>
            <HiOutlineMenuAlt1 onClick={handleSidebar} className='sm:none text-3xl absolute' />
            <div className={`${!open && 'hidden'} w-full h-screen absolute  top-0 right-0 bg-black opacity-50 `}>
            </div>
            <div className={`${!open && 'hidden'} sm:block fixed h-screen bg-gray-600 text-white w-52  pt-2`}>
                <GrFormClose className={`block mr-auto text-3xl cursor-pointer absolute top-0 left-0 z-10 text-white ${!open && 'hidden'}`} onClick={handleSidebar} />
                <span className='block text-center'>
                    خوش آمدید
                </span>
                <ul className='mt-2'>
                    <li className={`mb-3 ${listItemStyle}`}>
                        <NavLink to='/'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100 " : "block opacity-50"
                            }>
                            صفحه ی اصلی
                        </NavLink>
                    </li>
                    <li className={listItemStyle}>
                        <NavLink to='/users'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100 " : "block opacity-50"
                            }>
                            کاربران
                        </NavLink>
                    </li>
                    <li className={listItemStyle}>
                        <NavLink to='/'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100" : "block opacity-50"
                            }>
                            محصولات
                        </NavLink>
                    </li>
                    <li className={listItemStyle}>
                        <NavLink to='/comments'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100" : "block opacity-50"
                            }>
                            کامنت ها
                        </NavLink>
                    </li>
                    <li className={listItemStyle}>
                        <NavLink to='/orders'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100" : "block opacity-50"
                            }>
                            سفارشات
                        </NavLink>
                    </li>
                    <li className={listItemStyle}>
                        <NavLink to='/discounts'
                            className={
                                ({ isActive }) => isActive ? "block opacity-100" : "block opacity-50"
                            }>
                            تخفیفات
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}
