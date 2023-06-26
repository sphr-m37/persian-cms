import React, { useState } from 'react'

//commponents
import { AddNewItem, Button, UsersList, getUsers, useInput } from '../index'
import { useDispatch } from 'react-redux'
// axios
import axios from 'axios'
// toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`
//  //

export const Users = () => {
    const notif = (msg) => toast(msg)
    const dispatch = useDispatch()
    const [firstname, firstNameBind, resetFirstname] = useInput('')
    const [lastname, lastNameBind, resetLastName] = useInput('')
    const [username, usernameBind, resetUsername] = useInput('')
    const [password, passwordBind, resetPassword] = useInput('')
    const [phone, phoneBind, resetPhone] = useInput('')
    const [city, cityBind, resetcity] = useInput('')
    const [email, emailBind, resetemail] = useInput('')
    const [score, scoreBind, resetScore] = useInput('')
    const [buy, buyBind, resetBuy] = useInput('')

    const addNewUser = async (e) => {
        e.preventDefault()
        const newUser = {
            firstname,
            lastname,
            username,
            password,
            phone,
            city,
            email,
            score,
            buy,
        }
        const res = await axios.post('users', newUser)
        if (res.status == 201) {
            notif(`${newUser.firstname} با موفقیت افزوده شد`)
            dispatch(getUsers())
            resetFirstname()
            resetLastName()
            resetUsername()
            resetPassword()
            resetPhone()
            resetcity()
            resetemail()
            resetScore()
            resetBuy()
            setOpenForm(false)
        }
    }
    const [openForm, setOpenForm] = useState(false)
    return (
        <>
            <AddNewItem
                openForm={openForm}
                setOpenForm={setOpenForm}
                title={"افزودن کاربر"}
            >
                <form className='w-full flex flex-wrap' onSubmit={addNewUser} >
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='نام'
                            {...firstNameBind}
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='نام خانوادگی'
                            {...lastNameBind} type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder="نام کاربری"
                            {...usernameBind}
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='گذرواژه'
                            {...passwordBind}
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='ایمیل'
                            {...emailBind}
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='شماره تماس'
                            {...phoneBind}
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>

                        <input className={inputstyle}
                            placeholder="شهر"
                            {...cityBind}
                            type="text"
                        />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder="مجموع خرید"
                            {...buyBind}
                            type="text"
                        />
                    </div>
                    <div className={formGroupStyel}>
                        <input className={inputstyle}
                            placeholder='امتیاز'
                            {...scoreBind}
                            type="text"
                        />
                    </div>
                    <div className='w-full mt-2'>
                        <Button onClick={addNewUser} className='block mr-auto'>
                            افزودن
                        </Button>
                    </div>
                </form>
            </AddNewItem>
            <UsersList />
        </>
    )
}
