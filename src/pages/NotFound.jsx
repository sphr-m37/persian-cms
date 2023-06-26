import React from 'react'
import { Button } from '../index'
import { useNavigate } from 'react-router-dom'

export const NotFound = () => {
  const redirect = useNavigate()
  return (
    <div className='w-full text-center'>
      <h2 className='w-full text-white my-10'>
        صفحه ی مورد نظر موجود نیست
      </h2>
      <Button className='bg-gray-500 text-white' onClick={() => redirect('/')}>
        صفحه ی اصلی
      </Button>
    </div>
  )
}
