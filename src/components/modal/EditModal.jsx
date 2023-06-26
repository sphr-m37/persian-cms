import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../index'




export const EditModal = ({ handleEditModal, edit, children }) => {

    return (
        <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                        onClick={handleEditModal}>
                        <div className='bg-white p-2 text-sm min-w-[300px] max-w-md overflow-auto h-[70vh]' onClick={e => e.stopPropagation()}>
                            {children}
                            <div>
                                <Button className='bg-gray-700 text-red-400 '
                                    onClick={e => {
                                        e.stopPropagation()
                                        handleEditModal()
                                    }}>
                                    بستن
                                </Button>
                                <Button className='bg-gray-700 text-green-400 '
                                    onClick={e => {
                                        e.stopPropagation()
                                        edit()
                                    }} >
                                    ثبت
                                </Button>
                            </div>
                        </div>
                    </div>,
                    document.getElementById('modal')
                )
            }
        </div>)
}
