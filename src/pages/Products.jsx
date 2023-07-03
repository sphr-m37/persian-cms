import React, { useState } from 'react'
// components
import { ProductsList, AddNewItem, Button, getProducts, supabase } from '../index'
import { useInput } from '../hooks/useInput'

import { useDispatch } from 'react-redux'
// toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useFormik } from 'formik'
import * as yup from 'yup'
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] dark:placeholder:text-white placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `flex
  border-b border-b-black dark:border-b-white w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`
const errorStyle = `
text-xs whitespace-nowrap text-red-500`
//  //

export const Products = () => {
  const dispatch = useDispatch()
  const toast = msg => toast(msg)
  const [openForm, setOpenForm] = useState(false)
  const {
    handleSubmit,
    getFieldProps,
    resetForm,
    touched,
    errors
  } = useFormik({
    initialValues: {
      title: '',
      price: '',
      count: '',
      popularity: '',
      sale: '',
      colors: '',
      img: '',
      productDesc: ''
    },
    validationSchema: yup.object({
      title: yup.string().required('*'),
      price: yup.number().nullable().typeError('عدد وارد کنید').required('*'),
      count: yup.number().nullable().typeError('عدد وارد کنید').required('*'),
      sale: yup.number().nullable().typeError('عدد وارد کنید'),
      colors: yup.number().nullable().typeError('عدد وارد کنید'),
      popularity: yup.number().nullable().typeError('عدد وارد کنید'),
      productDesc: yup.string().max(150, 'حداکثر 150 حرف'),
    }),
    onSubmit: async values => {
      const { error } = await supabase.from('products').insert(values)
      if (!error) {
        dispatch(getProducts())
        toast(`${values.title}با موفقیت افزوده شد`)
        resetForm()
      } else {
        toast(error.message)
      }
    },
  })


  return (
    <>
      <AddNewItem title={'افزودن محصول'} openForm={openForm}
        setOpenForm={setOpenForm} >
        <form className='w-full flex flex-wrap'
          onSubmit={handleSubmit}>
          <div className={formGroupStyel}>
            <input autoComplete='off'
              placeholder='عنوان'
              type="text"
              {...getFieldProps('title')}
              className={inputstyle} />
            {touched?.title && errors?.title && <span className={errorStyle}>{errors?.title}</span>}
          </div>
          <div className={formGroupStyel}>
            <input autoComplete='off'
              type="text"
              {...getFieldProps('price')}
              placeholder='قیمت'
              className={inputstyle} />
            {touched?.price && errors?.price && <span
              className={errorStyle}>{errors?.price}</span>}
          </div>
          <div className={formGroupStyel}>
            <input
              autoComplete='off'
              type="text"
              {...getFieldProps('count')}
              placeholder='موجودی'
              className={inputstyle} />
            {touched?.count && errors?.count && <span
              className={errorStyle}>{errors?.count}</span>}
          </div>
          <div className={formGroupStyel}>
            <input
              autoComplete='off'
              type="text"
              {...getFieldProps('popularity')}
              placeholder='محبوبیت'
              className={inputstyle} />
            {touched?.popularity && errors?.popularity && <span
              className={errorStyle}>{errors?.popularity}</span>}
          </div>
          <div className={formGroupStyel}>
            <input autoComplete='off'
              type="text"
              {...getFieldProps('sale')}
              placeholder='فروش'
              className={inputstyle} />
            {touched?.sale && errors?.sale && <span className={errorStyle}>{errors?.sale}</span>}          </div>
          <div className={formGroupStyel}>
            <input autoComplete='off'
              type="text"
              {...getFieldProps('colors')}
              placeholder='تعداد رنگ بندی'
              className={inputstyle} />
            {touched?.colors && errors?.colors && <span className={errorStyle}>{errors?.colors}</span>}
          </div>
          <div className={formGroupStyel}>
            <input autoComplete='off'
              type="text"
              {...getFieldProps('img')}
              placeholder='مسیر عکس'
              className={inputstyle} />
          </div>
          <div className={formGroupStyel}>
            <textarea
              className={`${inputstyle} resize-none`}
              {...getFieldProps('productDesc')}
              name='productDesc'
              placeholder='توضیحات محصول' />
            {touched?.productDesc && errors?.productDesc && <span className={errorStyle}>{errors?.productDesc}</span>}
          </div>
          <div className='w-full mt-2'>
            <Button className='block mr-auto' type="submit">
              افزودن
            </Button>
          </div>
        </form>
      </AddNewItem>
      <ProductsList />
    </>
  )
}
