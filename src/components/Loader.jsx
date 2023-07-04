import React from 'react'

export const Loader = () => {
    return (
        <div className='w-screen h-screen
        fixed bg-gray-400 opacity-50 top-0 left-0 grid place-items-center'>
            <div className='w-[100px] h-[100px] 
            rounded-full border-[5px] border-e-rose-600 animate-spin'></div>
        </div>
    )
}
