import React from 'react'
import { Button } from '../../index'
import { createPortal } from 'react-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const DeleteModal = ({ handleDeleteModal, item, getProducts }) => {

    const dispatch = useDispatch()

    const deleteItem = async id => {
        const res = await axios.delete(`products/${id}`)
        if (res.status == 200) {
            handleDeleteModal()
            dispatch(getProducts())
            alert(`${item.title} با موفقیت حذف شد`)
        }
    }

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b]'
                    >
                        <div className='bg-white p-8'>
                            <div className='mb-6'>
                                <h1 className=''>از حذف {item.title} اطمینان دارید ؟</h1>
                                <p></p>
                            </div>
                            <div>
                                <Button className='bg-gray-700 text-red-400 '
                                    onClick={() => deleteItem(item.id)} >
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
