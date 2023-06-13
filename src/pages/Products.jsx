import React from 'react'
import { ErrorMsg, ProductsList } from '../index'
import { AddNewProduct } from '../index'

export const Products = () => {

  return (
    <div>
      <AddNewProduct />
      <ProductsList />
    </div>
  )
}
