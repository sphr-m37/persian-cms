import React, { useState } from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from 'react-icons/md'



const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `

const formGroupStyel = `
  border-b w-[80%] mx-auto md:w-[48%] md:mx-[1%] lg:w-[31%] p-1
`

const submitHandler = e => {
    e.preventDefault()
    console.log(e);
}

export const AddNewProduct = () => {
    const [openForm, setOpenForm] = useState(false)
    return (
        <div className=' bg-gray-400  rounded-md p-2'>

            <section className='flex items-center'>
                <h2>
                    افزودن محصول
                </h2>
                {openForm ? <MdKeyboardArrowUp className='mr-1 text-xl cursor-pointer'
                    onClick={() => setOpenForm(prev => !prev)} />
                    :
                    <MdKeyboardArrowDown className='mr-1 text-xl cursor-pointer'
                        onClick={() => setOpenForm(prev => !prev)} />}

            </section>
            <form onSubmit={submitHandler}
                className={`flex flex-wrap duration-200 origin-top ${!openForm && 'hidden'}`}>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='نام محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='موجودی محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='میزان محبوبیت محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='میزان فروش  محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='تعداد رنگ بندی محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='قیمت محصول را وارد کنید' />
                </div>

                <div className={formGroupStyel}>
                    <input className={inputstyle} type="text" placeholder='مسیر فایل عکس محصول را وارد کنید' />
                </div>

                <div className='w-full mt-5 text-center md:text-right '>

                    <button type='submit' className='text-green-600
                     bg-white rounded-sm mr-1 p-1 px-2 '
                    >افزودن
                    </button>

                    <button className='text-red-600
                     bg-white rounded-sm mr-1 p-1 px-2 '>
                        انصراف
                    </button>
                </div>

            </form>
        </div>

    )
}
