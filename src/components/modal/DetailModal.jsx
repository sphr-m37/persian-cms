import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../index'

export const DetailModal = ({ handleDetailModal, product, user }) => {
    return (
        <div> <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm min-w-[300px] sm:min-w-[400px] max-w-[500px]'>
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'>
                                    <span>
                                        جزئیات {product ? product.title : user.firstname}
                                    </span>
                                </h1>
                                <table id="table">
                                    <thead>
                                        <tr className='text-right'>
                                            <th>{product ? 'محبوبیت' : ' نام کاربری'}</th>
                                            <th>{product ? 'فروش' : 'ایمیل'}</th>
                                            <th>{product ? 'تعداد رنگ' : 'گذرواژه'}</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className='cursor-pointer'>
                                            <td >
                                                {product ? product.title : user.username}
                                            </td>
                                            <td>{product ? product.sale : user.email}</td>
                                            <td>{product ? product.colors : user.password}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            {product && <p>
                                {product.productDesc}
                            </p>}
                            <div>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleDetailModal} >
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
