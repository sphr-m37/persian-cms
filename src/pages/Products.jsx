import React, { useState } from 'react'
// components
import { ProductsList, AddNewItem, Button, getProducts } from '../index'
import { useInput } from '../hooks/useInput'
import axios from 'axios'
import { useDispatch } from 'react-redux'
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
export const Products = () => {
  const dispatch = useDispatch()
  const [img, imgBind, imgReset] = useInput('')
  const [title, titleBind, titleReset] = useInput('')
  const [price, priceBind, priceReset] = useInput('')
  const [popularity, popularityBind, popularityReset] = useInput('')
  const [count, countBind, countReset] = useInput('')
  const [sale, saleBind, saleReset] = useInput('')
  const [colors, colorsBind, colorsReset] = useInput('')
  const [productDesc, productDescBind, productDescReset] = useInput('')
  const [openForm, setOpenForm] = useState(false)

  const notif = (msg) => toast(msg)
  const addNewProduct = async e => {
    e.preventDefault()
    const newProduct = {
      title,
      price,
      count,
      img,
      popularity,
      sale,
      colors,
      productDesc
    }
    const res = await axios.post('products', newProduct)
    if (res.status == 201) {
      notif(`${title} با موفقیت افزوده شد`)
      dispatch(getProducts())
      imgReset()
      titleReset()
      priceReset()
      popularityReset()
      countReset()
      saleReset()
      colorsReset()
      productDescReset()
      setOpenForm(false)
    }
  }
  return (
    <>
      <AddNewItem title={'افزودن محصول'} openForm={openForm}
        setOpenForm={setOpenForm} >
        <form className='w-full flex flex-wrap'>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='عنوان'
              className={inputstyle}
              {...titleBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='قیمت'
              className={inputstyle}
              {...priceBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='محبوبیت'
              className={inputstyle}
              {...popularityBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='امتیاز'
              className={inputstyle}
              {...countBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='فروش'
              className={inputstyle}
              {...saleBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='تعداد رنگ بندی'
              className={inputstyle}
              {...colorsBind} />
          </div>
          <div className={formGroupStyel}>
            <input type="text"
              placeholder='مسیر عکس'
              className={inputstyle}
              {...imgBind} />
          </div>
          <div className={formGroupStyel}>
            <textarea {...productDescBind} className={`${inputstyle} resize-none`} maxLength={150} placeholder='توضیحات محصول' />
          </div>
          <div className='w-full mt-2'>
            <Button onClick={addNewProduct} className='block mr-auto'>
              افزودن
            </Button>
          </div>
        </form>
      </AddNewItem>
      <ProductsList />
    </>
  )
}
