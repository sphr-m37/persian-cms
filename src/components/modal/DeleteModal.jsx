import React from 'react'
import { Button } from '../../index'
import { createPortal } from 'react-dom';
import axios from 'axios';

export const DeleteModal = ({ handleDeleteModal, product }) => {


    const deleteProduct = async id => {
        const res = await axios.delete(`products/${id}`)
        console.log(res)
    }

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b]'
                    >
                        <div className='bg-white p-8'>
                            <div className='mb-6'>
                                <h1 className=''>از حذف این مورد اطمینان دارید ؟</h1>
                                <p>{product.title}</p>
                            </div>
                            <div>
                                <Button className='bg-gray-700 text-red-400 '
                                    onClick={()=>deleteProduct(product.id)} >
                                    تایید
                                </Button>

                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleDeleteModal} >
                                    انصراف
                                </Button>
                            </div>
                        </div>
                    </div >,
                    document.getElementById('modal')
                )
            }
        </div>
    )
}
