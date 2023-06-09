import React, { useEffect, useState } from 'react'
// components
import { Button, DeleteModal, DetailModal, EditModal, ErrorMsg, LOADING, supabase } from '../index'
// redux
import { useDispatch } from 'react-redux'
import { getProducts } from '../index'
// costum hook
import { useInput } from '../index'
// toastify 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from './Loader'
// tailwind css classes
const inputstyle = `
w-full h-full outline-none bg-transparent  placeholder:text-white placeholder:text-xs sm:placeholder:text-sm `
const formGroupStyel = `
  border-b w-[80%] mx-auto  p-1
`
//  //
export const ProductsList = ({ products }) => {

    const dispatch = useDispatch()
    const [currentProduct, setCurrentProduct] = useState({})
    const [showِDeleteModal, setShowDeleteModal] = useState(false)
    const [showِDetailModal, setShowDetailModal] = useState(false)
    const [showِEditlModal, setShowEditlModal] = useState(false)

    const handleDeleteModal = () => setShowDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowDetailModal(prev => !prev)
    const handleEditModal = () => setShowEditlModal(prev => !prev)

    const [title, titleBind] = useInput(currentProduct.title)
    const [img, imgBind] = useInput(currentProduct.img)
    const [price, priceBind] = useInput(currentProduct.price)
    const [popularity, popularityBind] = useInput(currentProduct.popularity)
    const [count, countBind] = useInput(currentProduct.count)
    const [sale, saleBind] = useInput(currentProduct.sale)
    const [colors, colorsBind] = useInput(currentProduct.colors)
    const [productDesc, productDescBind] = useInput(currentProduct.productDesc)

    const editModalHandle = product => {
        setCurrentProduct(product)
        handleEditModal()
    }

    const showDetailHandle = (product) => {
        setCurrentProduct(product)
        handleDetailModal()
    }

    const deleteProduct = async () => {
        dispatch({ type: LOADING })
        handleDeleteModal()
        const { error } = await supabase.from(`products`).delete().eq('id', currentProduct.id)

        if (!error) {
            dispatch(getProducts())
            toast(`${currentProduct.title} با موفقیت حذف شد`)
        } else {
            toast(error.message)
        }
    }

    const editProduct = async () => {
        dispatch({ type: LOADING })
        const editedProduct = {
            title,
            img,
            price,
            popularity,
            count,
            sale,
            colors,
            productDesc,
        }
        handleEditModal()
        const { error } = await supabase.from('products').update(editedProduct).eq('id', currentProduct.id)
        if (!error) {
            toast(`${editedProduct.title} با موفقیت ویرایش شد `)
            dispatch(getProducts())
        } else {
            toast(error.message)
        }
    }

    return (
        <>
            {products.length ? <div className='bg-gray-400 rounded-md p-2 mt-2 overflow-auto'>
                <table id="table">
                    <thead>
                        <tr>
                            <th>تصویر</th>
                            <th>عنوان</th>
                            <th>قیمت</th>
                            <th>موجودی</th>
                            <th>گزینه ها</th>
                        </tr>
                    </thead>
                    <tbody>

                        {products.map(product => <tr key={product.id} className='cursor-pointer'>
                            <td >
                                <img className=' w-[60px] h-[60px] mx-auto my-auto' src={product.img} alt="" />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.count}</td>
                            <td>
                                <Button className='text-red-600 hover:opacity-80' onClick={() => {
                                    setCurrentProduct(product)
                                    handleDeleteModal()
                                }}>حذف</Button>
                                <Button className='text-yellow-600 hover:opacity-80' onClick={() => editModalHandle(product)}
                                >ویرایش</Button>
                                <Button className='text-blue-600 hover:opacity-80' onClick={() => showDetailHandle(product)}>جزئیات</Button>
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div> : <ErrorMsg title={'محصولی یافت نشد'} />}

            {showِDeleteModal && <DeleteModal handleDeleteModal={handleDeleteModal} title={`${currentProduct.title} `} deleteMethod={deleteProduct} />}
            {showِDetailModal && <DetailModal handleDetailModal={handleDetailModal} title={currentProduct.title} >
                <table id='table'>
                    <thead>
                        <th>
                            محبوبیت
                        </th>
                        <th>
                            میزان فروش
                        </th>
                        <th>
                            تعداد رنگ بندی
                        </th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{currentProduct.popularity}</td>
                            <td>{currentProduct.sale}</td>
                            <td>{currentProduct.colors}</td>
                        </tr>
                    </tbody>
                </table>
                <p className='mt-5'>{currentProduct.productDesc}</p>
            </DetailModal>}
            {showِEditlModal && <EditModal handleEditModal={handleEditModal} edit={editProduct}>
                <div className='mb-6'>
                    <h1 className='mb-4 text-center'>
                        <span>
                            ویرایش {currentProduct.title}
                        </span>
                    </h1>
                    <form className='w-full' onSubmit={editProduct}>

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
                            <input className={inputstyle} type="text"
                                {...imgBind}
                                placeholder='مسیر عکس' />
                        </div>
                        <div className={formGroupStyel}>
                            <textarea className={`${inputstyle} h-20 resize-none`} type="text"
                                {...productDescBind}
                                placeholder='توضیحات' />
                        </div>
                    </form>
                </div>
            </EditModal>}
            <ToastContainer />
        </>
    )
}
