import React from 'react'

export const Card = ({title}) => {
    return (
        <div className='bg-red-400 h-[300px] w-[80%] md:w-full mx-auto my-3'>
            <h1>
                {title}
            </h1>
        </div>
    )
}
