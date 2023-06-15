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

export const AddNewItem = ({ text }) => {

    const [openForm, setOpenForm] = useState(false)

    const [img, imgBind, imgReset] = useInput('')
    const [title, titleBind, titleReset] = useInput('')
    const [price, priceBind, priceReset] = useInput('')
    const [popularity, popularityBind, popularityReset] = useInput('')
    const [count, countBind, countReset] = useInput('')
    const [sale, saleBind, saleReset] = useInput('')
    const [color, colorBind, colorReset] = useInput('')

    const submitHandler = e => {
        e.preventDefault()
        const newProduct = {
            title: '2000',
            price: '2000',
            count: '2000',
            img: '2000',
            popularity: '2000',
            sale: '2000',
            color: '200'
        }

        addProduct()
        imgReset()
        titleReset()
        priceReset()
        popularityReset()
        countReset()
        saleReset()
        colorReset()
    }
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
                            {...colorBind} />
                    </div>
                    <div className={formGroupStyel}>
                        <input type="text"
                            placeholder='مسیر عکس'
                            className={inputstyle}
                            {...imgBind} />
                    </div>
                    <div className='w-full px-[10%] mt-2'>
                        <Button onClick={submitHandler}>
                            افزودن
                        </Button>
                    </div>
                </form>

            </div>
        </div>

    )
}
