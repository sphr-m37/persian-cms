import React from 'react'
import { createPortal } from 'react-dom'
import { Button, getProducts, useInput } from '../../index'
import { useDispatch } from 'react-redux'
import axios from 'axios'



export const EditModal = ({ handleEditModal, editeProduct, children }) => {

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm min-w-[300px] max-w-md'>
                            {children}
                            <div>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleEditModal} >
                                    بستن
                                </Button>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={editeProduct} >
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
