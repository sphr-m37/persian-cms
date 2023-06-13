import React, { useState } from 'react'

import { Modal } from '../../index'

export const ProductsList = () => {

    const [showModal, setShowModal] = useState(false)

    return (
        <div className='bg-gray-400 rounded-md p-2 mt-2'>

            <table className='w-full rounded-md pt-3'>
                <thead>
                    <th>
                        تصویر
                    </th>
                    <th>
                        عنوان
                    </th>
                    <th>
                        قیمت
                    </th>
                    <th>
                        موجودی
                    </th>
                </thead>

                <tbody className='text-center'>

                    <tr className='cursor-pointer hover:bg-gray-500 hover:text-gray-200 text-center'
                        onClick={() => setShowModal(prev => !prev)}>
                        <td className='py-3 rounded-r-md'>
                            <img src="" alt="samsung" />
                        </td>
                        <td>
                            گوشی موبایل samsung A72
                        </td>
                        <td>
                            12,000,000
                        </td>
                        <td className=' rounded-l-md'>
                            12
                        </td>
                    </tr>
                </tbody>
            </table>
            {showModal && <Modal
                show={showModal}
                handleClose={setShowModal} />}
        </div>
    )
}
