import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../index'

export const DetailModal = ({ handleClose }) => {
    return (
        <div> <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm'>
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'> جزئیات </h1>
                                <table className="table-auto w-full">
                                    <thead>
                                        <tr className='text-right'>
                                            <th>تصویر</th>
                                            <th>عنوان</th>
                                            <th>قیمت</th>
                                            <th>موجودی</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className='cursor-pointer'>
                                            <td >
                                                <img src='' alt='' />
                                            </td>
                                            <td>آموزش ری اکت</td>
                                            <td>4,000,000</td>
                                            <td className='text-center'>9</td>
                                     
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleClose} >
                                    بستن
                                </Button>
                            </div>
                        </div>
                    </div >,
                    document.getElementById('modal')
                )
            }
        </div></div>
    )
}
