import React from 'react'
import { Button } from '../../index'
import { createPortal } from 'react-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

// toastify 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const DeleteModal = ({ handleDeleteModal, getProducts, product, user, getUsers }) => {

    const notif = (msg) => toast(msg)

    const dispatch = useDispatch()

    const deleteItem = async id => {
        const res = await axios.delete(`${product ? 'products' : 'users'}/${id}`)
        if (res.status == 200) {
            handleDeleteModal()
            dispatch(product ? getProducts() : getUsers())
            notif(`${product ? product.title : user.firstname} با موفقیت حذف شد`)
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
                                <h1 className=''>
                                    {product ? product.title : user.firstname} حذف شود؟
                                </h1>
                                <p></p>
                            </div>
                            <div>
                                <Button className='bg-gray-700 text-red-400 '
                                    onClick={() => deleteItem(product ? product.id : user.id)} >
                                    تایید
                                </Button>

                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={handleDeleteModal} >
                                    انصراف
                                </Button>
                            </div>
                        </div>
                    </div >
                    ,
                    document.getElementById('modal')
                )
            }
   
        </div>
    )
}
