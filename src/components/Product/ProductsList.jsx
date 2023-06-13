import React, { useEffect, useState } from 'react'
// components
import { Button, DeleteModal, DetailModal, ErrorMsg, Products } from '../../index'
// axios
import axios from 'axios'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../index'

export const ProductsList = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(state => state.products)
    const [showِDeleteModal, setShowDeleteModal] = useState(false)
    const [showِDetailModal, setShowDetailModal] = useState(false)
    const handleDeleteModal = () => setShowDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowDetailModal(prev => !prev)

    useEffect(() => {
        dispatch(getProducts())
    }, [])

    return (
        <>
            {products.length == 0 && <ErrorMsg msg={'NO PTODUCT FOUND'} />}
            <div className='bg-gray-400 rounded-md p-2 mt-2'>
                <table className="table-auto w-full">
                    <thead className=''>
                        <tr className=''>
                            <th>تصویر</th>
                            <th>عنوان</th>
                            <th>قیمت</th>
                            <th>موجودی</th>
                            <th>محبوبیت</th>
                            <th>فروش</th>
                            <th>تعداد رنگ بندی</th>
                            <th>گزینه ها</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        {products.map(product => <tr key={product.id} className='cursor-pointer'>
                            <td>
                                <img className='w-[50px] h-[50px]' src={product.img} alt="" />
                            </td>
                            <td>{product.title}</td>
                            <td>{product.price}</td>
                            <td>{product.count}</td>
                            <td>{product.popularity}</td>
                            <td>{product.sale}</td>
                            <td className=''>{product.colors}</td>



                            <td className='flex justify-center'>

                                <Button className='text-red-600 hover:opacity-80' onClick={handleDeleteModal}>حذف</Button>

                                <Button className='text-yellow-600 hover:opacity-80 '>ویرایش</Button>

                                <Button className='text-blue-600 hover:opacity-80' onClick={handleDetailModal}>جزئیات</Button>

                            </td>
                        </tr>
                        )}
                    </tbody>
                </table>
                {showِDeleteModal && <DeleteModal
                    handleClose={handleDeleteModal} />}
                {showِDetailModal && <DetailModal
                    handleClose={handleDetailModal} />}
            </div>
        </>)
}
