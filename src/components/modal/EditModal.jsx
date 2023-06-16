import React from 'react'
import { createPortal } from 'react-dom'
import { Button, getProducts, useInput } from '../../index'
import { useDispatch } from 'react-redux'
import axios from 'axios'

// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent placeholder:text-[#333] placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto  p-1
`
//  //

export const EditModal = ({ handleEditModal, item }) => {

    const dispatch = useDispatch()
    const [title, titleBind, titleReset] = useInput(item.title)
    const [price, priceBind, priceReset] = useInput(item.price)
    const [popularity, popularityBind, popularityReset] = useInput(item.popularity)
    const [count, countBind, countReset] = useInput(item.count)
    const [sale, saleBind, saleReset] = useInput(item.sale)
    const [colors, colorsBind, colorsReset] = useInput(item.colors)
    const [productDesc, productDescBind, productDescReset] = useInput(item.productDesc)

    const editItem = async () => {
        const editedProduct = {
            title,
            price,
            popularity,
            count,
            sale,
            colors,
            productDesc,
        }
        const res = await axios.put(`products/${item.id}`, editedProduct)
        if (res.status == 200) {
            alert(`${item.title} با موفقیت ویرایش شد`)
            dispatch(getProducts())
            handleEditModal()
        }
    }

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm min-w-[300px] max-w-md'>
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'>
                                    <span>
                                        ویرایش {item.title}
                                    </span>
                                </h1>
                                <form className='w-full' onSubmit={editItem}>
                                    <div className={formGroupStyel}>
                                        <span>عنوان :</span>
                                        <input className={inputstyle}
                                            {...titleBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>قیمت :</span>
                                        <input className={inputstyle} {...priceBind} type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>محبوبیت :</span>
                                        <input className={inputstyle} {...popularityBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>میزان فروش :</span>
                                        <input className={inputstyle}
                                            {...saleBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>تعداد رنگ بندی :</span>
                                        <input className={inputstyle}
                                            {...colorsBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <span>موجودی :</span>
                                        <input className={inputstyle}
                                            {...countBind}
                                            type="text" />
                                    </div>
                                    <div className={formGroupStyel}>
                                        <textarea className={`${inputstyle} h-20 resize-none`} type="text"
                                            {...productDescBind}
                                            placeholder='توضیحات' />
                                    </div>
                                </form>
                            </div>

                            <div>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleEditModal} >
                                    بستن
                                </Button>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={editItem} >
                                    ثبت
                                </Button>
                            </div>
                        </div>
                    </div >,
                    document.getElementById('modal')
                )
            }
        </div>)
}
