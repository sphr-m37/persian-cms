import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../index'

export const DetailModal = ({ handleDetailModal, item }) => {
    return (
        <div> <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm min-w-[300px] max-w-md'>
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'>
                                    <span>
                                        جزئیات {item.title}
                                    </span>
                                </h1>
                                <table id="table">
                                    <thead>
                                        <tr className='text-right'>
                                            <th>محبوبیت</th>
                                            <th>فروش</th>
                                            <th>  تعداد رنگ</th>
                                        </tr>
                                    </thead>
                                    <tbody className=''>
                                        <tr className='cursor-pointer'>
                                            <td >
                                                {item.popularity}
                                            </td>
                                            <td>{item.sale}</td>
                                            <td>{item.colors}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <p>
                                {item.productDesc}
                            </p>
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
