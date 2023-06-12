import React from 'react'
import { ErrorMsg } from '../index'
import { AddNewProduct } from '../index'

export const Products = () => {
  return (
    <div>
      <AddNewProduct />
      <ErrorMsg msg='no product found' />
    </div>
  )
}
