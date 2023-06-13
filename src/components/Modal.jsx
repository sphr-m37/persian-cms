import React from 'react'
import { Button } from '../index'
import { createPortal } from 'react-dom';

export const Modal = ({ show, handleClose }) => {
    return (
        <>
            {
                createPortal(
                    <div className=' w-full h-screen absolute top-0 left-0 flex justify-center items-center bg-[#1e13137b]' >
                        <div className='bg-white p-8'>
                            <div className='mb-6'>
                                <h1 className=''>از حذف این مورد اطمینان دارید ؟</h1>
                            </div>
                            <div>
                                <Button title="حذف" textcolor='red-500'
                                    bgcolor='black'
                                    click={() => handleClose(!show)}
                                    type='button' />
                                <Button title="انصراف" textcolor='green-500'
                                    bgcolor='black'
                                    click={() => handleClose(!show)}
                                    type='submit' />
                            </div>
                        </div>
                    </div >,
                    document.getElementById('modal')
                )
            }
        </>
    )
}
