import React, { useState } from 'react'
import demoItem from '../../assets/react.svg'
import { Button, DeleteModal, DetailModal } from '../../index'

export const ProductsList = () => {
    const [currentItem, setCurrentItem] = useState()
    const [showِDeleteModal, setShowDeleteModal] = useState(false)
    const [showِDetailModal, setShowDetailModal] = useState(false)
    const handleDeleteModal = () => setShowDeleteModal(prev => !prev)
    const handleDetailModal = () => setShowDetailModal(prev => !prev)
    return (
        <div className='bg-gray-400 rounded-md p-2 mt-2'>
            <table className="table-auto w-full">
                <thead>
                    <tr className='text-right'>
                        <th>تصویر</th>
                        <th>عنوان</th>
                        <th>قیمت</th>
                        <th>موجودی</th>
                        <th>عملیات</th>
                    </tr>
                </thead>
                <tbody className=''>
                    <tr className='cursor-pointer'>
                        <td>
                            <img src={demoItem} alt="" />
                        </td>
                        <td>آموزش کامل ری اکت</td>
                        <td>4,000,000</td>
                        <td>9</td>
                        <td className='flex flex-col max-w-fit '>
                            <Button className='text-red-500 hover:opacity-80' onClick={handleDeleteModal}>حذف</Button>
                            <Button className='text-yellow-600 hover:opacity-80 my-1'>ویرایش</Button>
                            <Button className='text-blue-600 hover:opacity-80' onClick={handleDetailModal}>جزئیات</Button>
                        </td>
                    </tr>
                </tbody>
            </table>
            {showِDeleteModal && <DeleteModal
                handleClose={handleDeleteModal} />}
            {showِDetailModal && <DetailModal
                handleClose={handleDetailModal} />}
        </div>
    )
}
