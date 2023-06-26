import React from 'react'
import { createPortal } from 'react-dom';
import { Button } from '../../index'


export const DeleteModal = ({ handleDeleteModal, title, deleteMethod }) => {

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b]' onClick={handleDeleteModal}
                    >
                        <div className='bg-white p-8' onClick={e => e.stopPropagation()}>
                            <div className='mb-6'>
                                <h1 className=''>
                                    {title} حذف شود؟
                                </h1>
                                <p></p>
                            </div>
                            <div>
                                <Button className='bg-gray-700 text-red-400 '
                                    onClick={e => {
                                        e.stopPropagation()
                                        deleteMethod()
                                    }}>
                                    تایید
                                </Button>

                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        handleDeleteModal()
                                    }}>
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
