import React, { useState } from 'react'

//commponents
import { AddNewItem, Button, LOADING, UsersList, getUsers, supabase } from '../index'
import { useDispatch, useSelector } from 'react-redux'

// toastify 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik';
import * as yup from 'yup'
import { Loader } from '../components/Loader';
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] dark:placeholder:text-white placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `flex
  border-b border-b-black dark:border-b-white w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`
const errorStyle = `
text-xs whitespace-nowrap text-red-500`
//  //

export const Users = () => {
    const dispatch = useDispatch()
    const [openForm, setOpenForm] = useState(false)
    const { handleSubmit, getFieldProps, touched, errors,
        resetForm } = useFormik({
            initialValues: {
                firstname: '',
                lastname: '',
                username: '',
                password: '',
                email: '',
                phone: '',
                city: '',
                buy: '',
                score: ''
            },
            validationSchema: yup.object({
                firstname: yup.string().required('*'),
                username: yup.string().required('*'),
                email: yup.string().email(`email isn't valid`).required('*')
            })
            ,
            onSubmit: async values => {
                dispatch({ type: LOADING })
                const { error } = await supabase.from('users').insert(values)
                if (!error) {
                    dispatch(getUsers())
                    toast(`${values.firstname}با موفقیت افزوده شد`)
                    resetForm()
                    setOpenForm(false)
                } else {
                    toast(error.message)
                }
            }
        })
    const { loading } = useSelector(state => state.users)
    return (
        <>
            <AddNewItem
                openForm={openForm}
                setOpenForm={setOpenForm}
                title={"افزودن کاربر"}
            >
                <form className='w-full flex flex-wrap' onSubmit={handleSubmit} >
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('firstname')}
                            className={inputstyle}
                            placeholder='نام'
                            type="text" />
                        {touched?.firstname && errors?.firstname && <span className={errorStyle}>{errors.firstname}</span>}
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('lastname')}
                            className={inputstyle}
                            placeholder='نام خانوادگی' type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('username')}
                            className={inputstyle}
                            placeholder="نام کاربری"
                            type="text" />
                        {touched?.username && errors?.username && <span className={errorStyle}>{errors.username}</span>}
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('password')}
                            className={inputstyle}
                            placeholder='گذرواژه'
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('email')}
                            className={inputstyle}
                            placeholder='ایمیل'
                            type="text" />
                        {touched?.email && errors?.email && <span className={errorStyle}>{errors.email}</span>}
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('phone')}
                            className={inputstyle}
                            placeholder='شماره تماس'
                            type="text" />
                    </div>
                    <div className={formGroupStyel}>

                        <input autoComplete='off'
                            {...getFieldProps('city')}
                            className={inputstyle}
                            placeholder="شهر"
                            type="text"
                        />
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('buy')}
                            className={inputstyle}
                            placeholder="مجموع خرید"
                            type="text"
                        />
                    </div>
                    <div className={formGroupStyel}>
                        <input autoComplete='off'
                            {...getFieldProps('score')}
                            className={inputstyle}
                            placeholder='امتیاز'
                            type="text"
                        />
                    </div>
                    <div className='w-full mt-2'>
                        <Button onClick={handleSubmit} className='block mr-auto'>
                            افزودن
                        </Button>
                    </div>
                </form>
            </AddNewItem>
            <UsersList />
        </>
    )
}
