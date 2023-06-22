import React from 'react'
import { createPortal } from 'react-dom'
import { Button } from '../../index'

export const DetailModal = ({ title, children,
    handleDetailModal, comment, confirmComment
}) => {
    return (
        <div> <div>
            {
                createPortal(
                    <div className=' w-full h-screen fixed top-0 left-0 flex justify-center items-center bg-[#1e13137b] px-2'
                    >
                        <div className='bg-white p-2 text-sm min-w-[300px] sm:min-w-[400px] max-w-[500px]'>
                            <div className='mb-6'>
                                <h1 className='mb-4 text-center'>
                                    جزئیات {title}
                                </h1>
                                {children}
                            </div>

                            {comment &&
                                <>
                                {!comment.isAccept &&
                                    <Button onClick={confirmComment}>
                                        تایید
                                    </Button>}
                                </>
                            }

                            <Button onClick={handleDetailModal}>
                                بستن
                            </Button>
                        </div>
                    </div >,
                    document.getElementById('modal')
                )
            }
        </div></div>
    )
}
