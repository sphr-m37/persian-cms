import React from 'react'

//commponents
import { AddNewItem, UsersList } from '../index'

//tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `

export const Users = () => {

    return (
        <>
            <AddNewItem
                title={"افزودن کاربر"}
            />
            <UsersList />
        </>
    )
}
